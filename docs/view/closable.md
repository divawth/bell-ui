#### Closable 可关闭组件

为显示内容的右上角添加一个关闭按钮，可设置显示关闭按钮的方式，或完全自定义显示方式。

> 基础用法

```js
export default {
  template: `
    <div>
      <Closable
        needClose
        showClose="hover"
        on-close="close()"
      >
        <div>
          内容
        </div>
      </Closable>
    </div>
  `,
  methods: {
    close(event) {
      alert('close')
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
needClose | 是否需要关闭按钮（是否创建 DOM 节点） | boolean | - | -
showClose | 显示关闭按钮的方式，不传表示自定义 | string | `always`, `hover` | -
draggable | 是否可以拖拽 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮时触发 | -