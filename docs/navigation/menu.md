为页面和功能提供导航的菜单列表，常用于网站顶部和左侧。

> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <div class="bell-template">
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
                <br>
                <p>切换主题</p>
                <RadioGroup model="theme1" type="info">
                    <Radio label="light" value="light"></Radio>
                    <Radio label="dark" value="dark" checked></Radio>
                    <Radio label="primary" value="primary"></Radio>
                </RadioGroup>

                <style>
                    .bell-icon {
                        margin-right: 10px;
                    }
                </style>
            </div>
        `,
    }


> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <div class="bell-template">
                <Row>
                    <Col span="8">
                        <Menu theme="{{theme2}}" mode="vertical" activeName="1">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-paper"></Icon>
                                    内容管理
                                </template>
                            </Submenu>

                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    用户管理
                                </template>
                            </Submenu>

                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    统计分析
                                </template>
                            </Submenu>
                        </Menu>
                    </Col>
                    <Col span="8">
                        <Menu theme="{{theme2}}" mode="vertical" activeName="1-2" :open-names="['1']">
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-paper"></Icon>
                                    内容管理
                                </template>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    用户管理
                                </template>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    统计分析
                                </template>
                            </Submenu>
                        </Menu>
                    </Col>
                    <Col span="8">
                        <Menu mode="vertical" theme="{{theme2}}" mode="vertical" open-names="['1']" accordion>
                            <Submenu name="1">
                                <template slot="title">
                                    <Icon type="ios-paper"></Icon>
                                    内容管理
                                </template>
                            </Submenu>
                            <Submenu name="2">
                                <template slot="title">
                                    <Icon type="ios-people"></Icon>
                                    用户管理
                                </template>
                            </Submenu>
                            <Submenu name="3">
                                <template slot="title">
                                    <Icon type="stats-bars"></Icon>
                                    统计分析
                                </template>
                            </Submenu>
                        </Menu>
                    </Col>
                </Row>
                <br>

                <p>Change theme</p>
                <RadioGroup model="theme2" type="info">
                    <Radio value="light">
                        light
                    </Radio>
                    <Radio value="dark" checked>
                        dark
                    </Radio>
                    <Radio value="primary">
                        primary
                    </Radio>
                </RadioGroup>
            </div>
        `,
    }


> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <div class="bell-template">
                <Menu mode="vertical" theme="{{theme3}}" activeName="1">
                    <MenuGroup title="内容管理">
                        <MenuItem name="1">
                            <Icon type="document-text"></Icon>
                            文章管理
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="chatbubbles"></Icon>
                            评论管理
                        </MenuItem>
                    </MenuGroup>
                    <MenuGroup title="统计分析">
                        <MenuItem name="3">
                            <Icon type="heart"></Icon>
                            用户留存
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="heart-broken"></Icon>
                            流失用户
                        </MenuItem>
                    </MenuGroup>
                </Menu>
                <br>
                <p>Change theme</p>
                <RadioGroup model="theme3" type="info">
                    <Radio value="light" type="info">light</Radio>
                    <Radio value="dark" type="info" checked>dark</Radio>
                </RadioGroup>
            </div>
        `,
    }

> 基础用法

    export default {
        isViewFullBlock: true,
        template: `
            <div class="bell-template">
                <Menu on-select="select()" theme="{{theme2}}" activeName="1-2" mode="vertical" openNames="['1']">
                    <Submenu name="1" isCollapsed>
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                            Navigation One
                        </template>
                        <MenuGroup title="Item 1">
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="Item 2">
                            <MenuItem name="1-3">Option 3</MenuItem>
                            <MenuItem name="1-4">Option 4</MenuItem>
                        </MenuGroup>
                    </Submenu>

                    <Submenu name="2" isCollapsed>
                        <template slot="title">
                            <Icon type="ios-filing"></Icon>
                            Navigation Two
                        </template>
                        <MenuItem name="2-1">Option 5</MenuItem>
                        <MenuItem name="2-2">Option 6</MenuItem>
                    </Submenu>

                    <Submenu name="4" isCollapsed>
                        <template slot="title">
                            <Icon type="ios-gear"></Icon>
                            Navigation Three
                        </template>
                        <MenuItem name="4-1">Option 9</MenuItem>
                        <MenuItem name="4-2">Option 10</MenuItem>
                        <MenuItem name="4-3">Option 11</MenuItem>
                        <MenuItem name="4-4">Option 12</MenuItem>
                    </Submenu>
                </Menu>
                <p>Change theme</p>
                <RadioGroup model="theme2" type="info">
                    <Radio value="light">
                        light
                    </Radio>
                    <Radio value="dark" checked>
                        dark
                    </Radio>
                    <Radio value="primary">
                        primary
                    </Radio>
                </RadioGroup>
            </div>
        `,
        methods: {
            select: function (name) {
                console.log(name)
            }
        }
    }

#### API

> Menu props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
mode | 菜单类型 | string | horizontal（水平） 和 vertical（垂直） | horizontal
theme | 主题 | string | light、dark、primary 其中 primary 只适用于 mode="horizontal"| light
activeName | 激活菜单的 name 值 | string, number | - | -
openNames | 展开的 Submenu 的 name 集合 | array | - | []


> Menu events

事件名 | 说明 | 返回值
---|---|---
select | 选择菜单（MenuItem）时触发 | name


> Menu Slot

参数 | 说明
---|---
children | 自定义内容

> MenuItem Slot

参数 | 说明
---|---
children | 自定义内容
leftIcon | 自定义左边的 icon


