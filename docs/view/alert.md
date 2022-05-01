#### Alert 警告提示

静态的呈现一些提示消息

> 基础用法

```js
export default {
  template: `
  <Alert>
    默认 warning
  </Alert>
  `
}
```

> 四种样式

```js
export default {
  template: `
  <Space block vertical>
    <Alert status="success">
      成功信息
    </Alert>
    <Alert status="error">
      错误信息
    </Alert>
    <Alert status="info">
      提示信息
    </Alert>
    <Alert status="warning">
      警告信息
    </Alert>
  </Space>
  `
}
```

> 带图标的

```js
export default {
  isViewFullBlock: true,
  height: 680,
  template: `
  <Space block vertical>
    <Alert status="success" showIcon>
      内容
    </Alert>
    <Alert status="error" showIcon>
      内容
    </Alert>
    <Alert status="info" showIcon>
      内容
    </Alert>
    <Alert status="warning" showIcon>
      内容
    </Alert>

    <Alert title="标题" status="success" showIcon>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert title="标题" status="error" showIcon>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert title="标题" status="info" showIcon>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert title="标题" status="warning" showIcon>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
  </Space>
  `
}
```



> 可关闭的

```js
export default {
  template: `
  <Space block vertical>
    <Alert closable>
      警告信息
    </Alert>
    <Alert
      status="error"
      title="标题文字"
      closable
    >
      错误信息
    </Alert>
    <Alert
      status="error"
      title="标题文字"
      closable
      showIcon
    >
      错误信息
    </Alert>
  </Space>
  `
}
```

> 顶部通告

```js
export default {
  template: `
  <Space block vertical>
    <Alert banner>
      内容内容内容内容内容内容内容
    </Alert>
    <Alert status="success" closable banner>
      内容内容内容内容内容内容内容
    </Alert>
  </Space>
  `
}
```


> 自定义关闭按钮

```js
export default {
  template: `
  <Alert closable on-close="close()">
    设置了回调的 alert
    <template slot="close">
      我知道了
    </template>
  </Alert>
  `,
  methods: {
    close: function () {
      console.log('close')
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
status | 状态 | string | `info`, `warning`, `success`, `error` | `warning`
title | 标题 | string | - | -
showIcon | 是否显示状态图标 | boolean | - | -
closable | 是否显示关闭按钮 | boolean | - | -
banner | 是否为页面顶部通告 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮后触发 | -

> Slots

名称 | 说明
---|---
close | 关闭按钮
children | 内容
close | 自定义关闭按钮
