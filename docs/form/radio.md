> 概述

基本 Form 组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

> 基础用法

    export default {
        template: `
            <RadioGroup name="country" model="radio">
                <Radio value="china">
                    中国
                </Radio>
                <Radio value="other">
                    外国
                </Radio>
            </RadioGroup>
        `,
        data: function () {
            return {
                radio: ''
            }
        }
    }

> type 修改类型

    export default {
        template: `
            <RadioGroup name="country" model="radio">
                <RadioGroup type="success" name="single" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="warning" name="single1" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="info" name="single2" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="error" name="single3" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
            </RadioGroup>
        `,
        data: function () {
            return {
                radio: ''
            }
        }
    }

> disabled 禁用状态

    export default {
        template: `
            <RadioGroup name="country" model="radio">
                <RadioGroup type="success" name="single" model="radio">
                    <Radio label="中国" disabled value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="warning" disabled name="single1" model="radio">
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
            </RadioGroup>
        `,
        data: function () {
            return {
                radio: ''
            }
        }
    }

> vertical 垂直显示

    export default {
        template: `
            <RadioGroup name="single" model="radio" vertical>
                <Radio label="中国" value="china" checked></Radio>
                <Radio label="非洲" value="Am"></Radio>
                <Radio label="Am" value="2"></Radio>
            </RadioGroup>
        `,
        data: function () {
            return {
                radio: ''
            }
        }
    }

> 设置默认选中状态

    export default {
        template: `
            <RadioGroup name="single" model="radio" vertical>
                <Radio label="中国" value="china"></Radio>
                <Radio label="非洲" value="Am"></Radio>
                <Radio label="Am" value="2" checked></Radio>
            </RadioGroup>
        `,
        data: function () {
            return {
                radio: ''
            }
        }
    }

> 设置按钮形态

    export default {
        template: `
            <RadioGroup button name="single" model="country">
                <Radio label="中国" value="c"></Radio>
                <Radio label="非洲" value="f"></Radio>
                <Radio label="菲律宾" value="l"></Radio>
            </RadioGroup>
        `,
        data: function () {
            return {
                country: ''
            }
        }
    }

> 设置按钮形态下的按钮大小

    export default {
        template: `
            <div>
                <RadioGroup size="large" button name="country" model="value">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup button name="country" model="value">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup size="small" button name="country" model="value">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
            </div>
        `,
        data: function () {
            return {
                country: ''
            }
        }
    }

> 设置按钮形态下的风格

    export default {
        template: `
            <div>
                <RadioGroup type="success" button name="country" model="value">
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="warning" button name="country" model="value">
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="error" button name="country" model="value">
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
                <br><br>
                <RadioGroup type="info" button name="country" model="value">
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
            </div>
        `,
        data: function () {
            return {
                country: ''
            }
        }
    }

> 设置按钮形态下的禁用

    export default {
        template: `
            <div>
                <RadioGroup button name="country" model="value" disabled>
                    <Radio label="中国" value="china" checked></Radio>
                    <Radio label="非洲" value="feizhou"></Radio>
                    <Radio label="其他" value="other"></Radio>
                </RadioGroup>
            </div>
        `,
        data: function () {
            return {
                country: ''
            }
        }
    }


#### API

Radio

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
label | label | string | - | -
value | value | string | - | -
size | 大小 | string | small, large, - | -
disabled | 是否禁用 | boolean | - | false
checked | 是否选中 | boolean | - | false

RadioGroup

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 选中值 | string | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | boolean | - | false
checked | 是否选中 | boolean | - | false
vertical | 是否垂直排列，按钮样式下无效 | boolean | - | false
