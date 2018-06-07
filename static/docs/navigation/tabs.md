> 基础用法

    export default {
        template: `
            <Tabs value="name1">
                <TabPanel label="标签一" name="name1">标签一的内容</TabPanel>
                <TabPanel label="标签二" name="name2">标签二的内容</TabPanel>
                <TabPanel label="标签三" name="name3">标签三的内容</TabPanel>
            </Tabs>
        `
    }

#### API

> Tabs props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | tabs 类型 | String | line 和 card | line
size | 大小 | String | - | -
value | 当前选中的 tab 的 name 值 | String, Number | - | -
closable | 是否可以关闭页签，仅在 type="card" 时有效 | Boolean | - | false

> Tabs Events

事件名称 | 说明 | 回调参数
---|---|---
onClick | 切换 tab 的时候回调 | name
onTabRemove | 删除 tab 的时候回调（仅开启 closable 时有效） | name

> TabPanel props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 用于标识当前面板，对应 value，默认为其索引值 | String | - | -
label | 选项卡头显示文字 | String | - | -
icon | 选项卡图标 | String | - | -
disabled | 是否禁用该选项卡 | Boolean | - | false
closable | 是否可以关闭页签，仅在 type="card" 时有效 | Boolean | - | false



