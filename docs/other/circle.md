#### Circle 进度环

图表类组件。一般有两种用途：

- 显示某项任务进度的百分比；
- 统计某些指标的占比。


> 基础用法
圆形进度环有一系列的参数可配置，具体可以查看下面的API文档。

```js
export default {
  template: `
    <div>
      <Circle percent="80" size="100">
        <span class="demo-Circle-inner" style="font-size:24px">80%</span>
      </Circle>
      <Circle percent="80" size="100" strokeColor="#5cb85c" style="margin-left: 10px">
        <Icon name="checkmark" size="60" style="color:#5cb85c" />
      </Circle>
      <Circle percent="40" size="100" strokeColor="#ff5500" style="margin-left: 10px">
        <span class="demo-Circle-inner">
          <Icon name="close-line" size="50" style="color:#ff5500" />
        </span>
      </Circle>
    </div>
  `
}
```


> 配合外部组件使用
通过数据的联动和逻辑控制，实现交互效果。

```js
export default {
  template: `
    <div>
      <Circle percent="{{percent}}" strokeLinecap="round">
        {{#if percent == 100}}
          <Icon name="checkmark" size="{{60}}" style="color:#35D05E" />
        {{else}}
          <span style="font-size:24px">
            {{ percent }}%
          </span>
        {{/if}}
      </Circle>

      <Button on-click="add()">
        <template slot="icon">
          <Icon name="add" />
        </template>
      </Button>
      <Button on-click="minus()">
        <template slot="icon">
          <Icon name="remove" />
        </template>
      </Button>
    </div>
  `,
  data () {
    return {
      percent: 30
    }
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

> 自定义更多样式

```js
export default {
  template: `
    <Circle
      size="{{250}}"
      trailWidth="{{4}}"
      strokeWidth="{{5}}"
      percent="{{75}}"
      strokeLinecap="square"
      strokeColor="#43a3fb"
    >
      <div class="demo-Circle-custom">
        <h1>42,001,776</h1>
        <p>消费人群规模</p>
        <span>
          总占人数
          <i>75%</i>
        </span>
      </div>
    </Circle>
  `
}
```

> 仪表盘
通过设置属性 dashboard，可以很方便地实现仪表盘样式的进度环。

```js
export default {
  template: `
    <Circle percent="80" dashboard>
      <span class="demo-circle-inner" style="font-size:24px">80%</span>
    </Circle>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
percent | 百分比 | number | 0 | 0
size | 图表的宽度和高度，单位 px | number | 120 | 120
strokeLinecap | 进度环顶端的形状 | string | square（方）和 round（圆）| round
strokeWidth | 进度环的线宽 | number | 6 | 6
strokeColor | 进度环的颜色 | string | - | #2db7f5
trailWidth | 进度环背景的线宽 | number | - | -
trailColor | 进度环背景的颜色 | string | - | #eaeef2
dashboard | 是否显示为仪表盘 | boolean | - | -
