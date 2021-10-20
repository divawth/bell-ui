> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Collapse model="value">
      <CollapseItem name="1" title="史蒂夫·乔布斯">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
      </CollapseItem>
      <CollapseItem name="2" title="斯蒂夫·盖瑞·沃兹尼亚克">
        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
      </CollapseItem>
      <CollapseItem name="3" title="乔纳森·伊夫" disabled>
        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
      </CollapseItem>
    </Collapse>
  `,
  data: {
    value: ['1', '2']
  },
  watchers: {
    value: function (value) {
      console.log(value)
    }
  }
}
```

> 手风琴用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Collapse accordion>
      <CollapseItem name="1" title="史蒂夫·乔布斯">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
      </CollapseItem>
      <CollapseItem name="2" title="斯蒂夫·盖瑞·沃兹尼亚克">
        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
      </CollapseItem>
      <CollapseItem name="3" title="乔纳森·伊夫">
        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
      </CollapseItem>
    </Collapse>
  `
}
```

> 面板嵌套

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Collapse>
      <CollapseItem name="1" title="史蒂夫·乔布斯">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。

        <Collapse accordion style="margin-top: 10px">
          <CollapseItem name="1-1" title="iPhone">
            iPhone，是美国苹果公司研发的智能手机，它搭载iOS操作系统。第一代iPhone于2007年1月9日由苹果公司前首席执行官史蒂夫·乔布斯发布，并在2007年6月29日正式发售。
          </CollapseItem>
          <CollapseItem name="1-2" title="iPad">
            iPad是由苹果公司于2010年开始发布的平板电脑系列，定位介于苹果的智能手机iPhone和笔记本电脑产品之间，（屏幕中有4个虚拟程序固定栏）与iPhone布局一样，提供浏览网站、收发电子邮件、观看电子书、播放音频或视频、玩游戏等功能。由英国出生的设计主管乔纳森·伊夫（Jonathan Ive）（有些翻译为 乔纳森·艾维）领导的团队设计的，这个圆滑、超薄的产品反映出了伊夫对德国天才设计师Dieter Rams的崇敬之情。
          </CollapseItem>
        </Collapse>
      </CollapseItem>
      <CollapseItem name="2" title="斯蒂夫·盖瑞·沃兹尼亚克">
        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
      </CollapseItem>
      <CollapseItem name="3" title="乔纳森·伊夫">
        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
      </CollapseItem>
    </Collapse>
  `
}
```

> 简洁风格（无边框）

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Collapse simple>
      <CollapseItem name="1" title="史蒂夫·乔布斯">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
      </CollapseItem>
      <CollapseItem name="2" title="斯蒂夫·盖瑞·沃兹尼亚克">
        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。
      </CollapseItem>
      <CollapseItem name="3" title="乔纳森·伊夫">
        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。
      </CollapseItem>
    </Collapse>
  `
}
```

> extra 设置右侧的内容。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Collapse>
      <CollapseItem name="1" title="史蒂夫·乔布斯">
        史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。
        <Tooltip slot="extra" placement="left" content="内容管理">
          <Icon name="information-fill" />
        </Tooltip>
      </CollapseItem>
      <CollapseItem name="2" title="斯蒂夫·盖瑞·沃兹尼亚克">
        斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。

        <Tooltip slot="extra" placement="left" content="内容管理">
          <Icon name="information-fill" />
        </Tooltip>
      </CollapseItem>
      <CollapseItem name="3" title="乔纳森·伊夫">
        乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。

        <Tooltip slot="extra" placement="left" content="内容管理">
          <Icon name="information-fill" />
        </Tooltip>
      </CollapseItem>
    </Collapse>
  `
}
```

> Collapse Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value / `model` | 当前激活的面板(如果是手风琴模式，绑定值类型需要为 `string`，否则为 `string[]`) | string / string[] | - | -
accordion | 是否使用手风琴效果 | boolean | - | -
simple | 是否是简洁风格 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CollapseItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 面板标题 | string | - | -
name | 唯一标志符 | string | - | -
disabled | 禁用后的面板展开与否将无法通过用户交互改变 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CollapseItem Slots

参数 | 说明
---|---
extra | 自定义每个面板右上角的内容