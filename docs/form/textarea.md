> 基础用法

```js
export default {
  template: `
  <Textarea
    model="value"
    placeholder="请输入..."
  />
  `
}
```

> 禁用状态

```js
export default {
  template: `
  <Textarea
    disabled
    model="value"
    placeholder="请输入..."
  />
  `
}
```

> 状态

```js
export default {
  template: `
  <div>
    <Textarea
      model="value"
      placeholder="info input"
      status="info"
    />
    <br><br>
    <Textarea
      model="value"
      placeholder="success input"
      status="success"
    />
    <br><br>
    <Textarea
      model="value"
      placeholder="error input"
      status="error"
    />
    <br><br>
    <Textarea
      model="value"
      placeholder="warning input"
      status="warning"
    />
  </div>
  `
}
```

> 三种大小

```js
export default {
  template: `
  <div>
    <Textarea
      size="small"
      placeholder="input"
    />
    <br><br>
    <Textarea
      placeholder="input"
    />
    <br><br>
    <Textarea
      size="large"
      placeholder="input"
    />
  </div>
  `
}
```

> 设置行数

```js
export default {
  template: `
  <Textarea
    model="value"
    rows="6"
    placeholder="请输入..."
  />
  `
}
```

> 高度自适应

```js
export default {
  template: `
  <Textarea
    model="value"
    autoSize="{{autoSize}}"
    placeholder="请输入..."
  />
  `,
  data() {
    return {
      autoSize: {
        minRows: 3,
        maxRows: 10
      }
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 输入框的值 | string | - | -
status | 状态 | string | `info`, `warning`, `success`, `error` | -
size | 大小 | string | `default`, `small`, `large` | `default`
placeholder | 输入框内容为空时的提示文本 | string | - | -
disabled | 禁用输入框 | boolean | - | `false`
rows | 行数 | number | - | 3
autoSize | 自适应内容高度，格式如 `{ minRows: 2, maxRows: 6 }` | Object | - | -
wrap | 原生 `wrap` 属性 | string | soft, hard | -
spellCheck | 原生 `spellcheck` 属性 | boolean | - | -
readOnly | 原生 `readonly` 属性 | boolean | - | -
maxLength | 原生 `maxlength` 属性 | numeric | - | -
width | 显示宽度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
enter | 按下回车键时触发 | -
keyup | 原生的 keyup 事件 | -
keydown | 原生的 keyup 事件 | -
keypress | 原生的 keypress 事件 | -
change | 输入时值发生改变时触发 | value
focus | 聚焦时触发 | -
blur | 失焦时触发 | -