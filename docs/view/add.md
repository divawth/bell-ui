#### Add 添加

通常用于一组卡片的最后

> 基础用法

```js
export default {
  height: 200,
  template: `
  <div>
    <Add>
      <template slot="title">
        添加图片
      </template>
    </Add>
  </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
width | 显示宽度 | numeric | - | 100
height | 显示高度 | numeric | - | 100
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击后触发 | -

> Slots

名称 | 说明
---|---
icon | 自定义图标，默认是 +
title | 自定义标题
