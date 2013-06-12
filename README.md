glsl-exports
============
Finds all the uniforms and attributes for a fragment shader.

## Example

```javascript
var result = glslGlobals([
  "uniform float a;",
  "attribute vec3 x, y, z;",
  "void main() {",
    "int a = 1;",
    "gl_FragColor = vec4(1, a, 0, 1);",
  "}"
].join("\n"))

console.log(result)
```

Prints out:

```javascript
{
  uniforms: { "a": "float" },
  attributes: {
    "x": "vec3",
    "y": "vec3",
    "z": "vec3"
  }
}
```

## Install

    npm install glsl-exports
    
## `require("glsl-exports")(shader_source)`
Finds all the uniforms and attributes

* `shader_source` is the source code to a vertex or fragment shader

**Returns** An object containing two properties

* `uniforms` a list of all the uniform variables and their data types
* `attributes` a list of all attribute variables in the shader and their data types

## Credits
(c) 2013 Mikola Lysenko. MIT License