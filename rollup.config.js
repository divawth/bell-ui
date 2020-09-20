// 根据 tsconfig.json 把 ts 转成 js
import typescript from 'rollup-plugin-typescript'
// 替换代码中的变量
import replace from 'rollup-plugin-replace'
// 输出打包后的文件大小
import filesize from 'rollup-plugin-filesize'
// ES6 转 ES5
import buble from 'rollup-plugin-buble'
// 压缩
import { terser } from 'rollup-plugin-terser'
// yox 模板预编译
import yoxTemplate from 'rollup-plugin-yox-template'

import { name, version, author, license } from './package.json'

const banner =
  `${'/**\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) 2018-${new Date().getFullYear()} ${author}\n` +
  ` * Released under the ${license} License.\n` +
  ` */\n`;

const sourcemap = true

let suffix = '.js'

const env = process.env.NODE_ENV
const minify = process.env.NODE_MINIFY === 'true'

const replaces = {
  'process.env.NODE_ENV': JSON.stringify(env),
  'process.env.NODE_VERSION': JSON.stringify(version),
  '${prefix}': 'bell-',
  delimiters: ['', ''],
}

let plugins = [
  replace(replaces),
  yoxTemplate()
]

if (minify) {
  suffix = '.min' + suffix
}

const output = []

if (process.env.NODE_FORMAT === 'es') {
  plugins.push(
    typescript({
      target: 'es6',
    })
  )
  output.push({
    file: `dist/${name}-rollup.esm${suffix}`,
    format: 'es',
    banner,
    sourcemap,
  })
}
else {
  plugins.push(
    typescript(),
    buble({
      namedFunctionExpressions: false
    })
  )
  output.push({
    file: `dist/${name}-rollup${suffix}`,
    format: 'umd',
    name: 'Bell',
    banner,
    sourcemap,
  })
}

if (minify) {
  plugins.push(
    terser()
  )
}

plugins.push(
  filesize(),
)

module.exports = [
  {
    input: 'src/index.ts',
    output,
    plugins
  }
]