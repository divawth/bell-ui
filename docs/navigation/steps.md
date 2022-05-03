### Steps步骤条

引导用户按照流程完成任务的导航条。

#### 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

> 基本用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Steps current="1">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  `,
}
```

> 迷你版

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Steps current="1" size="small">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  `,
}
```

> 垂直版

```js
export default {
  template: `
    <Steps current="1" vertical>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  `,
}
```

> 垂直迷你版

```js
export default {
  template: `
    <Steps current="1" size="small" vertical>
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  `,
}
```

> 步骤运行错误

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Steps current="1" status="error">
      <Step title="Finished" description="This is a description." />
      <Step title="In Progress" description="This is a description." />
      <Step title="Waiting" description="This is a description." />
    </Steps>
  `,
}
```

#### API

> Steps props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
current | 指定当前步骤，从 0 开始记数 | numeric | - | `0`
size | 指定大小 | string | `small` | -
status | 指定当前步骤的状态，可选 `wait` `process` `finish` `error` | string | - | `process`
vertical | 是否垂直显示 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Step props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题 | string | - | -
description | 步骤的详情描述，可选 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -