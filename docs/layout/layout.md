<a href="./example/layout.html">
    layout
</a>

> 基础用法

    export default {
        template: `
            <div>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider hide-trigger>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Content>Content</Content>
                        <Sider hide-trigger>Sider</Sider>
                    </Layout>
                    <Footer>Footer</Footer>
                </Layout>
                <br><br>
                <Layout>
                    <Sider hide-trigger>Sider</Sider>
                    <Layout>
                        <Header>Header</Header>
                        <Content>Content</Content>
                        <Footer>Footer</Footer>
                    </Layout>
                </Layout>
                <br><br>
                <Layout>
                    <Header>Header</Header>
                    <Layout>
                        <Sider hide-trigger>Sider</Sider>
                        <Content>Content</Content>
                    </Layout>
                </Layout>
            </div>
        `
    }

> 固定头部

    export default {
        template: `
            <div class="layout">
                <Layout>
                    <Header>
                        <Menu mode="horizontal" theme="dark" active-name="1">
                            <div class="layout-logo"></div>
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
                        </Menu>
                    </Header>

                    <Content style="margin: 88px 20px 0; background: #fff; min-height: 500px;">
                        Content
                    </Content>

                    <Footer className="layout-footer-center">
                        2011-2016 &copy; TalkingData
                    </Footer>
                </Layout>
            </div>
        `
    }


> 固定侧边栏

    export default {
        template: `
            <div class="layout">
                <Sider>
                    <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                Item 1
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </Sider>
                <Layout :style="{marginLeft: '200px'}">
                    <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                    <Content :style="{padding: '0 16px 16px'}">
                        <Breadcrumb :style="{margin: '16px 0'}">
                            <BreadcrumbItem>Home</BreadcrumbItem>
                            <BreadcrumbItem>Components</BreadcrumbItem>
                            <BreadcrumbItem>Layout</BreadcrumbItem>
                        </Breadcrumb>
                        <Card>
                            <div style="height: 600px">Content</div>
                        </Card>
                    </Content>
                </Layout>
            </div>
        `
    }