> 基础用法

水平排列的布局 Col 必须放在 Row 里面。

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
      </Row>
      <br>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
      </Row>
      <br>
      <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 通过给 Row 添加 gutter 属性，可以给下属的 col 添加间距，推荐使用 (16+8n)px 作为栅格间隔。

```js
export default {
  isViewFullBlock: true,
  template: `
  <div>
    <Row gutter="16">
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
      <Col span="6">
        <div>col-6</div>
      </Col>
    </Row>
    <style>
      .bell-docsify-view .bell-row .bell-col {
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background-color: rgba(0,153,229,.9);
      }
      .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
        background-color: rgba(0,160,233,0.7);
      }
      .bell-docsify-view .bell-row-gutter .bell-col {
        background-color: transparent !important;
      }
      .bell-docsify-view .bell-row-gutter .bell-col div {
        color: #fff;
        padding: 10px 0;
        text-align: center;
        background-color: rgba(0,153,229,.9);
      }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
        background-color: rgba(0,160,233,0.7);
      }
    </style>
  </div>
  `
}
```

> 通过 Flex 布局的 order 来改变栅格的顺序。

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row type="flex">
        <Col span="6" order="4">1 | order-4</Col>
        <Col span="6" order="3">2 | order-3</Col>
        <Col span="6" order="2">3 | order-2</Col>
        <Col span="6" order="1">4 | order-1</Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 通过设置 push 和 pull 来改变栅格的顺序。

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row>
        <Col span="18" push="6">col-18 | push-6</Col>
        <Col span="6" pull="18">col-6 | pull-18</Col>
      </Row>

      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 通过设置 offset 属性，将列进行左右偏移，偏移栅格数为 offset 的值。

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="8" offset="8">col-8 | offset-8</Col>
      </Row>
      <br>
      <Row>
        <Col span="6" offset="8">col-6 | offset-8</Col>
        <Col span="6" offset="4">col-6 | offset-4</Col>
      </Row>
      <br>
      <Row>
        <Col span="12" offset="8">col-12 | offset-8</Col>
      </Row>

      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 通过给 row 设置参数 justify 为不同的值，来定义子元素的排布方式。在flex模式下有效。

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div>
      <p>子元素向左排列</p>
      <Row type="flex" justify="start" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
      <p>子元素向右排列</p>
      <Row type="flex" justify="end" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
      <p>子元素居中排列</p>
      <Row type="flex" justify="center" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
      <p>子元素等宽排列</p>
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
      <p>子元素分散排列</p>
      <Row type="flex" justify="space-around" class="code-row-bg">
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
        <Col span="4">col-4</Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 通过给 Row 设置参数 align 为不同的值，来定义子元素在垂直方向上的排布方式。在flex模式下有效。

```js
export default {
  isViewFullBlock: true,
  height: 800,
  template: `
    <div>
      <p>顶部对齐</p>
      <Row type="flex" justify="center" align="top" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
      </Row>
      <p>底部对齐</p>
      <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
      </Row>
      <p>居中对齐</p>
      <Row type="flex" justify="center" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
      </Row>
      <p>基线对齐</p>
      <Row type="flex" justify="baseline" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
      </Row>
      <p>占满整个容器的高度</p>
      <Row type="flex" justify="stretch" align="middle" class="code-row-bg">
        <Col span="4"><p style="height: 80px">col-4</p></Col>
        <Col span="4"><p style="height: 30px">col-4</p></Col>
        <Col span="4"><p style="height: 100px">col-4</p></Col>
        <Col span="4"><p style="height: 60px">col-4</p></Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 响应式布局

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row>
        <Col xs="2" sm="4" md="6" lg="8">Col</Col>
        <Col xs="20" sm="16" md="12" lg="8">Col</Col>
        <Col xs="2" sm="4" md="6" lg="8">Col</Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `
}
```

> 其它属性的响应式

span pull push offset order 属性可以通过内嵌到 xs sm md lg 属性中来使用。

其中 :xs="6" 相当于 :xs="{ span: 6 }"。

```js
export default {
  isViewFullBlock: true,
  template: `
    <div>
      <Row>
        <Col xs="{{xsList1}}" lg="{{lgList}}">Col</Col>
        <Col xs="{{xsList2}}" lg="{{lgList}}">Col</Col>
        <Col xs="{{xsList3}}" lg="{{lgList}}">Col</Col>
      </Row>
      <style>
        .bell-docsify-view .bell-row .bell-col {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }
        .bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) {
          background-color: rgba(0,160,233,0.7);
        }
        .bell-docsify-view .bell-row-gutter .bell-col {
          background-color: transparent !important;
        }
        .bell-docsify-view .bell-row-gutter .bell-col div {
          color: #fff;
          padding: 10px 0;
          text-align: center;
          background-color: rgba(0,153,229,.9);
        }.bell-docsify-view .bell-row .bell-col:nth-child(2n + 1) div {
          background-color: rgba(0,160,233,0.7);
        }
      </style>
    </div>
  `,
  data: {
    xsList1: {
      span: 3,
      offset: 1
    },
    xsList2: {
      span: 10,
      offset: 1
    },
    xsList3: {
      span: 3,
      offset: 1
    },
    lgList: {
      span: 6,
      offset: 2
    }
  }
}
```

> 栅格配置器

#### API

> Row Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 布局类型 | string | noraml, flex | normal
gutter | 布局的栅格的间距 | number | - | 0
align | flex 布局对齐方式 | string | 'top', 'middle', 'bottom', 'baseline', 'stretch' | -
justify | flex 布局 justify 值 | string | - | -
className | 自定义 Row 类名 | string | - | -

> Col Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
span | 占的栅格的列数 | number | - | -
order | flex 布局，列的显示顺序 | number | - | -
offset | 列偏移的栅格列数 | number | - | -
push | 改变列排序的 push 值 | number | - | -
pull | 改变列排序的 pull 值 | number | - | -
className | 自定义 Col 类名 | string | - | -
xs | <768px 响应式栅格数或者栅格属性对象 | number/Object (例如： {span: 4, offset: 4}) | - | -
sm | ≥768px 响应式栅格数或者栅格属性对象 | number/Object (例如： {span: 4, offset: 4}) | - | -
md | ≥992px 响应式栅格数或者栅格属性对象 | number/Object (例如： {span: 4, offset: 4}) | - | -
lg | ≥1200px 响应式栅格数或者栅格属性对象 | number/Object (例如： {span: 4, offset: 4}) | - | -


