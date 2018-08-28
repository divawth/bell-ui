> 基础用法

    export default {
      template: `
        <div>
            <InputNumber maxValue="10" minValue="1" model="value" placeholder="请输入" />
            <div>
                {{value}}
            </div>
        </div>
      `,
    }

> step 修改步值（这里暂时不支持小数）

    export default {
        template: `
            <InputNumber maxValue="100" minValue="1" model="value" step="3"></InputNumber>
        `,
        data: {
            value: 3
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

> status 修改颜色风格

    export default {
        template: `
            <div>
                <InputNumber maxValue="10" minValue="1" model="value"></InputNumber>
                <InputNumber status="error" maxValue="10" minValue="1" model="value"></InputNumber>
                <InputNumber status="success" maxValue="10" minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 3
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

> editable 是否能编辑。

    export default {
        template: `
            <div>
                <InputNumber size="large" editable="false" minValue="1" model="value"></InputNumber>
                <InputNumber editable="false" minValue="1" model="value"></InputNumber>
                <InputNumber size="small" editable="false" minValue="1" model="value"></InputNumber>
            </div>
        `,
        data: {
            value: 34
        }
    }

> readonly 只读。

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

> 设置右侧按钮文字

    export default {
        template: `
            <div>
                <InputNumber model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="prepend">
                        <span>Https://</span>
                    </template>
                </InputNumber>
                <InputNumber model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="append">
                        <span>@bell.io</span>
                    </template>
                </InputNumber>
                <InputNumber model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="prepend">
                        <Button type="text">搜索</Button>
                    </template>
                </InputNumber>

                <style>
                    .bell-input-wrapper {
                        margin-top: 10px;
                    }
                </style>
            </div>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
maxValue | 最大值 | number | - | -
minValue | 最小值 | number | - | -
model | 当前值 | number | - | -
step | 每次改变的步伐，可以是小数 | number | - | 1
size | 风格 | string | large, small, default | default
status | 颜色风格 | string | info等 | primary
disabled | 是否禁用 | boolean | - | false
editable | 是否可编辑 | boolean | - | true
readonly | 是否开启只读 | boolean | - | true

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值变化的时候回调 | value
focus | 聚焦的时候触发(仅 editable 为 true 的时候生效) | value
blur | 失焦的时候触发(仅 editable 为 true 的时候生效) | value