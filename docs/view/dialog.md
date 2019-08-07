> 基础用法

```js
export default {
  template: `
    <div>
      <Button on-click="openDialog()">Open</Button>
      <Button on-click="destroryDialog()">Destroy</Button>
      <Dialog ref="dialog" model="open">
        <div>
          这里是弹框的内容呀
        </div>
        <template slot="actions">
          <Button on-click="closeDialog()" variants="info">cancel</Button>
          <Button on-click="closeDialog()" variants="danger">delete</Button>
        </template>
      </Dialog>
    </div>
  `,
  methods: {
    destroryDialog: function () {
      if (this.$refs.dialog) {
        this.$refs.dialog.destroy()
      }
    },
    openDialog: function () {
      this.set({
        open: true
      })
    },
    closeDialog: function () {
      this.set({
        open: false
      })
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 表示是否展示 dialog | boolean | - | false
closable | 是否展示关闭按钮 | boolean | - | true
maskClosable | 点击遮罩是否关闭 dialog | boolean | - | false

> slots

名称 | 说明
---|---
title | 设置 title
actions | 设置 actions