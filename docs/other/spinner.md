> 基础用法

```js
export default {
  template: `
    <div>
      <Spinner size="small" />
      <br><br>
      <Spinner />
      <br><br>
      <Spinner size="large" />
    </div>
  `
}
```

> 设置类型

```js
export default {
  template: `
  <div>
    <Spinner type="error" />
    <br><br>
    <Spinner type="warning" />
    <br><br>
    <Spinner type="success" />
  </div>
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
        {{#if spinShow}}
        <Spinner size="large" fix />
        {{/if}}
      </div>
      <br>
      切换显示状态：
      <Switch model="spinShow" />

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
      spinShow: false
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, tiny | -
text | 文字 | string | - | -
fix | 是否固定 | string | - | -
type | 风格 | string | circle, - | -
