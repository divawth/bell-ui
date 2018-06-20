> 基础用法

    export default {
        template: `
            <div>
                <Slider model="value" on-change="change()" />
                <p>{{ value }}</p>
                <style>
                    .bell-slider {
                        margin-top: 30px;
                    }
                </style>
            </div>
        `,
        methods: {
            change: function (event, data) {
                console.log(data)
            }
        },
        data: function () {
            return {
                value: 10
            }
        }
    }

> disabled

    export default {
        template: `
            <div>
                <Slider model="value" disabled />
            </div>
        `,
        data: function () {
            return {
                value: 10
            }
        }
    }

> 设置最大最小值和步长

    export default {
        template: `
            <div>
                <Slider model="value2"
                    min="{{60}}"
                    max="{{100}}"
                    step="{{10}}" />
            </div>
        `,
        data: function () {
            return {
                value2: 10
            }
        }
    }


> 设置type

    export default {
        template: `
            <div>
                <Slider model="value2" type="error" />
                <Slider model="value2" type="warning" />
                <Slider model="value2" type="info" />
                <Slider model="value2" type="success" />
            </div>
        `,
        data: function () {
            return {
                value2: 20
            }
        }
    }

> 和其他组件一起使用

    export default {
        template: `
            <div>
                <InputNumber model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="prepend">
                        <span>输入 percent:</span>
                    </template>
                    <template slot="append">
                        <span>%</span>
                    </template>
                </InputNumber>
                <Slider model="value" on-change="change()" />
                <p>{{ value }}</p>
                <style>
                    .bell-slider {
                        margin-top: 30px;
                    }
                </style>
            </div>
        `,
        methods: {
            change: function (event, data) {
                console.log(data)
            }
        },
        data: function () {
            return {
                value: 10
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 滑块选定的值 | Number | - | -
max | 最大值 | Number | - | -
min | 最小值 | Number | - | -
step | 步长 | Number | - | 1
disabled | 是否禁用 | boolean | - | false
type | 类型 | string | - | -

> Slider events

方法 | 说明 | 参数
---|---
dragStart | 开始拖拽时回调 | -
dragStop | 结束拖拽时回调 | -
change | 值改变时回调 | percent
