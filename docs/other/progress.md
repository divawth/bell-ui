> 基础用法

```js
export default {
  template: `
  <div>
    <Progress active percent="{{25}}"> 25%</Progress>
    <Progress percent="{{45}}" type="danger">45%</Progress>
    <Progress percent="{{65}}" type="success">65%</Progress>
    <Progress percent="{{100}}">100%</Progress>
    <Progress percent="{{25}}" hideInfo>25%</Progress>
  </div>
  `
}
```

> 垂直方向

```js
export default {
  template: `
    <div style="height: 100px;">
      <Progress vertical active percent="{{25}}"> 25%</Progress>
      <Progress vertical percent="{{45}}" type="danger">45%</Progress>
      <Progress vertical percent="{{65}}" type="success">65%</Progress>
      <Progress vertical percent="{{100}}">100%</Progress>
      <Progress vertical percent="{{25}}" hideInfo>25%</Progress>
      <style>
        .bell-progress-vertical {
          width: 100px;
        }
      </style>
    </div>
  `
}
```

> 配合外部组件使用

```js
export default {
  template: `
  <div>
    <Progress percent="{{percent}}"
    {{#if percent == 100}}
      type="success"
    {{else}}
      type="primary"
    {{/if}}
    strokeLinecap="round">
      {{#if percent == 100}}
        <Icon type="checkmark-circled" style="color:#5cb85c" />
        <span style="margin-left: 10px;">成功</span>
      {{else}}
        <span style="font-size:12px">
          {{ percent }}%
        </span>
      {{/if}}
    </Progress>

    <Button on-click="add()">
      <Icon name="add" />
    </Button>
    <Button on-click="minus()">
      <Icon name="remove" />
    </Button>
  </div>
  `,
  data: {
    percent: 30
  },
  methods: {
    add: function () {
      this.increase('percent', 10, 100)
    },

    minus: function () {
      this.decrease('percent', 10, 0)
    }
  }
}
```

> 自定义

```js
export default {
  template: `
    <div style="height: 100px;">
      <Progress percent="{{25}}" thickness="5">25</Progress>
      <Progress percent="{{100}}" type="success" active>
        <Icon type="checkmark-circled" />
        <span style="margin-left: 10px;">成功</span>
      </Progress>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
percent | 百分比 | number | 0 | 0
type | 类型 | string | - | -
thickness | 进度环的粗细 | number | 6 | 6
hideInfo | 隐藏数值或状态图标 | boolean | - | false
vertical | 是否在垂直方向显示 | boolean | - | false
active | active | boolean | - | false
