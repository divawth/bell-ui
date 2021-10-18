> 基础用法

```js
export default {
  template: `
    <Breadcrumb>
      <BreadcrumbItem>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>
        Components
      </BreadcrumbItem>
      <BreadcrumbItem last>
        Layout
      </BreadcrumbItem>
    </Breadcrumb>
  `
}
```

> 带图标

```js
export default {
  template: `
    <Breadcrumb>
      <BreadcrumbItem>
        <Icon name="apple-fill" />
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>
        <Icon name="apple-fill" />
        Components
      </BreadcrumbItem>
      <BreadcrumbItem last>
        <Icon name="apple-fill" />
        Breadcrumb
      </BreadcrumbItem>
    </Breadcrumb>
  `
}
```

> 修改分隔符

```js
export default {
  template: `
    <Breadcrumb separator="=>">
      <BreadcrumbItem>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem>
        Components
      </BreadcrumbItem>
      <BreadcrumbItem last>
        Layout
      </BreadcrumbItem>
    </Breadcrumb>
  `
}
```

> 监听点击事件

```js
export default {
  template: `
    <Breadcrumb>
      <BreadcrumbItem on-click="clickItem(1)">
        Home
      </BreadcrumbItem>
      <BreadcrumbItem on-click="clickItem(2)">
        Components
      </BreadcrumbItem>
      <BreadcrumbItem on-click="clickItem(3)" last>
        Layout
      </BreadcrumbItem>
    </Breadcrumb>
  `,
  methods: {
    clickItem: function (index) {
      console.log(index)
    }
  }
}
```

#### API

> Breadcrumb Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
separator | 分隔符 | string | - | `/`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> BreadcrumbItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
last | 是否为最后一项，最后一项不可点击，且没有分隔符 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> BreadcrumbItem Slots

参数 | 说明
---|---
children | 内容

> BreadcrumbItem Events

参数 | 说明
---|---
click | 点击后触发