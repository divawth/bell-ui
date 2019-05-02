> 根据 type 显示按钮类型 

    export default {
        template: `
            <div class="bell-template">
                <div class="bell-buttons">
                    <Button>
                        Default
                    </Button>
                    <Button type="primary">
                        Primary
                    </Button>
                    <Button type="warning">
                        Warning
                    </Button>
                    <Button type="success">
                        Success
                    </Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button type="error">
                        Error
                    </Button>
                    <Button type="info">
                        Info
                    </Button>
                </div>
            </div>
        `
    }

> 设置按钮的边框

    export default {
        template: `
            <div class="bell-template">
                <div class="bell-buttons">
                    <Button borderType="solid">
                        Solid
                    </Button>
                    <Button borderType="dashed">
                        Dashed
                    </Button>
                    <Button borderType="none">
                        Text
                    </Button>
                </div>
            </div>
        `
    }

> 设置幽灵按钮

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

    export default {
        template: `
            <div class="bell-template" style="background-color: rgb(190, 200, 200); padding: 8px;">
                <div class="bell-buttons">
                    <Button ghost>
                        Default
                    </Button>
                    <Button ghost type="primary">
                        Primary
                    </Button>
                    <Button ghost type="warning">
                        Warning
                    </Button>
                    <Button ghost type="success">
                        Success
                    </Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button ghost type="primary" borderType="dashed">
                        Dashed
                    </Button>
                    <Button ghost type="primary" borderType="none">
                        Text
                    </Button>
                    <Button ghost type="warning" borderType="none">
                        Warning
                    </Button>
                    <Button ghost type="success" borderType="none">
                        Success
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
                    <Button size="large">
                        Large
                    </Button>
                    <Button>
                        Default
                    </Button>
                    <Button size="small">
                        Small
                    </Button>
                    <Button size="tiny">
                        Tiny
                    </Button>
                </div>

                <div style="margin-top: 10px;">
                    <Button shape="round" size="large">
                        Large
                    </Button>
                    <Button shape="round">
                        Default
                    </Button>
                    <Button shape="round" size="small">
                        Small
                    </Button>
                    <Button shape="round" size="tiny">
                        Tiny
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
                    <Button type="primary" shape="circle">
                        <Icon type="ios-cloud-download"></Icon>
                    </Button>
                    <Button type="primary">
                        搜索
                    </Button>
                    <Button type="primary" shape="round">
                        <Icon name="icon" style="padding-right: 10px;" type="ios-cloud-download"></Icon>
                        搜索
                    </Button>
                    <Button type="primary" shape="round">
                        圆角按钮
                    </Button>
                </div>

                <div class="bell-buttons" style="margin-top: 10px;">
                    <Button shape="circle">
                        <Icon name="icon" type="ios-cloud-download"></Icon>
                    </Button>
                    <Button shape="round">
                        搜索
                    </Button>
                    <Button shape="round">
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
                <Button borderType="dashed">
                    Dashed
                </Button>
                <Button borderType="dashed" disabled>
                    Dashed(Disabled)
                </Button>
                <br><br>
                <Button borderType="none">
                    Text
                </Button>
                <Button borderType="none" disabled>
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
                    <Icon name="icon" style="padding-right: 10px; vertical-align: top;" size="12" type="ios-refresh"></Icon>
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

> ButtonGroups

    export default {
        template: `
            <div>
                <ButtonGroup>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button>M</Button>
                    <Button borderType="dashed">R</Button>
                </ButtonGroup>
                <br><br>
                <ButtonGroup>
                    <Button type="primary">
                        <Icon type="ios-arrow-back"></Icon>
                        Backward
                    </Button>
                    <Button type="primary">
                        Forward
                        <Icon type="ios-arrow-forward"></Icon>
                    </Button>
                </ButtonGroup>
                <br><br>
                <ButtonGroup>
                    <Button icon="ios-airplane"></Button>
                    <Button icon="ios-alarm"></Button>
                    <Button icon="ios-crop"></Button>
                    <Button icon="ios-american-football"></Button>
                </ButtonGroup>
                <br><br>
                <ButtonGroup shape="round">
                    <Button type="primary">
                        <Icon type="ios-arrow-back"></Icon>
                        Backward
                    </Button>
                    <Button type="primary">
                        Forward
                        <Icon type="ios-arrow-forward"></Icon>
                    </Button>
                </ButtonGroup>
                <br><br>
                <ButtonGroup size="small">
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button>M</Button>
                    <Button borderType="dashed">R</Button>
                </ButtonGroup>
            </div>
        `
    }

> vertical

    export default {
        template: `
            <div>
                <ButtonGroup vertical>
                    <Button type="primary">L</Button>
                    <Button>M</Button>
                    <Button>M</Button>
                    <Button borderType="dashed">R</Button>
                </ButtonGroup>
            </div>
        `
    }

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | primary、info、success、warning、error | -
borderType | 边框类型 | string | solid、none、dashed | solid
ghost | 是否是幽灵按钮 | boolean | true、false | false
size | 按钮大小 | string | large、small、tiny | -
shape | 按钮形状 | string | circle, round | -
fluid | 开启后，按钮的长度为 100% | boolean | - | false
disabled | 设置按钮为禁用状态 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮的回调 | -

> Slot

参数 | 说明
---|---
children | 自定义内容
icon | 自定义左边的 icon

> ButtonGroup Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 按钮大小 | string | large、small、tiny | -
shape | 按钮形状 | string | round | -
vertical | 是否纵向排列按钮组 | boolean | - | false

