var glslGlobals = require("../index.js")

require("tape")("glsl globals", function(t) {

  var result = glslGlobals([
    "uniform float a;",
    "     attribute vec3 x, y, z;",
    "void main() {",
      "int a = 1;",
      "gl_FragColor = vec4(1, a, 0, 1);",
    "}"
  ].join("\n"))
  
  t.same(result, { uniforms: { "a": "float" }, attributes: { "x": "vec3", "y": "vec3", "z":"vec3" } })

  t.end()
})