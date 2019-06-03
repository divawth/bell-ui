> 基本用法 closable 表示可以关闭

```js
export default {
  template: `
    <div>
      <Tag>标签 1</Tag>
      <Tag closable>标签 2</Tag>
    </div>
  `
}
```

> 样式类型

```js
export default {
  template: `
    <div>
      <Tag border>标签三</Tag>
      <Tag border closable>标签四</Tag>
      <Tag dot>标签一</Tag>
      <Tag dot closable>标签二</Tag>
    </div>
  `
}
```

> type

```js
export default {
  template: `
  <div>
    <Tag type="error">标签</Tag>
    <Tag type="warning">标签</Tag>
    <Tag type="success">标签</Tag>
    <Tag type="danger">标签</Tag>
    <Tag type="info">标签</Tag>
    <Tag type="primary">标签</Tag>
  </div>
  `
}
```

> border

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div>
      <Tag border closable type="primary">标签一</Tag>
      <Tag border closable type="success">标签二</Tag>
      <Tag border closable type="error">标签三</Tag>
      <Tag border closable type="warning">标签四</Tag>
      <br><br>
      <Tag dot closable type="primary">标签一</Tag>
      <Tag dot closable type="success">标签二</Tag>
      <Tag dot closable type="error">标签三</Tag>
      <Tag dot closable type="warning">标签四</Tag>
    </div>
  `
}
```

> checkable

```js
export default {
  template: `
    <div>
      <Tag checkable border type="error">标签</Tag>
      <Tag checkable border type="warning">标签</Tag>
      <Tag checkable border type="success">标签</Tag>
      <Tag checkable border type="danger">标签</Tag>
      <br><br>
      <Tag checkable type="error">标签</Tag>
      <Tag checkable type="warning">标签</Tag>
      <Tag checkable type="success">标签</Tag>
      <Tag checkable type="danger">标签</Tag>
    </div>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | info、success、warning、error | ''
closable | 是否可以关闭 | boolean | - | true
checkable | 标签是否可以选择 | boolean | - | false
border | 关闭按钮旁边加一个border | boolean | - | false
checked | 标签的选中状态 | boolean | - | true
size | 尺寸 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击 close 时触发 | -
change | checked 改变时触发 | -
