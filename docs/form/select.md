> 基础用法

    export default {
        template: `
            <Select {{...options}} model="value">
            </Select>
        `,
        data: function () {
            return {
                value: '1',
                options: {
                    style: 'width: 200px',
                    defaultText: '请选择...',
                    list: [
                        {
                            text: '所有',
                            val: 1
                        },
                        {
                            text: '正常',
                            val: 2
                        },
                        {
                            text: '不正常',
                            val: 3
                        }
                    ]
                }
            }
        }
    }

> 设置 size 大小

    export default {
        template: `
            <div>
                <Select size="large" model="value" {{...options}}></Select>
                <br><br>
                <Select model="value1" {{...options}}></Select>
                <br><br>
                <Select size="small" model="value2" {{...options}}></Select>
            </div>
        `,
        data: function () {
            return {
                options: {
                    style: 'width: 200px',
                    defaultText: '请选择...',
                    list: [
                        {
                            text: '所有',
                            val: 1
                        },
                        {
                            text: '正常',
                            val: 2
                        },
                        {
                            text: '不正常',
                            val: 3
                        }
                    ]
                },
                value: '1',
                value2: '1',
                value1: '1'
            }
        }
    }

> 使用 disabled 禁用状态

    export default {
        template: `
            <Select {{...options}} model="value" disabled="true">
            </Select>
        `,
        data: function () {
            return {
                value: '1',
                options: {
                    style: 'width: 200px',
                    defaultText: '请选择...',
                    list: [
                        {
                            text: '所有',
                            val: 1
                        },
                        {
                            text: '正常',
                            val: 2
                        },
                        {
                            text: '不正常',
                            val: 3
                        }
                    ]
                }
            }
        }
    }

> placement 设置弹窗的展开方向

    export default {
        template: `
            <div>
                <Select placement="top" size="large" model="value" {{...options}}></Select>
                <br><br>
                <Select placement="top" model="value1" {{...options}}></Select>
                <br><br>
                <Select placement="top" size="small" model="value2" {{...options}}></Select>
            </div>
        `,
        data: function () {
            return {
                options: {
                    style: 'width: 200px',
                    defaultText: '请选择...',
                    list: [
                        {
                            text: '所有',
                            val: 1
                        },
                        {
                            text: '正常',
                            val: 2
                        },
                        {
                            text: '不正常',
                            val: 3
                        }
                    ]
                },
                value: '1',
                value1: '1',
                value2: '1'
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
list | 列表, 比传参数 | array | - | -
model | 选中值 | string | - | -
defaultText | placeholder | string | - | -
size | 大小 | string | small, large, - | -
disabled | 是否禁用 | boolean | - | false
style | 自定义样式 | string | - | -
placement | 弹窗的展开方向 | string | bottom 和 top | -
