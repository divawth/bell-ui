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

