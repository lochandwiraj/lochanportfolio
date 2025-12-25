"use client";

import React, { useEffect, useRef } from "react";

interface FluidCursorProps {
  color?: string;
}

export default function FluidCursor({ color = "#000000" }: FluidCursorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", { alpha: true });
    if (!gl) return;

    // Simulation parameters
    const SIM_RES = 128;
    const DYE_RES = 512;
    const DENSITY_DISSIPATION = 0.97;
    const VELOCITY_DISSIPATION = 0.98;
    const PRESSURE_DISSIPATION = 0.8;
    const PRESSURE_ITERATIONS = 20;
    const CURL = 30;
    const SPLAT_RADIUS = 0.25;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    interface Pointer {
      id: number;
      x: number;
      y: number;
      dx: number;
      dy: number;
      down: boolean;
      moved: boolean;
      color: [number, number, number];
    }

    const pointers: Pointer[] = [];
    pointers.push({
      id: -1,
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      down: false,
      moved: false,
      color: [1, 1, 1], // Use white internally to represent density/ink
    });

    // Utility to hex to rgb
    const hexToRgb = (hex: string): [number, number, number] => {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b];
    };

    const fluidColor = hexToRgb(color);
    pointers[0].color = [1, 1, 1]; // Internal density is always white for alpha calculation

    class Program {
      program: WebGLProgram;
      uniforms: Record<string, WebGLUniformLocation>;

      constructor(vertexShader: WebGLShader, fragmentShader: WebGLShader) {
        this.program = gl!.createProgram()!;
        gl!.attachShader(this.program, vertexShader);
        gl!.attachShader(this.program, fragmentShader);
        gl!.linkProgram(this.program);
        this.uniforms = this.getUniforms();
      }

      use() {
        gl!.useProgram(this.program);
      }

      getUniforms() {
        const uniforms: Record<string, WebGLUniformLocation> = {};
        const uniformCount = gl!.getProgramParameter(this.program, gl!.ACTIVE_UNIFORMS);
        for (let i = 0; i < uniformCount; i++) {
          const uniformName = gl!.getActiveUniform(this.program, i)!.name;
          uniforms[uniformName] = gl!.getUniformLocation(this.program, uniformName)!;
        }
        return uniforms;
      }
    }

    function createShader(type: number, source: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, source);
      gl!.compileShader(shader);
      return shader;
    }

    const baseVertexShader = createShader(
      gl.VERTEX_SHADER,
      `#version 300 es
      precision highp float;
      in vec2 aPosition;
      out vec2 vUv;
      out vec2 vL;
      out vec2 vR;
      out vec2 vT;
      out vec2 vB;
      uniform vec2 texelSize;
      void main () {
          vUv = aPosition * 0.5 + 0.5;
          vL = vUv - vec2(texelSize.x, 0.0);
          vR = vUv + vec2(texelSize.x, 0.0);
          vT = vUv + vec2(0.0, texelSize.y);
          vB = vUv - vec2(0.0, texelSize.y);
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }`
    );

    const blurVertexShader = createShader(
      gl.VERTEX_SHADER,
      `#version 300 es
      precision highp float;
      in vec2 aPosition;
      out vec2 vUv;
      out vec2 vL;
      out vec2 vR;
      void main () {
          vUv = aPosition * 0.5 + 0.5;
          gl_Position = vec4(aPosition, 0.0, 1.0);
      }`
    );

    const blurFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision mediump float;
      precision mediump sampler2D;
      in vec2 vUv;
      uniform sampler2D uTexture;
      uniform vec2 texelSize;
      out vec4 outColor;
      void main () {
          vec2 l = vUv - vec2(texelSize.x, 0.0);
          vec2 r = vUv + vec2(texelSize.x, 0.0);
          vec2 t = vUv + vec2(0.0, texelSize.y);
          vec2 b = vUv - vec2(0.0, texelSize.y);
          vec4 c = texture(uTexture, vUv);
          vec4 lc = texture(uTexture, l);
          vec4 rc = texture(uTexture, r);
          vec4 tc = texture(uTexture, t);
          vec4 bc = texture(uTexture, b);
          outColor = (c + lc + rc + tc + bc) * 0.2;
      }`
    );

    const copyFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision mediump float;
      precision mediump sampler2D;
      in vec2 vUv;
      uniform sampler2D uTexture;
      out vec4 outColor;
      void main () {
          outColor = texture(uTexture, vUv);
      }`
    );

    const clearFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision mediump float;
      precision mediump sampler2D;
      in vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;
      out vec4 outColor;
      void main () {
          outColor = value * texture(uTexture, vUv);
      }`
    );

    const displayFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      uniform sampler2D uTexture;
      out vec4 outColor;
      void main () {
          vec3 c = texture(uTexture, vUv).rgb;
          float a = max(c.r, max(c.g, c.b));
          // Use the alpha to draw the fluid as black ink on white
          outColor = vec4(0.0, 0.0, 0.0, a);
      }`
    );

    const splatFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspect;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;
      out vec4 outColor;
      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspect;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture(uTarget, vUv).xyz;
          outColor = vec4(base + splat, 1.0);
      }`
    );

    const advectionFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform float dt;
      uniform float dissipation;
      out vec4 outColor;
      void main () {
          vec2 coord = vUv - dt * texture(uVelocity, vUv).xy * texelSize;
          outColor = dissipation * texture(uSource, coord);
      }`
    );

    const divergenceFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      uniform sampler2D uVelocity;
      out vec4 outColor;
      void main () {
          float L = texture(uVelocity, vL).x;
          float R = texture(uVelocity, vR).x;
          float T = texture(uVelocity, vT).y;
          float B = texture(uVelocity, vB).y;
          float div = 0.5 * (R - L + T - B);
          outColor = vec4(div, 0.0, 0.0, 1.0);
      }`
    );

    const curlFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      uniform sampler2D uVelocity;
      out vec4 outColor;
      void main () {
          float L = texture(uVelocity, vL).y;
          float R = texture(uVelocity, vR).y;
          float T = texture(uVelocity, vT).x;
          float B = texture(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          outColor = vec4(vorticity, 0.0, 0.0, 1.0);
      }`
    );

    const vorticityFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;
      out vec4 outColor;
      void main () {
          float L = texture(uCurl, vL).x;
          float R = texture(uCurl, vR).x;
          float T = texture(uCurl, vT).x;
          float B = texture(uCurl, vB).x;
          float C = texture(uCurl, vUv).x;
          vec2 force = vec2(abs(T) - abs(B), abs(L) - abs(R));
          force /= length(force) + 0.0001;
          force *= curl * C;
          vec2 vel = texture(uVelocity, vUv).xy;
          outColor = vec4(vel + force * dt, 0.0, 1.0);
      }`
    );

    const pressureFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;
      out vec4 outColor;
      void main () {
          float L = texture(uPressure, vL).x;
          float R = texture(uPressure, vR).x;
          float T = texture(uPressure, vT).x;
          float B = texture(uPressure, vB).x;
          float C = texture(uPressure, vUv).x;
          float div = texture(uDivergence, vUv).x;
          float pressure = (L + R + B + T - div) * 0.25;
          outColor = vec4(pressure, 0.0, 0.0, 1.0);
      }`
    );

    const gradientSubtractFragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      `#version 300 es
      precision highp float;
      precision highp sampler2D;
      in vec2 vUv;
      in vec2 vL;
      in vec2 vR;
      in vec2 vT;
      in vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;
      out vec4 outColor;
      void main () {
          float L = texture(uPressure, vL).x;
          float R = texture(uPressure, vR).x;
          float T = texture(uPressure, vT).x;
          float B = texture(uPressure, vB).x;
          vec2 velocity = texture(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          outColor = vec4(velocity, 0.0, 1.0);
      }`
    );

    const blurProgram = new Program(blurVertexShader, blurFragmentShader);
    const copyProgram = new Program(baseVertexShader, copyFragmentShader);
    const clearProgram = new Program(baseVertexShader, clearFragmentShader);
    const displayProgram = new Program(baseVertexShader, displayFragmentShader);
    const splatProgram = new Program(baseVertexShader, splatFragmentShader);
    const advectionProgram = new Program(baseVertexShader, advectionFragmentShader);
    const divergenceProgram = new Program(baseVertexShader, divergenceFragmentShader);
    const curlProgram = new Program(baseVertexShader, curlFragmentShader);
    const vorticityProgram = new Program(baseVertexShader, vorticityFragmentShader);
    const pressureProgram = new Program(baseVertexShader, pressureFragmentShader);
    const gradSubProgram = new Program(baseVertexShader, gradientSubtractFragmentShader);

    function createFBO(w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
      gl!.activeTexture(gl!.TEXTURE0);
      const texture = gl!.createTexture();
      gl!.bindTexture(gl!.TEXTURE_2D, texture);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, param);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, param);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
      gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
      gl!.texImage2D(gl!.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

      const fbo = gl!.createFramebuffer();
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, fbo);
      gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, texture, 0);
      gl!.viewport(0, 0, w, h);
      gl!.clear(gl!.COLOR_BUFFER_BIT);

      return {
        texture,
        fbo,
        width: w,
        height: h,
        attach(id: number) {
          gl!.activeTexture(gl!.TEXTURE0 + id);
          gl!.bindTexture(gl!.TEXTURE_2D, texture);
          return id;
        },
      };
    }

    function createDoubleFBO(w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
      let fbo1 = createFBO(w, h, internalFormat, format, type, param);
      let fbo2 = createFBO(w, h, internalFormat, format, type, param);

      return {
        get read() {
          return fbo1;
        },
        get write() {
          return fbo2;
        },
        swap() {
          let temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        },
      };
    }

    let density: ReturnType<typeof createDoubleFBO>;
    let velocity: ReturnType<typeof createDoubleFBO>;
    let pressure: ReturnType<typeof createDoubleFBO>;
    let divergence: ReturnType<typeof createFBO>;
    let curl: ReturnType<typeof createFBO>;

    const ext = gl.getExtension("EXT_color_buffer_float");
    const supportLinearFiltering = gl.getExtension("OES_texture_float_linear");

    function initFramebuffers() {
      let simRes = SIM_RES;
      let dyeRes = DYE_RES;

      const texType = gl!.FLOAT;
      const rgba = gl!.RGBA;
      const rgba16f = gl!.RGBA16F;
      const rg16f = gl!.RG16F;
      const r16f = gl!.R16F;

      density = createDoubleFBO(dyeRes, dyeRes, rgba16f, rgba, texType, gl!.LINEAR);
      velocity = createDoubleFBO(simRes, simRes, rg16f, gl!.RG, texType, gl!.LINEAR);
      pressure = createDoubleFBO(simRes, simRes, r16f, gl!.RED, texType, gl!.NEAREST);
      divergence = createFBO(simRes, simRes, r16f, gl!.RED, texType, gl!.NEAREST);
      curl = createFBO(simRes, simRes, r16f, gl!.RED, texType, gl!.NEAREST);
    }

    initFramebuffers();

    const blit = (target: WebGLFramebuffer | null) => {
      gl!.bindFramebuffer(gl!.FRAMEBUFFER, target);
      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
    };

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, 1, 1, -1, -1, -1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    const update = () => {
      resize();

      const dt = 0.016;

      gl.viewport(0, 0, SIM_RES, SIM_RES);

      // Advect velocity
      advectionProgram.use();
      gl.uniform2f(advectionProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProgram.uniforms.uSource, velocity.read.attach(0));
      gl.uniform1f(advectionProgram.uniforms.dt, dt);
      gl.uniform1f(advectionProgram.uniforms.dissipation, VELOCITY_DISSIPATION);
      blit(velocity.write.fbo);
      velocity.swap();

      // Advect density
      gl.viewport(0, 0, DYE_RES, DYE_RES);
      advectionProgram.use();
      gl.uniform2f(advectionProgram.uniforms.texelSize, 1 / DYE_RES, 1 / DYE_RES);
      gl.uniform1i(advectionProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(advectionProgram.uniforms.uSource, density.read.attach(1));
      gl.uniform1f(advectionProgram.uniforms.dissipation, DENSITY_DISSIPATION);
      blit(density.write.fbo);
      density.swap();

      // Splat
      for (const p of pointers) {
        if (p.moved) {
          splat(p.x, p.y, p.dx, p.dy, p.color);
          p.moved = false;
        }
      }

      // Curl
      gl.viewport(0, 0, SIM_RES, SIM_RES);
      curlProgram.use();
      gl.uniform2f(curlProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(curlProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(curl.fbo);

      // Vorticity
      vorticityProgram.use();
      gl.uniform2f(vorticityProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(vorticityProgram.uniforms.uVelocity, velocity.read.attach(0));
      gl.uniform1i(vorticityProgram.uniforms.uCurl, curl.attach(1));
      gl.uniform1f(vorticityProgram.uniforms.curl, CURL);
      gl.uniform1f(vorticityProgram.uniforms.dt, dt);
      blit(velocity.write.fbo);
      velocity.swap();

      // Divergence
      divergenceProgram.use();
      gl.uniform2f(divergenceProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(divergenceProgram.uniforms.uVelocity, velocity.read.attach(0));
      blit(divergence.fbo);

      // Pressure
      clearProgram.use();
      gl.uniform1i(clearProgram.uniforms.uTexture, pressure.read.attach(0));
      gl.uniform1f(clearProgram.uniforms.value, PRESSURE_DISSIPATION);
      blit(pressure.write.fbo);
      pressure.swap();

      pressureProgram.use();
      gl.uniform2f(pressureProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(pressureProgram.uniforms.uDivergence, divergence.attach(0));
      for (let i = 0; i < PRESSURE_ITERATIONS; i++) {
        gl.uniform1i(pressureProgram.uniforms.uPressure, pressure.read.attach(1));
        blit(pressure.write.fbo);
        pressure.swap();
      }

      // Gradient subtract
      gradSubProgram.use();
      gl.uniform2f(gradSubProgram.uniforms.texelSize, 1 / SIM_RES, 1 / SIM_RES);
      gl.uniform1i(gradSubProgram.uniforms.uPressure, pressure.read.attach(0));
      gl.uniform1i(gradSubProgram.uniforms.uVelocity, velocity.read.attach(1));
      blit(velocity.write.fbo);
      velocity.swap();

      // Display
      gl.viewport(0, 0, width, height);
      displayProgram.use();
      gl.uniform1i(displayProgram.uniforms.uTexture, density.read.attach(0));
      blit(null);

      requestAnimationFrame(update);
    };

    function splat(x: number, y: number, dx: number, dy: number, color: [number, number, number]) {
      gl!.viewport(0, 0, SIM_RES, SIM_RES);
      splatProgram.use();
      gl!.uniform1i(splatProgram.uniforms.uTarget, velocity.read.attach(0));
      gl!.uniform1f(splatProgram.uniforms.aspect, width / height);
      gl!.uniform2f(splatProgram.uniforms.point, x / width, 1 - y / height);
      gl!.uniform3f(splatProgram.uniforms.color, dx, -dy, 1.0);
      gl!.uniform1f(splatProgram.uniforms.radius, SPLAT_RADIUS / 10.0);
      blit(velocity.write.fbo);
      velocity.swap();

      gl!.viewport(0, 0, DYE_RES, DYE_RES);
      splatProgram.use();
      gl!.uniform1i(splatProgram.uniforms.uTarget, density.read.attach(0));
      gl!.uniform3f(splatProgram.uniforms.color, color[0], color[1], color[2]);
      blit(density.write.fbo);
      density.swap();
    }

    function resize() {
      if (width !== canvas!.clientWidth || height !== canvas!.clientHeight) {
        width = canvas!.clientWidth;
        height = canvas!.clientHeight;
        canvas!.width = width;
        canvas!.height = height;
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      if (!pointers[0].down) {
        pointers[0].x = e.clientX;
        pointers[0].y = e.clientY;
        pointers[0].down = true;
      }
      pointers[0].moved = true;
      pointers[0].dx = (e.clientX - pointers[0].x) * 5.0;
      pointers[0].dy = (e.clientY - pointers[0].y) * 5.0;
      pointers[0].x = e.clientX;
      pointers[0].y = e.clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!pointers[0].down) {
        pointers[0].x = touch.clientX;
        pointers[0].y = touch.clientY;
        pointers[0].down = true;
      }
      pointers[0].moved = true;
      pointers[0].dx = (touch.clientX - pointers[0].x) * 5.0;
      pointers[0].dy = (touch.clientY - pointers[0].y) * 5.0;
      pointers[0].x = touch.clientX;
      pointers[0].y = touch.clientY;
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchstart", onTouchMove);
    window.addEventListener("touchmove", onTouchMove);

    update();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchstart", onTouchMove);
      window.removeEventListener("touchmove", onTouchMove);
    };
  }, [color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
