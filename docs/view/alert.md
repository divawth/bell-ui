#### Alert 警告提示

静态的呈现一些提示消息

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 340,
  template: `
  <div>
    <Alert>
      默认 warning
    </Alert>
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
    <style>
      .bell-alert {
        margin-bottom: 10px;
      }
    </style>
  </div>
  `
}
```

> 标题

```js
export default {
  isViewFullBlock: true,
  height: 340,
  template: `
  <div>
    <Alert status="success">
      <template slot="title">
        标题
      </template>
      内容
    </Alert>
    <Alert status="error">
      <template slot="title">
        标题
      </template>
      内容
    </Alert>
    <Alert status="info">
      <template slot="title">
        标题
      </template>
      内容
    </Alert>
    <Alert status="warning">
      <template slot="title">
        标题
      </template>
      内容
    </Alert>
  </div>
  `
}
```

> 图标

```js
export default {
  isViewFullBlock: true,
  height: 680,
  template: `
  <div>
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

    <Alert status="success" showIcon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="error" showIcon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="info" showIcon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="warning" showIcon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
  </div>
  `
}
```

> 关闭按钮

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Alert status="success" showIcon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="error" showIcon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="info" showIcon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="warning" showIcon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
  </div>
  `
}
```

> 居中

```js
export default {
  isViewFullBlock: true,
  template: `
  <div>
    <Alert status="success" closable center>
      内容内容内容内容内容内容内容
    </Alert>
  </div>
  `
}
```

> 顶部通告

```js
export default {
  isViewFullBlock: true,
  template: `
  <Alert status="success" closable banner>
    内容内容内容内容内容内容内容
  </Alert>
  `
}
```


> 自定义关闭按钮

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <Alert closable on-close="close()">
    设置了回调的 alert
    <template slot="close">
      知道了
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
showIcon | 是否显示状态图标 | boolean | - | -
closable | 是否显示关闭按钮 | boolean | - | -
center | 文字是否居中 | boolean | - | -
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
title | 标题
children | 内容
