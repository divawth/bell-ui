> 基础用法

    export default {
        template: `
            <Slider></Slider>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 滑块选定的值 | Number, Array | - | -
max | 最大值 | Number | - | -
min | 最小值 | Number | - | -
step | 步长 | Number | - | 1
disabled | 是否禁用 | boolean | - | false
range | 是否开启双滑块模式 | boolean | - | false

> Slider events

参数 | 说明
---|---
onBeforeDrag | 滑块选定的值
slideAnimation | 最大值
onAfterDrag | 最小值
onBeforeSeek | 步长
onAfterSeek | 是否禁用
