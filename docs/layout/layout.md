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
                    <Menu theme="{{theme1}}" style="height: 300px;" activeName="question">
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
            <Layout style="height: 400px;">
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
                    <Sider collapsible>
                        <Menu mode="vertical" active-name="1-2" theme="dark">
                            <MenuItem name="1-1">
                                <span style="display: none;">
                                    我
                                </span>
                                <span>Option 1</span>
                            </MenuItem>
                            <MenuItem name="1-2">
                                <Icon type="search"></Icon>
                                <span>Option 2</span>
                            </MenuItem>
                            <MenuItem name="1-3">
                                <Icon type="settings"></Icon>
                                <span>Option 3</span>
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content>
                        <Header style="background-color: #fff; boxShadow: 0 2px 3px 2px rgba(0,0,0,.1);"></Header>
                        <Content style="padding: 0 16px 16px">
                            Content
                        </Content>
                    </Content>
                </Layout>
            </div>
        `,
    }

