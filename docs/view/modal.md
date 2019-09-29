从场景上说，Modal 的作用是美化系统自带的 alert、confirm 因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。

> Alert 的基本用法

```js
export default {
  template: `
    <Button type="primary" on-click="open()">
      Alert
    </Button>
  `,
  methods: {
    open: function () {
      this.$alert('这是一段内容')
    }
  }
}
```

> Alert 配置项

```js
export default {
  template: `
    <Button type="primary" on-click="open()">
      Alert
    </Button>
  `,
  methods: {
    open: function () {
      this.$alert({
        title: '标题名称',
        content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
        closable: true,
        width: 500,
        okText: 'OK',
        okType: 'error',
        onOk: function () {
          console.log('ok')
        }
      })
    }
  }
}
```

> Confirm 的基本用法

```js
export default {
  template: `
    <Button type="primary" on-click="open()">
      Confirm
    </Button>
  `,
  methods: {
    open: function () {
      this.$confirm('这是一段内容')
    }
  }
}
```

> Confirm 配置项

```js
export default {
  template: `
    <Button type="primary" on-click="open()">
      Confirm
    </Button>
  `,
  methods: {
    open: function () {
      this.$confirm({
        title: '标题名称',
        content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
        closable: true,
        width: 500,
        okText: 'OK',
        okType: 'success',
        onOk: function () {
          console.log('ok')
        },
        cancelText: 'Cancel',
        cancelType: 'error',
        onCancel: function () {
          console.log('cancel')
        }
      })
    }
  }
}
```
