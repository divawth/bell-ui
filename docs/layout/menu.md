### Menu 导航菜单

为页面和功能提供导航的菜单列表。


> 顶部导航

    export default {
        isViewFullBlock: true,
        data: {
            theme: 'dark'
        },
        template: `
            <div class="bell-template">
                <Menu theme="{{theme}}" activeName="1">
                    <MenuItem name="1">
                        <Icon type="paper"></Icon>
                        内容管理
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="people"></Icon>
                        用户管理
                    </MenuItem>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                    <MenuItem name="4">
                        <Icon type="settings"></Icon>
                        <a href="https://ng.ant.design" target="_blank">综合设置</a>
                    </MenuItem>
                </Menu>
                <br>
                <p>切换主题</p>
                <RadioGroup model="theme" type="info">
                    <Radio label="light" value="light"></Radio>
                    <Radio label="dark" value="dark" checked></Radio>
                    <Radio label="primary" value="primary"></Radio>
                </RadioGroup>
                <style>
                    .bell-icon {
                        margin-right: 6px;
                    }
                </style>
            </div>
        `,
    }

> 内嵌菜单

    export default {
        isViewFullBlock: true,
        template: `
            <div class="bell-template" style="width: 200px;">
                <Menu theme="light" mode="vertical">
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-paper" />
                            内容管理
                        </template>
                        <MenuItem name="1-1">文章管理</MenuItem>
                        <MenuItem name="1-2">评论管理</MenuItem>
                        <MenuItem name="1-3">举报管理</MenuItem>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-people" />
                            用户管理
                        </template>
                        <MenuItem name="2-1">新增用户</MenuItem>
                        <MenuItem name="2-2">活跃用户</MenuItem>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-stats" />
                            统计分析
                        </template>
                        <MenuGroup title="使用">
                            <MenuItem name="3-1">新增和启动</MenuItem>
                            <MenuItem name="3-2">活跃分析</MenuItem>
                            <MenuItem name="3-3">时段分析</MenuItem>
                        </MenuGroup>
                        <MenuGroup title="留存">
                            <MenuItem name="3-4">用户留存</MenuItem>
                            <MenuItem name="3-5">流失用户</MenuItem>
                        </MenuGroup>
                    </Submenu>
                </Menu>
                <style>
                    .bell-icon {
                        margin-right: 6px;
                    }
                </style>
            </div>
        `,
    }
    

#### API

> Menu props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
mode | 菜单类型 | string | horizontal（水平） 和 vertical（垂直） | horizontal
theme | 主题 | string | light、dark、primary 其中 primary 只适用于 mode="horizontal"| dark
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


