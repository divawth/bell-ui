> 基本用法

```js
export default {
  template: `
    <Empty />
  `
}
```

> 简洁版本

```js
export default {
  template: `
    <Empty simple />
  `
}
```

> 自定义内容

```js
export default {
  template: `
    <Empty>
      暂无数据
    </Empty>
  `
}
```

> 自定义内容

```js
export default {
  template: `
    <Empty simple>
      暂无数据
    </Empty>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
simple | 是否为简洁版 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
children | 自定义内容