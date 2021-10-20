#### Statistic 统计数值

展示统计数值。

##### 何时使用

* 当需要突出某个或某组数字时
* 当需要展示带描述的统计类数据时使用

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <div>
      <Statistic title="Active Users" value="112,893" />
      <Statistic title="Active Users" value="112,893" color="red" />
    </div>
  `
}
```

> 加载中

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <div>
      <Statistic title="Active Users" loading />
    </div>
  `
}
```

> 前缀

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <div>
      <Statistic title="当月收入" value="112,893" prefix="$" />
      <Statistic title="当月收入" value="112,893" color="red">
        <Icon
          slot="prefix"
          name="money-dollar-circle-line"
        />
      </Statistic>
    </div>
  `
}
```

> 后缀

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <div>
      <Statistic title="当月收入" value="112,893" suffix="元" />
      <Statistic title="当月收入" value="112,893" color="red">
        <Icon
          slot="suffix"
          name="money-cny-circle-line"
        />
      </Statistic>
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
prefix | 数值的前缀 | string | - | -
suffix | 数值的后缀 | string | - | -
loading | 数值是否为加载中 | boolean | - | -
color | 数值的颜色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
prefix | 数值的前缀
suffix | 数值的后缀
