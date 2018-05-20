> 基础用法

    export default {
        template: `
            <div>
                <Circle percent="{{80}}" size="{{100}}">
                    <span class="demo-Circle-inner" style="font-size:24px">80%</span>
                </Circle>
                <Circle percent="{{80}}" size="{{100}}" stroke-color="#5cb85c">
                    <Icon type="ios-checkmark-empty" size="{{60}}" style="color:#5cb85c"></Icon>
                </Circle>
                <Circle percent="{{40}}" size="{{100}}" stroke-color="#ff5500">
                    <span class="demo-Circle-inner">
                        <Icon type="ios-close-empty" size="{{50}}" style="color:#ff5500"></Icon>
                    </span>
                </Circle>
            </div>
        `
    }

> 自定义

    export default {
        template: `
            <div>
                <Circle percent="{{percent}}" strokeLinecap="round">
                    {{#if percent == 100}}
                        <Icon type="ios-checkmark-empty" size="60" style="color:#5cb85c"></Icon>
                    {{else}}
                        <span style="font-size:24px">
                            {{ percent }}%
                        </span>
                    {{/if}}
                </Circle>

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


> 自定义 2

    export default {
        template: `
            <Circle
                size="{{250}}"
                trailWidth="{{4}}"
                strokeWidth="{{5}}"
                percent="{{75}}"
                strokeLinecap="square"
                strokeColor="#43a3fb">
                <div class="demo-Circle-custom">
                    <h1>42,001,776</h1>
                    <p>消费人群规模</p>
                    <span>
                        总占人数
                        <i>75%</i>
                    </span>
                </div>
            </Circle>
        `,

        data: {
            percent: 0
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


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
percent | 百分比 | Number | 0 | 0
size | 图表的宽度和高度，单位 px | Number | 120 | 120
strokeLinecap | 进度环顶端的形状 | String | square（方）和 round（圆）| round
strokeWidth | 进度环的线宽 | Number | 6 | 6
strokeColor | 进度环的颜色 | String | - | #2db7f5
trailWidth | 进度环背景的线宽 | Number | - | -
trailColor | 进度环背景的颜色 | String | - | #eaeef2
