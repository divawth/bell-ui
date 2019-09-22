> 基础用法

```js
export default {
  template: `
    <div>
      <Switch model="checked" on-change="change()" />
      <p>
        {{checked}}
      </p>
    </div>
  `,
  data: function () {
    return {
      checked: true
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

> 两种大小

```js
export default {
  template: `
  <div>
    <Switch size="small" />
    <Switch />
  </div>
  `
}
```

> 修改描述

```js
export default {
  template: `
  <div>
    <Switch>
      <template slot="on">
        开
      </template>
      <template slot="off">
        关
      </template>
    </Switch>
    <Switch>
      <template slot="on">
        On
      </template>
      <template slot="off">
        Off
      </template>
    </Switch>
  </div>
  `
}
```

> 选中状态

```js
export default {
  template: `
    <Switch checked />
  `
}
```

> 禁用状态

```js
export default {
  template: `
    <div>
      <Switch disabled />
      <Switch disabled checked />
    </div>
  `
}
```

> loading

```js
export default {
  template: `
    <div>
      <Switch loading size="small" />
      <Switch loading size="small" checked />
      <br><br>
      <Switch loading />
      <Switch loading checked />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked / `model` | 是否选中 | boolean | - | `false`
size | 大小 | string | `default`, `small` | `default`
disabled | 是否禁用 | boolean | - | `false`
loading | 是否正在加载 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
on | 选中时的内容
off | 未选中时的内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | `checked` 变化后触发 | `data.checked`
