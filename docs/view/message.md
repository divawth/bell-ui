> 概述

常用于主动操作后的反馈提示

> 基础用法

从顶部出现，1.5 秒后自动消失。

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
    <Button type="success" on-click="open()">
      Success
    </Button>
    <Button type="info" on-click="open2()">
      Info
    </Button>
    <Button type="warning" on-click="open3()">
      Warning
    </Button>
    <Button type="error" on-click="open4()">
      Error
    </Button>
  </div>
  `,

  methods: {
    open: function () {
      this.$message.success('恭喜你，这是一条成功消息');
    },
    open2: function () {
      this.$message.info('这是一条有 icon 的消息而已～');
    },
    open3: function () {
      this.$message.warning('警告哦，这是一条警告消息');
    },
    open4: function () {
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
        icon: true,
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
        icon: true,
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

API

> 通过直接调用以下方法来使用组件：

- this.$message.info(content, duration, onClose)
- this.$message.success(content, duration, onClose)
- this.$message.warning(content, duration, onClose)
- this.$message.error(content, duration, onClose)

> props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
icon | 是否显示图标 | boolean | - | false
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
top | 提示组件距离顶端的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 150

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮，或自动关闭时触发 | -

> 另外提供了全局配置方法

- this.$message.config()

> props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
top | 提示组件距离顶端的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 1500


