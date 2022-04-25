#### ColorPicker 颜色选择器

> 基本用法

```js
export default {
  template: `
    <ColorPicker
      model="color"
    />
  `,
  data: {
    color: '#ff0000'
  }
}
```

> block

```js
export default {
  template: `
    <ColorPicker
      block
    />
  `,
}
```

> 禁用

```js
export default {
  template: `
    <ColorPicker
      disabled
    />
  `,
}
```

> 状态

```js
export default {
  template: `
    <div>
      <ColorPicker
        status="info"
      />
      <br><br>
      <ColorPicker
        status="warning"
      />
      <br><br>
      <ColorPicker
        status="success"
      />
      <br><br>
      <ColorPicker
        status="error"
      />
    </div>
  `
}
```

> 显示透明度

```js
export default {
  template: `
    <ColorPicker
      showAlpha
    />
  `,
}
```

> 尺寸

```js
export default {
  template: `
    <div>
      <ColorPicker size="small" />
      <br><br>
      <ColorPicker />
      <br><br>
      <ColorPicker size="large" />
    </div>
  `
}
```


> 色彩模式

```js
export default {
  template: `
    <ColorPicker
      showAlpha
      modes="{{['hex', 'rgb']}}"
    />
  `
}
```

> 色卡

```js
export default {
  template: `
    <ColorPicker
      showAlpha
      swatches="{{[
        '#FFFFFF',
        '#18A058',
        '#2080F0',
        '#F0A020',
        'rgba(208, 48, 80, 0.5)'
      ]}}"
    />
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | `default`, `small`, `large` | `default`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
placement | 颜色选择器出现的位置 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom-start`
disabled | 禁用后无法再选择 | boolean | - | -
block | 是否为块级元素 | boolean | - | -
showAlpha | 是否显示透明度 | boolean | - | -
defaultValue | 默认选择的颜色 | string | - | -
modes | 色彩模式，近支持 `hex` 和 `rgb` | string[] | - | -
swatches | 色卡 | string[] | - | -
width | 宽度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 颜色改变之后的回调 | 选中的颜色