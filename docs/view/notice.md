> 概述

悬浮出现在页面角落，显示全局的通知提醒消息。常用于以下场景：

- 通知内容带有描述信息
- 系统主动推送

> 基础用法

从右侧出现，4.5 秒后自动消失。

```js
export default {
  template: `
    <div>
      <Button on-click="open()">
        提醒
      </Button>
      <Button on-click="open1()">
        提醒（仅标题）
      </Button>
    </div>
  `,
  methods: {
    open: function () {
      this.$notice.success({
        title: '这是标题这是标题这是标题',
        content: '这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息',
        width: 320
      })
    },
    open1: function () {
      this.$notice.success({
        title: '这是标题这是标题这是标题',
        width: 320
      })
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
      Succ
    </Button>
    <Button type="info" on-click="open2()">
      info
    </Button>
    <Button type="warning" on-click="open3()">
      warn
    </Button>
    <Button type="error" on-click="open4()">
      error
    </Button>
  </div>
  `,

  methods: {
    open: function () {
      this.$notice.success({
        title: '这是标题这是标题这是标题',
        content: '这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息',
        width: 320
      })
    },
    open2: function () {
      this.$notice.info({
        title: '这是标题这是标题这是标题',
        content: '这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息',
        width: 320
      })
    },
    open3: function () {
      this.$notice.warning({
        title: '这是标题这是标题这是标题',
        content: '这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息',
        width: 320
      })
    },
    open4: function () {
      this.$notice.error({
        title: '这是标题这是标题这是标题',
        content: '这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息这是消息消息',
        width: 320
      })
    }
  }
}
```

> 可关闭

duration 为 0 的时候出现关闭按钮

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
      this.$notice.error({
        title: '对方不想和你说话，并且向你抛出了一个异常',
        duration: 0,
        width: 330
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
      this.$notice.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        duration: 10000
      })
    }
  }
}
```

> 设置提示组件距离右侧的距离

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
      this.$notice.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
        right: 100
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
      this.$notice.config({
        right: 50,
        duration: 13000
      });
      this.$notice.error({
        content: '对方不想和你说话，并且向你抛出了一个异常',
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

- this.$notice.info(content, duration, onClose)
- this.$notice.success(content, duration, onClose)
- this.$notice.warning(content, duration, onClose)
- this.$notice.error(content, duration, onClose)

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
title | 自定义标题 | string | - | -
top | 提示组件距离顶端的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 150

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -

> 另外提供了全局配置方法

- this.$notice.config();

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
right | 提示组件距离右侧的距离，单位像素 | number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | number | - | 150


