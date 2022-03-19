# Grid 栅格

24 栅格系统

## 设计理念

```js
export default {
  isViewFullBlock: true,
  height: 500,
  template: `
    <div class="grid-demo">
      <Row className="demo-row">
        <Col span="24" className="demo-col demo-col-1">100%</Col>
      </Row>
      <Row className="demo-row">
        <Col span="6" className="demo-col demo-col-2">25%</Col>
        <Col span="6" className="demo-col demo-col-3">25%</Col>
        <Col span="6" className="demo-col demo-col-2">25%</Col>
        <Col span="6" className="demo-col demo-col-3">25%</Col>
      </Row>
      <Row className="demo-row">
        <Col span="8" className="demo-col demo-col-4">33.33%</Col>
        <Col span="8" className="demo-col demo-col-5">33.33%</Col>
        <Col span="8" className="demo-col demo-col-4">33.33%</Col>
      </Row>
      <Row className="demo-row">
        <Col span="12" className="demo-col demo-col-1">50%</Col>
        <Col span="12" className="demo-col demo-col-3">50%</Col>
      </Row>
      <Row className="demo-row">
        <Col span="16" className="demo-col demo-col-4">66.66%</Col>
        <Col span="8" className="demo-col demo-col-5">33.33%</Col>
      </Row>
    </div>
  `
}
```

在多数业务情况下，我们需要在设计区域内解决大量信息收纳的问题，因此在 12 栅格系统的基础上，我们将整个设计建议区域按照 24 等分的原则进行划分。

划分之后的信息区块我们称之为『盒子』。建议横向排列的盒子数量最多四个，最少一个。『盒子』在整个屏幕上占比见上图。设计部分基于盒子的单位定制盒子内部的排版规则，以保证视觉层面的舒适感。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

* 通过 `row` 在水平方向建立一组 `column`（简写 col）。
* 你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素。
* 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `<Col span={8} />` 来创建。
* 如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 会作为一个整体另起一行排列。

我们的栅格化系统基于 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

布局是基于 24 栅格来定义每一个『盒子』的宽度，但不拘泥于栅格。

## 代码演示

> 基础栅格

从堆叠到水平排列。

使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div class="code-box" id="components-grid-demo-basic">
      <div class="code-box-demo">
        <Row>
          <Col span="24">col</Col>
        </Row>
        <Row>
          <Col span="12">col-12</Col>
          <Col span="12">col-12</Col>
        </Row>
        <Row>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
          <Col span="8">col-8</Col>
        </Row>
        <Row>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
          <Col span="6">col-6</Col>
        </Row>
      </div>
    </div>
  `
}
```

> 区块间隔

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔(n 是自然数)。

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]` `[16, { xs: 8, sm: 16, md: 24, lg: 32 }]`。

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div class="code-box" id="components-grid-demo-gutter">
      <div class="code-box-demo">
        <Divider align="left">Horizontal</Divider>
        <Row gutter="16">
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
        </Row>
        <Divider align="left">Responsive</Divider>
        <Row gutter="{{ { xs: 8, sm: 16, md: 24, lg: 32 } }}">
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
        </Row>
        <Divider align="left">Vertical</Divider>
        <Row autoWrap gutter="{{[16, 24]}}">
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
          <Col className="gutter-row" span="6">
            <div style="{{style}}">col-6</div>
          </Col>
        </Row>
      </div>
    </div>
  `,
  data: {
    style: 'background: #0092ff; padding: 8px 0'
  }
}
```

> 左右偏移

列偏移。

使用 `offset` 可以将列向右侧偏。例如，`offset={4}` 将元素向右侧偏移了 4 个列（column）的宽度。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div class="code-box" id="components-grid-demo-offset">
      <div class="code-box-demo">
        <Row>
          <Col span="8">col-8</Col>
          <Col span="8" offset="8">
            col-8
          </Col>
        </Row>
        <Row>
          <Col span="6" offset="6">
            col-6 col-offset-6
          </Col>
          <Col span="6" offset="6">
            col-6 col-offset-6
          </Col>
        </Row>
        <Row>
          <Col span="12" offset="6">
            col-12 col-offset-6
          </Col>
        </Row>
      </div>
    </div>
  `,
}
```

> 栅格排序

列排序。

通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```js
export default {
  isViewFullBlock: true,
  height: 70,
  template: `
    <div class="code-box" id="components-grid-demo-sort">
      <div class="code-box-demo">
        <Row>
          <Col span="18" push="6">
            col-18 col-push-6
          </Col>
          <Col span="6" pull="18">
            col-6 col-pull-18
          </Col>
        </Row>
      </div>
    </div>
  `,
}
```

> 排版

布局基础。

子元素根据不同的值 `start`,`center`,`end`,`space-between`,`space-around`，分别定义其在父节点里面的排版方式。

```js
export default {
  isViewFullBlock: true,
  height: 700,
  template: `
    <div class="code-box" id="components-grid-demo-flex">
      <div class="code-box-demo">
        <Divider align="left">sub-element align left</Divider>
        <Row justify="start">
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>

        <Divider align="left">sub-element align center</Divider>
        <Row justify="center">
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>

        <Divider align="left">sub-element align right</Divider>
        <Row justify="end">
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>

        <Divider align="left">sub-element monospaced arrangement</Divider>
        <Row justify="space-between">
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>

        <Divider align="left">sub-element align full</Divider>
        <Row justify="space-around">
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
          <Col span="4">col-4</Col>
        </Row>
      </div>
    </div>
  `,
}
```

> 对齐

子元素垂直对齐。

```js
export default {
  isViewFullBlock: true,
  height: 700,
  template: `
    <div class="code-box" id="components-grid-demo-flex-align">
      <div class="code-box-demo">
        <Divider align="left">Align Top</Divider>
        <Row justify="center" align="top">
          <Col span="4">
            <DemoBox value="100">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="50">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="120">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="80">col-4</DemoBox>
          </Col>
        </Row>

        <Divider align="left">Align Middle</Divider>
        <Row justify="space-around" align="middle">
          <Col span="4">
            <DemoBox value="100">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="50">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="120">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="80">col-4</DemoBox>
          </Col>
        </Row>

        <Divider align="left">Align Bottom</Divider>
        <Row justify="space-between" align="bottom">
          <Col span="4">
            <DemoBox value="100">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="50">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="120">col-4</DemoBox>
          </Col>
          <Col span="4">
            <DemoBox value="80">col-4</DemoBox>
          </Col>
        </Row>
      </div>
    </div>
  `,
  components: {
    DemoBox: {
      template: '<div style="height:{{value}}px; line-height:{{value}}px"><slot/></div>'
    }
  }
}
```


> 排序

通过 `order` 来改变元素的排序。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <div class="code-box" id="components-grid-demo-flex-order">
      <div class="code-box-demo">
        <Divider align="left">Normal</Divider>
        <Row>
          <Col span="6" order="4">
            1 col-order-4
          </Col>
          <Col span="6" order="3">
            2 col-order-3
          </Col>
          <Col span="6" order="2">
            3 col-order-2
          </Col>
          <Col span="6" order="1">
            4 col-order-1
          </Col>
        </Row>
        <Divider align="left">Responsive</Divider>
        <Row>
          <Col span="6" xs="{{ { order: 1 } }}" sm="{{ { order: 2 } }}" md="{{ { order: 3 } }}" lg="{{ { order: 4 } }}">
            1 col-order-responsive
          </Col>
          <Col span="6" xs="{{ { order: 2 } }}" sm="{{ { order: 1 } }}" md="{{ { order: 4 } }}" lg="{{ { order: 3 } }}">
            2 col-order-responsive
          </Col>
          <Col span="6" xs="{{ { order: 3 } }}" sm="{{ { order: 4 } }}" md="{{ { order: 2 } }}" lg="{{ { order: 1 } }}">
            3 col-order-responsive
          </Col>
          <Col span="6" xs="{{ { order: 4 } }}" sm="{{ { order: 3 } }}" md="{{ { order: 1 } }}" lg="{{ { order: 2 } }}">
            4 col-order-responsive
          </Col>
        </Row>
      </div>
    </div>
  `,
}
```

> Flex 填充

Col 提供 `flex` 属性以支持填充。

```js
export default {
  isViewFullBlock: true,
  height: 450,
  template: `
    <div class="code-box" id="components-grid-demo-flex-stretch">
      <div class="code-box-demo">
        <Divider align="left">Percentage columns</Divider>
        <Row>
          <Col flex="2">2 / 5</Col>
          <Col flex="3">3 / 5</Col>
        </Row>
        <Divider align="left">Fill rest</Divider>
        <Row>
          <Col flex="100px">100px</Col>
          <Col flex="auto">Fill Rest</Col>
        </Row>
        <Divider align="left">Raw flex style</Divider>
        <Row>
          <Col flex="1 1 200px">1 1 200px</Col>
          <Col flex="0 1 300px">0 1 300px</Col>
        </Row>

        <Row>
          <Col flex="none">
            <div style="padding: 0 16px">none</div>
          </Col>
          <Col flex="auto">auto with no-wrap</Col>
        </Row>
      </div>
    </div>
  `,
}
```

> 响应式布局

参照 [Bootstrap](https://getbootstrap.com/docs/3.4/css/) 的响应式设计，预设六个响应尺寸：`xs` `sm` `md` `lg` `xl` `xxl`。

```js
export default {
  isViewFullBlock: true,
  height: 70,
  template: `
    <div class="code-box" id="components-grid-demo-responsive">
      <div class="code-box-demo">
        <Row>
          <Col xs="2" sm="4" md="6" lg="8" xl="10">
            Col
          </Col>
          <Col xs="20" sm="16" md="12" lg="8" xl="4">
            Col
          </Col>
          <Col xs="2" sm="4" md="6" lg="8" xl="10">
            Col
          </Col>
        </Row>
      </div>
    </div>
  `,
}
```

> 其他属性的响应式

`span` `pull` `push` `offset` `order` 属性可以通过内嵌到 `xs` `sm` `md` `lg` `xl` `xxl` 属性中来使用。

其中 `xs="6"` 相当于 `xs="{{ { span: 6 } }}"`。

```js
export default {
  isViewFullBlock: true,
  height: 70,
  template: `
    <div class="code-box" id="components-grid-demo-responsive-more">
      <div class="code-box-demo">
        <Row>
          <Col xs="{{ { span: 5, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">
            Col
          </Col>
          <Col xs="{{ { span: 11, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">
            Col
          </Col>
          <Col xs="{{ { span: 5, offset: 1 } }}" lg="{{ { span: 6, offset: 2 } }}">
            Col
          </Col>
        </Row>
      </div>
    </div>
  `,
}
```

#### API

> Row Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
gutter | 栅格间隔，可以写成像素值或支持响应式的对象写法来设置水平间隔 `{ xs: 8, sm: 16, md: 24}`。或者使用数组形式同时设置 `[水平间距, 垂直间距]` | number, object, array | - | -
align | 垂直对齐方式	 | string | `top`, `middle`, `bottom` | `top`
justify | 水平排列方式 | string | `start`, `end`, `center`, `space-around`, `space-between` | `start`
autoWrap | 	是否自动换行 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Col Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
flex | flex 布局属性 | string, number | - | -
span | 栅格占位格数，为 0 时相当于 `display: none` | number | - | -
offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | - | -
order | 栅格顺序 | number | - | -
pull | 栅格向左移动格数 | number | - | -
push | 栅格向右移动格数 | number | - | -
xs | 	`屏幕 < 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
sm | 	`屏幕 >= 576px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
md | 	`屏幕 >= 768px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
lg | 	`屏幕 >= 992px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
xl | 	`屏幕 >= 1200px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
xxl |  `屏幕 >= 1600px` 响应式栅格，可为栅格数或一个包含其他属性的对象 | number, object | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -


