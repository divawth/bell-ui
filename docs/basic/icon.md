> 所有图标

使用 <a target="_blank" href="https://remixicon.com">Remix Icon</a>

```
export default {
  template: `
  <div>
    <Icon
      name="apple-fill"
    />
    <Icon
      name="apple-fill"
      size="18"
    />
    <Icon
      name="apple-fill"
      size="18"
      color="#f90"
    />
    <Icon
      name="apple-fill"
      size="18"
      color="#da82d6"
      spin
    />
  </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 图标名称 | string | - | -
size | 图标的大小，单位是 px | string | - | `14`
color | 图标的颜色 | string | - | -
spin | 是否展示图标动画 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -