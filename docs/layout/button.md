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
                        Small
                    </Button>
                    <Button type="ghost" size="tiny">
                        Tiny
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
                    <Button type="primary" shape="radius-circle-harf">
                        <Icon size="18" type="ios-search"></Icon>
                    </Button>
                    <Button type="primary">
                        搜索
                    </Button>
                    <Button type="primary" shape="radius-circle-harf">
                        <Icon name="leftIcon" style="padding-right: 10px;" size="18" type="ios-search"></Icon>
                        搜索
                        <Icon name="rightIcon" style="padding-left: 10px;" size="18" type="ios-search"></Icon>
                    </Button>
                    <Button type="primary" shape="radius-circle-harf">
                        圆角按钮
                    </Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button type="ghost" shape="radius-circle-harf">
                        <Icon name="leftIcon" size="18" type="ios-search"></Icon>
                    </Button>
                    <Button type="ghost">
                        搜索
                    </Button>
                    <Button type="ghost" shape="radius-circle-harf">
                        搜索
                    </Button>
                    <Button type="ghost" shape="radius-circle-harf">
                        圆角按钮
                    </Button>
                </div>
            </div>
        `
    }

> 最大化显示按钮

    export default {
        template: `
            <div>
                <Button type="success" fluid>
                    确认提交
                </Button>
                <br><br>
                <Button type="error" fluid>
                    确认删除
                </Button>
            </div>
        `
    }

> 禁用状态

    export default {
        template: `
            <div>
                <Button>
                    Default
                </Button>
                <Button disabled>
                    Default(Disabled)
                </Button>
                <br><br>
                <Button type="primary">
                    Primary
                </Button>
                <Button type="primary" disabled>
                    Primary(Disabled)
                </Button>
                <br><br>
                <Button type="ghost">
                    Ghost
                </Button>
                <Button type="ghost" disabled>
                    Ghost(Disabled)
                </Button>
                <br><br>
                <Button type="dashed">
                    Dashed
                </Button>
                <Button type="dashed" disabled>
                    Dashed(Disabled)
                </Button>
                <br><br>
                <Button type="text">
                    Text
                </Button>
                <Button type="text" disabled>
                    Text(Disabled)
                </Button>
            </div>
        `
    }

> loading

    export default {
        template: `
            <div class="bell-buttons">
                <Button type="primary">
                    Loading...
                </Button>

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
                >
                    <Icon name="leftIcon" style="padding-right: 10px;" size="18" type="checkmark-round"></Icon>
                    {{#if !loading2}}
                        Click me!
                    {{else}}
                        Loading...
                    {{/if}}
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
type | 按钮类型 | string | primary、ghost、dashed、text、info、success、warning、error | -
size | 按钮大小 | string | large、small | -
shape | 按钮形状 | string | circle | -
fluid | 开启后，按钮的长度为 100% | boolean | - | false
disabled | 设置按钮为禁用状态 | boolean | - | false
className | 自定义样式类 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮的回调 | -

> Slot

参数 | 说明
---|---
children | 自定义内容
leftIcon | 自定义左边的 icon
rightIcon | 自定义右边的 icon
