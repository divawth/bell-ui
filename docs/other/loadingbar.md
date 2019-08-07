### 概述

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

> 基础用法

```js
export default {
  template: `
  <div>
    <Button on-click="start()">Start</Button>
    <Button on-click="finish()">Finish</Button>
    <Button on-click="error()">Error</Button>
  </div>
  `,
  methods: {
    start: function () {
      this.$loadingBar.start()
    },
    finish: function () {
      this.$loadingBar.finish()
    },
    error: function () {
      this.$loadingBar.start({
        percent: 40,
        type: 'error'
      })
    }
  }
}
```

#### API

> 通过直接调用以下方法来使用组件：

- this.$loadingBar.start(props)
- this.$loadingBar.finish()
- this.$loadingBar.update(props)

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
color | 颜色 | string | - | -
type | 类型 | string | primary, success, error, info, warning | primary
height | 进度环的线宽 | number | 2 | 2
percent | 百分比 | number | 0-100 | 0