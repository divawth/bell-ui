> 基础用法

```js
export default {
  template: `
    <div>
      <Spin size="small" />
      <br><br>
      <Spin />
      <br><br>
      <Spin size="large" />
    </div>
  `
}
```

> text

```js
export default {
  template: `
    <Spin text="正在加载..." />
  `
}
```

> 设置类型

```js
export default {
  template: `
  <div>
    <Spin type="success" />
    <br><br>
    <Spin type="error" />
    <br><br>
    <Spin type="warning" />
    <br><br>
    <Spin type="info" />
  </div>
  `
}
```

> 自定义图标

```js
export default {
  template: `
  <Spin
    icon="refresh-line"
    text="加载中..."
  />
  `
}
```

> 状态切换

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div>
      <div class="bell-border demo-spin-article">
        <h3>登金陵凤凰台</h3>
        <address>李白</address>
        <article>
          <p>凤凰台上凤凰游，凤去台空江自流。</p>
          <p>吴宫花草埋幽径，晋代衣冠成古丘。</p>
          <p>三山半落青天外，二水中分白鹭洲。</p>
          <p>总为浮云能蔽日，长安不见使人愁。</p>
        </article>
        {{#if visible}}
          <Spin size="large" fixed />
        {{/if}}
      </div>
      <br>
      切换显示状态：
      <Switch model="visible" />

      <style>
        .demo-spin-article {
          position: relative;
          padding: 24px;
        }
      </style>
    </div>
  `,
  data: function () {
    return {
      visible: false
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 风格 | string | `primary`, `success`, `error`, `info`, `warning` | `primary`
size | 大小 | string | `default`, `small`, `large` | `default`
fixed | 是否固定 | boolean | - | `false`
icon | 图标 | string | - | `loader-line`
text | 文字 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
children | 内容完全自定义