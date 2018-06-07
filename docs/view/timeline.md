> 基础用法

    export default {
        template: `
            <div>
                <TimeLine>
                    <TimeLineItem color="green">发布1.0版本</TimeLineItem>
                    <TimeLineItem color="green">发布2.0版本</TimeLineItem>
                    <TimeLineItem color="red">严重故障</TimeLineItem>
                    <TimeLineItem color="blue">发布3.0版本</TimeLineItem>
                </TimeLine>
            </div>
        `
    }

> 设置 padding

    export default {
        template: `
            <div>
                <TimeLine pending>
                    <TimeLineItem>发布1.0版本</TimeLineItem>
                    <TimeLineItem>发布2.0版本</TimeLineItem>
                    <TimeLineItem>发布3.0版本</TimeLineItem>
                    <TimeLineItem><a href="#">查看更多</a></TimeLineItem>
                </TimeLine>
            </div>
        `
    }

> 视例

    export default {
        template: `
            <div>
                <TimeLine>
                    <TimeLineItem>
                        <p class="time" style="font-size: 14px; font-weight: bold;">1976年</p>
                        <p>Apple I 问世</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <p class="time"  style="font-size: 14px; font-weight: bold;">1984年</p>
                        <p>发布 Macintosh</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <p class="time"  style="font-size: 14px; font-weight: bold;">2007年</p>
                        <p>发布 iPhone</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <p class="time"  style="font-size: 14px; font-weight: bold;">2010年</p>
                        <p>发布 iPad</p>
                    </TimeLineItem>
                    <TimeLineItem>
                        <p class="time"  style="font-size: 14px; font-weight: bold;">2011年10月5日</p>
                        <p>史蒂夫·乔布斯去世</p>
                    </TimeLineItem>
                </TimeLine>
            </div>
        `
    }


> TimeLine props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
padding | 指定是否最后一个节点变成虚线表示省略 | boolean | - | false

> TimeLineItem props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
color | 圈圈的颜色（color 支持的值都可以） | String | - | primary

> TimeLineItem slot

名称 | 说明
---|---
dot | 自定义时间锚点的内容
- | 基本内容

