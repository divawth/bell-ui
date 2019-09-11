> 基础用法

```js
export default {
  template: `
    <Rate />
  `
}
```

> 风格

```js
export default {
  template: `
    <div>
      <Rate />
      <br><br>
      <Rate value="1" type="primary" />
      <br><br>
      <Rate value="2" type="info" />
      <br><br>
      <Rate value="3" type="success" />
      <br><br>
      <Rate value="4" type="error" />
      <br><br>
    </div>
  `
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

> 提示文字

```js
export default {
  template: `
    <Rate texts="{{texts}}" />
  `,
  data () {
    return {
      texts: [ '一般', '还行', '太棒了', '还好了', '666' ]
    }
  }
}
```

> 自定义提示内容

```js
export default {
  template: `
    <Rate model="value" on-change="change()">
      <span style="color: #f5a623">
        {{ value }} 分
      </span>
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

> 只读状态

```js
export default {
  template: `
    <Rate readOnly model="value" />
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
    <div>
      <Rate icon="heart" />
      <br><br>
      <Rate icon="heart" half />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / model | 当前 star 数 | number | - | 0
count | star 总数 | number | - | 5
half | 是否允许半选 | boolean | - | false
readOnly | 是否只读 | boolean | - | false
icon | 使用图标 | string | - | star
size | 图标尺寸 | numeric | - | 18
type | 风格 | string | primary, info, warning, success, error | warning
texts | 提示文字组 | string[] | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 分值改变时触发 | -
