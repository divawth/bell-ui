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
                                <Icon type="navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="paper"></Icon>
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
                <Footer class="layout-footer-center">2011-2016 Bell-UI</Footer>
            </Layout>
        `,
    }

> 顶部-侧边布局-通栏 

同样拥有顶部导航及侧边栏，区别是两边未留边距，多用于应用型的网站

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
                                <Icon type="navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon type="keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon type="analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon type="paper"></Icon>
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Header>
                <Layout>
                    <Sider style="background: #fff">
                        <Menu mode="vertical" theme="dark" active-name="1">
                            <div class="layout-nav">
                                <MenuItem name="1">
                                    <Icon type="navigate"></Icon>
                                    Item 1
                                </MenuItem>
                                <MenuItem name="2">
                                    <Icon type="keypad"></Icon>
                                    Item 2
                                </MenuItem>
                                <MenuItem name="3">
                                    <Icon type="analytics"></Icon>
                                    Item 3
                                </MenuItem>
                                <MenuItem name="4">
                                    <Icon type="paper"></Icon>
                                    Item 4
                                </MenuItem>
                            </div>
                        </Menu>
                    </Sider>
                    <Layout style="padding: 0 24px 24px">
                        <Breadcrumb>
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Components</BreadcrumbItem>
                            <BreadcrumbItem>Layout</BreadcrumbItem>
                        </Breadcrumb>
                        <Content style="padding: 24px; min-height: 280px; background: #fff;">
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        `,
    }

> 侧边布局

侧边两列式布局。页面横向空间有限时，侧边导航可收起。

侧边导航在页面布局上采用的是左右的结构，一般主导航放置于页面的左侧固定位置，辅助菜单放置于工作区顶部。内容根据浏览器终端进行自适应，能提高横向空间的使用率，但是整个页面排版不稳定。侧边导航的模式层级扩展性强，一、二、三级导航项目可以更为顺畅且具关联性的被展示，同时侧边导航可以固定，使得用户在操作和浏览中可以快速的定位和切换当前位置，有很高的操作效率。但这类导航横向页面内容的空间会被牺牲一部份。

    export default {
        isViewFullBlock: true,
        template: `
            <Layout className="layout-demo-wrapper">
                <Sider collapsible>
                    <Menu mode="vertical" theme="dark" active-name="1">
                        <div class="layout-nav">
                            <MenuItem name="1">
                                <Icon style="margin-right: 6px;" type="navigate"></Icon>
                                Item 1
                            </MenuItem>
                            <MenuItem name="2">
                                <Icon style="margin-right: 6px;" type="keypad"></Icon>
                                Item 2
                            </MenuItem>
                            <MenuItem name="3">
                                <Icon style="margin-right: 6px;" type="analytics"></Icon>
                                Item 3
                            </MenuItem>
                            <MenuItem name="4">
                                <Icon style="margin-right: 6px;" type="paper"></Icon>
                                Item 4
                            </MenuItem>
                        </div>
                    </Menu>
                </Sider>
                <Layout>
                    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                    <Content :style="{padding: '0 16px 16px'}">
                        <Breadcrumb :style="{margin: '16px 0'}">
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Components</BreadcrumbItem>
                            <BreadcrumbItem>Layout</BreadcrumbItem>
                        </Breadcrumb>
                        <Card>
                            <div style="height: 300px">Content</div>
                        </Card>
                    </Content>
                </Layout>
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
