> 基础用法

```js
export default {
  template: `
    <div>
      <Switch model="checked" />
      <p>
        {{checked}}
      </p>
    </div>
  `,
  data: function () {
    return {
      checked: true
    }
  }
}
```

> 状态

```js
export default {
  template: `
    <div>
      <Switch checked status="info" />
      <Switch checked status="success" />
      <Switch checked status="warning" />
      <Switch checked status="error" />
    </div>
  `
}
```

> 两种尺寸

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
        开开开开
      </template>
      <template slot="off">
        关关关关
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
      <Switch disabled="{{disabled}}" />
      <Switch status="info" disabled="{{disabled}}" />
      <Switch status="success" disabled="{{disabled}}" />
      <Switch status="warning" disabled="{{disabled}}" />
      <Switch status="error" disabled="{{disabled}}" />
      <br><br>
      <Button type="primary" on-click="toggle('disabled')">
        {{disabled ? 'Enable' : 'Disable'}}
      </Button>
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
      <br>
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
checked / model | 是否选中 | boolean | - | `false`
size | 大小 | string | `default`, `small` | `default`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
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
change | 选中状态变化后触发 | data.checked
