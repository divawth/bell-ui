# Basic 1


## Layout 布局

<a href="./example/layout.html">
    layout
</a>

# Form

## Button 按钮

<a href="./example/button.html">
    Button
</a>

<!-- <iframe frameborder=0 width=800 height=500 marginheight=0 marginwidth=0 scrolling=no src=./example/button.html></iframe>
 -->
> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | primary、ghost、dashed、text、info、success、warning、error | -
size | 按钮大小 | string | large、small | -
shape | 按钮形状 | string | circle | -
long | 开启后，按钮的长度为 100% | boolean | - | false
label | 话术 | string | - | -
disabled | 设置按钮为禁用状态 | boolean | - | false
loading | 设置按钮为加载中状态 | boolean | - | -
simple | 是否启用简洁版本 | boolean | - | false
className | 样式类 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
on-click | 点击按钮的回调 | -

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


> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | text、password、textarea、url、email、date | text
size | 按钮大小 | string | large、small | -
model | input 的值 | string | - | -
placeholder | placeholder | string | - | -
rows | 行数 | string | - | -
disabled | 设置按钮为禁用状态 | boolean | - | false

> Events

事件名称 | 说明 | 回调参数
---|---|---
on-click | 点击按钮的回调 | -

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
size | 大小 | string | small, large, - | -
disabled | 是否禁用 | boolean | - | false
style | 自定义样式 | string | - | -
placement | 弹窗的展开方向 | string | bottom 和 top | -

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
placement | 弹窗的展开方向 | string | bottom 和 top | -

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

## Card 卡片

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

<a href="./example/card.html">
    Card
</a>

### CardHeader

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题文字 | string | - | -
titleClass | 标题样式 | string | - | -
subTitle | 副标题文字 | string | - | -
subTitleClass | 副标题样式 | string | - | -

> children

名称 | 说明
---|---
Avatar | 用于放置 Avatar 组件

### CardMedia

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题文字 | string | - | -
titleClass | 标题样式 | string | - | -
subTitle | 副标题文字 | string | - | -
subTitleClass | 副标题样式 | string | - | -

> children

名称 | 说明
---|---
default | 用于放置图片等媒体元素

### CardTitle

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题文字 | string | - | -
titleClass | 标题样式 | string | - | -
subTitle | 副标题文字 | string | - | -
subTitleClass | 副标题样式 | string | - | -

### CardText

> children

名称 | 说明
---|---
default | 用于放置大段介绍性的文字

### CardActions

> children

名称 | 说明
---|---
default | 用于放置按钮


## Avatar 头像

<a href="./example/avatar.html">
    Avatar
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, large | -
src | 图片地址 | string | - | -
shape | 形状 | string | circle | -
className | 添加类 | string | - | -
fontSize | 图标大小 | number | - | 26
backgroundColor | 背景色 | string | - | #ccc
color | 文字颜色 | string | - | -


# Other

## Spinner 加载中

<a href="./example/spinner.html">
    Spinner
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, tiny | -
text | 文字 | string | - | -
fix | 是否固定 | string | - | -
type | 风格 | string | circle, - | -


## BackTop 返回顶部

<a href="./example/backTop.html">
    BackTop
</a>

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
bottom | 组件距离底部的距离 | number | - | 30
right | 组件距离右部的距离 | number | - | 30
height | 页面滚动高度达到该值时才显示BackTop组件 | number | - | 400
className | 给组件添加一个类 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 关闭 alert 时触发的事件 | -

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

## Menu 导航菜单


## Radio 单选框

## Switch 开关

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
