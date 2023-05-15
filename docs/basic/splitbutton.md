> 基础演示

```js
export default {
  template: `
    <SplitButton
      menu="{{menu}}"
      on-click="handleClick()"
      on-select="handleSelect()"
    >
      Button
    </SplitButton>
  `,
  data: {
    menu: [
      { text: '创建' },
      { text: '删除', disabled: true },
      { text: '删除', onClick() { alert('delete') }}
    ]
  },
  methods: {
    handleClick() {
      console.log('点击主按钮')
    },
    handleSelect(event, data) {
      console.log(`点击第${data.index}个菜单项`, data.item)
    }
  }
}
```

> 按钮类型

```js
export default {
  template: `
    <div>
      <SplitButton type="primary" menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton type="success" menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton type="error" menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton type="info" menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton type="warning" menu="{{menu}}">
        Button
      </SplitButton>
    </div>
  `,
  data: {
    menu: [
      { text: '创建' },
      { text: '删除', disabled: true },
    ]
  }
}
```

> 按钮大小

```js
export default {
  template: `
    <div>
      <SplitButton size="small" menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton menu="{{menu}}">
        Button
      </SplitButton>
      <br><br>
      <SplitButton size="large" menu="{{menu}}">
        Button
      </SplitButton>
    </div>
  `,
  data: {
    menu: [
      { text: '创建' },
      { text: '删除', disabled: true },
    ]
  }
}
```

> 菜单对齐方式

```js
export default {
  template: `
    <div>
      <SplitButton menu="{{menu}}" placement="bottom-start">
        Button
      </SplitButton>
    </div>
  `,
  data: {
    menu: [
      { text: '创建' },
      { text: '修改' },
      { text: '删除' },
    ]
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | `primary`, `info`, `success`, `warning`, `error` | -
size | 按钮大小 | string | `default`, `large`, `small` | `default`
placement | 菜单显示方位 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom-end`
menu | 菜单数据 | array | - | -
loading |  是否为正在加载状态 | boolean | - | -
disabled | 是否为禁用状态 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮时触发 | -
select | 点击菜单项时触发 | `{index: 0, item: {}}`

> Slots

参数 | 说明
---|---
children | 主按钮内容
