> 基础用法

    export default {
        template: `
            <div>
                <Input ref="input" placeholder="请输入..."
                    type="text"
                    style="width: 300px"
                    model="value"
                    on-focus="focus()"
                    on-blur="blur()"
                    on-keyup="keyup()"
                    on-keydown="keydown()"
                    on-keypress="keypress()"
                    on-enter="enter()"
                    on-change="change($data)"
                />
                <Input
                    model="value"
                    type="text"
                    style="width: 300px;"
                    rows="4"
                    placeholder="请输入..."
                    disabled="true"
                />
                <Input ref="input" placeholder="请输入密码..."
                    type="password"
                    secure
                    style="width: 300px;"
                    model="value"
                />
            </div>
        `,
        methods: {
            change: function (data) {
                // console.log(data.value)
            },
            focus: function () {
                // console.log('focus');
            },
            blur: function () {
                // console.log('blur');
            },
            enter: function () {
                // console.log('enter');
            },
            keyup: function () {
                // console.log('keyup');
            },
            keydown: function () {
                // console.log('keydown');
            }
        }
    }

> 可以清除

    export default {
        template: `
            <Input placeholder="请输入..."
                style="width: 300px"
                type="input"
                model="value"
                clearable
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
                    type="input"
                    clearable
                ></Input>
                <Input placeholder="default size"
                    model="value"
                    type="input"
                    clearable
                ></Input>
                <Input placeholder="small size"
                    size="small"
                    model="value"
                    type="input"
                    clearable
                ></Input>
            </div>
        `
    }

> 通过 status 设置状态

    export default {
        template: `
            <div>
                <Input placeholder="info input"
                    model="value"
                    status="info"
                    type="input"
                    clearable
                ></Input>
                <Input placeholder="success input"
                    model="value"
                    type="input"
                    status="success"
                    clearable
                ></Input>
                <Input placeholder="error input"
                    model="value"
                    type="input"
                    status="error"
                    clearable
                ></Input>
                <Input placeholder="warning input"
                    status="warning"
                    model="value"
                    type="input"
                    clearable
                ></Input>
            </div>
        `
    }

> 通过 label 设置右侧按钮文字

    export default {
        template: `
            <div>
                <Input model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="prepend">
                        <span>Https://</span>
                    </template>
                </Input>
                <Input model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="append">
                        <span>@bell.io</span>
                    </template>
                </Input>
                <Input model="value"
                    type="text"
                    placeholder="请输入..."
                >
                    <template slot="prepend">
                        <Button type="text">搜索</Button>
                    </template>
                </Input>

                <style>
                    .bell-input-wrapper {
                        margin-top: 10px;
                    }
                </style>
            </div>
        `
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
clearable | 清空按钮 | boolean, string, number | - | false
secure | 是否可以隐藏显示（仅在 password 下有效） | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
enter | 按下回车键的时候触发 | -
change | 输入的时候值发生改变的时候回调 | value
focus | 聚焦的时候触发 | -
blur | 失焦的时候触发 | -
click | 有按钮时候的点击事件 | -
keyup | 原生的 keyup 事件 | -
keydown | 原生的 keyup 事件 | -
keypress | 原生的 keypress 事件 | -

> Slot

参数 | 说明
---|---
prepend | 自定义前插槽
append | 自定义后插槽
