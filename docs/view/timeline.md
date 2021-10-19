> 基础用法

```js
export default {
  template: `
  <Timeline>
    <TimelineItem>
      发布1.0版本
    </TimelineItem>
    <TimelineItem>
      发布2.0版本
    </TimelineItem>
    <TimelineItem color="red">
      严重故障
    </TimelineItem>
    <TimelineItem>
      发布3.0版本
    </TimelineItem>
  </Timeline>
  `
}
```

> pending

```js
export default {
  template: `
  <Timeline pending>
    <TimelineItem>
      发布1.0版本
    </TimelineItem>
    <TimelineItem>
      发布2.0版本
    </TimelineItem>
    <TimelineItem>
      发布3.0版本
    </TimelineItem>
    <TimelineItem>
      发布4.0版本
    </TimelineItem>
    <TimelineItem>
      发布5.0版本
    </TimelineItem>
    <TimelineItem>
      <a href="#">
        查看更多
      </a>
    </TimelineItem>
  </Timeline>
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
    <Timeline>
      <TimelineItem>
        <Icon
          slot="dot"
          name="apple-fill"
          color="red"
        />
        <p>
          1976年
        </p>
        <p>
          Apple I 问世
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          1984年
        </p>
        <p>
          发布 Macintosh
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          2007年
        </p>
        <p>
          发布 iPhone
        </p>
        <p>
          发布 iPhone
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          2010年
        </p>
        <p>
          发布 iPad
        </p>
        <p>
          发布 iPad
        </p>
      </TimelineItem>
      <TimelineItem>
        <p>
          2011年10月5日
        </p>
        <p>
          史蒂夫·乔布斯去世
        </p>
      </TimelineItem>
    </Timeline>
  </div>
  `
}
```

> Timeline Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
pending | 是否最后一段变成虚线 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> TimelineItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
color | 锚点的颜色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> TimelineItem slot

名称 | 说明
---|---
dot | 自定义锚点
children | 内容

