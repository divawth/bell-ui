#### TimePicker 时间选择器

选择时间，支持时、分、秒等类型。

> 基本用法

```js
export default {
  template: `
    <TimePicker
      on-change="change()"
    />
  `,
  methods: {
    change(_, data) {
      console.log(data)
    }
  }
}
```

> block

```js
export default {
  template: `
    <TimePicker
      showClear
      block
    />
  `,
}
```

> 状态

```js
export default {
  template: `
    <div>
      <TimePicker
        status="info"
      />
      <br><br>
      <TimePicker
        status="warning"
      />
      <br><br>
      <TimePicker
        status="success"
      />
      <br><br>
      <TimePicker
        status="error"
      />
    </div>
  `
}
```

> 仅有时分

```js
export default {
  template: `
    <TimePicker
      format="HH:mm"
    />
  `,
}
```

> 尺寸

```js
export default {
  template: `
    <div>
      <TimePicker size="small" placeholder="Select time" />
      <br><br>
      <TimePicker placeholder="Select time" />
      <br><br>
      <TimePicker size="large" placeholder="Select time" />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | `default`, `small`, `large` | `default`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
format | 日期显示格式 | string | - | `HH:mm:ss`
placement | 日期选择器出现的位置 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom-start`
placeholder | 占位文本 | string | - | -
disabled | 禁用后无法再选择 | boolean | - | -
block | 是否为块级元素 | boolean | - | -
defaultValue | 默认显示视图的时间 | Date、number | - | -
showClear | 是否显示清除按钮 | boolean | - | -
width | 宽度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值改变之后的回调 | 选中的值