> 基础用法

```js
export default {
  template: `
    <Page total="100" current="{{8}}" ></Page>
  `
}
```

> size 设置大小

```js
export default {
  template: `
    <div>
      <Page total="100" size="small"></Page>
      <br><br>
      <Page total="100"></Page>
      <br><br>
      <Page total="100" size="tiny"></Page>
    </div>
  `
}
```

> showTotal 设置显示条数

```js
export default {
  template: `
    <div>
      <Page total="100" showTotal="{{true}}"></Page>
    </div>
  `
}
```

> showSizer 设置显示每页条数

```js
export default {
  template: `
    <div>
      <Page size="small" total="100" showSizer="{{true}}" pageSize="{{20}}" pageSizeOpts="{{pageSizeOpts}}" on-pageSizeChange="change()"></Page>
    </div>
  `,
  data: function () {
    return {
      pageSizeOpts: [10, 15, 20, 25, 40]
    }
  },
  methods: {
    change: function (data) {
      console.log(data)
    }
  }
}
```

> showElevator 显示快速跳转

```js
export default {
  template: `
    <div>
      <Page total="100" showElevator></Page>
    </div>
  `
}
```

> placement 弹窗的展开方向

```js
export default {
  template: `
    <div>
      <Page size="small" total="100" showSizer="{{true}}" pageSizeOpts="{{pageSizeOpts}}" placement="top"></Page>
    </div>
  `,
  data: function () {
    return {
      pageSizeOpts: [10, 15, 20, 25, 40]
    }
  }
}
```

> simple 显示简洁版本

```js
export default {
  template: `
    <Page total="100" simple></Page>
  `
}
```

#### API

> Page Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
total | 设置条数，必选参数 | string | - | -
current | 当前页码 | string | - | 1
pageSize | 每页条数 | string | - | 10
pageSizeOpts | 每页条数配置 | array | - | -
showSizer | 显示的每页数量选框 | boolean | - | false
showElevator | 显示快速跳转 | boolean | - | false
size | 大小 | string | small, tiny, null | null
simple | 是否启用简洁版本 | boolean | - | false
className | 样式类 | string | - | -
placement | 弹窗的展开方向 | string | bottom 和 top | -

> Page Events

事件名称 | 说明 | 回调参数
---|---|---
change | 页码改变的回调，返回改变后的页码 | page
pageSizeChange | 页码改变的回调，返回改变后的页码 | pageSize
