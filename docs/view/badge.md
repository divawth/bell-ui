> 概述

出现在按钮、图标旁的数字或状态标记。

> 基础用法

    export default {
        template: `
            <Badge count="212">

                <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
            </Badge>
        `
    }

> maxCount

    export default {
        template: `
            <div>
                <Badge count="{{{212}}}" maxCount="{{{99}}}">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
                <br><br>
                <Badge count="{{{212211}}}" maxCount="{{{999}}}">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
                <br><br>
                <Badge count="{{{212211}}}" maxCount="{{{999}}}">
                    <Button type="info">
                        按钮
                    </Button>
                </Badge>
            </div>
        `
    }

> 独立使用 使用 type 改变风格

    export default {
        template: `
            <div>
                <Badge count="你好">
                </Badge>
                <Badge type="success" count="你好">
                </Badge>
                <Badge type="info" count="你好">
                </Badge>
                <Badge type="warning" count="你好">
                </Badge>
            </div>
        `
    }

> dot 不展示数字，只有一个小红点

    export default {
        template: `
            <div>
                <Badge dot count="你好">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
                <Badge dot type="success" count="你好">
                    你好哦
                </Badge>
                <Badge dot type="info" count="你好">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
                <Badge dot type="warning" count="你好">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
            </div>
        `
    }

> hidden 不展示

    export default {
        template: `
            <div on-click="click()">
                <Badge hidden="{{hidden}}" count="212211" maxCount="999">
                    <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />
                </Badge>
            </div>
        `,
        data: {
            hidden: false,
        },
        methods: {
            click: function () {
                this.set({
                    hidden: !this.get('hidden')
                });
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
count | 显示的数字 | Number, String | - | -
maxCount | 展示封顶的数字值 | Number, String | - | -
dot | 不展示数字，只有一个小红点 | string, boolean | - | -
className | 添加类 | string | - | -
hidden | 是不是不显示 | string, boolean | - | false
type | 风格 | string, boolean | info, success, warning, error | error
