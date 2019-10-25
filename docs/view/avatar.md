> 基础用法

提供 4 种大小的头像

```js
export default {
  template: `
    <div>
      <div>

        <Avatar
          size="large"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

        <Avatar
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

        <Avatar
          size="small"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

      </div>
      <div style="margin-top: 10px;">

        <Avatar
          circle
          size="large"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

        <Avatar
          circle
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

        <Avatar
          circle
          size="small"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
        />

      </div>
    </div>
  `
}
```

> 设置文字或者 icon 的头像

```js
export default {
  template: `
    <div>
      <Avatar>
        <Icon
          slot="icon"
          name="user-2-fill"
          size="22"
        />
      </Avatar>
      <Avatar text="U" />
      <Avatar text="USER" />
      <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
      <Avatar backgroundColor="#fde3cf" color="#f56a00" text="U" />
      <Avatar backgroundColor="#87d068">
        <Icon
          slot="icon"
          name="user-2-fill"
          size="22"
        />
      </Avatar>
    </div>
  `
}
```

> 带角标的头像

```js
export default {
  template: `
    <div>
      <Badge count="1">
        <Avatar>
          <Icon
            slot="icon"
            name="user-2-fill"
            size="22"
          />
        </Avatar>
      </Badge>
      <br><br>
      <Badge dot>
        <Avatar>
          <Icon
            slot="icon"
            name="user-2-fill"
            size="22"
          />
        </Avatar>
      </Badge>
    </div>
  `
}
```

> 自动调整字符大小

```js
export default {
  template: `
    <div class="demo-avatar">
      <Avatar
        size="large"
        text="{{user}}"
        backgroundColor="{{color}}"
        style="margin-right: 10px;"
      />
      <br><br>
      <Button size="small" on-click="handleChange()">
        Change
      </Button>
    </div>
  `,
  data () {
    return {
      user: 'U',
      color: '#f56a00'
    }
  },
  methods: {
    handleChange () {
      const USER_LIST = ['U', 'Lucy', 'Tom', 'Edward']
      const COLOR_LIST = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae']

      const index = USER_LIST.indexOf(this.get('user'))
      let user = index < USER_LIST.length - 1 ? USER_LIST[ index + 1 ] : USER_LIST[ 0 ]
      let color = index < COLOR_LIST.length - 1 ? COLOR_LIST[ index + 1 ] : COLOR_LIST[ 0 ]
      this.set({
        user: user,
        color: color
      })
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | `default`, `large`, `small` | `default`
circle | 是否为圆形 | boolean | - | `false`
text | 文字 | string | - | -
src | 图片地址 | string | - | -
srcSet | 原生 `srcset` 属性 | string | - | -
alt | 原生 `alt` 属性 | string | - | -
color | 文字颜色 | string | - | -
fontSize | 文字大小 | numeric | - | -
backgroundColor | 背景色 | string | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

名称 | 说明
---|---
icon | 设置 icon

> Events

名称 | 说明
---|---
error | 图片加载失败时触发