> 基础用法

```js
export default {
  template: `
    <Page total="70" on-change="pageChange()"></Page>
  `,
  methods: {
    pageChange(event, data) {
      console.log(`当前是第 ${data.value} 页`)
    }
  }
}
```

> showSizer 设置显示每页条数

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Page total="{{total}}" showSizer pageSizeOpts="{{pageSizeOpts}}" on-pageSizeChange="change()"></Page>
    </div>
  `,
  data: function () {
    return {
      pageSizeOpts: [10, 15, 20, 25, 40],
      total: 100
    }
  },
  methods: {
    change: function (event, data) {
      console.log(`当前是 ${data.value} 页每条`)
    }
  }
}
```

> showElevator 显示快速跳转

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Page total="100" showElevator></Page>
    </div>
  `
}
```

> showTotal 设置显示条数

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Page total="100" showTotal="{{true}}"></Page>
    </div>
  `
}
```


> size 设置大小

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div>
      <Page total="100" size="small"></Page>
      <br><br>
      <Page total="100"></Page>
    </div>
  `
}
```

> placement 弹窗的展开方向

```js
export default {
  isViewFullBlock: true,
  template: `
    <div style="margin-top: 150px;">
      <Page total="{{100}}" showSizer="{{true}}" pageSizeOpts="{{pageSizeOpts}}" placement="top"></Page>
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
  isViewFullBlock: true,
  template: `
    <Page total="100" simple></Page>
  `
}
```

> 上一页和下一页

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page total="100" nextText="下一页" prevText="上一页"></Page>
  `
}
```

#### API

> Props

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
placement | 弹窗的展开方向 | string | bottom 和 top | -
prevText | 替代图标显示的上一页文字 | string | - | -
nextText | 替代图标显示的下一页文字 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 页码改变的回调，返回改变后的页码 | data.value
pageSizeChange | 页码改变的回调，返回改变后的页码 | data.value
error | 错误信息 | data.errMsg
