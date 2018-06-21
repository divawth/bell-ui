> 基本用法

    export default {
        template: `
            <List border>
                <Item>
                    <template slot="header">
                        <Icon type="star"></Icon>
                    </template>
                    Sent mail Sent mail Sent mail Sent mail Sent mail Sent mail Sent mail
                    Sent mail
                    Sent mailSent mailSent mail

                    Sent mail

                </Item>
                <Item>
                    <template slot="header">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    Drafts
                </Item>
                <Item>
                    <template slot="header">
                        <Icon type="star"></Icon>
                    </template>
                    Inbox
                </Item>
                <Item>
                    <template slot="header">
                        <Icon type="star"></Icon>
                    </template>
                    Starred
                </Item>
                <Divider />
                <Item>
                    <template slot="footer">
                        <Icon type="star"></Icon>
                    </template>
                    Sent mail Sent mail Sent mail Sent mail Sent mail Sent mail Sent mail
                    Sent mail
                    Sent mailSent mailSent mail

                    Sent mail
                </Item>
                <Item>
                    <template slot="footer">
                        <Icon type="star"></Icon>
                    </template>
                    Trash
                </Item>
                <Item>
                    <template slot="footer">
                        <Icon type="star"></Icon>
                    </template>
                    Spam
                </Item>
                <Item>
                    <template slot="footer">
                        <Icon type="star"></Icon>
                    </template>
                    Follow up
                </Item>
            </List>
        `
    }

> 不带边框

    export default {
        template: `
            <List border="{{false}}">
                <Item>
                    <template slot="header">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    1 号员工
                </Item>
                <Item on-click="itemClick()" active="{{!!active}}">
                    <template slot="header">
                        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                    </template>
                    2 号员工
                </Item>
                <Item>
                    <template slot="header">
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

> 聊天列表

    export default {
        template: `
            <div class="list-wrapper">
                <List>
                    <template slot="subHeader">
                        最近聊天记录
                    </template>
                    <Item>
                        <template slot="header">
                            <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                        </template>
                        <template slot="footer">
                            <Icon type="chatbox"></Icon>
                        </template>
                        Junmer
                    </Item>
                    <Item>
                        <template slot="header">
                            <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                        </template>
                        <template slot="footer">
                            <Icon type="chatbox"></Icon>
                        </template>
                        Leon Lu
                    </Item>
                    <Item>
                        <template slot="header">
                            <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                        </template>
                        <template slot="footer">
                            <Icon type="chatbox"></Icon>
                        </template>
                        Zhiqiang Zhang
                    </Item>
                    <Item>
                        <template slot="header">
                            <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                        </template>
                        <template slot="footer">
                            <Icon type="chatbox"></Icon>
                        </template>
                        CK Yau
                    </Item>
                </List>
                <Divider />
                <List>
                    <template slot="subHeader">
                        历史聊天记录
                    </template>
                    <Item>
                        <template slot="header">
                            <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
                        </template>
                        <template slot="footer">
                            <Icon type="chatbox"></Icon>
                        </template>
                        Huiquan Huang
                    </Item>
                </List>
            </div>
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

> 嵌套列表

    export default {
        template: `
            <div class="list-wrapper">
                <List>
                    <Item>
                        <template slot="header">
                            <Icon type="star"></Icon>
                        </template>
                        Sent mail
                    </Item>
                    <Item>
                        <template slot="header">
                            <Icon type="star"></Icon>
                        </template>
                        Drafts
                    </Item>
                    <Item>
                        <template slot="footer">
                            <Icon type="chevron-down"></Icon>
                        </template>
                        Inbox
                        <template slot="nested">
                            <Item>
                                <template slot="header">
                                    <Icon type="star"></Icon>
                                </template>
                                Starred
                            </Item>
                        </template>
                        <template slot="nested">
                            <Item>
                                <template slot="header">
                                    <Icon type="star"></Icon>
                                </template>
                                Starred
                            </Item>
                        </template>
                        <template slot="nested">
                            <Item>
                                <template slot="footer">
                                    <Icon type="chevron-down"></Icon>
                                </template>
                                Starred
                                <template slot="nested">
                                    <Item>
                                        <template slot="header">
                                            <Icon type="chevron-down"></Icon>
                                        </template>
                                        Starred
                                    </Item>
                                </template>
                            </Item>
                        </template>
                    </Item>
                </List>
            </div>
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
#### API

> slot

参数 | 说明
---|---
header | 列表的 item 的 header
footer | 列表的 item 的 footer

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
nestedItemClick | 触发 item toggle 的时候触发 | -
