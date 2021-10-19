> 概述

出现在按钮、图标旁的数字或状态标记。

> 基础用法

```js
export default {
  template: `
    <Badge count="3">
      <a
        href="#"
        class="demo-badge"
        style="
          width: 42px;
          height: 42px;
          background: #eee;
          border-radius: 6px;
          display: inline-block;
        "
      ></a>
    </Badge>
  `
}
```

> 小红点

```js
export default {
  template: `
    <div>
      <Badge dot>
        <a
          href="#"
          class="demo-badge"
          style="
            width: 42px;
            height: 42px;
            background: #eee;
            border-radius: 6px;
            display: inline-block;
          "
        ></a>
      </Badge>
      <Badge dot>
        <Icon
          name="notification-3-fill"
          size="26"
        />
      </Badge>
      <Badge dot>
        <a href="#">
          可以是一个链接
        </a>
      </Badge>
      <style>
        .bell-badge {
          margin-right: 20px;
        }
      </style>
    </div>
  `
}
```

> 超过最大值显示为 `{max}+`

```js
export default {
  template: `
  <div>
    <Badge count="212" max="99">
      <Avatar
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        size="large"
      />
    </Badge>
    <br><br>
    <Badge count="212211" max="999">
      <Avatar
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        size="large"
      />
    </Badge>
    <br><br>
    <Badge count="212211">
      <Button type="primary">
        按钮
      </Button>
    </Badge>
  </div>
  `
}
```

> 独立使用

```js
export default {
  template: `
  <div>
    <Badge text="你好" />
    <Badge type="primary" text="你好" />
    <Badge type="success" text="你好" />
    <Badge type="info" text="你好" />
    <Badge type="warning" text="你好" />
  </div>
  `
}
```

> 状态点

```js
export default {
  template: `
    <div>
      <Badge dot status="default" />
      <Badge dot status="processing" />
      <Badge dot status="success" />
      <Badge dot status="error" />
      <Badge dot status="info" />
      <Badge dot status="warning" />
      <br>
      <br>
      <Badge dot status="default" text="Default" />
      <br>
      <Badge dot status="processing" text="Processing" />
      <br>
      <Badge dot status="success" text="Success" />
      <br>
      <Badge dot status="error" text="Error" />
      <br>
      <Badge dot status="info" text="Info" />
      <br>
      <Badge dot status="warning" text="Warning" />
      <style>
        .bell-badge-status {
          margin-right: 20px;
        }
      </style>
    </div>
  `
}
```

> 涟漪动画

```js
export default {
  template: `
    <div>
      <Badge status="default" dot ripple />
      <Badge status="processing" dot ripple />
      <Badge status="success" dot ripple />
      <Badge status="error" dot ripple />
      <Badge status="info" dot ripple />
      <Badge status="warning" dot ripple />
      <br>
      <Badge status="default" dot ripple text="Default" />
      <br>
      <Badge status="processing" dot ripple text="Processing" />
      <br>
      <Badge status="success" dot ripple text="Success" />
      <br>
      <Badge status="error" dot ripple text="Error" />
      <br>
      <Badge status="info" dot ripple text="Info" />
      <br>
      <Badge status="warning" dot ripple text="Warning" />
    </div>
  `
}
```

> 隐藏

```js
export default {
  template: `
    <div on-click="toggle('hidden')">
      <Badge hidden="{{hidden}}" count="212211" max="999">
        <Avatar
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
          size="large"
        />
      </Badge>
      <p>
        点击图片不展示 badge
      </p>
    </div>
  `,
  data: {
    hidden: false
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
count | 数值 | numeric | - | -
max | 封顶的数值，超过显示为 `${max}+` | numeric | - | `99`
text | 文本 | string | - | -
dot | 不展示数值，只有一个小红点 | boolean | - | -
hidden | 是否隐藏 | boolean | - | -
ripple | 是否有发散动画 | boolean | - | -
type | 风格 | string | `primary`, `info`, `success`, `warning`, `error` | `error`
status | 状态 | string | `default`, `processing`, `info`, `success`, `warning`, `error` | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
children | 需要在右上角加徽标的内容