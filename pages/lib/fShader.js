
  
  const fShader = () => {
    return `
      varying float x;
      varying float y;
      varying float z;
      varying vec3 vUv;
  
      uniform float u_time;
      // uniform vec3 u_black;
      // uniform vec3 u_white;
  
      void main() {
        // old
        // gl_FragColor = vec4(mix(u_black, u_white, vUv.x), 1.0);
  
        // gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // if (vUv.x < 0.0) {
        //   gl_FragColor = vec4(0.0, 1.0, 0.0, 1.0);
        // } else {
        //   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        // }
        // gl_FragColor = vec4(abs(sin(u_time * .001)), 0.0, 0.0, 1.0);
        gl_FragColor = vec4((32.0 - abs(x)) / 32.0, (32.0 - abs(y)) / 32.0, (abs(x + y) / 2.0) / 32.0, 1.0);
      }
    `;
  };
  
  export default fShader;
  
