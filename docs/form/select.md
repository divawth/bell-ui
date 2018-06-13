> 基础用法

    export default {
        template: `
            <div>
                <Select model="value" on-change="change()">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <p>
                    value: {{value}}
                </p>
            </div>
        `,
        data: function () {
            return {
                list: [
                    {
                        text: '深圳',
                        value: 1
                    },
                    {
                        text: '广州广州广州广州广州广州广州广州广州广州',
                        value: 2
                    },
                    {
                        text: '上海',
                        value: 3
                    },
                    {
                        text: '北京',
                        value: 4
                    }
                ]
            }
        },
        methods: {
            change: function (events, data) {
                console.log(data);
            }
        }
    }

> 设置 size 大小

    export default {
        template: `
            <div>
                <Select size="large" model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select model="value" size="small">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <style>
                    .bell-select {
                        margin-bottom: 20px;
                    }
                </style>
            </div>
        `,
        data: function () {
            return {
                list: [
                    {
                        text: '深圳',
                        value: 1
                    },
                    {
                        text: '广州广州广州广州广州广州广州广州广州广州',
                        value: 2
                    },
                    {
                        text: '上海',
                        value: 3
                    },
                    {
                        text: '北京',
                        value: 4
                    }
                ]
            }
        }
    }

> 设置 type

    export default {
        template: `
            <div>
                <Select type="success" model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select type="warning" model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select type="error" model="value" size="small">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <style>
                    .bell-select {
                        margin-bottom: 20px;
                    }
                </style>
            </div>
        `,
        data: function () {
            return {
                list: [
                    {
                        text: '深圳',
                        value: 1
                    },
                    {
                        text: '广州广州广州广州广州广州广州广州广州广州',
                        value: 2
                    },
                    {
                        text: '上海',
                        value: 3
                    },
                    {
                        text: '北京',
                        value: 4
                    }
                ]
            }
        }
    }

> 使用 disabled 禁用状态

    export default {
        template: `
            <Select disabled model="value" size="small">
                {{#each list:index}}
                    <Option index="{{index}}" value="{{value}}" text="{{text}}">
                        {{text}}
                    </Option>
                {{/each}}
            </Select>
        `,
        data: function () {
            return {
                list: [
                    {
                        text: '深圳',
                        value: 1
                    },
                    {
                        text: '广州广州广州广州广州广州广州广州广州广州',
                        value: 2
                    },
                    {
                        text: '上海',
                        value: 3
                    },
                    {
                        text: '北京',
                        value: 4
                    }
                ]
            }
        }
    }

> placement 设置弹窗的展开方向

    export default {
        template: `
            <div>
                <Select placement="top" size="large" model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select placement="top" model="value">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <br>
                <Select placement="top" model="value" size="small">
                    {{#each list:index}}
                        <Option index="{{index}}" value="{{value}}" text="{{text}}">
                            {{text}}
                        </Option>
                    {{/each}}
                </Select>
                <style>
                    .bell-select {
                        margin-bottom: 20px;
                    }
                </style>
            </div>
        `,
        data: function () {
            return {
                list: [
                    {
                        text: '深圳',
                        value: 1
                    },
                    {
                        text: '广州广州广州广州广州广州广州广州广州广州',
                        value: 2
                    },
                    {
                        text: '上海',
                        value: 3
                    },
                    {
                        text: '北京',
                        value: 4
                    }
                ]
            }
        }
    }


#### API

> Select Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 选中值 | string | - | -
size | 大小 | string | small, large, - | -
type | 风格 | string | success, error 等 | -
disabled | 是否禁用 | boolean | - | false
placement | 弹窗的展开方向 | string | bottom 和 top | -
defaultText | placeholder | string | - | -

> Select Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值发生改变的时候回调 | value

> Option Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
index | 当前值的索引 | string, number | - | -
value | 当前值 | string, number | - | -
text | 选中时展示的文本 | string | - | -

> Option Slot

参数 | 说明
---|---
children | 自定义插槽

