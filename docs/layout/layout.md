> 基础用法

<html>
    <div class="bell-layout bell-row column">
        <div class="bell-layout-header bell-col bell-col-span-24">
            header
        </div>
        <div class="bell-layout-content bell-col bell-col-span-24">
            content
        </div>
        <div class="bell-layout-footer bell-col bell-col-span-24">
            footer
        </div>
    </div>
</html>

> 有侧边栏

<html>
    <div class="bell-layout bell-row column">
        <div class="bell-layout-header bell-col bell-col-span-24">
            header
        </div>
        <div class="bell-layout bell-row bell-col-span-24">
            <div class="bell-layout-sider bell-col-span-6">
                sider
            </div>
            <div class="bell-layout-content bell-col-span-18">
                content
            </div>
        </div>
        <div class="bell-layout-footer bell-col bell-col-span-24">
            footer
        </div>
    </div>
</html>

> sider 在右边

<html>
    <div class="bell-layout bell-row column">
        <div class="bell-layout-header bell-col bell-col-span-24">
            header
        </div>
        <div class="bell-layout bell-row bell-col-span-24">
            <div class="bell-layout-content bell-col-span-18">
                content
            </div>
            <div class="bell-layout-sider bell-col-span-6">
                sider
            </div>
        </div>
        <div class="bell-layout-footer bell-col bell-col-span-24">
            footer
        </div>
    </div>
</html>

> sider 在左边

<html>
    <div class="bell-layout bell-row">
        <div class="bell-layout-sider bell-col-span-6">
            sider
        </div>
        <div class="bell-layout bell-row bell-col-span-18 column">
            <div class="bell-layout-header bell-col bell-col-span-24">
                header
            </div>
            <div class="bell-layout-content bell-col-span-18">
                content
            </div>
            <div class="bell-layout-footer bell-col bell-col-span-24">
                footer
            </div>
        </div>
    </div>
</html>

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
