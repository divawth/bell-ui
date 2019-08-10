> 概述

基本 Form 组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

> 基础用法

单个 Radio

```js
export default {
  template: `
  <div>
    <Radio value="cn" model="checked1" on-change="change()">
      中国
    </Radio>
    <Radio type="success" value="usa" model="checked2" on-change="change()">
      美国
    </Radio>
  </div>
  `,
  data: function () {
    return {
      checked1: false,
      checked2: false,
    }
  },
  watchers: {
    radio: function (value) {
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

> type 修改类型

```js
export default {
  template: `
    <div>
      <RadioGroup name="single" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="success" name="single" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="warning" name="single1" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="info" name="single2" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="error" name="single3" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
    </div>
  `,
  data: function () {
    return {
      radio: ''
    }
  }
}
```

> size 修改 大小

```js
export default {
  template: `
    <div>
      <RadioGroup size="small" name="single" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup name="single" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup size="large" name="single" model="radio">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="other">
          非中国
        </Radio>
      </RadioGroup>
    </div>
  `,
  data: function () {
    return {
      radio: ''
    }
  }
}
```

> disabled 禁用状态

```js
export default {
  template: `
  <div>
    <RadioGroup disabled type="success" name="countrydisabled" model="radio">
      <Radio checked disabled value="china">
        中国
      </Radio>
      <Radio value="other">
        非中国
      </Radio>
    </RadioGroup>
    <br>
    <RadioGroup type="warning" name="countrydisabled2" model="radio">
      <Radio value="china" checked>
        中国
      </Radio>
      <Radio value="feiChina" disabled>
        非中国
      </Radio>
    </RadioGroup>
  </div>
  `,
  data: function () {
    return {
      radio: ''
    }
  }
}
```

> vertical 垂直显示

```js
export default {
  template: `
  <RadioGroup name="single" model="radio" vertical>
    <Radio value="china" checked>
      中国
    </Radio>
    <Radio value="Am">
      非洲
    </Radio>
    <Radio value="2">
      Am
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      radio: ''
    }
  }
}
```

> 设置默认选中状态

```js
export default {
  template: `
  <RadioGroup name="single" model="radio" vertical>
    <Radio value="china" checked>
      中国
    </Radio>
    <Radio value="Am">
      非洲
    </Radio>
    <Radio value="2">
      Am
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      radio: ''
    }
  }
}
```

> 设置按钮形态

```js
export default {
  template: `
  <RadioGroup button name="single" model="country">
    <Radio value="c">
      中国
    </Radio>
    <Radio value="f">
      非洲
    </Radio>
    <Radio value="l">
      菲律宾
    </Radio>
  </RadioGroup>
  `,
  data: function () {
    return {
      country: ''
    }
  }
}
```

> 设置按钮形态下的按钮大小

```js
export default {
  template: `
  <div>
    <RadioGroup size="large" button name="country" model="value">
      <Radio value="china">
        中国
      </Radio>
      <Radio value="feizhou">
        非洲
      </Radio>
      <Radio value="other">
        其他
      </Radio>
    </RadioGroup>
    <br><br>
    <RadioGroup button name="country" model="value">
      <Radio value="china">
        中国
      </Radio>
      <Radio value="feizhou">
        非洲
      </Radio>
      <Radio value="other">
        其他
      </Radio>
    </RadioGroup>
    <br><br>
    <RadioGroup size="small" button name="country" model="value">
      <Radio value="china">
        中国
      </Radio>
      <Radio value="feizhou">
        非洲
      </Radio>
      <Radio value="other">
        其他
      </Radio>
    </RadioGroup>
  </div>
  `,
  data: function () {
    return {
      country: ''
    }
  }
}
```

> 设置按钮形态下的风格

```js
export default {
  template: `
    <div>
      <RadioGroup button name="country" model="value">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="feizhou">
          非洲
        </Radio>
        <Radio value="other">
          其他
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="info" button name="country" model="value">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="feizhou">
          非洲
        </Radio>
        <Radio value="other">
          其他
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="success" button name="country" model="value">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="feizhou">
          非洲
        </Radio>
        <Radio value="other">
          其他
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="error" button name="country" model="value">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="feizhou">
          非洲
        </Radio>
        <Radio value="other">
          其他
        </Radio>
      </RadioGroup>
      <br><br>
      <RadioGroup type="warning" button name="country" model="value">
        <Radio value="china">
          中国
        </Radio>
        <Radio value="feizhou">
          非洲
        </Radio>
        <Radio value="other">
          其他
        </Radio>
      </RadioGroup>
    </div>
  `,
  data: function () {
    return {
      country: ''
    }
  }
}
```

> 设置按钮形态下的禁用

```js
export default {
  template: `
  <div>
    <RadioGroup button name="country" model="value" disabled>
      <Radio value="china">
        中国
      </Radio>
      <Radio value="feizhou" checked>
        非洲
      </Radio>
      <Radio value="other">
        其他
      </Radio>
    </RadioGroup>
  </div>
  `,
  data: function () {
    return {
      country: ''
    }
  }
}
```

#### API

Radio

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | value | string | - | -
disabled | 是否禁用 | boolean | - | false
checked | 是否选中 | boolean | - | false
size | 大小 | string | default, small, large | default
type | 风格 | string | primary, success, info, warning, error | primary

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | checked 发生变化时触发 | value


RadioGroup

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 当前选中 tab 的 value 值 | string | - | -
model | 选中值 | string | - | -
size | 大小 | string | default, small, large | default
type | 风格 | string | primary, success, info, warning, error | primary
disabled | 是否禁用 | boolean | - | false
checked | 是否选中 | boolean | - | false
vertical | 是否垂直排列，按钮样式下无效 | boolean | - | false
button | 按钮形式 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | value 发生变化时触发 | value

