> 根据 type 显示按钮类型

```js
export default {
  template: `
    <div class="bell-template">
      <div class="bell-buttons">
        <Button>
          Default
        </Button>
        <Button type="primary">
          Primary
        </Button>
        <Button type="warning">
          Warning
        </Button>
        <Button type="success">
          Success
        </Button>
      </div>

      <div class="bell-buttons" style="margin-top: 10px;">
        <Button type="error">
          Error
        </Button>
        <Button type="info">
          Info
        </Button>
      </div>
    </div>
  `
}
```

> 设置按钮的边框

```js
export default {
  template: `
    <div class="bell-template">
      <div class="bell-buttons">
        <Button border="solid">
          Solid
        </Button>
        <Button border="dashed">
          Dashed
        </Button>
        <Button border="none">
          Text
        </Button>
      </div>
    </div>
  `
}
```

> 设置幽灵按钮

幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。

```js
export default {
  template: `
    <div class="bell-template" style="background-color: rgb(190, 200, 200); padding: 8px;">
      <div class="bell-buttons">
        <Button ghost>
          Default
        </Button>
        <Button ghost type="primary">
          Primary
        </Button>
        <Button ghost type="warning">
          Warning
        </Button>
        <Button ghost type="success">
          Success
        </Button>
      </div>

      <div class="bell-buttons" style="margin-top: 10px;">
        <Button ghost type="primary" border="dashed">
          Dashed
        </Button>
        <Button ghost type="primary" border="none">
          Text
        </Button>
        <Button ghost type="warning" border="none">
          Warning
        </Button>
        <Button ghost type="success" border="none">
          Success
        </Button>
      </div>
    </div>
  `
}
```

> 根据 size 显示按钮大小

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

> 根据 shape 显示按钮形态

```js
export default {
  template: `
    <div style="margin-top: 10px;">
      <div class="bell-buttons">
        <Button type="primary" shape="circle">
          <Icon name="cloud-download" />
        </Button>
        <Button type="primary">
          搜索
        </Button>
        <Button type="primary" shape="round">
          <template slot="icon">
            <Icon name="cloud-download" style="padding-right: 10px;" />
          </template>
          搜索
        </Button>
        <Button type="primary" shape="round">
          圆角按钮
        </Button>
      </div>

      <div class="bell-buttons" style="margin-top: 10px;">
        <Button shape="circle">
          <template slot="icon">
            <Icon name="cloud-download" />
          </template>
        </Button>
        <Button shape="round">
          搜索
        </Button>
        <Button shape="round">
          圆角按钮
        </Button>
      </div>
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
      <br><br>
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
      <Button>
        Default
      </Button>
      <Button disabled>
        Default(Disabled)
      </Button>
      <br><br>
      <Button type="primary">
        Primary
      </Button>
      <Button type="primary" disabled>
        Primary(Disabled)
      </Button>
      <br><br>
      <Button border="dashed">
        Dashed
      </Button>
      <Button border="dashed" disabled>
        Dashed(Disabled)
      </Button>
      <br><br>
      <Button border="none">
        Text
      </Button>
      <Button border="none" disabled>
        Text(Disabled)
      </Button>
    </div>
  `
}
```

> loading

```js
export default {
  template: `
    <div class="bell-buttons">
      <Button type="primary" shape="circle">
        <Icon spin size="18" name="refresh" />
      </Button>

      <Button type="primary"
        on-click="toLoading()">
        {{#if !loading}}
          Click me!
        {{else}}
          Loading...
        {{/if}}
      </Button>

      <Button type="primary"
        on-click="toLoading2()"
      >
        <Icon spin slot="icon" style="padding-right: 10px; vertical-align: top;" size="12" name="refresh" />
        {{#if !loading2}}
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
  },
  events: {
    click () {
      console.log(arguments);
    }
  },
  methods: {
    toLoading: function () {
      var me = this;
      me.set('loading', !me.get('loading'));
    },
    toLoading2: function () {
      var me = this;
      me.set('loading2', !me.get('loading2'));
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
        <Button border="dashed">R</Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup>
        <Button type="primary">
          <Icon name="arrow-back" style="margin-right: 6px;" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon name="arrow-forward" style="margin-left: 6px;" />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup>
        <Button>
          <Icon name="airplane" />
        </Button>
        <Button>
          <Icon name="alarm" />
        </Button>
        <Button>
          <Icon name="crop" />
        </Button>
        <Button>
          <Icon name="american-football" />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup shape="round">
        <Button type="primary">
          <Icon name="arrow-back" style="margin-right: 8px;" />
          Backward
        </Button>
        <Button type="primary">
          Forward
          <Icon name="arrow-forward" style="margin-left: 8px;" />
        </Button>
      </ButtonGroup>
      <br><br>
      <ButtonGroup size="small">
        <Button type="primary">L</Button>
        <Button>M</Button>
        <Button>M</Button>
        <Button border="dashed">R</Button>
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
        <Button border="dashed">R</Button>
      </ButtonGroup>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 按钮类型 | string | `primary`, `info`, `success`, `warning`, `error` | -
border | 边框类型 | string | `solid`, `none`, `dashed` | `solid`
ghost | 是否是幽灵按钮 | boolean | - | false
size | 按钮大小 | string | `default`, `large`, `small` | `default`
shape | 按钮形状 | string | `circle`, `round` | -
block | 开启后，按钮的长度为 100% | boolean | - | `false`
disabled | 设置按钮为禁用状态 | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
click | 点击按钮的回调 | -

> Slots

参数 | 说明
---|---
children | 自定义内容
icon | 自定义左边的 icon

> ButtonGroup Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 按钮大小 | string | `default`, `large`, `small` | `default`
shape | 按钮形状 | string | `round` | -
vertical | 是否纵向排列按钮组 | boolean | - | `false`

