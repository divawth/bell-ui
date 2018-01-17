> 概述

常用于主动操作后的反馈提示

> 基础用法

从顶部出现，1.5 秒后自动消失。

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

> 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。

    export default {
        template: `
            <div>
                <Button on-click="open()">
                    Succ
                </Button>
                <Button on-click="open2()">
                    info
                </Button>
                <Button on-click="open3()">
                    warn
                </Button>
                <Button on-click="open4()">
                    error
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
                this.$message.error('Tiva 不想和 佳路 说话，并且向它抛出了一个异常')
            }
        }
    }

> 可关闭

可以添加关闭按钮。

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

> 设置关闭文本

设置关闭文本为 Close me!

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
                    showIcon: true,
                    closable: true,
                    closeText: 'Close me!'
                })
            }
        }
    }

> 设置显示时长

设置显示时长为 10s

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
                    showIcon: true,
                    duration: 10000
                })
            }
        }
    }

> 设置提示组件距离顶端的距离

设置提示组件距离顶端的距离为 100px

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
                    showIcon: true,
                    top: 100
                })
            }
        }
    }

> 全局配置

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
                    closeText: 'Close me!',
                    onClose: function () {
                        console.log('close')
                    }
                })
            }
        }
    }

API

> 通过直接调用以下方法来使用组件：

- this.$message.info(content, duration, onClose)
- this.$message.success(content, duration, onClose)
- this.$message.warning(content, duration, onClose)
- this.$message.error(content, duration, onClose)

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
content | 自定义文本 | string | - | -
showIcon | 是否显示图标 | boolean | - | false
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
closeText | 关闭按钮自定义文本 | string | - | -
top | 提示组件距离顶端的距离，单位像素 | Number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | Number | - | 150

> Events

事件名称 | 说明 | 回调参数
---|---|---
onClose | 关闭 alert 时触发的事件 | -

> 另外提供了全局配置方法

- this.$Message.config();

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
top | 提示组件距离顶端的距离，单位像素 | Number | - | 15
duration | 默认自动关闭的延时，单位毫秒 | Number | - | 150


