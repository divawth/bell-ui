> 按钮类型

```js
export default {
  template: `
    <div>
      <Button>
        Default
      </Button>
      <Button type="primary">
        Primary
      </Button>

      <br><br>

      <Button type="success">
        Success
      </Button>
      <Button type="error">
        Error
      </Button>
      <Button type="info">
        Info
      </Button>
      <Button type="warning">
        Warning
      </Button>

      <br><br>

      <Button type="dashed">
        Dashed
      </Button>
      <Button type="link">
        Link
      </Button>
    </div>
  `
}
```

> 幽灵按钮

幽灵按钮将按钮的内容反色，背景变为透明，常用在有色背景上。

```js
export default {
  template: `
    <div style="background-color: rgb(190, 200, 200); padding: 8px;">

      <Button ghost>
        Default
      </Button>
      <Button ghost type="primary">
        Primary
      </Button>

      <br><br>

      <Button ghost type="success">
        Success
      </Button>
      <Button ghost type="error">
        Error
      </Button>
      <Button ghost type="info">
        Info
      </Button>
      <Button ghost type="warning">
        Warning
      </Button>

      <br><br>

      <Button ghost type="dashed">
        Dashed
      </Button>
      <Button ghost type="link">
        Link
      </Button>

    </div>
  `
}
```

> 三种尺寸

```js
export default {
  template: `
    <div>
      <Button size="large">
        Large
      </Button>
      <Button>
        Default
      </Button>
      <Button size="small">
        Small
      </Button>

      <br><br>

      <Button shape="round" size="large">
        Large
      </Button>
      <Button shape="round">
        Default
      </Button>
      <Button shape="round" size="small">
        Small
      </Button>
    </div>
  `
}
```

> 按钮形态

```js
export default {
  template: `
    <div>
      <Button type="primary" shape="circle">
        <Icon name="download-line" />
      </Button>
      <Button type="primary" shape="round">
        <template slot="prefix">
          <Icon name="download-line" />
        </template>
        搜索
      </Button>
      <Button type="primary" shape="round">
        圆角按钮
        <template slot="suffix">
          <Icon name="download-line" />
        </template>
      </Button>

      <br><br>

      <Button shape="circle">
        <Icon name="download-line" />
      </Button>
      <Button shape="round">
        <template slot="prefix">
          <Icon name="download-line" />
        </template>
        搜索
      </Button>
      <Button shape="round">
        圆角按钮
        <template slot="suffix">
          <Icon name="download-line" />
        </template>
      </Button>
    </div>
  `
}
```

> 最大化显示按钮

```js
export default {
  template: `
    <div>
      <Button type="success" block>
        确认提交
      </Button>
      <Button type="error" block>
        确认删除
      </Button>
    </div>
  `
}
```

> 禁用状态

```js
export default {
  template: `
    <div>
      <Button disabled>
        Default
      </Button>
      <Button disabled type="primary">
        Primary
      </Button>

      <br><br>

      <Button disabled type="dashed">
        Dashed
      </Button>
      <Button disabled type="link">
        Link
      </Button>

      <br><br>

      <Button disabled ghost>
        Ghost
      </Button>
    </div>
  `
}
```

> loading

```js
export default {
  template: `
    <div>
      <Button
        type="primary"
        shape="circle"
        loading
      />

      <Button
        type="primary"
        loading="{{loading}}"
        on-click="toggle('loading')"
      >
        {{#if !loading}}
          Click me!
        {{else}}
          Loading...
        {{/if}}
      </Button>
    </div>
  `,
  data: function () {
    return {
      loading: false
    }
  }
}

```


> ButtonGroups

```js
export default {
  template: `
    <div>
      <ButtonGroup>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup>
        <Button type="primary">
          Backward
          <Icon
            slot="prefix"
            name="arrow-left-s-line"
          />
        </Button>
        <Button type="primary">
          Forward
          <Icon
            slot="suffix"
            name="arrow-right-s-line"
          />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup>
        <Button>
          <Icon name="windows-fill" />
        </Button>
        <Button>
          <Icon name="apple-fill" />
        </Button>
        <Button>
          <Icon name="google-fill" />
        </Button>
        <Button>
          <Icon name="twitter-fill" />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup shape="round">
        <Button>
          Backward
          <Icon
            slot="prefix"
            name="arrow-left-s-line"
          />
        </Button>
        <Button>
          Forward
          <Icon
            slot="suffix"
            name="arrow-right-s-line"
          />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup size="small">
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </ButtonGroup>
    </div>
  `
}
```

> vertical

```js
export default {
  template: `
    <div>
      <ButtonGroup vertical>
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button type="dashed">R</Button>
      </ButtonGroup>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | `primary`, `info`, `success`, `warning`, `error`, `dashed`, `link` | -
ghost | 是否是幽灵按钮 | boolean | - | `false`
size | 按钮大小 | string | `default`, `large`, `small` | `default`
shape | 按钮形状 | string | `circle`, `round` | -
block | 开启后，按钮的长度为 100% | boolean | - | `false`
loading |  是否为正在加载状态 | boolean | - | `false`
disabled | 是否为禁用状态 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮时触发 | -

> Slots

参数 | 说明
---|---
children | 自定义整个内容
prefix | 自定义左边的内容，常用于左侧图标
suffix | 自定义右边的内容，常用于右侧图标

> ButtonGroup Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 按钮大小 | string | `default`, `large`, `small` | `default`
shape | 按钮形状 | string | `round` | -
vertical | 是否纵向排列按钮组 | boolean | - | `false`

