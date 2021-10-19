> 基础用法

```js
export default {
  template: `
  <div>
    <Input
      placeholder="Basic usage"
      model="value"
    />
    <br><br>
    <Input
      placeholder="Basic usage"
      model="value"
      disabled
    />
  </div>
  `
}
```

> block

```js
export default {
  template: `
  <Input
    placeholder="Basic usage"
    model="value"
    block
  />
  `
}
```


> 限制字数

```js
export default {
  template: `
  <div>
    <Input
      size="small"
      placeholder="Basic usage"
      model="value"
      maxLength="20"
      showCount
      block
    />
    <br><br>
    <Input
      placeholder="Basic usage"
      model="value"
      maxLength="20"
      showCount
      block
    />
    <br><br>
    <Input
      size="large"
      placeholder="Basic usage"
      model="value"
      maxLength="20"
      showCount
      block
    />
  </div>
  `
}
```

> 三种大小

```js
export default {
  template: `
    <div class="example-input">
      <Input
        placeholder="large size"
        size="large"
      />
      <br><br>
      <Input
        placeholder="default size"
      />
      <br><br>
      <Input
        placeholder="small size"
        size="small"
      />
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
      <Input
        model="value1"
        placeholder="请输入..."
        width="400"
      >
        <template slot="prepend">
          http://
        </template>
        <template slot="append">
          .com
        </template>
      </Input>
      <br><br>
      <Input
        model="value2"
        placeholder="请输入..."
        width="400"
      >
        <Button slot="prepend">
          搜索
        </Button>
      </Input>
      <br><br>
      <Input
        model="value2"
        placeholder="请输入..."
        width="400"
      >
        <Button slot="append">
          搜索
        </Button>
      </Input>
      <br><br>
      <Input
        model="value3"
        placeholder="请输入..."
        width="400"
      >
        <Select slot="prepend" width="120">
          <Option value="www1" text="www1" />
          <Option value="www2" text="www2" />
        </Select>
      </Input>
      <br><br>
      <Input
        model="value3"
        placeholder="请输入..."
        width="400"
      >
        <Select slot="append" width="120">
          <Option value="美元" text="美元" />
          <Option value="欧元" text="欧元" />
        </Select>
      </Input>
      <br><br>
      <Input
        model="value4"
        placeholder="请输入..."
        width="400"
      >
        <Button slot="append" type="primary">
          搜索
        </Button>
      </Input>
    </div>
  `
}
```

> 搜索框

```js
export default {
  template: `
  <Input
    prefix="search-line"
    placeholder="Enter something..."
  />
  `
}
```

> 密码框

```js
export default {
  template: `
  <Input
    type="password"
    secure
    placeholder="Enter something..."
  />
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
    model="value"
    clearable
  />
  `
}
```

> 带图标的输入框

```js
export default {
  template: `
  <div>
    <Input size="small" prefix="contacts-book-2-line" />
    <br><br>
    <Input prefix="contacts-book-2-line" />
    <br><br>
    <Input size="large" prefix="contacts-book-2-line" />
    <br><br>
    <Input size="small" suffix="calendar-line" />
    <br><br>
    <Input suffix="calendar-line" />
    <br><br>
    <Input size="large" suffix="calendar-line" />
  </div>
  `
}
```

> 禁用状态

```js
export default {
  template: `
  <Input
    model="value1"
    placeholder="Enter something..."
    disabled
  />
  `
}
```


> 状态

```js
export default {
  template: `
  <div>
    <Input
      model="value"
      placeholder="info input"
      status="info"
    />
    <br><br>
    <Input
      model="value"
      placeholder="success input"
      status="success"
    />
    <br><br>
    <Input
      model="value"
      placeholder="error input"
      status="error"
    />
    <br><br>
    <Input
      model="value"
      placeholder="warning input"
      status="warning"
    />
  </div>
  `
}
```


#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 输入框的值 | string | - | -
type | 类型 | string | `text`, `password` | `text`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
size | 大小 | string | `default`, `small`, `large` | `default`
placeholder | 输入框内容为空时的提示文本 | string | - | -
disabled | 禁用输入框 | boolean | - | -
clearable | 是否显示清空按钮 | boolean | - | -
block | 是否为块级元素 | boolean | - | -
prefix | 输入框头部图标 | string | - | -
suffix | 输入框尾部图标 | string | - | -
secure | 是否可以隐藏显示（仅在 `password` 下有效） | boolean | - | -
autoFocus | 原生 `autofocus` 属性 | boolean | - | -
spellCheck | 原生 `spellcheck` 属性 | boolean | - | -
readOnly | 原生 `readonly` 属性 | boolean | - | -
showCount | 显示计数 | boolean | - | -
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
clear | 点击清除时触发 | -

> Slots

参数 | 说明
---|---
prepend | 自定义前插槽
append | 自定义后插槽