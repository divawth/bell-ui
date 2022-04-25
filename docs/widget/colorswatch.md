#### ColorSwatch 色卡

定义一组颜色，方便用户选择。

> 基础用法

```js
export default {
  template: `
    <ColorSwatch
      swatches="{{[
        '#FFFFFF',
        '#18A058',
        '#2080F0',
        '#F0A020',
        '#A01858',
        '#8020F0',
        '#6F4020',
        '#2080F0',
        '#F0A020',
        '#A01858',
        'red',
        'rgba(208, 48, 80, 0.5)'
      ]}}"
      on-change="change()"
    />
  `,
  methods: {
    change(event, data) {
      console.log(data)
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
swatches | 颜色列表 | string[] | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 点击某个颜色时触发 | { color: '' }