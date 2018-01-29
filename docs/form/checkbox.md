> 基础用法

    export default {
        template: `
            <Checkbox model="single" onChange="{{onChange}}">
                Checkbox
            </Checkbox>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

> checkbox 组用法

    export default {
        template: `
            <CheckboxGroup model="social" onChange="{{onChange}}">
                <Checkbox value="twitter">
                    <span>Twitter</span>
                </Checkbox>
                <Checkbox value="facebook">
                    <span>Facebook</span>
                </Checkbox>
                <Checkbox value="github">
                    <span>Github</span>
                </Checkbox>
                <Checkbox value="snapchat">
                    <span>Snapchat</span>
                </Checkbox>
            </CheckboxGroup>
        `,
        data: function () {
            return {
                social: '',
                onChange: function (val) {
                    console.log(val)
                }
            }
        }
    }

> type 切换风格

    export default {
        template: `
            <div>
                <CheckboxGroup type="success" model="social" onChange="{{onChange}}">
                    <Checkbox value="twitter">
                        <span>Twitter</span>
                    </Checkbox>
                    <Checkbox value="facebook">
                        <span>Facebook</span>
                    </Checkbox>
                    <Checkbox value="github">
                        <span>Github</span>
                    </Checkbox>
                    <Checkbox value="snapchat">
                        <span>Snapchat</span>
                    </Checkbox>
                </CheckboxGroup>
                <br><br>
                <Checkbox type="success">
                    <span>success</span>
                </Checkbox>
                <br><br>
                <Checkbox type="info">
                    <span>info</span>
                </Checkbox>
                <br><br>
                <Checkbox type="warning">
                    <span>warning</span>
                </Checkbox>
                <br><br>
                <Checkbox type="error">
                    <span>error</span>
                </Checkbox>
            </div>
        `,
        data: function () {
            return {
                social: '',
                onChange: function (val) {
                    console.log(val)
                }
            }
        }
    }

> 添加全选

    export default {
        template: `
            <div>
                <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px; margin-bottom:6px;">
                    <Checkbox indeterminate model="checkAll" onChange="{{onCheckAllChange}}">
                        全选
                    </Checkbox>
                </div>
                <CheckboxGroup type="success" model="fruit" onChange="{{onChange}}">
                    <Checkbox value="1">
                        香蕉
                    </Checkbox>
                    <Checkbox value="2">
                        苹果
                    </Checkbox>
                    <Checkbox value="3">
                        西瓜
                    </Checkbox>
                </CheckboxGroup>
            </div>
        `,
        data: function () {
            var me = this;
            return {
                checkAll: false,
                fruit: true,
                onCheckAllChange: function (val) {
                    console.log(val)
                    if (val) {
                        me.set({
                            fruit: ['1', '3', '2']
                        });
                    }
                    else {
                        me.set({
                            fruit: []
                        });
                    }
                },
                onChange: function (val) {
                    console.log(val)
                    if (val && val.length == 3) {
                        me.set({
                            checkAll: true
                        });
                    }
                    else {
                        me.set({
                            checkAll: false
                        });
                    }
                }
            }
        }
    }

> 禁用状态

    export default {
        template: `
            <Checkbox disabled model="single" onChange="{{onChange}}">
                Checkbox
            </Checkbox>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

> 默认选中状态

    export default {
        template: `
            <Checkbox checked model="single" onChange="{{onChange}}">
                Checkbox
            </Checkbox>
        `,
        data: function () {
            return {
                onChange: function (value) {
                    console.log(value);
                }
            }
        }
    }

#### API

Checkbox

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 选中值 | string, boolean | - | -
label | 选项描述 | string, boolean | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | string， boolean | - | false
checked | 是否选中 | string， boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值变化的时候回调 | value


CheckboxGroup

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | checkbox 的 name | string | - | -
model | 选中值 | string, boolean | - | -
type | 风格 | string | success, info, warning, error | -
disabled | 是否禁用 | string， boolean | - | false
vertical | 是否使用垂直排版 | string， boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值变化的时候回调 | value

