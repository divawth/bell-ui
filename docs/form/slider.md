> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div style="margin: 30px;">
    <Slider model="value" />
    <Slider model="value" disabled></Slider>
    <p>{{ value }}</p>
  </div>
  `,
  data: function () {
    return {
      value: 10
    }
  }
}
```

> 设置最大最小值和步长

```js
export default {
  template: `
  <div style="margin: 30px;">
    <Slider model="value2" min="{{60}}" max="{{100}}" step="{{10}}" />
  </div>
  `,
  data: function () {
    return {
      value2: 10
    }
  }
}
```

> 设置type

```js
export default {
  template: `
  <div>
    <Slider model="value2" type="error" />
    <Slider model="value2" type="warning" />
    <Slider model="value2" type="info" />
    <Slider model="value2" type="success" />
  </div>
  `,
  data: function () {
    return {
      value2: 20
    }
  }
}
```

> 和其他组件一起使用

```js
export default {
  template: `
  <div style="margin-top: 30px;">
    <InputNumber model="value"
      type="text"
      placeholder="请输入..."
      style="margin-bottom: 10px;"
    >
      <template slot="prepend">
        <span>输入 percent:</span>
      </template>
      <template slot="append">
        <span>%</span>
      </template>
    </InputNumber>
    <Slider model="value" on-change="change()" />
  </div>
  `,
  methods: {
    change: function (event, data) {
      console.log(data)
    }
  },
  data: function () {
    return {
      value: 10
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 滑块选定的值 | number | - | -
max | 最大值 | number | - | -
min | 最小值 | number | - | -
step | 步长 | number | - | 1
disabled | 是否禁用 | boolean | - | false
type | 类型 | string | - | -

> Slider events

方法 | 说明 | 参数
---|---|--- 
dragStart | 开始拖拽时回调 | -
dragStop | 结束拖拽时回调 | -
change | 值改变时回调 | percent
