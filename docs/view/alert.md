#### Alert 警告提示

静态的呈现一些提示消息

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 340,
  template: `
  <div>
    <Alert>An info prompt</Alert>
    <Alert type="secondary">An secondary prompt</Alert>
    <Alert type="success">A success prompt</Alert>
    <Alert type="warning">A warning prompt</Alert>
    <Alert type="info">An info prompt</Alert>
    <Alert type="error">An error prompt</Alert>
    <style>
      .bell-alert {
        margin-bottom: 10px;
      }
    </style>
  </div>
  `
}
```

> 添加描述

```js
export default {
  isViewFullBlock: true,
  height: 480,
  template: `
  <div>
    <Alert>
      An info prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="secondary">
      An secondary prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="success">
      A success prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="warning">
      A warning prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="info">
      An info prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="error">
      An error prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
  </div>
  `
}
```

> 显示 icon

```js
export default {
  isViewFullBlock: true,
  height: 680,
  template: `
  <div>
    <Alert type="primary" icon>An info prompt</Alert>
    <Alert type="success" icon>A success prompt</Alert>
    <Alert type="warning" icon>A warning prompt</Alert>
    <Alert type="error" icon>An error prompt</Alert>
    <Alert type="primary" icon>
      An info prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="success" icon>
      A success prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="warning" icon>
      A warning prompt
      <template slot="content">
        Content of prompt. Content of prompt. Content of prompt.
      </template>
    </Alert>
    <Alert type="error" icon>
      An error prompt
      <template slot="content">
        Custom error contentription copywriting.
      </template>
    </Alert>
    <Alert icon closable>
      Custom icon
      <template slot="content">
        Custom icon copywriting. Custom icon copywriting. Custom icon copywriting.
      </template>
    </Alert>
  </div>
  `
}
```

> 显示关闭按钮

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Alert icon closable>An info prompt</Alert>
    <Alert type="success" icon closable>A success prompt</Alert>
    <Alert type="warning" icon closable>A warning prompt</Alert>
    <Alert type="error" icon closable>An error prompt</Alert>
  </div>
  `
}
```


> 自定义关闭按钮

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Alert>
      An info prompt
      <template slot="icon">
        <Icon type="alarm" />
      </template>
      <template slot="close">
        No longer prompt
      </template>
    </Alert>
    <Alert type="success">
      An info prompt
      <template slot="icon">
        <Icon type="alarm" />
      </template>
      <template slot="close">
        No longer prompt
      </template>
    </Alert>
  </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | primary, info, warning, success, error | primary
closable | 是否显示关闭按钮 | boolean | - | false
center | 文字是否居中 | boolean | - | false
icon | 是否显示类型图标 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮后触发 | -

> Slots

名称 | 说明
---|---
icon | 自定义左侧图标
close | 自定义关闭按钮
