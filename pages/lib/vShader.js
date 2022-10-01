const vertexShader = () => {
    return `
        varying float x;
        varying float y;
        varying float z;
        varying vec3 vUv;
  
        uniform float u_time;
        uniform float u_amplitude;
        uniform float[64] u_data_arr;
  
        void main() {
          vUv = position;
  
          x = abs(position.x);
            y = abs(position.y);
  
          float floor_x = round(x);
            float floor_y = round(y);
  
          float x_multiplier = (32.0 - x) / 8.0;
          float y_multiplier = (32.0 - y) / 8.0;
  
          // z = position.z;
          // z = abs(position.x) + abs(position.y);
          // z = sin(abs(position.x) + abs(position.y));
          // z = sin(abs(position.x) + abs(position.y) + u_time * .005);
          z = sin(u_data_arr[int(floor_x)] / 50.0 + u_data_arr[int(floor_y)] / 50.0) * u_amplitude;
          // z = (u_data_arr[int(floor_x)] / 50.0 + u_data_arr[int(floor_y)] / 50.0) * 2.0;
  
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y, z, 1.0);
        }
      `;
  };

  export default vertexShader;
