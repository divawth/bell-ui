> 字体大小

```
export default {
  template: `
    <Space vertical>
      <Text size="small">
        text
      </Text>
      <Text>
        text
      </Text>
    </Space>
  `
}
```

> 字体颜色

```
export default {
  template: `
    <Space vertical>
      <Text>
        text
      </Text>
      <Text type="primary">
        text
      </Text>
      <Text type="error">
        text
      </Text>
      <Text type="success">
        text
      </Text>
      <Text type="info">
        text
      </Text>
      <Text type="warning">
        text
      </Text>
      <Text type="title">
        text
      </Text>
      <Text type="content">
        text
      </Text>
      <Text type="muted">
        text
      </Text>
    </Space>
  `
}
```

> 粗体

```
export default {
  template: `
    <Text bold>
      text
    </Text>
  `
}
```

> 块级

```
export default {
  template: `
    <div>
      <Text block>
        text
      </Text>
      <Text block>
        text
      </Text>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 文本颜色 | string | primary, success, error, info, warning, title, content, muted | -
size | 文本大小 | string | small | -
bold | 是否粗体 | boolean | - | -
block | 是否块级 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -