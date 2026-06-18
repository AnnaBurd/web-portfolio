uniform sampler2D u_texture;
varying vec2 vUv;

void main() {

    // Sample the 3x3 neighbourhood of the current cell
    //top row
    int r00 = int(textureOffset(u_texture, vUv, ivec2(-1, 1)).r);
    int r01 = int(textureOffset(u_texture, vUv, ivec2(0, 1)).r);
    int r02 = int(textureOffset(u_texture, vUv, ivec2(1, 1)).r);

    //middle row
    int r10 = int(textureOffset(u_texture, vUv, ivec2(-1, 0)).r);
    int r11 = int(texture(u_texture, vUv).r);
    int r12 = int(textureOffset(u_texture, vUv, ivec2(1, 0)).r);

    //bottom row
    int r20 = int(textureOffset(u_texture, vUv, ivec2(-1, -1)).r);
    int r21 = int(textureOffset(u_texture, vUv, ivec2(0, -1)).r);
    int r22 = int(textureOffset(u_texture, vUv, ivec2(1, -1)).r);

    int finalSum = (r00 + r10 + r20) +
        (r01 + r11 + r21) +
        (r02 + r12 + r22);

    if(finalSum == 3)
        gl_FragColor = vec4(1, 1, 1, 1);
    else if(finalSum == 4 && r11 == 1)
        gl_FragColor = vec4(1, 1, 1, 1);
    else
        gl_FragColor = vec4(0, 0, 0, 1);

}