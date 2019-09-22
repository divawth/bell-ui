> 基础用法

```js
export default {
  isViewFullBlock: true,
  template: `
    <Pagination
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
    <Pagination
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
    <Pagination
      total="{{total}}"
      pageSize="{{pageSize}}"
      pageSizeOptions="{{pageSizeOptions}}"
      on-change="change()"
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
      if (data.pageSize) {
        console.log(`当前是 ${data.pageSize} 条每页`)
      }
      else if (data.current) {
        console.log(`当前是 ${data.current} 页`)
      }
    }
  }
}
```

> 跳转

```js
export default {
  isViewFullBlock: true,
  template: `
    <Pagination
      total="100"
      showJumper
      on-change="change()"
      on-error="error()"
    />
  `,
  methods: {
    change: function (event, data) {
      console.log(`当前是 ${data.current} 页`)
    },
    error: function (event, data) {
      console.log('error', data)
    }
  }
}
```

> 显示总条数

```js
export default {
  isViewFullBlock: true,
  template: `
    <Pagination
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
      <Pagination
        total="100000"
        size="small"
      />
      <br><br>
      <Pagination
        total="100000"
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
    <Pagination
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
      <Pagination
        total="100"
        simple
      />
      <br><br>
      <Pagination
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
      <Pagination total="100">
        <template slot="prev">
          上一页
        </template>
        <template slot="next">
          下一页
        </template>
      </Pagination>
    </div>

  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
current / `model` | 当前页码 | numeric | - | `1`
total | 设置总条数 | numeric | - | -
pageSize | 每页条数 | numeric | - | `10`
pageSizeOptions | 配置每页条数 | numeric[] | - | -
showTotal | 是否显示总条数 | boolean | - | `false`
showJumper | 是否显示跳转 | boolean | - | `false`
size | 大小 | string | `default`, `small` | `default`
simple | 是否使用简洁版本 | boolean | - | `false`
placement | 选择每页条数的浮层的展开方向 | string | `bottom`, `top` | `bottom`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
prev | 上一页
next | 下一页

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | `current` 或 `pageSize` 变化后触发 | `data.current` 或 `data.pageSize`
error | 输入框按下回车或点击跳转按钮时，页码出现错误触发 | `data.error` 可选值 `empty`, `pattern`, `min`, `max`
