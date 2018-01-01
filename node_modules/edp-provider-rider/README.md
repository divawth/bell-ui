edp-provider-rider
===

[![NPM version](https://img.shields.io/npm/v/edp-provider-rider.svg?style=flat-square)](https://npmjs.org/package/edp-provider-rider) [![License](https://img.shields.io/npm/l/edp-provider-rider.svg?style=flat-square)](./LICENSE) [![EFE Mobile Team](https://img.shields.io/badge/EFE-Mobile_Team-blue.svg?style=flat-square)](http://efe.baidu.com)

`edp` 的 `rider` 支持模块。

为 `edp-webserver` 和 `edp-build` 提供了预定配置。

集成了 `stylus`, `rider`, `autoprefixer-core`, `css-mqpacker`, `husl` 等依赖。

## 安装

```bash
npm install edp-provider-rider --save-dev
```

注：使用 `edpx-mobile` 生成的项目已经内置了 `edp-provider-rider`。

## 配置

### 先跑起来！

在 `edp-webserver-config.js` 与 `edp-build-config.js` 顶部引入：

```javascript
var epr = require('edp-provider-rider');
exports.stylus = epr.stylus;

// 默认配置
var stylusPlugin = epr.plugin();
```

在 `edp-webserver-config.js` 对应部分添加：

```javascript
autostylus({
    stylus: epr.stylus,
    use: stylusPlugin
})
```

在 `edp-build-config.js` 对应部分添加：

```javascript
new StylusCompiler({
    stylus: epr.stylus,
    compileOptions: {
        use: stylusPlugin
    }
})
```

搞定！

### 可定制的选项

在定义 `stylusPlugin` 时，可以向 `.plugin()` 传入定制参数：

```javascript
// 扩展配置，参数都是可选的
var stylusPlugin = epr.plugin({

    // 隐式引入 rider，默认为 true
    implicit: true,

    // 是否解析 url 中的路径，默认为 true
    resolveUrl: true,

    // autoprefixer 配置，以下为默认值，可设置 false 禁用
    // 参考：https://github.com/postcss/autoprefixer-core
    autoprefixer: ['Android >= 2.3', 'iOS >= 6', 'ExplorerMobile >= 10'],

    // husl 配置，默认为 false
    // 参考：http://www.boronine.com/husl/
    husl: true,

    // mqpacker 启用状态，默认为 true
    // 参考：https://github.com/hail2u/node-css-mqpacker
    mqpacker: true,

    // 手动追加 stylus 配置，可在此处引入其它 stylus 插件
    // 参考：http://stylus-lang.com/docs/js.html#usefn
    use: function(style) {}
});
```
相关
==

 * [rider](https://github.com/ecomfe/rider)
 * [edp](https://github.com/ecomfe/edp)
 * [autoprefixer-core](https://github.com/postcss/autoprefixer-core)
 * [css-mqpacker](https://github.com/hail2u/node-css-mqpacker)
 * [husl](http://www.boronine.com/husl/)

License
==

MIT &copy; [Baidu Inc.](./LICENSE)
