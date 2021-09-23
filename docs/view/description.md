#### Description 描述列表

成组展示多个只读字段。

> 简单的展示

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <Description title="User Info" simple>
    <DescriptionItem label="UserName">Zhou Maomao</DescriptionItem>
    <DescriptionItem label="Telephone">1810000000</DescriptionItem>
    <DescriptionItem label="Live">Hangzhou, Zhejiang</DescriptionItem>
    <DescriptionItem label="Remark">empty</DescriptionItem>
    <DescriptionItem label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </DescriptionItem>
  </Description>
  `
}
```

> 带边框和背景颜色列表

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
  <Description title="User Info">
    <DescriptionItem label="Product">Cloud Database</DescriptionItem>
    <DescriptionItem label="Billing Mode">Prepaid</DescriptionItem>
    <DescriptionItem label="Automatic Renewal">YES</DescriptionItem>
    <DescriptionItem label="Order time">2018-04-24 18:00:00</DescriptionItem>
    <DescriptionItem label="Usage Time" span="2">
      2019-04-24 18:00:00
    </DescriptionItem>
    <DescriptionItem label="Status" span="3">
      <Badge status="processing" text="Running" />
    </DescriptionItem>
    <DescriptionItem label="Negotiated Amount">$80.00</DescriptionItem>
    <DescriptionItem label="Discount">$20.00</DescriptionItem>
    <DescriptionItem label="Official Receipts">$60.00</DescriptionItem>
    <DescriptionItem label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1<br />
    </DescriptionItem>
  </Description>
  `
}
```

#### API

> Description Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
simple | 是否是简洁风格 | boolean | - | -
size | 列表的大小 | string | default, small, large | default
title | 描述列表的标题，显示在左上角 | string | - | -
column | 一行的 DescriptionItem 数量 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Description Slots

参数 | 说明
---|---
extra | 描述列表的操作区域，显示在右上方
children | 内容

> DescriptionItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
label | 内容的描述 | string | - | -
span | 包含列的数量	 | numeric | - | -

> DescriptionItem Slots

参数 | 说明
---|---
children | 内容
