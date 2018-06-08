> 基础用法

    export default {
        template: `
            <div>
                <Input ref="input" placeholder="请输入..."
                    type="text"
                    style="width: 300px"
                    model="value"
                    onFocus="{{onFocus}}"
                    onBlur="{{onBlur}}"
                    onKeyup="{{onKeyup}}"
                    onKeydown="{{onKeydown}}"
                    onKeypress="{{onKeypress}}"
                    onEnter="{{onEnter}}"
                    onChange="{{onChange}}"
                />
                <Input
                    model="value"
                    type="text"
                    style="width: 300px; margin-top: 30px;"
                    rows="4"
                    placeholder="请输入..."
                    disabled="true"
                />
                <Input ref="input" placeholder="请输入密码..."
                    type="password"
                    style="width: 300px; margin-top: 30px;"
                    model="value"
                    onFocus="{{onFocus}}"
                    onBlur="{{onBlur}}"
                    onKeyup="{{onKeyup}}"
                    onKeydown="{{onKeydown}}"
                    onKeypress="{{onKeypress}}"
                    onEnter="{{onEnter}}"
                    onChange="{{onChange}}"
                />
            </div>
        `,
        data: {
            onFocus: function (event) {
                console.log('onFocus')
            },
            onBlur: function (event) {
                console.log('onBlur')
            },
            onKeyup: function (event) {
                console.log('onKeyup')
            },
            onKeydown: function (event) {
                console.log('onKeydown')
            },
            onKeypress: function (event) {
                console.log('onKeypress')
            },
            onEnter: function (event) {
                console.log('onEnter')
            },
            onChange: function (event) {
                console.log('onChange')
            }
        },
        afterMount: function () {
            var me = this;
            console.log(me.$refs.input.blur)
            me.$refs.input.blur = function () {
                console.log(21)
            };
            console.log(me.$refs.input.blur)
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
                <br><br>
                <Input placeholder="default size"
                    model="value"
                    type="input"
                    clearable
                ></Input>
                <br><br>
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
                <br><br>
                <Input placeholder="success input"
                    model="value"
                    type="input"
                    status="success"
                    clearable
                ></Input>
                <br><br>
                <Input placeholder="error input"
                    model="value"
                    type="input"
                    status="error"
                    clearable
                ></Input>
                <br><br>
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

> Events

事件名称 | 说明 | 回调参数
---|---|---
onEnter | 按下回车键的时候触发 | -
onChange | 输入的时候值发生改变的时候回调 | value
onFocus | 聚焦的时候触发 | -
onBlur | 失焦的时候触发 | -
onClick | 有按钮时候的点击事件 | -
onKeyup | 原生的 keyup 事件 | -
onKeydown | 原生的 keyup 事件 | -
onKeypress | 原生的 keypress 事件 | -

> Slot


参数 | 说明
---|---
prepend | 自定义前插槽
append | 自定义后插槽
