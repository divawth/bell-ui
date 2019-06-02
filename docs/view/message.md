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
      this.$Message.success('恭喜你，这是一条成功消息')
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
      this.$Message.success('恭喜你，这是一条成功消息');
    },
    open2: function () {
      this.$Message.info('这是一条有 icon 的消息而已～');
    },
    open3: function () {
      this.$Message.warning('警告哦，这是一条警告消息');
    },
    open4: function () {
      this.$Message.error('Tiva 不想和 佳路 说话，并且向它抛出了一个异常')
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
      this.$Message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        closable: true
      })
    }
  }
}
```

> 设置关闭文本

设置关闭文本为 Close me!

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
      this.$Message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        showIcon: true,
        closable: true,
        closeText: 'Close me!'
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
      this.$Message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        showIcon: true,
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
      this.$Message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        showIcon: true,
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
      this.$Message.config({
        top: 50,
        duration: 13000
      });
      this.$Message.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        closable: true,
        closeText: 'Close me!',
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

- this.$Message.info(content, duration, onClose)
- this.$Message.success(content, duration, onClose)
- this.$Message.warning(content, duration, onClose)
- this.$Message.error(content, duration, onClose)

> props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
showIcon | 是否显示图标 | boolean | - | false
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
closeText | 关闭按钮自定义文本 | string | - | -
top | 提示组件距离顶端的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 150

> Events

事件名称 | 说明 | 回调参数
---|---|---
onClose | 关闭时触发的事件 | -

> 另外提供了全局配置方法

- this.$Message.config()

> props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
top | 提示组件距离顶端的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 150


