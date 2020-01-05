> 403

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <Exception
      status="403"
      title="403"
      subTitle="抱歉，你无权访问该页面。"
    >
      <template slot="extra">
        <Button type="primary">
          返回首页
        </Button>
      </template>
    </Exception>
  `
}
```

> 404

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <Exception
      status="404"
      title="404"
      subTitle="抱歉，你访问的页面不存在。"
    >
      <template slot="extra">
        <Button type="primary">
          返回首页
        </Button>
      </template>
    </Exception>
  `
}
```

> 500

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <Exception
      status="500"
      title="500"
      subTitle="抱歉，服务器出错了。"
    >
      <template slot="extra">
        <Button type="primary">
          返回首页
        </Button>
      </template>
    </Exception>
  `
}
```


> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
status | 状态码 | number | `403`, `404`, `500` | -
title | 标题 | string | - | -
subTitle | 副标题 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
extra | 自定义底部栏
