#### TimePicker 时间选择器

选择时间，支持时、分、秒等类型。

> 基本用法

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <TimePicker
        on-change="change()"
      />
    </div>
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
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <TimePicker
        clearable
        block
      />
    </div>
  `,
}
```

> 状态

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
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
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <TimePicker
        format="HH:mm"
      />
    </div>
  `,
}
```

> 尺寸

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px">
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
placement | 日期选择器出现的位置 | string | `bottom-start`
placeholder | 占位文本 | string | -
disabled | 禁用后无法再选择 | boolean | -
block | 是否为块级元素 | boolean | - | -
defaultValue | 默认显示视图的时间 | Date、number | -
clearable | 是否显示清除按钮 | boolean | -
width | 宽度 | numeric | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值改变之后的回调 | 选中的值