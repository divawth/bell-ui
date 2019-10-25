浏览器会查找每一个连续的字体，如果可能的话，会选择第一个字体，如果不能找到字体(在系统中或在CSS中定义)，则会返回到下一个字体。

- -apple-system 在 ios 和 macOS 上使用（而不是 Chrome）
- BlinkMacSystemFont 在 macOS 的 Chrome 上使用
- Segoe UI 在 Windows 10 上使用
- Roboto 在 Android 上使用
- Oxygen-Sans 在 GNU+Linux 上使用
- Ubuntu 在 Linux 上使用
- "Helvetica Neue" and Helvetica 在 macOS 10.10 上使用
- Arial 被广泛的操作系统所支持
- sans-serif 如果不支持其他字体就返回 sans-serif

> 字体样式

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

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
