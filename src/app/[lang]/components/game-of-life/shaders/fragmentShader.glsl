uniform sampler2D u_texture;
varying vec2 vUv;
uniform vec3 u_colorA;
uniform vec3 u_colorB;

void main() {

  vec4 textureIn = texture2D(u_texture, vUv);
  vec3 color = textureIn.rgb;
  if(textureIn.r < 0.5) {
    color = u_colorA;
  } else {
    color = u_colorB;
  }

  gl_FragColor = vec4(color, 1.0);
}