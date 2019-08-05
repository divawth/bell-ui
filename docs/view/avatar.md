> 基础用法

提供五种大小的头像

```js
export default {
  template: `
    <div>
      <div>
        <Avatar size="huge" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar size="large" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar size="tiny" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
      </div>
      <div style="margin-top: 10px;">
        <Avatar shape="circle" size="huge" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar shape="circle" size="large" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar shape="circle" size="small" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

        <Avatar shape="circle" size="tiny" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
      </div>
    </div>
  `
}
```

> 设置文字或者 icon 的头像

```js
export default {
  template: `
    <div class="demo-avatar">
      <Avatar>
        <Icon name="person" size="26" slot="icon" />
      </Avatar>
      <Avatar text="U" />
      <Avatar text="USER" />
      <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
      <Avatar bgColor="#fde3cf" color="#f56a00" text="U" />
      <Avatar style="background-color: #87d068">
        <Icon name="person" size="26" slot="icon" />
      </Avatar>
    </div>
  `
}
```

> 带徽标的头像

```js
export default {
  template: `
    <div class="demo-avatar-badge">
      <Badge count="1">
        <Avatar>
          <Icon name="person" size="26" slot="icon" />
        </Avatar>
      </Badge>
      <br><br>
      <Badge dot>
        <Avatar>
          <Icon name="person" size="26" slot="icon" />
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
      <Avatar size="large" style="margin-right: 10px;" bgColor="{{color}}" text="{{user}}"></Avatar>
      <Button size="small" on-click="handleChange()">Change</Button>
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
        user,
        color
      })
    }
  }
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | default, huge, large, small, tiny | default
shape | 形状 | string | circle | -
text | 文字 | string | - | -
src | 图片地址 | string | - | -
srcset | srcset | string | - | -
bgColor | 背景色 | string | - | -
color | 文字颜色 | string | - | #fff
fontSize | 图标大小 | number | - | -

> Slots

名称 | 说明
---|---
icon | 设置 icon
