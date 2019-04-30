import { string } from "rollup-plugin-string";

export default {
  entry: 'src/index.js',
  format: 'umd',
  moduleName: 'Bell',
  plugins: [
    string({
      include: "**/*.html"
    })
  ],
  dest: 'dist/bell.js'
}