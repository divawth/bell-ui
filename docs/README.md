# Basic

## Layout 布局

<a href="./example/layout.html">
    layout
</a>

# Form

## Button 按钮

<a href="./example/button.html">
    Button
</a>

> 1.通过设置 type 为 primary、ghost、dashed、text、info、success、warning、error 创建不同样式的按钮，不设置为默认样式。

> 2.通过设置 shape 属性为 circle，可将按钮置为圆的形状。

> 3.通过设置size为large和small将按钮设置为大和小尺寸，不设置为默认（中）尺寸。

> 4.通过设置属性 long 可将按钮宽度设置为 100%。

> 5.通过添加disabled属性可将按钮设置为不可用状态。

> 6.通过添加 loading 属性可以让按钮处于加载中状态，后两个按钮在点击时进入加载状态。


## Breadcrumb 面包屑

<a href="./example/breadcrumb.html">
    Breadcrumb
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
to | 添加链接 | string | - | -
separator | 界定符 | string | - | '/'

## Input 输入框

<a href="./example/input.html">
    Input
</a>

> 1.通过设置 style 属性修改样式

> 2.修改 size 修改大小 small large

> 3.placeholder 修改 placeholder 值

> 4.修改 label 值

> 5.type 可取 input 和 textarea

> 6.rows type 为 textarea 时设置列数

> 7.disabled 状态


## Select 选择器

<a href="./example/select.html">
    Select
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
list | 列表, 比传参数 | array | - | -
model | 选中值 | string | - | -
defaultText | placeholder | string | - | -
size | 大小 | string | small, large, null | null
disabled | 是否禁用 | boolean | - | false
style | 自定义样式 | string | - | -

# Navigation

## Page 分页

<a href="./example/page.html">
    Page
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
total | 设置条数，必选参数 | string | - | -
current | 当前页码 | string | - | 1
pageSize | 每页条数 | string | - | 10
pageSizeOpts | 每页条数配置 | array | - | -
showSizer | 显示的每页数量选框 | boolean | - | false
showElevator | 显示快速跳转 | boolean | - | false
size | 大小 | string | small, tiny, null | null
simple | 是否启用简洁版本 | boolean | - | false
className | 样式类 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 页码改变的回调，返回改变后的页码 | page
onPageSizeChange | 页码改变的回调，返回改变后的页码 | pageSize

# View

## Alert 警告提示

<a href="./example/alert.html">
    Alert
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | info、success、warning、error | info
closable | 是否可以关闭 | boolean | - | true
center | 文字是否居中 | boolean | - | true
closeText | 关闭按钮自定义文本 | string | - | -
showIcon | 是否显示图标 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -

# Other

## Table 表格

1 表格最简单的用法 传data
2 表格会间隔显示不同颜色，用于区分不同行数据。传 stripe
3 添加表格的边框线。传 border
4 rowClassName columnClassName cellClassName
5 固定表格头部
6 selection 是否需要 input 列
7 loading
8 action

## DatePicker 日期选择器

## Avatar 头像

## BackTop 返回顶部

## Spin 加载中

## Menu 导航菜单


## Radio 单选框

## Switch 开关

## Select 选择器

## AutoComplete 自动完成

## Slider 滑块

## TimePicker 时间选择器

## Cascader 级联选择

## Transfer 穿梭框

## InputNumber 数字输入框

## Rate 评分

## Upload 上传

## ColorPicker 颜色选择器

## Form 表单

## Message 全局提示

## Notice 通知提醒

## Modal 对话框

## Progress 进度条

## Badge 徽标数

## Collapse 折叠面板

## Timeline 时间轴

## Tag 标签

## Tooltip 文字提示

## Poptip 气泡提示

## Carousel 走马灯

## Tree 树形控件

## Tabs 标签页

## Dropdown 下拉菜单

## Steps 步骤条

## LoadingBar 加载进度条

## Circle 进度环

## Affix 图钉

## Scroll 无限滚动