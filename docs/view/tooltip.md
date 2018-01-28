文字提示气泡框，在鼠标悬停时显示，代替了系统的 title 提示。

> 基础用法

    export default {
        template: `
            <div>
                <Tooltip content="这里是提示文字">
                    当鼠标经过这段文字时，会显示一个气泡框
                </Tooltip>
            </div>
        `,
        methods: {

        }
    }

> 组件提供 12 个不同的方向显示 Tooltip。

    export default {
        template: `
            <div>
                <div>
                    <Tooltip placement="bottom-start" content="这里是提示文字">
                        <Button>下左</Button>
                    </Tooltip>
                    <Tooltip placement="bottom" content="这里是提示文字">
                        <Button>下</Button>
                    </Tooltip>
                    <Tooltip placement="bottom-end" content="这里是提示文字">
                        <Button>下右</Button>
                    </Tooltip>
                </div>
                <br><br>
                <div>
                    <Tooltip placement="top-start" content="这里是提示文字">
                        <Button>上左</Button>
                    </Tooltip>
                    <Tooltip placement="top" content="这里是提示文字">
                        <Button>上</Button>
                    </Tooltip>
                    <Tooltip placement="top-end" content="这里是提示文字">
                        <Button>上右</Button>
                    </Tooltip>
                </div>
                <br><br>
                <div>
                    <Tooltip placement="right-start" content="这里是提示文字">
                        <Button>右上</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="right" content="这里是提示文字">
                        <Button>右</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="right-end" content="这里是提示文字">
                        <Button>右下</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>

                    <Tooltip placement="left-start" content="这里是提示文字">
                        <Button>左上</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="left" content="这里是提示文字">
                        <Button>左</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                    <Tooltip placement="left-end" content="这里是提示文字">
                        <Button>左下</Button>
                        <TooltipItem>
                            <div slot="content">
                                <p>显示多行信息</p>
                                <p><i>可以自定义样式</i></p>
                            </div>
                        </TooltipItem>
                    </Tooltip>
                </div>
            </div>
        `
    }

> 自定义文本

    export default {
        template: `
           <div>
                <Tooltip placement="bottom">
                    <Button>多行</Button>
                    <TooltipItem>
                        <div slot="content">
                            <p>显示多行信息</p>
                            <p><i>可以自定义样式</i></p>
                        </div>
                    </TooltipItem>
                </Tooltip>
            </div>
        `,
        methods: {

        }
    }

> 点击关闭提示

    export default {
        template: `
           <div>
                <Tooltip placement="bottom" content="可以禁用文字提示" disabled="{{disabled}}">
                    <Button on-click="click()">
                        点击关闭提示
                    </Button>
                </Tooltip>
            </div>
        `,
        data: {
            disabled: false
        },
        methods: {
            click: function () {
                this.set({
                    disabled: !this.get('disabled')
                });
            }
        }
    }

> 通过设置属性 delay 可以延时显示文字提示，单位毫秒。

    export default {
        template: `
            <Tooltip content="Tooltip 文字提示" delay="1000">
                <Button>
                    延时1秒显示
                </Button>
            </Tooltip>
        `
    }

> 点击显示

    export default {
        template: `
            <Tooltip content="Tooltip 文字提示" mode="click">
                <Button>
                    点击显示
                </Button>
            </Tooltip>
        `
    }

> 设置最大宽高

    export default {
        template: `
            <div>
                <Tooltip content="Tooltip 文字提示" mode="click" max-height="60">
                    <Button>设置最大宽高</Button>
                    <TooltipItem>
                        <div slot="content">
                            <p>显示多行信息</p>
                            <p><i>可以自定义样式</i></p>
                        </div>
                    </TooltipItem>
                </Tooltip>
            </div>
        `
    }

> 设置偏移

    export default {
        template: `
            <Tooltip content="Tooltip 文字提示" mode="click" offsetX="10" offsetY="100">
                <Button>
                    点击显示
                </Button>
            </Tooltip>
        `
    }

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 自定义文本 | string | - | -
placement | Tooltip 的出现位置 | string | top, bottom, left, right | bottom
delay | 显示延时 | string, number | - | delay
mode | 交互模式 | string | click 和 hover | hover
maxWidth | 浮层的最大宽度 | string, number | - | -
maxHeight | 浮层的最大高度 | string, number | - | -
offsetX | 浮层距离目标元素 x 轴的位置偏移 | number | - | -
offsetY | 浮层距离目标元素 y 轴的位置偏移 | number | - | -
