点击元素，弹出气泡式的确认框。

> 基础用法

```js
export default {
  template: `
    <Popconfirm
      showIcon
      title="确认删除吗？"
      on-ok="ok()"
      on-cancel="cancel()"
    >
      <Text type="primary">
        删除
      </Text>
    </Popconfirm>
  `,
  methods: {
    ok() {
      alert('ok')
    },
    cancel() {
      alert('cancel')
    },
  }
}
```

> 不同状态

```js
export default {
  template: `
  <div>
    <Popconfirm
      showIcon
      status="success"
      title="确认删除吗？"
      on-ok="ok()"
      on-cancel="cancel()"
    >
      <Button
        type="success"
      >
        删除
      </Button>
    </Popconfirm>
    <Popconfirm
      showIcon
      status="error"
      title="确认删除吗？"
      on-ok="ok()"
      on-cancel="cancel()"
    >
      <Button
        type="error"
      >
        删除
      </Button>
    </Popconfirm>
    <Popconfirm
      showIcon
      status="info"
      title="确认删除吗？"
      on-ok="ok()"
      on-cancel="cancel()"
    >
      <Button
        type="info"
      >
        删除
      </Button>
    </Popconfirm>
    <Popconfirm
      showIcon
      status="warning"
      title="确认删除吗？"
      on-ok="ok()"
      on-cancel="cancel()"
    >
      <Button
        type="warning"
      >
        删除
      </Button>
    </Popconfirm>
  </div>
  `,
  methods: {
    ok() {
      alert('ok')
    },
    cancel() {
      alert('cancel')
    },
  }
}
```

> 组件提供 12 个不同的方向显示 Popconfirm。

```js
export default {
  template: `
    <div>
      <div>
        <Popconfirm placement="bottom-start" title="这里是提示文字">
          <Button>下左</Button>
        </Popconfirm>
        <Popconfirm placement="bottom" title="这里是提示文字">
          <Button>下</Button>
        </Popconfirm>
        <Popconfirm placement="bottom-end" title="这里是提示文字">
          <Button>下右</Button>
        </Popconfirm>
      </div>
      <br><br>
      <div>
        <Popconfirm placement="top-start" title="这里是提示文字">
          <Button>上左</Button>
        </Popconfirm>
        <Popconfirm placement="top" title="这里是提示文字">
          <Button>上</Button>
        </Popconfirm>
        <Popconfirm placement="top-end" title="这里是提示文字">
          <Button>上右</Button>
        </Popconfirm>
      </div>
      <br><br>
      <div>
        <Popconfirm placement="right-start" title="这里是提示文字">
          <Button>右上</Button>
        </Popconfirm>
        <Popconfirm placement="right" title="这里是提示文字">
          <Button>右</Button>
        </Popconfirm>
        <Popconfirm placement="right-end" title="这里是提示文字">
          <Button>右下</Button>
        </Popconfirm>
      </div>
      <br><br>
      <div>
        <Popconfirm placement="left-start" title="这里是提示文字">
          <Button>左上</Button>
        </Popconfirm>
        <Popconfirm placement="left" title="这里是提示文字">
          <Button>左</Button>
        </Popconfirm>
        <Popconfirm placement="left-end" title="这里是提示文字">
          <Button>左下</Button>
        </Popconfirm>
      </div>
    </div>
  `
}
```


> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
status | 状态 | string | `info`, `warning`, `success`, `error` | `warning`
showIcon | 是否显示状态图标 | boolean | - | -
title | 确认框的描述 | string | - | -
okText | 确认按钮文字 | string | - | -
okType | 确认按钮类型，默认跟随 `status` | string | `primary`, `info`, `success`, `warning`, `error` | -
cancelText | 取消按钮文字 | string | - | -
placement | 菜单显示方位 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom`
maxWidth | 确认框的最大宽度 | string, number | - | -
maxHeight | 确认框的最大高度 | string, number | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
ok | 点击确认按钮时触发 | -
cancel | 点击取消按钮时触发 | -