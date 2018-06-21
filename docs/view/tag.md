> 基本用法

    export default {
        template: `
            <div>
                <Tag size="large">大标签</Tag>
                <Tag>中标签</Tag>
                <Tag size="small">小标签</Tag>
                <Tag size="tiny">超小标签</Tag>
            </div>
        `
    }

> closable

    export default {
        template: `
            <div>
                <Tag closable size="large">大标签</Tag>
                <Tag closable>中标签</Tag>
                <Tag closable size="small">小标签</Tag>
                <Tag closable size="tiny">超小标签</Tag>
            </div>
        `
    }

> type

    export default {
        template: `
            <div>
                <Tag type="error">标签</Tag>
                <Tag type="warning">标签</Tag>
                <Tag type="success">标签</Tag>
                <Tag type="danger">标签</Tag>
                <Tag type="info">标签</Tag>
                <Tag type="primary">标签</Tag>
            </div>
        `
    }

> border

    export default {
        template: `
            <div>
                <Tag border closable type="error">标签</Tag>
                <Tag border closable type="warning">标签</Tag>
                <Tag border closable type="success">标签</Tag>
                <Tag border closable type="danger">标签</Tag>
            </div>
        `
    }

> checkable

    export default {
        template: `
            <div>
                <Tag checkable type="error">标签</Tag>
                <Tag checkable type="warning">标签</Tag>
                <Tag checkable type="success">标签</Tag>
                <Tag checkable type="danger">标签</Tag>
            </div>
        `
    }

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 主题 | string | info、success、warning、error | ''
closable | 是否可以关闭 | boolean | - | true
checkable | 标签是否可以选择 | boolean | - | false
border | 关闭按钮旁边加一个border | boolean | - | false
checked | 标签的选中状态 | boolean | - | true
size | 尺寸 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击 close 时触发 | -
check | checked 改变时触发 | -
