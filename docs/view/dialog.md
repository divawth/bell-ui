> 基础用法

```js
export default {
  template: `
    <div>
      <Button on-click="open()">
        Open
      </Button>
      <Button on-click="destrory()">
        Destroy
      </Button>
      <Dialog
        ref="dialog"
        model="visible"
      >

        <template slot="title">
          标题
        </template>

        <template slot="content">
          内容
        </template>

        <template slot="footer">
          <Button on-click="close()">
            取消
          </Button>
          <Button on-click="close()" type="primary">
            确定
          </Button>
        </template>

      </Dialog>
    </div>
  `,
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
  },
  methods: {
    destrory: function () {
      if (this.$refs.dialog) {
        this.$refs.dialog.destroy()
      }
    },
    open: function () {
      this.set({
        visible: true
      })
    },
    close: function () {
      this.set({
        visible: false
      })
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
visible / `model` | 是否显示对话框 | boolean | - | -
showMask | 是否显示遮罩 | boolean | - | `true`
closable | 是否展示关闭按钮 | boolean | - | `true`
maskClosable | 点击遮罩是否关闭对话框 | boolean | - | `true`
width | 显示宽度 | numeric | - | `500`
height | 显示高度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
title | 标题
content | 内容
footer | 底部的内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
open | 打开时触发 | -
opened | 打开动画结束后触发 | -
close | 关闭时触发 | -
closed | 关闭动画结束后触发 | -