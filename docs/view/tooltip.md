文字提示气泡框，在鼠标悬停时显示，代替了系统的 title 提示。

> 基础用法

```js
export default {
  template: `
    <div>
      <Tooltip content="这里是提示文字">
        <span>
          当鼠标经过这段文字时，会显示一个气泡框
        </span>
      </Tooltip>
    </div>
  `
}
```

> 主题

```js
export default {
  template: `
    <div style="margin: 60px;">
      <Tooltip content="这里是提示文字">
        <Button>Dark</Button>
      </Tooltip>
      <Tooltip content="这里是提示文字" theme="light">
        <Button>Light</Button>
      </Tooltip>
    </div>
  `
}
```

> 组件提供 12 个不同的方向显示 Tooltip。

```js
export default {
  template: `
    <div>
      <div>
        <Tooltip placement="bottom-start" content="这里是提示文字">
          <Button>下左</Button>
        </Tooltip>
        <Tooltip placement="bottom" content="这里是提示文字">
          <Button>下</Button>
        </Tooltip>
        <Tooltip placement="bottom-end" content="这里是提示文字">
          <Button>下右</Button>
        </Tooltip>
      </div>
      <br><br>
      <div>
        <Tooltip placement="top-start" content="这里是提示文字">
          <Button>上左</Button>
        </Tooltip>
        <Tooltip placement="top" content="这里是提示文字">
          <Button>上</Button>
        </Tooltip>
        <Tooltip placement="top-end" content="这里是提示文字">
          <Button>上右</Button>
        </Tooltip>
      </div>
      <br><br>
      <div>
        <Tooltip placement="right-start">
          <Button>右上</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
        <Tooltip placement="right">
          <Button>右</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
        <Tooltip placement="right-end">
          <Button>右下</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
      </div>
      <br><br>
      <div>
        <Tooltip placement="left-start">
          <Button>左上</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
        <Tooltip placement="left">
          <Button>左</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
        <Tooltip placement="left-end">
          <Button>左下</Button>
          <div slot="content">
            这里是提示文字
            <p>显示多行信息</p>
            <p><i>可以自定义样式</i></p>
          </div>
        </Tooltip>
      </div>
    </div>
  `
}
```

> 自定义文本

```js
export default {
  template: `
    <div style="margin: 60px;">
      <Tooltip placement="bottom">
        <Button>多行</Button>
        <div slot="content">
          这里是提示文字
          <p>显示多行信息</p>
          <p><i>可以自定义样式</i></p>
        </div>
      </Tooltip>
    </div>
  `
}
```

> 点击关闭提示

```js
export default {
  template: `
    <div>
      <Tooltip placement="bottom" content="可以禁用文字提示" disabled="{{disabled}}">
        <Button on-click="click()">
          点击关闭提示
        </Button>
      </Tooltip>
    </div>
  `,
  data: {
    disabled: false
  },
  methods: {
    click: function () {
      this.toggle('disabled')
    }
  }
}
```

> 通过设置属性 delay 可以延时显示文字提示，单位毫秒。

```js
export default {
  template: `
    <Tooltip content="Tooltip 文字提示" delay="1000">
      <Button>
        延时1秒显示
      </Button>
    </Tooltip>
  `
}
```

> 点击显示

```js
export default {
  template: `
    <Tooltip content="Tooltip 文字提示" mode="click">
      <Button>
        点击显示
      </Button>
    </Tooltip>
  `
}
```

> 设置最大宽高

```js
export default {
  template: `
    <div>
      <Tooltip mode="click" max-height="60">
        <Button>设置最大宽高</Button>
        <div slot="content">
          这里是提示文字
          <p>显示多行信息</p>
          <p><i>可以自定义样式</i></p>
        </div>
      </Tooltip>
    </div>
  `
}
```

> 设置偏移

```js
export default {
  template: `
    <Tooltip content="Tooltip 文字提示" mode="click" offsetX="10" offsetY="100">
      <Button>
        点击显示
      </Button>
    </Tooltip>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | Tooltip 的文本 | string | - | -
theme | 主题 | string | dark, light | dark
placement | 菜单显示方位 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom`
delay | 显示延时 | string, number | - | 0
mode | 交互模式 | string | click, hover | hover
maxWidth | 浮层的最大宽度 | string, number | - | -
maxHeight | 浮层的最大高度 | string, number | - | -
offsetX | 浮层距离目标元素 x 轴的位置偏移 | number | - | -
offsetY | 浮层距离目标元素 y 轴的位置偏移 | number | - | -

> Slots

名称 | 说明
---|---
content | 复杂的 content，如富文本