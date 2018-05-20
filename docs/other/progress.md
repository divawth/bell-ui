> 基础用法

    export default {
        template: `
            <div>
                <Progress active percent="{{25}}"></Progress>
                <Progress percent="{{45}}" type="danger"></Progress>
                <Progress percent="{{65}}" type="success"></Progress>
                <Progress percent="{{100}}"></Progress>
                <Progress percent="{{25}}" hideInfo></Progress>
            </div>
        `
    }

> 垂直方向

    export default {
        template: `
            <div style="height: 100px;">
                <Progress vertical percent="{{25}}"></Progress>
                <Progress vertical percent="{{45}}" type="danger"></Progress>
                <Progress vertical percent="{{65}}" type="success"></Progress>
                <Progress vertical percent="{{100}}"></Progress>
                <Progress vertical percent="{{25}}" hideInfo></Progress>

                <style>
                    .bell-progress-vertical {
                        width: 100px;
                    }
                </style>
            </div>
        `
    }

> 进度条

    export default {
        template: `
            <div>
                <Progress percent="{{percent}}" strokeLinecap="round">
                    {{#if percent == 100}}
                        <Icon type="checkmark-circled" style="color:#5cb85c"></Icon>
                    {{else}}
                        <span style="font-size:12px">
                            {{ percent }}%
                        </span>
                    {{/if}}
                </Progress>

                <Button icon="ios-plus-empty" on-click="add()"></Button>
                <Button icon="ios-minus-empty" on-click="minus()"></Button>
            </div>
        `,
        data: {
            percent: 30
        },
        methods: {
            add: function () {
                this.increase('percent', 10, 100);
            },

            minus: function () {
                this.decrease('percent', 10, 0);
            }

        }
    }

> 自定义

    export default {
        template: `
            <div style="height: 100px;">
                <Progress percent="{{25}}" strokeWidth="5"></Progress>
                <Progress percent="{{100}}" type="success">
                    <Icon type="checkmark-circled"></Icon>
                    <span style="margin-left: 10px;">成功</span>
                </Progress>
            </div>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
percent | 百分比 | Number | 0 | 0
type | 类型 | String | - | -
strokeWidth | 进度环的线宽 | Number | 6 | 6
hideInfo | 隐藏数值或状态图标 | Boolean | - | false
vertical | 是否在垂直方向显示 | Boolean | - | false
