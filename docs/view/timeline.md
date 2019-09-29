> 基础用法

```js
export default {
  template: `
  <TimeLine>
    <TimeLineItem>
      发布1.0版本
    </TimeLineItem>
    <TimeLineItem>
      发布2.0版本
    </TimeLineItem>
    <TimeLineItem color="red">
      严重故障
    </TimeLineItem>
    <TimeLineItem>
      发布3.0版本
    </TimeLineItem>
  </TimeLine>
  `
}
```

> pending

```js
export default {
  template: `
  <TimeLine pending>
    <TimeLineItem>
      发布1.0版本
    </TimeLineItem>
    <TimeLineItem>
      发布2.0版本
    </TimeLineItem>
    <TimeLineItem>
      发布3.0版本
    </TimeLineItem>
    <TimeLineItem>
      发布4.0版本
    </TimeLineItem>
    <TimeLineItem>
      发布5.0版本
    </TimeLineItem>
    <TimeLineItem>
      <a href="#">
        查看更多
      </a>
    </TimeLineItem>
  </TimeLine>
  `
}
```

> 自定义锚点

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div>
    <TimeLine>
      <TimeLineItem>
        <Icon
          slot="dot"
          name="happy"
          color="red"
        />
        <p>
          1976年
        </p>
        <p>
          Apple I 问世
        </p>
      </TimeLineItem>
      <TimeLineItem>
        <p>
          1984年
        </p>
        <p>
          发布 Macintosh
        </p>
      </TimeLineItem>
      <TimeLineItem>
        <p>
          2007年
        </p>
        <p>
          发布 iPhone
        </p>
        <p>
          发布 iPhone
        </p>
      </TimeLineItem>
      <TimeLineItem>
        <p>
          2010年
        </p>
        <p>
          发布 iPad
        </p>
        <p>
          发布 iPad
        </p>
      </TimeLineItem>
      <TimeLineItem>
        <p>
          2011年10月5日
        </p>
        <p>
          史蒂夫·乔布斯去世
        </p>
      </TimeLineItem>
    </TimeLine>
  </div>
  `
}
```

> TimeLine Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
pending | 是否最后一段变成虚线 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> TimeLineItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
color | 锚点的颜色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> TimeLineItem slot

名称 | 说明
---|---
dot | 自定义锚点
children | 内容

