#### Analysis 分析卡片

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <div>
      <Analysis title="总销售额" value="¥ 126,560" tooltip="指标说明">
        <template slot="content">
          <AnalysisField label="周同比" value="12%" up />
          <AnalysisField label="日同比" value="11%" down />
        </template>
        <template slot="footer">
          <AnalysisField label="日销售额" value="￥12,423" />
        </template>
      </Analysis>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 数值的标题 | string | - | -
value | 数值的内容 | string、number | - | -
tooltip | 提示内容 | string | - | -
loading | 数值是否为加载中 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
content | content
footer | footer
