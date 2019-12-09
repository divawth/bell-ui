
> 基础用法

```js
export default {
  template: `
  <BackTop
    height="10"
  />
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
bottom | 组件距离底部的距离 | numeric | - | -
right | 组件距离右部的距离 | numeric | - | -
duration | 页面滚动高度达到滚动动画持续时间，单位 毫秒 | number | - | 500
height | 页面滚动高度达到该值时才显示 BackTop 组件 | number | - | 0

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮时触发 | -