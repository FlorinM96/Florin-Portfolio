import * as THREE from "three";

export function createBackgroundContext(container) {
  const ctx = new Object();
  ctx.init = function init() {
    ctx.container = container;
    ctx.scene = new THREE.Scene();
    ctx.clock = new THREE.Clock();
    ctx.renderer = new THREE.WebGLRenderer();

    const aspect = window.innerWidth / window.innerHeight;
    ctx.camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 10000);
    ctx.camera.position.z = 1;

    const bgColor = new THREE.Color("#0d0d0d");
    const complementaryColor = new THREE.Color("#1a1a1a");

    ctx.renderer.setPixelRatio(window.devicePixelRatio);
    ctx.renderer.setSize(window.innerWidth * 1.25, window.innerHeight * 1.25);
    const style = ctx.renderer.domElement.style;
    style.position = "fixed";
    style.zIndex = -1;
    style.top = style.left = 0;
    ctx.container.appendChild(ctx.renderer.domElement);

    const hexToGL = (hexStr) => {
      let col = new THREE.Color(hexStr);
      let out = col.toArray().map((x) => {
        //to fixed 3
        let conv = Math.round(x * 1000) / 1000;
        //append missing periods
        if (conv.toString().indexOf(".") === -1) conv += ".";
        return conv;
      });
      return `vec3(${out})`;
    };

    const geometry = new THREE.PlaneBufferGeometry(100000, 100000, 1, 1);
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0.0 },
      },
      vertexShader: `
          void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.);
          }
        `,
      fragmentShader: `
          precision highp float;
          uniform float uTime;
          vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }
          vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
          }
          vec4 permute(vec4 x) {
            return mod289(((x * 34.0) + 1.0) * x);
          }
          vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
          }
          float snoise(vec3 v) {
            const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
            const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
            const float n_ = 1.0 / 7.0;
            vec3 i = floor(v + dot(v, C.yyy));
            vec3 x0 = v - i + dot(i, C.xxx);
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min(g.xyz, l.zxy);
            vec3 i2 = max(g.xyz, l.zxy);
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy;
            vec3 x3 = x0 - D.yyy;
            i = mod289(i);
            vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
            vec3  ns = n_ * D.wyz - D.xzx;
            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_);
            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);
            vec4 b0 = vec4(x.xy, y.xy);
            vec4 b1 = vec4(x.zw, y.zw);
            vec4 s0 = floor(b0) * 2.0 + 1.0;
            vec4 s1 = floor(b1) * 2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));
            vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
            vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
            vec3 p0 = vec3(a0.xy,h.x);
            vec3 p1 = vec3(a0.zw,h.y);
            vec3 p2 = vec3(a1.xy,h.z);
            vec3 p3 = vec3(a1.zw,h.w);
            vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
            p0 *= norm.x;
            p1 *= norm.y;
            p2 *= norm.z;
            p3 *= norm.w;
            vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
            m = m * m;
            return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
          }
          float onoise(vec3 v) {
            float total = 0.0;
            float frequency = 1.0;
            float amplitude = 1.0;
            float maxValue = 0.0;
            for (int i = 0; i < 1; i++) {
              total += snoise(v * frequency) * amplitude;
              maxValue += amplitude;
              amplitude *= 0.5;
              frequency *= 2.0;
            }
            return total / maxValue;
          }
          vec3 color1 = ${hexToGL(bgColor)};
          vec3 color2 = ${hexToGL(complementaryColor)};
          void main() {
            float size = 0.001;
            float time = uTime * 0.1;
            vec3 coords = vec3(gl_FragCoord.xy * size, time);
            vec3 noise = vec3((onoise(coords) + 1.0) / 2.0);
            vec3 color1Noise = (1. - noise) * color1;
            vec3 color2Noise = noise * color2;
            gl_FragColor = vec4(color1Noise + color2Noise, 1.0);
          }
        `,
    });
    ctx.backgroundMesh = new THREE.Mesh(geometry, material);
    ctx.scene.add(ctx.backgroundMesh);
  };
  ctx.animate = function animate() {
    requestAnimationFrame(animate);
    ctx.backgroundMesh.material.uniforms.uTime.value = ctx.clock.getElapsedTime();
    ctx.renderer.render(ctx.scene, ctx.camera);
  };

  return ctx;
}
