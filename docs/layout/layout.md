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

> sider 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    <Menu style="height: 300px;" activeName="question">
                        <MenuItem name="question">
                            问题
                        </MenuItem>
                        <MenuItem name="reply">
                            回答
                        </MenuItem>
                        <MenuItem name="demand">
                            项目
                        </MenuItem>
                        <MenuItem name="post">
                            文章
                        </MenuItem>
                        <MenuItem name="pinglun">
                            评论
                        </MenuItem>
                        <MenuItem name="issue">
                            反馈
                        </MenuItem>
                        <MenuItem name="report">
                            举报
                        </MenuItem>
                    </Menu>
                </Header>
                <Layout>
                    <Sider>
                        <Menu style="height: 300px;" mode="vertical" activeName="question">
                            <MenuItem name="question">
                                问题
                            </MenuItem>
                            <MenuItem name="reply">
                                回答
                            </MenuItem>
                            <MenuItem name="demand">
                                项目
                            </MenuItem>
                            <MenuItem name="post">
                                文章
                            </MenuItem>
                            <MenuItem name="pinglun">
                                评论
                            </MenuItem>
                            <MenuItem name="issue">
                                反馈
                            </MenuItem>
                            <MenuItem name="report">
                                举报
                            </MenuItem>
                        </Menu>
                    </Sider>
                    <Content>
                        Content
                    </Content>
                </Layout>

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

