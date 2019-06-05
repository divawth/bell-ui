> 基础用法

```js
export default {
  template: `
    <div>
      <Spinner size="small"></Spinner>
      <br><br>
      <Spinner></Spinner>
      <br><br>
      <Spinner size="large"></Spinner>
    </div>
  `
}
```

> 设置类型

```js
export default {
  template: `
  <div>
    <Spinner type="error"></Spinner>
    <br><br>
    <Spinner type="warning"></Spinner>
    <br><br>
    <Spinner type="success"></Spinner>
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
        <Spinner size="large" fix></Spinner>
        {{/if}}
      </div>
      <br>
      切换显示状态：
      <Switch model="spinShow" onChange="{{onChange}}"></Switch>

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
      spinShow: false,
      onChange: function() {
        this.toggle('spinShow')
      }
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
