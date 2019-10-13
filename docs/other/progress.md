> 基础用法

```js
export default {
  template: `
  <div>
    <Progress percent="25" status="success">
      25%
    </Progress>
    <br><br>
    <Progress percent="45" status="error">
      45%
    </Progress>
    <br><br>
    <Progress percent="65" status="info">
      65%
    </Progress>
    <br><br>
    <Progress percent="100" status="warning" />
  </div>
  `
}
```

> 文本在内部

```js
export default {
  template: `
  <div>
    <Progress inside thickness="18" percent="25" status="success">
      25%
    </Progress>
    <br><br>
    <Progress inside thickness="18" percent="45" status="error">
      45%
    </Progress>
    <br><br>
    <Progress inside thickness="18" percent="65" status="info">
      65%
    </Progress>
    <br><br>
    <Progress inside thickness="18" percent="100" status="warning" />
  </div>
  `
}
```

> 垂直

```js
export default {
  template: `
    <div style="height: 150px;">
      <Progress vertical percent="25" status="success">
        25%
      </Progress>
      <Progress vertical percent="45" status="error">
        45%
      </Progress>
      <Progress vertical percent="65" status="info">
        65%
      </Progress>
      <Progress vertical percent="100" status="warning" />
      <style>
        .bell-progress-vertical {
          width: 50px;
        }
      </style>
    </div>
  `
}
```

> 动画

```js
export default {
  template: `
    <div style="height: 150px;">
      <Progress active percent="50" status="success">
        25%
      </Progress>
      <Progress active vertical percent="50" status="success">
        25%
      </Progress>
    </div>
  `
}
```

> 外部控制

```js
export default {
  template: `
  <div>
    <Progress
      percent="{{percent}}"
      {{#if percent == 100}}
        status="success"
      {{else}}
        status="info"
      {{/if}}
    >
      {{#if percent === 100}}
        <Icon
          name="checkbox-circle-fill"
          size="14"
          style="color:#5cb85c"
        />
      {{else}}
        <span>
          {{percent}}%
        </span>
      {{/if}}
    </Progress>
    <br><br>
    <Button on-click="add()">
      <Icon name="add-line" />
    </Button>
    <Button on-click="minus()">
      <Icon name="subtract-line" />
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

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
status | 类型 | string | `info`, `warning`, `success`, `error` | -
percent | 百分比，取值范围 `0-100` | numeric | - | `0`
thickness | 进度环的粗细 | numeric | - | `8`
inside | 内容是否显示在内部 | boolean | - | `false`
vertical | 是否是垂直进度条 | boolean | - | `false`
active | 是否有动画效果 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -
