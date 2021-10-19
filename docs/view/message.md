> 概述

常用于主动操作后的反馈提示

> 基础用法

从顶部出现，2.5 秒后自动消失。

```js
export default {
  template: `
  <div>
    <Button on-click="open()">
      click me!
    </Button>
  </div>
  `,
  methods: {
    open: function () {
      this.$message.success('恭喜你，这是一条成功消息')
    }
  }
}
```

> 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

```js
export default {
  template: `
  <div>
    <Button type="success" on-click="success()">
      Success
    </Button>
    <Button type="info" on-click="info()">
      Info
    </Button>
    <Button type="warning" on-click="warning()">
      Warning
    </Button>
    <Button type="error" on-click="error()">
      Error
    </Button>
  </div>
  `,

  methods: {
    success: function () {
      this.$message.success('恭喜你，这是一条成功消息');
    },
    info: function () {
      this.$message.info('这是一条有 icon 的消息而已～');
    },
    warning: function () {
      this.$message.warning('警告哦，这是一条警告消息');
    },
    error: function () {
      this.$message.error('A 不想和 B 说话，并且向它抛出了一个异常')
    }
  }
}
```

> 可关闭

可以添加关闭按钮。

```js
export default {
  template: `
  <div>
    <Button on-click="open()">
      Click me!
    </Button>
  </div>
  `,
  methods: {
    open: function () {
      this.$message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        closable: true
      })
    }
  }
}
```

> 设置显示时长

设置显示时长为 10s

```js
export default {
  template: `
  <div>
    <Button on-click="open()">
      Click me!
    </Button>
  </div>
  `,
  methods: {
    open: function () {
      this.$message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        duration: 10000
      })
    }
  }
}
```

> 设置提示组件距离顶端的距离

设置提示组件距离顶端的距离为 100px

```js
export default {
  template: `
  <div>
    <Button on-click="open()">
      Click me!
    </Button>
  </div>
  `,
  methods: {
    open: function () {
      this.$message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        top: 100
      })
    }
  }
}
```

> 全局配置

```js
export default {
  template: `
  <div>
    <Button on-click="open()">
      Click me!
    </Button>
  </div>
  `,
  methods: {
    open: function () {
      this.$message.config({
        top: 50,
        duration: 13000
      });
      this.$message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        closable: true,
        onClose: function () {
          console.log('close')
        }
      })
    }
  }
}
```

# API

> 通过直接调用以下方法来使用组件：

- this.$message.info(content, onClose)
- this.$message.success(content, onClose)
- this.$message.warning(content, onClose)
- this.$message.error(content, onClose)

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
closable | 是否显示关闭按钮 | boolean | - | -
center | 文字是否居中 | boolean | - | -
top | 提示组件距离顶端的距离，单位像素 | number | - | `15`
duration | 默认自动关闭的延时，单位毫秒 | number | - | `2000`
onClose | 关闭时调用 | Function | - | -

> 另外提供了全局配置方法

- this.$message.config(data)

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
top | 提示组件距离顶端的距离，单位像素 | number | - | `15`
duration | 默认自动关闭的延时，单位毫秒 | number | - | `2000`


