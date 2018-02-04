<a href="./example/layout.html">
    layout
</a>

> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        `
    }

> 有侧边栏

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        `
    }

> sider 在右边

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
        `
    }

> sider 在左边

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
        `
    }

> 没有 footer

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider hide-trigger>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        `
    }

> header 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Header>
                    <Menu style="width: 240px;" mode="horizontal" activeName="1">
                        <MenuItem name="1">
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            Item 4
                        </MenuItem>
                    </Menu>
                </Header>

                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        `
    }

> sider 里面有 item

    export default {
        isViewFullBlock: true,
        template: `
            <Layout>
                <Sider>
                    <Menu style="height: 240px;" mode="vertical" activeName="1">
                        <MenuItem name="1">
                            Item 1
                        </MenuItem>
                        <MenuItem name="2">
                            Item 2
                        </MenuItem>
                        <MenuItem name="3">
                            Item 3
                        </MenuItem>
                        <MenuItem name="4">
                            Item 4
                        </MenuItem>
                    </Menu>
                </Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        <Card>
                        </Card>
                    </Content>
                </Layout>
            </Layout>
        `
    }
