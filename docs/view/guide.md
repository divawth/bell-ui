> 基本用法

```js
export default {
  template: `
    <Guide
      title="功能标题"
      style="background-color:#f8f8f8"
    >
      解释这个功能具体是做什么的解释这个功能具体是做什么的解释这个功能具体是做什么的解释这个功能具体是做什么的解释这个功能具体是做什么的

      <template slot="extra">
        <Button size="small" type="primary">
          操作文档
        </Button>
      </template>
      <template slot="footer">
        <Text type="muted">
          启用此功能
        </Text>
        <Switch
          size="small"
        />
      </template>
    </Guide>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
extra | 自定义右上角内容
children | 自定义内容区
footer | 自定义底部内容
