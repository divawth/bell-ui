> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
  <Article
    title="这是标题"
    subTitle="这是副标题"
    signature="2019-11-11"
    showLink
    on-link="click()"
  >
    <template slot="cover">
      <img src="https://static001.geekbang.org/resource/image/b6/dc/b6054ee4f5c6a70df306edb0159f12dc.jpg">
    </template>

    <template slot="content">

      <blockquote>
        据日媒报道，15日上午，日本外务省亚洲大洋洲局局长泷崎成树与韩国外交部亚洲太平洋局局长金丁汉在位于东京的日本外务省，举行了大约2个半小时的磋商。磋商结束后，日本外务省官员透露，双方进行了意见交换，但未取得大的进展。
      </blockquote>

      <p>据日媒报道，15日上午，日本外务省亚洲大洋洲局局长泷崎成树与韩国外交部亚洲太平洋局局长金丁汉在位于东京的日本外务省，举行了大约2个半小时的磋商。磋商结束后，日本外务省官员透露，双方进行了意见交换，但未取得大的进展。</p>

      <img src="//inews.gtimg.com/newsapp_bt/0/10823367015/1000">
      <img src="//inews.gtimg.com/newsapp_bt/0/10823367015/1000">

      <p>报道称，日方在本次磋商中，再次就太平洋战争期间征用劳工的问题表达日方立场。另外，鉴于若韩国执意不再续签《日韩军事情报保护协定》，该协定将于本月23日失效，双方还就安全保障方面的问题交换了意见。</p><p>据报道，金丁汉在走进日本外务省时对记者团说，“希望能够开诚布公地就双方所关注的问题展开广泛的交流”。</p>

      <p>据称，日本政府认为，韩国做出不再续签《日韩军事情报保护协定》的决定是完全错误的举措。对此，韩国政府则一直保持以下立场，即日本如果撤回加强对韩国出口管理的决定，韩方就愿意考虑续签《日韩军事情报保护协定》。</p><p>磋商结束之后，日本外务省干部对记者团说，“双方进行了有意义的意见交换，但并没有取得大的进展”。</p>

    </template>
  </Article>
  `,
  methods: {
    click() {
      console.log('click')
    }
  }
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题 | string | - | -
subTitle | 内容 | string | - | -
signature | 落款签名 | string | - | -
showLink | 是否显示链接图标 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
cover | 文章封面图
content | 文章内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
link | 点击链接图标时触发 | -