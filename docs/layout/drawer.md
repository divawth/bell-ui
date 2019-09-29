> 基础抽屉

基础抽屉，点击触发按钮抽屉从左侧滑出，点击遮罩区关闭。

```js
export default {
  template: `
    <div>
      <Button on-click="set('visible', true)" type="primary">
        Open
      </Button>
      <Drawer closable model="visible">
        <template slot="title">
          Basic Drawer
        </template>
        <template slot="content">
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </template>
      </Drawer>
    </div>
  `,
  data: function () {
    return {
      visible: false
    }
  },
  events: {
    open: function () {
      console.log('open')
    },
    opened: function () {
      console.log('opened')
    },
    close: function () {
      console.log('close')
    },
    closed: function () {
      console.log('closed')
    }
  }
}
```

> 自定义位置

自定义位置，点击触发按钮抽屉从相应的位置滑出，点击遮罩区关闭。

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div>
    <RadioGroup name="pos" model="placement">
      <Radio value="left" checked>
        左侧
      </Radio>
      <Radio value="right">
        右侧
      </Radio>
      <Radio value="top">
        上方
      </Radio>
      <Radio value="bottom">
        下方
      </Radio>
    </RadioGroup>
    <br><br>
    <Button style="margin-top: 15px;" type="primary" on-click="open()">
      toggle drawer
    </Button>
    <Drawer
      placement="{{placement}}"
      closable
      model="visible"
      width="300"
      height="300"
    >
      <template slot="title">
        Basic Drawer
      </template>
      <template slot="content">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </template>
    </Drawer>
  </div>
  `,
  data: function () {
    return {
      placement: 'left',
      visible: false
    }
  },
  methods: {
    change: function (event, data) {
      console.log(data.checked);
    },
    open: function () {
      this.set({
        visible: true
      })
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
visible / `model` | 抽屉是否显示 | boolean | - | `false`
width | 抽屉宽度，当 `placement` 为 `left` 或 `right` 时生效 | numeric | - | `256`
height | 抽屉高度，当 `placement` 为 `top` 或 `bottom` 时生效 | numeric | - | `256`
closable | 是否显示右上角的关闭按钮 | boolean | - | `true`
mask | 是否显示遮罩层 | boolean | - | `true`
maskClosable | 是否允许点击遮罩层关闭 | boolean | - | `true`
placement | 显示抽屉的方位 | string | `left`, `right`, `top`, `bottom` | `left`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
title | 标题
content | 内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
open | 打开时触发 | -
opened | 打开动画结束后触发 | -
close | 关闭时触发 | -
closed | 关闭动画结束后触发 | -
