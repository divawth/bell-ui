> 基础用法

    export default {
        template: `
            <InputNumber maxValue="10" minValue="1" model="value"></InputNumber>
        `,
        data: {
            value: 34
        }
    }

> step 修改步值

    export default {
        template: `
            <InputNumber maxValue="10" minValue="1" model="value" step="10"></InputNumber>
        `,
        data: {
            value: 34
        }
    }

> size 修改大小

    export default {
        template: `
            <div>
                <InputNumber size="large" maxValue="10" minValue="1" model="value"></InputNumber>
                <InputNumber maxValue="10" minValue="1" model="value"></InputNumber>
                <InputNumber size="small" maxValue="10" minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 34
        }
    }

> disabled 禁用

    export default {
        template: `
            <div>
                <InputNumber size="large" disabled minValue="1" model="value"></InputNumber>
                <InputNumber disabled minValue="1" model="value"></InputNumber>
                <InputNumber size="small" disabled minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 34
        }
    }

> readonly 只读

    export default {
        template: `
            <div>
                <InputNumber size="large" readonly minValue="1" model="value"></InputNumber>
                <InputNumber readonly minValue="1" model="value"></InputNumber>
                <InputNumber size="small" readonly minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 34
        }
    }

> editable 是否能编辑。

    export default {
        template: `
            <div>
                <InputNumber size="large" editable minValue="1" model="value"></InputNumber>
                <InputNumber editable minValue="1" model="value"></InputNumber>
                <InputNumber size="small" editable minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 34
        }
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
maxValue | 最大值 | number | - | -
minValue | 最小值 | number | - | -
model | 当前值 | number | - | -
step | 每次改变的步伐，可以是小数 | number | - | 1
size | 风格 | 输入框尺寸 | large, small, default | default
disabled | 是否禁用 | string， boolean | - | false
editable | 是否可编辑 | string， boolean | - | true

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值变化的时候回调 | value
onFocus | 聚焦的时候触发 | value
onBlur | 失焦的时候触发 | value