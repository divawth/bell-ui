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
    <Tag type="primary">标签</Tag>
    <Tag type="success">标签</Tag>
    <Tag type="error">标签</Tag>
    <Tag type="warning">标签</Tag>
    <Tag type="info">标签</Tag>
    <br><br>
    <Tag border type="primary">标签</Tag>
    <Tag border type="success">标签</Tag>
    <Tag border type="error">标签</Tag>
    <Tag border type="warning">标签</Tag>
    <Tag border type="info">标签</Tag>
    <br><br>
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
      <Tag border type="primary">标签一</Tag>
      <Tag border type="success">标签二</Tag>
      <Tag border type="error">标签三</Tag>
      <Tag border type="warning">标签四</Tag>
      <br><br>
      <Tag border closable type="primary">标签一</Tag>
      <Tag border closable type="success">标签二</Tag>
      <Tag border closable type="error">标签三</Tag>
      <Tag border closable type="warning">标签四</Tag>
    </div>
  `
}
```

> dot

```js
export default {
  height: 300,
  template: `
    <div>
      <Tag dot type="primary">标签一</Tag>
      <Tag dot type="success">标签二</Tag>
      <Tag dot type="error">标签三</Tag>
      <Tag dot type="warning">标签四</Tag>
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
      <br><br>
      <Tag checkable type="error">标签</Tag>
      <Tag checkable type="warning">标签</Tag>
      <Tag checkable type="success">标签</Tag>
    </div>
  `
}
```

> size

```js
export default {
  template: `
    <div>
      <Tag type="info" border closable>标签</Tag>
      <Tag type="error" checkable checked>标签</Tag>
      <Tag type="warning" border>标签</Tag>
      <Tag type="primary" dot>标签</Tag>
      <Tag type="success" dot closable>标签</Tag>
      <br><br>
      <Tag size="large" type="info" border closable>标签</Tag>
      <Tag size="large" type="error" checkable checked>标签</Tag>
      <Tag size="large" type="warning" border>标签</Tag>
      <Tag size="large" type="primary" dot>标签</Tag>
      <Tag size="large" type="success" dot closable>标签</Tag>
    </div>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 双向绑定 checked 属性 | - | - | -
size | 尺寸 | string | default, large | default
type | 颜色 | string | primary, info、success、warning、error | -
closable | 是否可以关闭 | boolean | - | false
checkable | 标签是否可以选择 | boolean | - | false
border | 关闭按钮旁边加一个边框 | boolean | - | false
dot |  标签左侧是否添加一个圆形 | boolean | - | false
checked | 标签的选中状态 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击 close 时触发 | -
change | checked 改变时触发 | -
