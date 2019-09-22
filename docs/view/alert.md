#### Alert 警告提示

静态的呈现一些提示消息

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 340,
  template: `
  <div>
    <Alert status="success">
      提示内容
    </Alert>
    <Alert status="error">
      提示内容
    </Alert>
    <Alert status="info">
      提示内容
    </Alert>
    <Alert status="warning">
      提示内容
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
      提示内容
    </Alert>
    <Alert status="error">
      <template slot="title">
        标题
      </template>
      提示内容
    </Alert>
    <Alert status="info">
      <template slot="title">
        标题
      </template>
      提示内容
    </Alert>
    <Alert status="warning">
      <template slot="title">
        标题
      </template>
      提示内容
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
    <Alert status="success" icon>
      内容内容内容内容
    </Alert>
    <Alert status="error" icon>
      内容内容内容内容
    </Alert>
    <Alert status="info" icon>
      内容内容内容内容
    </Alert>
    <Alert status="warning" icon>
      内容内容内容内容
    </Alert>

    <Alert status="success" icon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="error" icon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="info" icon>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="warning" icon>
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
    <Alert status="success" icon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="error" icon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="info" icon closable>
      <template slot="title">
        标题
      </template>
      内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
    </Alert>
    <Alert status="warning" icon closable>
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
  <Alert status="success" closable center>
    内容内容内容内容内容内容内容
  </Alert>
  `
}
```

> banner

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


> 各种自定义

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <Alert icon closable>
    <template slot="title">
      标题
    </template>
    <Icon
      slot="icon"
      name="chatbubbles"
      size="22"
    />
    <template slot="close">
      No longer prompt
    </template>
    内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容
  </Alert>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
status | 颜色 | string | `info`, `warning`, `success`, `error` | `warning`
icon | 是否显示类型图标 | boolean | - | `false`
closable | 是否显示关闭按钮 | boolean | - | `false`
center | 文字是否居中 | boolean | - | `false`
banner | 是否为页面顶部通告 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮后触发 | -

> Slots

名称 | 说明
---|---
icon | 自定义左侧图标
close | 自定义关闭按钮
title | 自定义标题
children | 自定义内容
