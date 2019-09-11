> 基础用法

```js
export default {
  template: `
    <div>
      <Button on-click="openDialog()">Open</Button>
      <Button on-click="destroryDialog()">Destroy</Button>
      <Dialog ref="dialog" model="visible">
        <div>
          这里是弹框的内容呀
        </div>
        <template slot="actions">
          <Button on-click="closeDialog()" type="info">cancel</Button>
          <Button on-click="closeDialog()" type="error">delete</Button>
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
        visible: true
      })
    },
    closeDialog: function () {
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
visible / model | 是否显示对话框 | boolean | - | false
mask | 是否显示遮罩 | boolean | - | true
closable | 是否展示关闭按钮 | boolean | - | true
maskClosable | 点击遮罩是否关闭对话框 | boolean | - | false
title | 标题栏文字 | string | - | '温馨提示'
width | 显示宽度 | number | - | 320

> Slots

名称 | 说明
---|---
title | 设置 title
actions | 设置 actions