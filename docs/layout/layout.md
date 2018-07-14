> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    Header
                </Header>
                <Content>
                    Content
                </Content>
                <Footer>
                    Footer
                </Footer>
                <style>
                    .bell-layout {
                        color: #fff;
                    }
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                        background-color: #f8f8f8;
                    }
                    .bell-layout-sider,
                    .bell-layout-footer,
                    .bell-layout-header {
                        background-color: #1e242b;
                    }
                </style>
            </Layout>
        `,
    }

> 有侧边栏

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    Header
                </Header>
                <Layout>
                    <Sider>
                        Sider
                    </Sider>
                    <Content>
                        Content
                    </Content>
                </Layout>
                <Footer>
                    Footer
                </Footer>
                <style>
                    .bell-layout {
                        color: #fff;
                    }
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                    }
                </style>
            </Layout>
        `,
    }

> sider 在右边

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    Header
                </Header>
                <Layout>
                    <Content>
                        Content
                    </Content>
                    <Sider>
                        Sider
                    </Sider>
                </Layout>
                <Footer>
                    Footer
                </Footer>
                <style>
                    .bell-layout {
                        color: #fff;
                    }
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                    }
                </style>
            </Layout>
        `,
    }

> header 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    <Menu theme="{{theme1}}" style="height: 62px;" activeName="question">
                        <MenuItem name="1">
                            MenuItem 1
                        </MenuItem>
                        <MenuItem name="3">
                            MenuItem 2
                        </MenuItem>
                        <MenuItem name="2">
                            MenuItem 3
                        </MenuItem>
                    </Menu>
                </Header>
                <style>
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                    }
                </style>
            </Layout>
        `,
    }

> sider 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout style="height: 200px;">
                <Sider>
                    <Menu style="height: 300px;" mode="vertical" activeName="question">
                        <MenuItem name="1">
                            MenuItem 1
                        </MenuItem>
                        <MenuItem name="3">
                            MenuItem 2
                        </MenuItem>
                        <MenuItem name="2">
                            MenuItem 3
                        </MenuItem>
                        <MenuItem name="4">
                            MenuItem 4
                        </MenuItem>
                    </Menu>
                </Sider>
                <Content>
                    Content
                </Content>

                <style>
                    .bell-menu-dark {
                        background-color: transparent;
                    }
                </style>
            </Layout>
        `,
    }

> 侧边布局

    export default {
        isViewFullBlock: true,
        template: `
            <div>
                <Layout style="height: 400px;">
                    <Sider collapsible on-collapse="collapse()">
                        <Menu mode="vertical" active-name="1-2" theme="dark">
                            <MenuItem name="1-1">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                            <MenuItem name="1-2">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                            <MenuItem name="1-3">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content>
                        <Content style="padding: 0 16px 16px">
                            Content
                        </Content>
                    </Content>
                </Layout>
            </div>
        `,
        methods: {
            collapse: function (event, data) {
                this.set({
                    isCollapsed: data.isCollapsed
                });
            }
        },
        data: function () {
            return {
                isCollapsed: false
            }
        }
    }

> 自定义的 trigger

    export default {
        isViewFullBlock: true,
        template: `
            <div>
                <Layout style="height: 400px;">
                    <Sider on-collapse="collapse()">
                        <template slot="trigger">
                            <div>
                            {{#if isCollapsed}}
                                <i class="bell-icon bell-icon-navicon-round"></i>
                            {{else}}
                                <i class="bell-icon bell-icon-navicon-round"></i>
                            {{/if}}
                            </div>
                        </template>

                        <Menu mode="vertical" active-name="1-2" theme="dark">
                            <MenuItem name="1-1">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                            <MenuItem name="1-2">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                            <MenuItem name="1-3">
                                {{#if !isCollapsed}}
                                    <Icon size="14" type="search"></Icon>
                                    <span style="padding-left: 10px;">
                                        Option 1
                                    </span>
                                {{else}}
                                    <Icon name="leftIcon" type="search" size="18"></Icon>
                                {{/if}}
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content>
                        <Content style="padding: 0 16px 16px">
                            Content
                        </Content>
                    </Content>
                </Layout>
            </div>
        `,
        methods: {
            collapse: function (event, data) {
                this.set({
                    isCollapsed: data.isCollapsed
                });
            }
        },
        data: function () {
            return {
                isCollapsed: false
            }
        }
    }

> Header

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    <template slot="left">
                        <img class="index-logo-srcnew" src="//www.baidu.com/img/baidu_jgylogo3.gif" alt="到百度首页" title="到百度首页">
                    </template>
                    <template slot="right">
                        <Button type="text" style="color: #fff;">
                            Right
                        </Button>
                    </template>
                    <template slot="center">
                        <Button type="text" style="color: #fff;">
                            Center 1
                        </Button>
                        <Button type="text" style="color: #fff;">
                            Center 2
                        </Button>
                        <Button type="text" style="color: #fff;">
                            Center 3
                        </Button>
                        <Button type="text" style="color: #fff;">
                            Center 4
                        </Button>
                    </template>
                </Header>
                <style>
                    .bell-layout {
                        color: #fff;
                    }
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                        background-color: #f8f8f8;
                    }
                    .bell-layout-sider,
                    .bell-layout-footer,
                    .bell-layout-header {
                        background-color: #1e242b;
                    }
                </style>
            </Layout>
        `,
    }

> Footer

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Footer>
                    <p style="font-size: 14px; line-height: 1; color: #ccc;">
                        Copyright © 2018（北京）科技有限公司 版权所有
                    </p>
                    <p style="font-size: 12px; line-height: 1; color: #ccc;">
                        联系方式 xxxxxxxx
                    </p>
                </Footer>
                <style>
                    .bell-layout {
                        color: #fff;
                    }
                    .bell-layout-content {
                        color: #000;
                        min-height: 100px;
                        line-height: 100px;
                        background-color: #f8f8f8;
                    }
                    .bell-layout-sider,
                    .bell-layout-footer,
                    .bell-layout-header {
                        background-color: #1e242b;
                    }
                </style>
            </Layout>
        `,
    }

> Layout Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Layout Slot

参数 | 说明
---|---
children | 自定义内容

> Header Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Header Slot

参数 | 说明
---|---
children | 自定义内容
left | 自定义左边内容
right | 自定义右边内容
center | 自定义中间内容

> Content Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Content Slot

参数 | 说明
---|---
children | 自定义内容

> Sider Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
collapsible | 是否可收起，设为false后，默认触发器会隐藏，且响应式布局不会触发 | boolean | - | false
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Sider Events

事件名称 | 说明 | 回调参数(data)
---|---|---
collapse | 点击按钮的回调 | isCollapsed

> Footer Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Footer Slot

参数 | 说明
---|---
children | 自定义内容
