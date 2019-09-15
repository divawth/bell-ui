> 基础用法

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      model="page"
      total="{{total}}"
    />
  `,
  data: {
    page: 1,
    total: 50
  },
  watchers: {
    page: function (page) {
      console.log(page)
    }
  }
}
```

> 更多分页

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      model="page"
      total="{{total}}"
    />
  `,
  data: {
    page: 1,
    total: 1000000
  },
  watchers: {
    page: function (page) {
      console.log(page)
    }
  }
}
```

> 设置每页条数

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      total="{{total}}"
      pageSize="{{pageSize}}"
      pageSizeOptions="{{pageSizeOptions}}"
      on-pageSizeChange="change()"
    />
  `,
  data: function () {
    return {
      total: 100,
      pageSize: 15,
      pageSizeOptions: [10, 15, 20, 25, 40],
    }
  },
  methods: {
    change: function (event, data) {
      console.log(`当前是 ${data.value} 页每条`)
    }
  }
}
```

> 跳转

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      total="100"
      showJumper
      on-pageChange="change()"
    />
  `,
  methods: {
    change: function (event, data) {
      console.log(`当前是 ${data.value} 页`)
    }
  }
}
```

> 显示总条数

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      total="100"
      showTotal
    />
  `
}
```


> 两种大小

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div>
      <Page
        total="100"
        size="small"
      />
      <br><br>
      <Page
        total="100"
      />
    </div>
  `
}
```

> Select 的展开方向

```js
export default {
  isViewFullBlock: true,
  template: `
    <Page
      total="{{100}}"
      pageSizeOptions="{{pageSizeOptions}}"
      placement="top"
      style="margin-top: 150px;"
    />
  `,
  data: function () {
    return {
      pageSizeOptions: [10, 15, 20, 25, 40]
    }
  }
}
```

> 简洁版本

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Page
        total="100"
        simple
      />
      <br><br>
      <Page
        total="100"
        size="small"
        simple
      />
    </div>
  `
}
```

> 自定义上一页和下一页

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Page total="100">
        <template slot="prev">
          上一页
        </template>
        <template slot="next">
          下一页
        </template>
      </Page>
    </div>

  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
current / model | 当前页码 | number | - | `1`
total | 设置总条数 | number | - | -
pageSize | 每页条数 | number | - | `10`
pageSizeOptions | 每页条数配置项 | number[] | - | -
showTotal | 是否显示总条数 | boolean | - | `false`
showJumper | 是否显示跳转 | boolean | - | `false`
size | 大小 | string | `default`, `small` | `default`
simple | 是否使用简洁版本 | boolean | - | `false`
placement | 弹窗的展开方向 | string | `bottom`, `top` | `bottom`

> Slots

参数 | 说明
---|---
prev | 上一页
next | 下一页

> Events

事件名称 | 说明 | 回调参数
---|---|---
pageChange | current 变化后触发 | data.value
pageSizeChange | pageSize 变化后触发 | data.value
error | 输入框按下回车或点击跳转按钮时，页码出现错误触发 | `data.error` 可选值 `empty`, `pattern`, `min`, `max`
