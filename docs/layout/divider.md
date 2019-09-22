#### Divider 分割线

区隔内容的分割线

#### 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字，链接进行分割，例如表格的操作列。

> 基础演示

```js
export default {
  isViewFullBlock: true,
  height: 500,
  template: `
    <div>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
      <Divider />
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
      <Divider>
        With Text
      </Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
      <Divider dashed />
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
    </div>
  `
}
```


> 垂直分割线

```js
export default {
  template: `
    <div>
      Text
      <Divider vertical />
      <a href="#">
        Link
      </a>
      <Divider vertical />
      <a href="#">
        Link
      </a>
    </div>
  `
}
```

> 文字的位置

```js
export default {
  isViewFullBlock: true,
  height: 350,
  template: `
    <div>
      <Divider align="left">
        Left Text
      </Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
      <Divider align="center">
        <Icon
          name="alert"
          size="16"
          color="#999"
        />
      </Divider>
      <p>
        Steven Paul Jobs was an American entrepreneur and business magnate. He was the chairman, chief executive officer, and a co-founder of Apple Inc.
      </p>
      <Divider align="right" dashed>
        Right Text
      </Divider>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
vertical | 是否是垂直分割线 | boolean | - | `false`
dashed | 分割线是否是虚线 | boolean | - | `false`
align | 分割线内容的位置 | string | `center`, `left`, `right` | `center`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
children | 自定义内容