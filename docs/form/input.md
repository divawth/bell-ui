> 基础用法

    export default {
        template: `
            <Input placeholder="请输入..."
                style="width: 300px"
                model="value"
            ></Input>
        `
    }

> 通过 size 设置大小

    export default {
        template: `
            <div>
                <Input placeholder="large size"
                    model="value"
                    size="large"
                ></Input>
                <br><br>
                <Input placeholder="default size"
                    model="value"
                ></Input>
                <br><br>
                <Input placeholder="small size"
                    size="small"
                    model="value"
                ></Input>
            </div>
        `
    }

> 通过 label 设置右侧按钮文字

    export default {
        template: `
            <div>
                <Input label="search"
                    placeholder="请输入..."
                    style="width: 200px"
                    model="value"
                    on-click="click()"
                ></Input>
            </div>
        `,
        methods: {
            click: function () {
                this.$message.success('click secrch');
            }
        }
    }

> type 设置为 textarea, 通过 rows 设置显示行数

    export default {
        template: `
            <div>
                <Input model="value"
                    type="textarea"
                    rows="4"
                    placeholder="请输入..."
                >
                </Input>
            </div>
        `
    }

> disabled 设置为禁用状态

    export default {
        template: `
            <div>
                <Input
                    model="value"
                    type="textarea"
                    rows="4"
                    placeholder="请输入..."
                    disabled="true"
                >
                </Input>
            </div>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | text、password、textarea、url、email、date | text
size | 按钮大小 | string | large、small | -
model | input 的值 | string | - | -
placeholder | placeholder | string | - | -
rows | 行数 | string | - | -
disabled | 设置按钮为禁用状态 | boolean | - | false
label | 设置右侧按钮文字 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
on-click | 点击按钮的回调 | -
