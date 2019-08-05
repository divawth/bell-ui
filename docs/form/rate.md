> 基础用法

```js
export default {
  template: `
    <Rate />
  `
}
```

> type

```js
export default {
  template: `
    <Rate showTexts texts="{{texts}}" type="primary" />
  `,
  data () {
    return {
      texts: [ '一般', '还行', '太棒了', '还好了', '666' ]
    }
  }
}
```

> 半星

```js
export default {
  template: `
    <Rate half /> 
  `
}
```

> 设置属性 showTexts 可以显示提示文字

```js
export default {
  template: `
    <Rate showTexts model="value" on-change="change()">
      <span style="color: #f5a623">{{ value }} 分</span>
    </Rate>
  `,
  data: {
    value: 2
  },
  methods: {
    change: function (event, data) {
      console.log(data)
    }
  }
}
```

> 设置属性 readOnly 只读

```js
export default {
  template: `
    <Rate readOnly showTexts model="value">
      <span style="color: #f5a623">3 分</span>
    </Rate>
  `,
  data: function () {
    return {
      value: 3
    }
  }
}
```

> 自定义图标

```js
export default {
  template: `
    <Rate icon="heart" />
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
count | star 总数 | number | - | 5
model | 当前 star 数 | number | - | 0
half | 是否允许半选 | boolean | - | false
readOnly | 是否只读 | boolean | - | false
showTexts | 是否提示文字 | boolean | - | false
icon | 使用图标 | string | - | star
texts | 提示文字组 | array | - | -
 

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 分值改变时触发 | -
