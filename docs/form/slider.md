> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div style="padding-top: 50px">
    <Slider model="value" />
    <br><br>
    <Slider model="value" disabled />
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

> 最大值、最小值、步长

```js
export default {
  template: `
  <div style="padding-top: 50px">
    <Slider
      model="value"
      min="10"
      max="90"
      step="10"
    />
  </div>
  `,
  data: function () {
    return {
      value: 50
    }
  }
}
```

> 显示断点

```js
export default {
  template: `
  <div style="padding-top: 50px">
    <Slider
      model="value"
      min="10"
      max="90"
      step="10"
      showStops
    />
  </div>
  `,
  data: function () {
    return {
      value: 50
    }
  }
}
```

> 垂直滑块

```js
export default {
  template: `
  <div style="padding-top: 50px;height: 200px;">
    <Slider
      model="value"
      min="10"
      max="90"
      step="10"
      vertical
    />
  </div>
  `,
  data: function () {
    return {
      value: 50
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 滑块选定的值 | numeric | - | 0
max | 最大值 | numeric | - | 100
min | 最小值 | numeric | - | 0
step | 步长 | numeric | - | 1
showStops | 是否显示断点 | boolean | - | `false`
vertical | 是否垂直 | boolean | - | `false`
disabled | 是否禁用 | boolean | - | `false`

