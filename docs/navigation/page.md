
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
