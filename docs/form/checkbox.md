#### checkbox

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

> 基础用法

```js
export default {
  template: `
    <div>
      <Checkbox model="checked" on-change="change()">
        Checkbox
      </Checkbox>
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
  methods: {
    change: function (event, data) {
      console.log(event, data)
    }
  }
}
```


> CheckboxGroup 组用法

```js
export default {
  template: `
    <div>
      <CheckboxGroup model="social" on-change="change()">
        <Checkbox value="twitter">
          Twitter
        </Checkbox>
        <Checkbox value="facebook">
          Facebook
        </Checkbox>
        <Checkbox value="github">
          Github
        </Checkbox>
        <Checkbox value="google">
          Google
        </Checkbox>
        <Checkbox value="microsoft">
          Microsoft
        </Checkbox>
      </CheckboxGroup>
      <p>
        {{social}}
      </p>
    </div>
  `,
  data: function () {
    return {
      social: [ ]
    }
  },
  methods: {
    change: function (event, data) {
      console.log(event, data)
    }
  }
}
```

> 禁用状态

```js
export default {
  template: `
    <div>
      <Checkbox model="single" disabled>
        Checkbox
      </Checkbox>
      <br><br>
      <CheckboxGroup model="group">
        <Checkbox value="1" disabled>
          香蕉
        </Checkbox>
        <Checkbox value="2" disabled>
          苹果
        </Checkbox>
        <Checkbox value="3">
          西瓜
        </Checkbox>
      </CheckboxGroup>
    </div>
  `,
  data () {
    return {
      single: true,
      group: ['1']
    }
  }
}
```

> indeterminate

```js
export default {
  template: `
  <div>
    <Checkbox>
      全选
    </Checkbox>
    <Checkbox indeterminate>
      全选
    </Checkbox>
    <Checkbox checked>
      全选
    </Checkbox>
  </div>
  `
}
```

> vertical

```js
export default {
  template: `
    <div>
      <CheckboxGroup model="social" vertical>
        <Checkbox value="twitter">
          Twitter
        </Checkbox>
        <Checkbox value="facebook">
          Facebook
        </Checkbox>
        <Checkbox value="github">
          Github
        </Checkbox>
      </CheckboxGroup>
      <p>
        {{social}}
      </p>
    </div>
  `,
  data: function () {
    return {
      social: [  ]
    }
  }
}
```

#### API

Checkbox

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked / `model` | 只在单独使用时有效 | boolean | - | -
label | 标签文本 | string | - | -
value | value | string | - | -
disabled | 是否禁用 | boolean | - | -
indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | `checked` 变化的时候回调 | `{checked: '', value: ''}`


CheckboxGroup

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 选中的项 | string[] | - | -
disabled | 是否禁用 | boolean | - | -
vertical | 是否垂直排列 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -
