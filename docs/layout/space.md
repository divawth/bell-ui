### Space间距

设置组件之间的间距。

### 何时使用

避免组件紧贴在一起，拉开统一的空间。

* 适合行内元素的水平间距。
* 可以设置各种水平对齐方式。

> 基础使用

```js
export default {
  template: `
    <Space>
      Space
      <Button type="primary">
        Button
      </Button>
      <Checkbox>
        Checkbox
      </Checkbox>
    </Space>
  `
}
```

> 垂直间距

```js
export default {
  template: `
    <Space vertical>
      Space
      <Input />
      <Input />
    </Space>
  `
}
```

> 对齐方式

```js
export default {
  template: `
    <Space align="start">
      Space
      <Input />
      <Checkbox />
    </Space>
  `
}
```

> 自动换行

```js
export default {
  template: `
    <Space autoWrap>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
      <Tag>Tag</Tag>
    </Space>
  `
}
```

> 块级显示

```js
export default {
  template: `
    <div>
      <Space block align="start">
        Space
        <Checkbox />
      </Space>
      <Space block align="start">
        Space
        <Checkbox />
      </Space>
    </div>
  `
}
```

> 自定义间距

```js
export default {
  template: `
    <Space size="50">
      Space
      <Button type="primary">
        Button
      </Button>
      <Checkbox>
        Checkbox
      </Checkbox>
    </Space>
  `
}
```


#### API

> Space Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
align | 对齐方式 | `start`、`end` 、`center`、`baseline` | - | `center`
vertical | 是否为垂直间距 | boolean | - | -
size | 间距大小 | numeric | - | -
block | 是否块级显示 | boolean | - | -
autoWrap | 是否自动换行，仅在水平间距模式有效 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -
