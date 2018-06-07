> 基础用法

根据 type 显示按钮类型

    export default {
        template: `
            <div class="bell-template">
                <div class="bell-buttons">
                    <Button>
                        Default
                    </Button>
                    <Button type="ghost">
                        Ghost
                    </Button>
                    <Button type="dashed">
                        Dashed
                    </Button>
                    <Button type="text" >
                        Text
                    </Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button type="primary">
                        Primary
                    </Button>
                    <Button type="success">
                        success
                    </Button>
                    <Button type="error">
                        error
                    </Button>
                    <Button type="info">
                        info
                    </Button>
                </div>
                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button type="warning">
                        warning
                    </Button>
                    <Button type="danger">
                        danger
                    </Button>
                </div>
            </div>
        `
    }

> 根据 size 显示按钮大小

    export default {
        template: `
            <div class="template">
                <div style="margin-top: 10px;">
                    <Button type="ghost" size="large">
                        Large
                    </Button>
                    <Button type="ghost">
                        Default
                    </Button>
                    <Button type="ghost" size="small">
                        Default
                    </Button>
                    <Button type="ghost" size="tiny">
                        Small
                    </Button>
                </div>

                <div style="margin-top: 10px;">
                    <Button type="ghost" shape="circle" size="large">
                        Large
                    </Button>
                    <Button type="ghost" shape="circle">
                        Default
                    </Button>
                    <Button type="ghost" shape="circle" size="small">
                        Default
                    </Button>
                    <Button type="ghost" shape="circle" size="tiny">
                        Small
                    </Button>
                </div>
            </div>
        `
    }

> 根据 shape 显示按钮形态

    export default {
        template: `
            <div style="margin-top: 10px;">
                <div class="bell-buttons">
                    <Button type="primary" shape="radius-circle-harf" icon="ios-search"></Button>
                    <Button type="primary" label="搜索"></Button>
                    <Button type="primary" icon="ios-search" shape="radius-circle-harf" label="搜索"></Button>
                    <Button type="primary" shape="radius-circle-harf" label="圆角按钮"></Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button type="ghost" shape="radius-circle-harf" icon="ios-search"></Button>
                    <Button type="ghost" label="搜索"></Button>
                    <Button type="ghost" icon="ios-search" shape="radius-circle-harf" label="搜索"></Button>
                    <Button type="ghost" shape="radius-circle-harf" label="圆角按钮"></Button>
                </div>
            </div>
        `
    }

> 最大化显示按钮

    export default {
        template: `
            <div>
                <Button type="success" long label="确认提交"></Button>
                <br><br>
                <Button type="error" long label="确认删除"></Button>
            </div>
        `
    }

> 禁用状态

    export default {
        template: `
            <div>
                <Button label="Default"></Button>
                <Button disabled label="Default(Disabled)"></Button>
                <br><br>
                <Button type="primary" label="Primary"></Button>
                <Button type="primary" disabled label="Primary(Disabled)"></Button>
                <br><br>
                <Button type="ghost" label="Ghost"></Button>
                <Button type="ghost" disabled label="Ghost(Disabled)"></Button>
                <br><br>
                <Button type="dashed" label="Dashed"></Button>
                <Button type="dashed" disabled label="Dashed(Disabled)"></Button>
                <br><br>
                <Button type="text" label="Text"></Button>
                <Button type="text" disabled label="Text(Disabled)"></Button>
            </div>
        `
    }

> loading

    export default {
        template: `
            <div class="bell-buttons">
                <Button type="primary" loading label="Loading..."></Button>

                <Button type="primary"
                    on-click="toLoading()">
                    {{#if !loading}}
                        Click me!
                    {{else}}
                        Loading...
                    {{/if}}
                </Button>

                <Button type="primary"
                    on-click="toLoading2()"
                    icon="checkmark-round"
                    label="{{#if !loading2}}Click me!{{else}} Loading...{{/if}}">
                </Button>
            </div>
        `,
        data: function () {
            return {
                loading: false
            }
        },
        methods: {
            toLoading: function () {
                var me = this;
                me.set('loading', !me.get('loading'));
            },
            toLoading2: function () {
                var me = this;
                me.set('loading2', !me.get('loading2'));
            }
        }
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
label | 话术 | string | - | -
type | 按钮类型 | string | primary、ghost、dashed、text、info、success、warning、error | -
size | 按钮大小 | string | large、small | -
shape | 按钮形状 | string | circle | -
long | 开启后，按钮的长度为 100% | boolean | - | false
disabled | 设置按钮为禁用状态 | boolean | - | false
loading | 设置按钮为加载中状态 | boolean | - | -
className | 样式类 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
on-click | 点击按钮的回调 | -