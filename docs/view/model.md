从场景上说，Model 的作用是美化系统自带的 alert、confirm 因此适合展示较为简单的内容。如果需要弹出较为复杂的内容，请使用 Dialog。

> alert 的基本用法

```js
export default {
  template: `
    <div>
      <Button type="info" on-click="open()">
        Alert
      </Button>
    </div>
  `,
  methods: {
    open: function () {
      this.$alert('这是一段内容');
    }
  }
}
```

> 定制按钮话术

    export default {
        template: `
            <div>
                <Button type="info" on-click="open('info')">
                    info
                </Button>
                <Button type="success" on-click="open('success')">
                    success
                </Button>
                <Button type="warning" on-click="open('warning')">
                    warning
                </Button>
                <Button type="error" on-click="open('error')">
                    error
                </Button>
            </div>
        `,
        methods: {
            open: function(type) {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    title: '标题名称',
                    button: {
                        type: type,
                        text: '我知道了'
                    },
                    onClose: function () {
                        console.log(1212)
                    }
                });
            }
        }
    }

> 设置宽度

    export default {
        template: `
            <div>
                <Button type="info" on-click="open('info')">
                    info
                </Button>
                <Button type="success" on-click="open('success')">
                    success
                </Button>
                <Button type="warning" on-click="open('warning')">
                    warning
                </Button>
                <Button type="error" on-click="open('error')">
                    error
                </Button>
            </div>
        `,
        methods: {
            open: function(type) {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    width: 400,
                    title: '标题名称',
                    button: {
                        type: type,
                        text: '我知道了'
                    },
                    onClose: function () {
                        console.log(1212)
                    }
                });
            }
        }
    }

> closable 是否需要关闭按钮

    export default {
        template: `
            <div>
                <Button type="info" on-click="open()">
                    有关闭按钮
                </Button>
                <Button type="info" on-click="open2()">
                    没有关闭按钮
                </Button>
            </div>
        `,
        methods: {
            open: function() {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    title: '标题名称',
                    button: {
                        type: 'warning',
                        text: '我知道了'
                    },
                    closable: true,
                    onClose: function () {
                        console.log(1212)
                    }
                });
            },
            open2: function() {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    title: '标题名称',
                    button: {
                        type: 'warning',
                        text: '我知道了'
                    },
                    onClose: function () {
                        console.log(1212)
                    }
                });
            }
        }
    }

> maskClosable 点击遮罩层关闭

    export default {
        template: `
            <div>
                <Button type="info" on-click="open()">
                    点击遮罩层关闭
                </Button>
                <Button type="info" on-click="open2()">
                    点击遮罩层不关闭
                </Button>
            </div>
        `,
        methods: {
            open: function() {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    title: '标题名称',
                    button: {
                        type: 'warning',
                        text: '我知道了'
                    },
                    maskClosable: true,
                    closable: true,
                    onClose: function () {
                        console.log(1212)
                    }
                });
            },
            open2: function() {
                this.$alert({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    title: '标题名称',
                    button: {
                        type: 'warning',
                        text: '我知道了'
                    },
                    onClose: function () {
                        console.log(1212)
                    }
                });
            }
        }
    }

API

通过直接调用以下方法来使用组件： this.$alert(data);

> data 参数

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
title | 是否显示图标 | boolean | - | false
button | 按钮 | object | {text: 'xxxx', info: 'success, info, warning, text, error'} | {text: '我知道了', info: 'info'}
closable | 是否需要关闭按钮 | boolean | - | false
maskClosable | 点击遮罩层关闭 | boolean | - | false
width | 宽度 | number | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
onClose | 关闭 alert 时触发的事件 | -



Confirm 的所有属性同 Alert 但是支持传入 buttons 对象

> confirm 的基本用法

    export default {
        template: `
            <div>
                <Button type="warning" on-click="open()">
                    confirm
                </Button>
            </div>
        `,
        methods: {
            open: function() {
                this.$confirm({
                    content: '这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容这是一段内容',
                    width: 450,
                    title: '标题名称',
                    closable: true,
                    onClose: function () {
                        console.log(1212)
                    },
                    buttons: [
                        {
                            type: 'warning',
                            text: '我知道了',
                            action: function () {
                                console.log(this);
                                this.hide();
                            }
                        },
                        {
                            type: 'info',
                            text: '取消',
                            action: function () {
                                console.log(this);
                                this.hide();
                            }
                        }
                    ]
                });
            }
        }
    }

API

通过直接调用以下方法来使用组件： this.$confirm(data);

> data 参数

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
title | 是否显示图标 | boolean | - | false
buttons | 按钮 | array | - | -
closable | 是否需要关闭按钮 | boolean | - | false
maskClosable | 点击遮罩层关闭 | boolean | - | false
width | 宽度 | number | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -
