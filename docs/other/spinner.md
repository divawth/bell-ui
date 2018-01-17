> 基础用法

    export default {
        template: `
            <Spinner></Spinner>
        `
    }

> 设置大小

    export default {
        template: `
            <div>
                <Spinner size="small"></Spinner>
                <Spinner></Spinner>
                <Spinner size="large"></Spinner>
            </div>
        `
    }

> 设置文字

    export default {
        template: `
            <div>
                <Spinner size="small" text="加载中..."></Spinner>
                <Spinner text="加载中..."></Spinner>
                <Spinner size="large" text="加载中..."></Spinner>
            </div>
        `
    }

> 设置文字 loading

    export default {
        template: `
            <div style="">
                <Spinner size="large" text="Loading" type="circle"></Spinner>
            </div>
        `
    }



> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, tiny | -
text | 文字 | string | - | -
fix | 是否固定 | string | - | -
type | 风格 | string | circle, - | -
