# Basic

## Layout 布局

<a href="./example/layout.html">
    layout
</a>

## Color 色彩

为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

> 主色

<html>
    <style type="text/css">
        .card {
            display: inline-block;
            margin: 10px;
            color: #fff;
            padding: 10px;
            width: 200px;
            border-radius: 4px;
            line-height: 30px;
            font-size: 18px;
        }
    </style>
    <div class="card" style="background-color: #1c90f3;">
        Primary
        <div style="font-size: 14px;">#1c90f3</div>
    </div>
</html>

> 辅助色

<html>
    <style type="text/css">
        .card {
            display: inline-block;
            margin: 10px;
            color: #fff;
            padding: 10px;
            width: 200px;
            border-radius: 4px;
            line-height: 30px;
            font-size: 18px;
        }
    </style>
    <div class="card" style="background-color: #57a3f3;">
        Info
        <div style="font-size: 14px;">#57a3f3</div>
    </div>
    <div class="card" style="background-color: #19be6b;">
        Success
        <div style="font-size: 14px;">#19be6b</div>
    </div>
    <div class="card" style="background-color: #ff9900;">
        Warning
        <div style="font-size: 14px;">#ff9900</div>
    </div>
    <div class="card" style="background-color: #ed3f14;">
        Error
        <div style="font-size: 14px;">#ed3f14</div>
    </div>
    <div class="card" style="background-color: #f7f7f7; color: rgba(0,0,0,0.87)">
        Default
        <div style="font-size: 14px;">#f7f7f7</div>
    </div>
</html>

> 中性色

包括了文字，边框，背景，阴影的颜色

<html>
    <style type="text/css">
        .card {
            display: inline-block;
            margin: 10px;
            color: #fff;
            padding: 10px;
            width: 200px;
            border-radius: 4px;
            line-height: 30px;
            font-size: 18px;
        }
    </style>
    <div class="card" style="background-color: #212121;">
        标题
        <div style="font-size: 14px;">#212121</div>
    </div>
    <div class="card" style="background-color: #757575;">
        正文
        <div style="font-size: 14px;">#757575</div>
    </div>
    <div class="card" style="background-color: #A8A8A8;">
        失效色
        <div style="font-size: 14px;">#A8A8A8</div>
    </div>
    <div class="card" style="background-color: #CCCCCC;color: rgba(0,0,0,0.87)">
        boxShadowColor
        <div style="font-size: 14px;">#CCCCCC</div>
    </div>
    <div class="card" style="background-color: #dddee1;color: rgba(0,0,0,0.87)">
        borderColor
        <div style="font-size: 14px;">#dddee1</div>
    </div>
    <div class="card" style="background-color: #e9eaec;color: rgba(0,0,0,0.87)">
        Divider
        <div style="font-size: 14px;">#e9eaec</div>
    </div>
    <div class="card" style="background-color: #f8f8f8;color: rgba(0,0,0,0.87)">
        背景色
        <div style="font-size: 14px;">#f8f8f8</div>
    </div>
</html>

## Font 字体

对字体进行统一规范，力求在不同平台、浏览器下能显示出其最佳的效果。

> 字体大小

<a href="./example/font.html">
    Font
</a>

<html>
    <table class="bell-table">
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td style="font-size: 28px">用 Bell 快速搭建页面</td>
                <td>28px</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="font-size: 20px">用 Bell 快速搭建页面</td>
                <td>20px</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="font-size: 16px">用 Bell 快速搭建页面</td>
                <td>16px</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="font-size: 14px">用 Bell 快速搭建页面</td>
                <td>14px</td>
            </tr>
            <tr>
                <td>textSmall 正文</td>
                <td style="font-size: 13px">用 Bell 快速搭建页面</td>
                <td>13px</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="font-size: 12px">用 Bell 快速搭建页面</td>
                <td>12px</td>
            </tr>
        </tbody>
    </table>
</html>

> 字体基本色/色彩对比度

最基本的常识是，相同颜色的背景和文字是很难阅读的。但有些人不知道的是，带有过强对比度的文本会有些炫目，同样难以阅读。这一点在深色背景下尤其明显。

要获得良好的辨识度，文本应当满足一个最低的对比度，也就是4.5:1（依据明度计算）。7:1的对比度是最适合阅读的。

这些色彩的组合同样要考虑到某些非典型用户对于对比度的不同反应。

<html>
    <table class="bell-table">
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td style="font-size: 28px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="font-size: 20px; color: rgba(0,0,0,.87); font-weight: bold;">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="font-size: 16px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="font-size: 14px; color: rgba(0,0,0,.87); font-weight: bold;">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>textSmall 正文</td>
                <td style="font-size: 13px; color: rgba(0,0,0,.87);">用 Bell 快速搭建页面</td>
                <td>0.87</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="font-size: 12px; color: rgba(0,0,0,.54);">用 Bell 快速搭建页面</td>
                <td>0.54</td>
            </tr>
            <tr>
                <td>失效文字</td>
                <td style="font-size: 12px; color: rgba(0,0,0,.37);">用 Bell 快速搭建页面</td>
                <td>0.34</td>
            </tr>
        </tbody>
    </table>
</html>

> 行高

行高是通过每个样式各自的尺寸和粗细决定的，以获得良好的可读性和合适的间距。只有“正文”、“小标题”、“正文(small)”等类似的样式中才允许使用自动换行。其它所有样式应当以单行形式出现。

<html>
    <table class="bell-table">
        <tbody>
            <tr>
                <td>HeadLine 主标题</td>
                <td style="width: 130px;font-size: 28px; color: rgba(0,0,0,.87); line-height: 40px;">用 Bell 快速搭建页面</td>
                <td>28px - 40px</td>
            </tr>
            <tr>
                <td>Title 标题</td>
                <td style="width: 130px;font-size: 18px; color: rgba(0,0,0,.87); line-height: 30px;">用 Bell 快速搭建页面</td>
                <td>18px - 30px</td>
            </tr>
            <tr>
                <td>subHead 小标题</td>
                <td style="width: 130px;font-size: 16px; color: rgba(0,0,0,.87); line-height: 28px;">用 Bell 快速搭建页面</td>
                <td>16px - 28px</td>
            </tr>
            <tr>
                <td>text 正文</td>
                <td style="width: 130px;font-size: 14px; color: rgba(0,0,0,.87); line-height: 24px;">用 Bell 快速搭建页面</td>
                <td>14px - 24px</td>
            </tr>
            <tr>
                <td>textSmall 正文(small)</td>
                <td style="width: 130px;font-size: 13px; color: rgba(0,0,0,.87); line-height: 20px;">用 Bell 快速搭建页面</td>
                <td>13px - 20px</td>
            </tr>
            <tr>
                <td>caption 辅助文字</td>
                <td style="width: 130px;font-size: 12px; color: rgba(0,0,0,.54); line-height: 18px;">用 Bell 快速搭建页面</td>
                <td>12px - 18px</td>
            </tr>
        </tbody>
    </table>
</html>

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


## Message 全局提示


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