### Layout 布局 

协助进行页面级整体布局

设计规则

#### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏左放置。
- 顶部导航（大部分系统）: 一级导航高度 64px，二级导航 48px。
- 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。
- 顶部导航高度的范围计算公式为：48+8n。
- 侧边导航的宽度计算公式：200+8n。

#### 交互
- 一级导航和末级的导航需要在可视化的层面被强调出来。
- 当前项应该在呈现上优先级最高。
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级。
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式

#### 视觉
导航样式上需要根据信息层级合理的选择样式：
- 大色块强调
建议用于底色为深色系时，当前页面父级的导航项。
- 高亮火柴棍
当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。
- 字体高亮变色
从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。
- 字体放大
12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

#### 组件概述
- Layout 下面的组件只能在 Layout 中使用。
- Header 顶部布局。 
- Sider 侧边栏。
- Content 内容部分。
- Footer 底部布局。

> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo">
                <Header>
                    <template slot="left">
                        Header Left
                    </template>
                    <template slot="center">
                        Header Center
                    </template>
                    <template slot="right">
                        Header Right
                    </template>
                </Header>
                <Content>
                    Content
                </Content>
                <Footer>
                    Footer
                </Footer>
            </Layout>
        `,
    }

> 有侧边栏

    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo">
                <Header>
                    Header
                </Header>
                <Layout className="layout-demo" hasSider>
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
            </Layout>
        `,
    }

> sider 在右边

    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo">
                <Header>
                    Header
                </Header>
                <Layout className="layout-demo">
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
            </Layout>
        `,
    }

> Sider 在最左侧

    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo">
                <Sider>Sider</Sider>
                <Layout className="layout-demo">
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        `,
    }

> 上中下布局

一般主导航放置于页面的顶端，从左自右依次为：logo、一级导航项、辅助菜单（用户、设置、通知等）。通常将内容放在固定尺寸（例如：1200px）内，整个页面排版稳定，不受用户终端显示器影响；上下级的结构符合用户上下浏览的习惯，也是较为经典的网站导航模式。页面上下切分的方式提高了主工作区域的信息展示效率，但在纵向空间上会有一些牺牲。此外，由于导航栏水平空间的限制，不适合那些一级导航项很多的信息结构。

    
    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo-wrapper">
                <Header>
                    <template slot="left">
                        <div class="layout-logo"></div>
                    </template>
                    <Menu mode="horizontal" theme="dark" active-name="1">
                        
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="ios-paper"></Icon>
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Content :style="{padding: '0 50px'}">
                    <Breadcrumb :style="{margin: '20px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div style="min-height: 200px;">
                            Content
                        </div>
                    </Card>
                </Content>
                <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
            </Layout>
        `,
    }

> header 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    <Menu theme="{{theme1}}" activeName="1">
                        <MenuItem name="1">
                            <Icon type="ios-paper"></Icon>
                            内容管理
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="ios-people"></Icon>
                            用户管理
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="stats-bars"></Icon>
                            统计分析
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="settings"></Icon>
                            综合设置
                        </MenuItem>
                    </Menu>
                </Header>
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
            </Layout>
        `,
    }

> Header Slot

参数 | 说明
---|---
children | 自定义内容
left | 自定义左边内容
right | 自定义右边内容
center | 自定义中间内容

> Sider Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
collapsible | 是否可收起，设为false后，默认触发器会隐藏，且响应式布局不会触发 | boolean | - | false
className | 自定义样式类 | string | - | -
style | 自定义样式 | string | - | -

> Sider Events

事件名称 | 说明 | 回调参数(data)
---|---|---
collapse | 点击按钮的回调 | isCollapsed

> Footer Slot

参数 | 说明
---|---
children | 自定义内容
