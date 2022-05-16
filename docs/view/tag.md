> 基本用法

```js
export default {
  template: `
    <div>
      <Tag>
        标签
      </Tag>
      <br><br>
      <Tag closable>
        标签
      </Tag>
    </div>
  `
}
```

> 类型

```js
export default {
  template: `
  <div>
    <Tag type="primary">
      标签
    </Tag>
    <Tag type="success">
      标签
    </Tag>
    <Tag type="error">
      标签
    </Tag>
    <Tag type="warning">
      标签
    </Tag>
    <Tag type="info">
      标签
    </Tag>
    <br><br>
    <Tag closable type="primary">
      标签
    </Tag>
    <Tag closable type="success">
      标签
    </Tag>
    <Tag closable type="error">
      标签
    </Tag>
    <Tag closable type="warning">
      标签
    </Tag>
    <Tag closable type="info">
      标签
    </Tag>
  </div>
  `
}
```

> checkable

```js
export default {
  template: `
    <div>
      <Tag checkable type="primary">
        标签
      </Tag>
      <Tag checkable checked type="success">
        标签
      </Tag>
      <Tag checkable type="error">
        标签
      </Tag>
      <Tag checkable type="warning">
        标签
      </Tag>
      <Tag checkable type="info">
        标签
      </Tag>
      <br><br>
      <Tag checkable closable type="primary">
        标签
      </Tag>
      <Tag checkable closable type="success">
        标签
      </Tag>
      <Tag checkable checked closable type="error">
        标签
      </Tag>
      <Tag checkable closable type="warning">
        标签
      </Tag>
      <Tag checkable closable type="info">
        标签
      </Tag>
    </div>
  `
}
```

> 带图标的标签

```js
export default {
  template: `
    <div>
      <Tag icon="alipay-fill" color="#4B5CFA">
        支付宝
      </Tag>
      <Tag icon="wechat-fill" color="#3BB95A">
        微信
      </Tag>
      <Tag icon="weibo-fill" color="#CD352A">
        微博
      </Tag>
    </div>
  `
}
```

> 多彩标签

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <Space vertical>
      <Divider orientation="left">Presets</Divider>
      <Space>
        <Tag color="magenta">magenta</Tag>
        <Tag color="red">red</Tag>
        <Tag color="volcano">volcano</Tag>
        <Tag color="orange">orange</Tag>
        <Tag color="gold">gold</Tag>
        <Tag color="lime">lime</Tag>
        <Tag color="green">green</Tag>
        <Tag color="cyan">cyan</Tag>
        <Tag color="blue">blue</Tag>
        <Tag color="purple">purple</Tag>
      </Space>
      <Space>
        <Tag closable color="magenta">magenta</Tag>
        <Tag closable color="red">red</Tag>
        <Tag closable color="volcano">volcano</Tag>
        <Tag closable color="orange">orange</Tag>
        <Tag closable color="gold">gold</Tag>
        <Tag closable color="lime">lime</Tag>
        <Tag closable color="green">green</Tag>
        <Tag closable color="cyan">cyan</Tag>
        <Tag closable color="blue">blue</Tag>
        <Tag closable color="purple">purple</Tag>
      </Space>
      <Divider orientation="left">Custom</Divider>
      <Space>
        <Tag color="#f50">
          #f50
        </Tag>
        <Tag color="#2db7f5">
          #2db7f5
        </Tag>
        <Tag color="#87d068">
          #87d068
        </Tag>
        <Tag color="#108ee9">
          #108ee9
        </Tag>
      </Space>
      <Space>
        <Tag closable color="#f50">
          #f50
        </Tag>
        <Tag closable color="#2db7f5">
          #2db7f5
        </Tag>
        <Tag closable color="#87d068">
          #87d068
        </Tag>
        <Tag closable color="#108ee9">
          #108ee9
        </Tag>
      </Space>
    </Space>
  `
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
checked | 标签是否已选中 | - | - | -
type | 按钮类型 | string | `primary`, `info`, `success`, `warning`, `error` | -
icon | 图标 | string | - | -
closable | 是否可以关闭 | boolean | - | -
checkable | 标签是否可以选择 | boolean | - | -
color | 自定义颜色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
children | 自定义内容

> Events

事件名称 | 说明 | 回调参数
---|---|---
close | 点击关闭按钮时触发 | -
change | `checked` 改变时触发 | `data.checked`