> size 改变大小

```js
export default {
  isViewFullBlock: true,
  height: 800,
  template: `
  <div>
    <p>Small List</p>
    <List border clickable size="small">
      <Item>
        Header
      </Item>
      <Item>
        Racing car sprays burning fuel into crowd.
      </Item>
      <Item>
        Japanese princess to wed commoner.
      </Item>
      <Item>
        Australian walks 100km after outback crash.
      </Item>
      <Item>
        Man charged over missing wedding girl.
      </Item>
      <Item>
        Los Angeles battles huge wildfires.
      </Item>
      <Item>
        Footer
      </Item>
    </List>
    <br><br>
    <p>Default List</p>
    <List border>
      <Item>
        Header
      </Item>
      <Item>
        Racing car sprays burning fuel into crowd.
      </Item>
      <Item>
        Japanese princess to wed commoner.
      </Item>
      <Item>
        Australian walks 100km after outback crash.
      </Item>
      <Item>
        Man charged over missing wedding girl.
      </Item>
      <Item>
        Los Angeles battles huge wildfires.
      </Item>
      <Item>
        Footer
      </Item>
    </List>
    <br><br>
    <p>Large List</p>
    <List border size="large">
      <Item>
        Header
      </Item>
      <Item>
        Racing car sprays burning fuel into crowd.
      </Item>
      <Item>
        Japanese princess to wed commoner.
      </Item>
      <Item>
        Australian walks 100km after outback crash.
      </Item>
      <Item>
        Man charged over missing wedding girl.
      </Item>
      <Item>
        Los Angeles battles huge wildfires.
      </Item>
      <Item>
        Footer
      </Item>
    </List>
  </div>
  `
}
```

> 基础列表

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
  <div>
    <Button on-click="change()">Switch Data</Button>
    <br><br>
    <List loading="{{loading}}">
      {{#each data}}
        <Item>
          <template slot="header">
            <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
          </template>
          <template slot="footer">
            <Button on-click="edit()">edit</Button>
            <Button on-click="cancel()">cancel</Button>
          </template>
          <div style="font-weight: bold;">{{title}}</div>
          <div>{{title}}</div>
        </Item>
      {{/each}}
    </List>
  </div>
  `,
  data () {
    return {
      data: [
        {
          title: 'Ant Design Title'
        },
        {
          title: 'Ant Design Title'
        },
        {
          title: 'Ant Design Title'
        }
      ]
    }
  },
  methods: {
    edit: function () {
      this.$message.success('edit')
    },
    cancel: function () {
      this.$message.success('cancel')
    },
    change: function () {
      let me = this
      me.set('loading', true)
      if (me.get('data')) {
        setTimeout(function () {
          me.set('data', null)
          me.set('loading', false)
        }, 1000);
      } else {
        setTimeout(function () {
          let data = [
            {
              title: 'Ant Design Title 1'
            },
            {
              title: 'Ant Design Title 2'
            },
            {
              title: 'Ant Design Title 3'
            },
            {
              title: 'Ant Design Title 4'
            }
          ];
          me.set({
            loading: false,
            data: data
          })
        }, 1000);
      }
    }
  }
}
```

> 不带边框

```js
export default {
  template: `
  <List simple>
    <Item>
      <template slot="header">
        <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
      </template>
      1 号员工
    </Item>
    <Item>
      <template slot="header">
        <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
      </template>
      2 号员工
    </Item>
    <Item>
      <template slot="header">
        <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
      </template>
      3 号员工
    </Item>
  </List>
  `
}
```

> 聊天列表

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
  <div class="list-wrapper">
    <List clickable>
      <template slot="header">
        最近聊天记录
      </template>
      <Item on-click="clickItem()">
        <template slot="header">
          <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
        </template>
        <template slot="footer">
          <Icon name="chatbubbles" />
        </template>
        Junmer
      </Item>
      <Item>
        <template slot="header">
          <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
        </template>
        <template slot="footer">
          <Icon name="chatbubbles" />
        </template>
        Leon Lu
      </Item>
      <Item>
        <template slot="header">
          <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
        </template>
        <template slot="footer">
          <Icon name="chatbubbles" />
        </template>
        Zhiqiang Zhang
      </Item>
      <Item>
        <template slot="header">
          <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
        </template>
        <template slot="footer">
          <Icon name="chatbubbles" />
        </template>
        CK Yau
      </Item>
    </List>
    <List simple>
      <template slot="header">
        历史聊天记录
      </template>
      <Item>
        <template slot="header">
          <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"></Avatar>
        </template>
        <template slot="footer">
          <Icon name="chatbubbles" />
        </template>
        Huiquan Huang
      </Item>
    </List>
  </div>
  `,
  methods: {
    clickItem: function (event) {
      console.log(event, event.target)
    }
  }
}
```

#### API

> List Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
simple | 是否是简洁风格 | boolean | - | false
loading | 是否展示 loading | boolean | - | false
clickable | 列表项是否可点击 | boolean | - | false
size | 列表的大小 | string | default, small, large | default

> List Slots

参数 | 说明
---|---
header | 列表的 header
empty | 列表为空时的内容

> Item Slots

参数 | 说明
---|---
header | 列表的 item 的 header
footer | 列表的 item 的 footer

> Item Events

事件名称 | 说明 | 回调参数
---|---|---
click | clickable 为 true 时，点击列表的 item 触发 | -
