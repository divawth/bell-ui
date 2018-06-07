> 基础用法

    export default {
        template: `
            <div>
                <Slider model="value"></Slider>
            </div>
        `,
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
                <Slider model="value" disabled></Slider>
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
                    step="{{10}}"></Slider>
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
                <Slider model="value2" type="error"></Slider>
                <Slider model="value2" type="warning"></Slider>
                <Slider model="value2" type="info"></Slider>
                <Slider model="value2" type="success"></Slider>
            </div>
        `,
        data: function () {
            return {
                value2: 20
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

参数 | 说明
---|---
onDragStart | 开始拖拽时回调
onDragStop | 结束拖拽时回调
onChange | 值改变时回调
