<a href="./example/message.html">
    Message
</a>

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
                this.$message.success({
                    content: '恭喜你，这是一条成功消息',
                    onClose: function () {
                        console.log('close')
                    }
                })
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
                this.$message.success({
                    content: '恭喜你，这是一条成功消息',
                    onClose: function () {
                        console.log('close')
                    }
                });
            },
            open2: function () {
                this.$message.info({
                    content: '这是一条有 icon 的消息而已～',
                    showIcon: true,
                    onClose: function () {
                        console.log('close')
                    }
                });
            },
            open3: function () {
                this.$message.warning({
                    content: '警告哦，这是一条警告消息',
                    showIcon: true
                });
            },
            open4: function () {
                this.$message.error({
                    content: 'Tiva 不想和 佳路 说话，并且向它抛出了一个异常',
                    showIcon: true,
                    closable: true,
                    onClose: function () {
                        console.log('close')
                    }
                })
            },

        }
    }

> 可关闭

可以添加关闭按钮。

    export default {
        template: `
            <div>
                <Button on-click="open()">
                    error
                </Button>
            </div>
        `,
        methods: {
            open: function () {
                this.$message.error({
                    content: '对方不想和你说话，并且向你抛出了一个异常',
                    showIcon: true,
                    closable: true,
                    onClose: function () {
                        console.log('close')
                    }
                })
            },

        }
    }

> 设置显示时长

设置显示时长为 10s

    export default {
        template: `
            <div>
                <Button on-click="open()">
                    error
                </Button>
            </div>
        `,
        methods: {
            open: function () {
                this.$message.error({
                    content: '对方不想和你说话，并且向你抛出了一个异常',
                    showIcon: true,
                    duration: 10000,
                    onClose: function () {
                        console.log('close')
                    }
                })
            },

        }
    }
