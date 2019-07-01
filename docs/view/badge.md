> 概述

出现在按钮、图标旁的数字或状态标记。

> 基础用法

```js
export default {
  template: `
    <Badge count="3">
      <a href="#" class="demo-badge" style="
        width: 42px;
        height: 42px;
        background: #eee;
        border-radius: 6px;
        display: inline-block;
      "></a>
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
        <a href="#" class="demo-badge" style="
          width: 42px;
          height: 42px;
          background: #eee;
          border-radius: 6px;
          display: inline-block;
        "></a>
      </Badge>
      <Badge dot>
        <Icon name="notifications-outline" size="26"></Icon>
      </Badge>
      <Badge dot>
        <a href="#">可以是一个链接</a>
      </Badge>
      <style>
        .bell-badge {
          margin-right: 40px;
        }
      </style>
    </div>
  `
}
```

> 设置 maxCount

```js
export default {
  template: `
  <div>
    <Badge count="212" maxCount="99">
      <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
    </Badge>
    <br><br>
    <Badge count="212211" maxCount="999">
      <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
    </Badge>
    <br><br>
    <Badge count="212211">
      <Button type="info">
        按钮
      </Button>
    </Badge>
  </div>
  `
}
```

> 独立 text 使用 使用 type 改变风格

```js
export default {
  template: `
  <div>
    <Badge text="你好" />
    <Badge type="success" text="你好" />
    <Badge type="info" text="你好" />
    <Badge type="warning" text="你好" />
  </div>
  `
}
```

> dot 不展示数字，只有一个点

```js
export default {
  template: `
    <div>
      <Badge dot count="你好">
        <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
      </Badge>
      <Badge dot type="success" count="你好">
        你好哦
      </Badge>
      <Badge dot type="info" count="你好">
        <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
      </Badge>
    </div>
  `
}
```

> 状态点

```js
export default {
  template: `
    <div>
      <Badge dot status="success" />
      <Badge dot status="error" />
      <Badge dot status="info" />
      <Badge dot status="warning" />
      <Badge dot status="default" />
      <Badge dot status="processing" />
      <br />
      <Badge dot status="success" text="Success" />
      <br />
      <Badge dot status="error" text="Error" />
      <br />
      <Badge dot status="info" text="Info" />
      <br />
      <Badge dot status="warning" text="Warning" />
    </div>
  `
}
```
> hidden 不展示

```js
export default {
  template: `
    <div on-click="click()">
      <Badge hidden="{{hidden}}" count="212211" maxCount="999">
        <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
      </Badge>
      <p> 点击图片不展示 badge </p>
    </div>
  `,
  data: {
    hidden: false
  },
  methods: {
    click: function () {
      this.toggle('hidden')
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
count | 显示的数字 | number | - | -
text | 显示文本 | string | - | -
maxCount | 展示封顶的数字值 | number | - | 999
dot | 不展示数字，只有一个小红点 | boolean | - | false
hidden | 是否隐藏 | boolean | - | false
type | 风格 | string | info, success, warning, error | error
status | 状态 | string | info, success, warning, error | error
