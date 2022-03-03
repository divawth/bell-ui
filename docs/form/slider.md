> 基础用法

```js
export default {
  template: `
  <div style="padding-top: 50px">
    <Slider model="value1" />
    <Slider model="value2" />
    <p>
      value1: {{value1}}
    </p>
    <p>
      value2: {{value2}}
    </p>
  </div>
  `,
  data: function () {
    return {
      value1: 10,
      value2: [10, 100]
    }
  }
}
```

> 禁用

```js
export default {
  template: `
  <div style="padding-top: 50px">
    <Slider disabled model="value1" />
    <Slider disabled model="value2" />
  </div>
  `,
  data: function () {
    return {
      value1: 10,
      value2: [10, 100]
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
      model="value1"
      min="10"
      max="90"
      step="10"
    />
    <Slider
      model="value2"
      min="10"
      max="90"
      step="10"
    />
  </div>
  `,
  data: function () {
    return {
      value1: 50,
      value2: [20, 80]
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
      model="value1"
      min="10"
      max="90"
      step="10"
      showStops
    />
    <Slider
      model="value2"
      min="10"
      max="90"
      step="10"
      showStops
    />
  </div>
  `,
  data: function () {
    return {
      value1: 50,
      value2: [20, 80]
    }
  }
}
```

> 显示 tooltip

```js
export default {
  template: `
  <div style="padding-top: 50px">
    <Slider
      model="value1"
      min="10"
      max="90"
      step="10"
      showStops
      showTooltip
    />
    <Slider
      model="value2"
      min="10"
      max="90"
      step="10"
      showStops
      showTooltip
    />
  </div>
  `,
  data: function () {
    return {
      value1: 50,
      value2: [20, 80]
    }
  }
}
```

> 格式化 tooltip

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
      showTooltip
      formatTooltip="{{formatTooltip}}"
    />
  </div>
  `,
  data: function () {
    return {
      value: 50,
      formatTooltip: function (value) {
        return '音量: ' + value
      }
    }
  }
}
```

> 垂直滑块

```js
export default {
  template: `
  <div>
    <Slider
      model="value1"
      min="10"
      max="90"
      step="10"
      vertical
      showStops
      showTooltip
    />
    <Slider
      model="value2"
      min="10"
      max="90"
      step="10"
      vertical
      showStops
      showTooltip
    />
  </div>
  `,
  data: function () {
    return {
      value1: 50,
      value2: [20, 80]
    }
  }
}
```

> 反向

```js
export default {
  template: `
  <div>
    <Slider
      model="value1"
      min="10"
      max="90"
      step="10"
      reverse
      showStops
      showTooltip
    />
    <Slider
      model="value2"
      min="10"
      max="90"
      step="10"
      reverse
      vertical
      showStops
      showTooltip
    />
  </div>
  `,
  data: function () {
    return {
      value1: 50,
      value2: [20, 80]
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 滑块选定的值 | `numeric`, `[number, number]` | - | 0
max | 最大值 | numeric | - | 100
min | 最小值 | numeric | - | 0
step | 步长 | numeric | - | 1
showStops | 是否显示断点 | boolean | - | -
showTooltip | 是否显示 tooltip | boolean | - | -
vertical | 是否垂直 | boolean | - | -
disabled | 是否禁用 | boolean | - | -
reverse | 是否反向 | boolean | - | -
block | 是否为块级元素 | boolean | - | -
formatTooltip | 格式化 tooltip 内容 | Function | - | -
width | 显示宽度 | numeric | - | -
height | 显示高度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -