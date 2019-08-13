> 基础用法

```js
export default {
  template: `
  <div>
    <Input placeholder="Basic usage" model="value" />
    <Input placeholder="Basic usage" model="value" disabled />
  </div>
  `
}
```

> 三种大小

```js
export default {
  template: `
    <div class="example-input">
      <Input placeholder="large size" size="large" />
      <Input placeholder="default size" />
      <Input placeholder="small size" size="small" />
    </div>
  `
}
```

> 前置/后置标签

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div>
      <Input model="value1">
        <span slot="prepend">http://</span>
        <span slot="append">.com</span>
      </Input>
      <Input
        model="value2"
        type="text"
        placeholder="请输入..."
      >
        <Button slot="prepend">搜索</Button>
        <Button slot="append" type="error">搜索</Button>
      </Input>
      <Input
        model="value3"
        type="text"
        placeholder="请输入..."
      >
        <Button slot="prepend" type="info">搜索</Button>
        <Button slot="append" type="success">搜索</Button>
      </Input>

      <style>
        .bell-input + .bell-input {
          margin-top: 10px;
        }
      </style>
    </div>
  `
}
```

> 搜索框

```js
export default {
  template: `
  <div>
    <Input search placeholder="Enter something..." />
    <Input search enterButton placeholder="Enter something..." />
    <Input search enterButton="Search" placeholder="Enter something..." />
  </div>
  `
}
```

> 可清除

```js
export default {
  template: `
    <Input
      placeholder="请输入..."
      width="300"
      type="input"
      model="value"
      clearable
    />
  `
}
```

> 带Icon的输入框

```js
export default {
  template: `
  <div>
    <Input prefix="contact" />
    <Input suffix="calendar" />
    <Input prefix="contact" suffix="calendar" />
  </div>
  `
}
```

> type 设置为 textarea, 通过 rows 设置显示行数

```js
export default {
  template: `
  <div>
    <Input model="value"
      type="textarea"
      rows="{{4}}"
      placeholder="请输入..."
    >
    </Input>
  </div>
  `
}
```

> 适应文本高度的文本域

```js
export default {
  template: `
  <div>
    <Input model="value7" type="textarea" autoSize placeholder="Enter something..." />
    <Input model="value8" type="textarea" autoSize="{{autoSize}}" placeholder="Enter something..." />
  </div>
  `,
  data() {
    return {
      autoSize: {
        minRows: 2,
        maxRows: 5
      }
    }
  }
}
```

> 禁用状态

```js
export default {
  template: `
  <div>
    <Input model="value9" disabled placeholder="Enter something..." />
    <Input model="value10" disabled type="textarea" placeholder="Enter something..." />
  </div>
  `
}
```


> 通过 status 设置状态

```js
export default {
  template: `
  <div>
    <Input placeholder="info input" model="value" status="info" clearable />
    <Input placeholder="success input" model="value" status="success" clearable />
    <Input placeholder="error input" model="value" status="error" clearable />
    <Input placeholder="warning input" model="value" status="warning" clearable />
  </div>
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | input 的值 | string | - | -
type | 按钮类型 | string | text, password, textarea | text
size | 按钮大小 | string | default, small, large | default
placeholder | placeholder | string | - | -
clearable | 清空按钮 | boolean | - | false
disabled | 设置按钮为禁用状态 | boolean | - | false
prefix | 输入框头部图标 | string | - | -
suffix | 输入框尾部图标 | string | - | -
search | 是否显示为搜索型输入框 | boolean | - | false
enterButton | 开启 search 时可用，是否有确认按钮，可设为按钮文字 | boolean, string | - | -
rows | 行数, 仅在 textarea 类型下有效 | number | - | 2
autoSize | 自适应内容高度，仅在 textarea 类型下有效，可传入对象，如 { minRows: 2, maxRows: 6 } | Object | - | -
secure | 是否可以隐藏显示（仅在 password 下有效） | boolean | - | false
autoComplete | 是否应该启用自动完成功能 | string | on, off | -
wrap | wrap 属性规定当在表单中提交时，文本区域（text area）中的文本如何换行 | string | soft, hard | -
spellCheck | 是否对元素内容进行拼写检查 | boolean | - | -
readOnly | 设置输入框为只读 | boolean | - | false
maxLength | 最大输入长度 | number | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
enter | 按下回车键的时候触发 | -
keyup | 原生的 keyup 事件 | -
keydown | 原生的 keyup 事件 | -
keypress | 原生的 keypress 事件 | -
change | 输入的时候值发生改变的时候回调 | value
focus | 聚焦的时候触发 | -
blur | 失焦的时候触发 | -
search | 点击搜索按钮的时候的回调 | -
clear | 点击清除时候的回调 | -

> Slots

参数 | 说明
---|---
prepend | 自定义前插槽
append | 自定义后插槽
prefix | 输入框头部图标
suffix | 输入框尾部图标