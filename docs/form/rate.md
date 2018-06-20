> 基础用法

    export default {
        template: `
            <Rate> </Rate>
        `
    }

> type

    export default {
        template: `
            <Rate type="success"> </Rate>
        `
    }

> 半星

    export default {
        template: `
            <Rate half> </Rate>
        `
    }

> 设置属性 showTexts 可以显示提示文字

    export default {
        template: `
            <Rate showTexts model="value" on-change="change()">
                <span style="color: #f5a623">{{ value }} 分</span>
            </Rate>
        `,
        data: {
            value: 2
        },
        methods: {
            change: function (event, data) {
                console.log(data)
            }
        }
    }

> 设置属性 readOnly 只读

    export default {
        template: `
            <Rate readOnly showTexts model="value">
                <span style="color: #f5a623">3 分</span>
            </Rate>
        `,
        data: function () {
            return {
                value: 3
            }
        }
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
count | star 总数 | Number | - | 5
model | 当前 star 数 | Number | - | 0
half | 是否允许半选 | Boolean | - | true
readOnly | 是否只读 | Boolean | - | false
showTexts | 是否提示文字 | Boolean | - | false
textColor | 提示文字的颜色 | Sting | - | #1F2D3D


> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 分值改变时触发 | -
