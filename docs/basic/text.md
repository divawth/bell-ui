> 字体大小

```
export default {
  template: `
    <div>
      <Text size="small">text</Text>
      <Text>text</Text>
      <Text size="large">text</Text>

      <style>
        .bell-text + .bell-text {
          margin-left: 5px;
        }
      </style>
    </div>
  `
}
```

> 字体颜色

```
export default {
  template: `
    <div>
      <Text>text</Text>
      <Text type="primary">text</Text>
      <Text type="error">text</Text>
      <Text type="success">text</Text>
      <Text type="info">text</Text>
      <Text type="warning">text</Text>
      <Text type="title">text</Text>
      <Text type="content">text</Text>
      <Text type="muted">text</Text>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 文本颜色 | primary, success, error, info, warning, title, content, muted | - | -
size | 文本大小 | default, small, large | - | default
