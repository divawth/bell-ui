> 基本用法

```js
export default {
  template: `
    <div>
      <Tag>
        标签
      </Tag>
      <br><br>
      <Tag closable>
        标签
      </Tag>
    </div>
  `
}
```

> 类型

```js
export default {
  template: `
  <div>
    <Tag type="primary">
      标签
    </Tag>
    <Tag type="success">
      标签
    </Tag>
    <Tag type="error">
      标签
    </Tag>
    <Tag type="warning">
      标签
    </Tag>
    <Tag type="info">
      标签
    </Tag>
    <br><br>
    <Tag closable type="primary">
      标签
    </Tag>
    <Tag closable type="success">
      标签
    </Tag>
    <Tag closable type="error">
      标签
    </Tag>
    <Tag closable type="warning">
      标签
    </Tag>
    <Tag closable type="info">
      标签
    </Tag>
  </div>
  `
}
```

> 两种大小

```js
export default {
  template: `
  <div>
    <Tag>
      标签
    </Tag>
    <Tag closable>
      标签
    </Tag>
    <br><br>
    <Tag size="large">
      标签
    </Tag>
    <Tag size="large" closable>
      标签
    </Tag>
  </div>
  `
}
```

> checkable

```js
export default {
  template: `
    <div>
      <Tag checkable type="primary">
        标签
      </Tag>
      <Tag checkable checked type="success">
        标签
      </Tag>
      <Tag checkable type="error">
        标签
      </Tag>
      <Tag checkable type="warning">
        标签
      </Tag>
      <Tag checkable type="info">
        标签
      </Tag>
      <br><br>
      <Tag checkable closable type="primary">
        标签
      </Tag>
      <Tag checkable closable type="success">
        标签
      </Tag>
      <Tag checkable checked closable type="error">
        标签
      </Tag>
      <Tag checkable closable type="warning">
        标签
      </Tag>
      <Tag checkable closable type="info">
        标签
      </Tag>
    </div>
  `
}
```

> 纯色标签

```js
export default {
  template: `
    <div>
      <Tag color="#f50">
        #f50
      </Tag>
      <Tag color="#2db7f5">
        #2db7f5
      </Tag>
      <br><br>
      <Tag closable color="#f50">
        #f50
      </Tag>
      <Tag closable color="#2db7f5">
        #2db7f5
      </Tag>
      <br><br>
      <Tag checkable color="#f50">
        #f50
      </Tag>
      <Tag checkable closable color="#2db7f5">
        #2db7f5
      </Tag>
    </div>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked / `model` | 标签是否已选中 | - | - | `false`
type | 按钮类型 | string | `primary`, `info`, `success`, `warning`, `error` | -
size | 大小 | string | `default`, `large` | `default`
closable | 是否可以关闭 | boolean | - | `false`
checkable | 标签是否可以选择 | boolean | - | `false`
color | 自定义颜色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
children | 自定义内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮时触发 | -
change | `checked` 改变时触发 | `data.checked`