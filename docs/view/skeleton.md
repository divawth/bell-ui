#### Skeleton骨架屏

在需要等待加载内容的位置提供一个占位图形组合。

##### 何时使用

* 网络较慢，需要长时间等待加载处理的情况下。
* 图文信息内容较多的列表/卡片中。
* 只在第一次加载数据的时候使用。
* 可以被 Spin 完全代替，但是在可用的场景下可以比 Spin 提供更好的视觉效果和用户体验。

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <Skeleton loading>
      内容
    </Skeleton>
  `
}
```


> 文本行数和宽度

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <Skeleton
      loading
      image
      text="{{ { rows: 4, width: ['100%', '50%', '25%', 400] } }}"
    >
      内容
    </Skeleton>
  `
}
```

> 动画

```js
export default {
  isViewFullBlock: true,
  height: 200,
  template: `
    <Skeleton
      loading
      active
      image
    >
      内容
    </Skeleton>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
text | 是否显示文本占位 | SkeletonTextProps、boolean | - | true
image | 是否显示图片占位	 | SkeletonImageProps、boolean	 | - | -
loading | 	是否显示子组件，为 true 时候显示占位符 | boolean | - | -
active | 是否显示动画效果	 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
children | 待显示的内容
