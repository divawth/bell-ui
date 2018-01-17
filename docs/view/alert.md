
<a href="./example/alert.html">
    Alert
</a>


    export default {
        template: `
        <div>
            <Alert>An info prompt</Alert>
            <Alert type="success">A success prompt</Alert>
            <Alert type="warning">A warning prompt</Alert>
            <Alert type="error">An error prompt</Alert>
        </div>
        `
    }



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
