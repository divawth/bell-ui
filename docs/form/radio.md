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
                <br>
                <RadioGroup type="warning" name="single1" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br>
                <RadioGroup type="info" name="single2" model="radio">
                    <Radio label="中国" value="china"></Radio>
                    <Radio label="非中国" value="feiChine"></Radio>
                </RadioGroup>
                <br>
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
                <br>
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