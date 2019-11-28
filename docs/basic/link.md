> 字体大小

```
export default {
  template: `
    <div>
      <Link size="small">
        link
      </Link>
      <Link>
        link
      </Link>
      <Link size="large">
        link
      </Link>
    </div>
  `
}
```

> 字体颜色

```
export default {
  template: `
    <div>
      <Link>
        link
      </Link>
      <Link type="primary">
        link
      </Link>
      <Link type="error">
        link
      </Link>
      <Link type="success">
        link
      </Link>
      <Link type="info">
        link
      </Link>
      <Link type="warning">
        link
      </Link>
      <Link type="title">
        link
      </Link>
      <Link type="content">
        link
      </Link>
      <Link type="muted">
        link
      </Link>
    </div>
  `
}
```

> 下划线

```
export default {
  template: `
    <Link underline>
      link
    </Link>
  `
}
```

> 禁用

```
export default {
  template: `
    <Link disabled>
      link
    </Link>
  `
}
```

> 设置跳转链接

```
export default {
  template: `
    <Link href="https://www.baidu.com" target="_blank">
      link
    </Link>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 文本颜色 | string | primary, success, error, info, warning, title, content, muted | `primary`
size | 文本大小 | string | default, small, large | `default`
underline | 是否显示下划线 | boolean | - | -
disabled | 是否禁用 | boolean | - | -
href | 原生 href | string | - | -
target | 原生 target | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 当没有设置 href 且未禁用时，点击链接触发 | -