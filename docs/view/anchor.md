#### Anchor 锚点

用于跳转到页面指定位置。

#### Basic Usage

```js
export default {
  template: `
    <div>
      <Anchor show-ink affix>
        <AnchorLink href="#/view/anchor?id=basic-usage" title="Basic Usage" />
        <AnchorLink href="#/view/anchor?id=api" title="API">
          <AnchorLink href="#/view/anchor?id=anchor-props" title="Anchor Props" />
          <AnchorLink href="#/view/anchor?id=anchor-events" title="Anchor Events" />
          <AnchorLink href="#/view/anchor?id=anchor-slots" title="Anchor Slots" />
        </AnchorLink>
      </Anchor>
    </div>
  `
}
```



#### API

##### Anchor Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
affix | 固定模式 | boolean | - | true
offsetTop | 距离窗口顶部达到指定偏移量后触发 | number | - | 0
offsetBottom | 距离窗口底部达到指定偏移量后触发 | number | - | -
bounds | 锚点区域边界，单位：px | number | - | 5
container | 指定滚动的容器 | string | - | -
showInk | 是否显示小圆点 | boolean | - | false

##### Anchor Events

事件名称 | 说明 | 回调参数
---|---|---
select | 关闭 alert 时触发的事件 | -

##### Anchor Slots

名称 | 说明
---|---
icon | 设置提示 icon
close | 设置关闭模板

##### AnchorLink_Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
href | 固定模式 | boolean | - | true
title
scrollOffset