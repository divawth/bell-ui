> 基本用法

    export default {
        template: `
            <List>
                <Item disableHover="{{!0}}">
                    1 号员工
                </Item>
                <Item disableHover="{{true}}">
                    2 号员工
                </Item>
                <Item disableHover>
                    3 号员工
                </Item>
            </List>
        `
    }

> 带边框

    export default {
        template: `
            <List border>
                <Item>
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    1 号员工
                </Item>
                <Item on-click="itemClick()" active="{{!!active}}">
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    2 号员工
                </Item>
                <Item>
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    3 号员工
                </Item>
            </List>
        `,
        methods: {
            itemClick: function (val) {
                this.toggle('active');
            }
        },
        data: {
            active: false
        }
    }

> 插入 header

    export default {
        template: `
            <List>
                <Item>
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    1 号员工
                </Item>
                <Item on-click="itemClick()" active="{{!!active}}">
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    2 号员工
                </Item>
                <Item>
                    <template slot="itemHeader">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    3 号员工
                </Item>
            </List>
        `,
        methods: {
            itemClick: function (val) {
                this.toggle('active');
            }
        },
        data: {
            active: false
        }
    }

> 插入 footer

    export default {
        template: `
            <List>
                <Item>
                    <template slot="itemFooter">
                        <Icon type="heart" />
                    </template>
                    1 号员工
                </Item>
                <Item>
                    <template slot="itemFooter">
                        <Checkbox model="single" onChange="{{onChange}}">
                        </Checkbox>
                    </template>
                    2 号员工
                </Item>
                <Item>
                    <template slot="itemFooter">
                        <Switch size="small" model="single" onChange="{{onChange}}">
                        </Switch>
                    </template>
                    3 号员工
                </Item>
            </List>
        `
    }

#### API

> slot

参数 | 说明
---|---
itemHeader | 列表的 item 的 header
itemFooter | 列表的 item 的 footer

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | info、success、warning、error | info
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
closeText | 关闭按钮自定义文本 | string | - | -
showIcon | 是否显示图标 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -