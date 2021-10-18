> 概述

基本 Form 组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

> 基础用法

单个 Radio

```js
export default {
  template: `
  <Radio value="cn" model="checked" on-change="change()">
    中国
  </Radio>
  `,
  data: function () {
    return {
      checked: false,
    }
  },
  watchers: {
    checked: function (value) {
      console.log(value)
    }
  },
  methods: {
    change: function (event, data) {
      console.log(event, data)
    }
  }
}
```

RadioGroup

```js
export default {
  template: `
  <RadioGroup name="country" model="value" on-change="change()">
    <Radio value="cn">
      中国
    </Radio>
    <Radio value="usa">
      美国
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      value: ''
    }
  },
  methods: {
    change: function (event, data) {
      console.log(data.value)
    }
  }
}
```

> 禁用状态

```js
export default {
  template: `
  <div>
    <Radio checked disabled value="china">
      中国
    </Radio>
    <Radio checked value="usa">
      美国
    </Radio>
    <br><br>
    <Radio disabled value="china">
      中国
    </Radio>
    <Radio value="usa">
      美国
    </Radio>
  </div>
  `
}
```

> 垂直显示

```js
export default {
  template: `
  <RadioGroup name="single" model="value" vertical>
    <Radio value="1">
      亚洲
    </Radio>
    <Radio value="2">
      欧洲
    </Radio>
    <Radio value="3">
      非洲
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      value: '1'
    }
  }
}
```

> 按钮形态

```js
export default {
  template: `
  <RadioGroup button name="single" model="value">
    <Radio value="1">
      亚洲
    </Radio>
    <Radio value="2">
      欧洲
    </Radio>
    <Radio value="3">
      非洲
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      value: '2'
    }
  }
}
```

> 按钮形态下的按钮大小

```js
export default {
  template: `
  <div>
    <RadioGroup size="large" button name="single" model="value">
      <Radio value="1">
        亚洲
      </Radio>
      <Radio value="2">
        欧洲
      </Radio>
      <Radio value="3">
        非洲
      </Radio>
    </RadioGroup>
    <br><br>
    <RadioGroup button name="single" model="value">
      <Radio value="1">
        亚洲
      </Radio>
      <Radio value="2">
        欧洲
      </Radio>
      <Radio value="3">
        非洲
      </Radio>
    </RadioGroup>
    <br><br>
    <RadioGroup size="small" button name="single" model="value">
      <Radio value="1">
        亚洲
      </Radio>
      <Radio value="2">
        欧洲
      </Radio>
      <Radio value="3">
        非洲
      </Radio>
    </RadioGroup>
  </div>
  `,
  data: function () {
    return {
      value: '3'
    }
  }
}
```

> 按钮形态下的禁用

```js
export default {
  template: `
  <RadioGroup button disabled name="single" model="value">
    <Radio value="1" checked>
      亚洲
    </Radio>
    <Radio value="2">
      欧洲
    </Radio>
    <Radio value="3">
      非洲
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      value: ''
    }
  }
}
```

#### API

Radio

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked / `model` | 是否选中 | boolean | - | -
label | 标签文本 | string | - | -
name | 原生属性 `name` | string | - | -
value | value | string | - | -
disabled | 是否禁用 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | `checked` 变化的时候回调 | `{checked: '', value: ''}`


RadioGroup

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 当前选中的值 | string | - | -
name | 原生属性 `name` | string | - | -
size | 大小, 按钮状态下生效 | string | `default`, `small`, `large` | `default`
disabled | 是否禁用 | boolean | - | -
vertical | 是否垂直排列，按钮样式下无效 | boolean | - | -
button | 按钮形式 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -
