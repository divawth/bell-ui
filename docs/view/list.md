> size 改变大小

```js
export default {
  isViewFullBlock: true,
  height: 800,
  template: `
  <div>
    <p>Small List</p>
    <List clickable size="small">
      <ListItem>
        北京
      </ListItem>
      <ListItem>
        上海
      </ListItem>
      <ListItem>
        广州
      </ListItem>
      <ListItem>
        深圳
      </ListItem>
    </List>
    <br><br>
    <p>Default List</p>
    <List>
      <ListItem>
        北京
      </ListItem>
      <ListItem>
        上海
      </ListItem>
      <ListItem>
        广州
      </ListItem>
      <ListItem>
        深圳
      </ListItem>
    </List>
    <br><br>
    <p>Large List</p>
    <List size="large">
      <ListItem>
        北京
      </ListItem>
      <ListItem>
        上海
      </ListItem>
      <ListItem>
        广州
      </ListItem>
      <ListItem>
        深圳
      </ListItem>
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
    <Button on-click="change()">
      Switch Data
    </Button>
    <br><br>
    <List loading="{{loading}}">
      {{#each data}}
        <ListItem>
          <Avatar
            circle
            src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
          />
          {{title}}
        </ListItem>
      {{/each}}
    </List>
  </div>
  `,
  data () {
    return {
      data: [
        {
          title: '北京'
        },
        {
          title: '上海'
        },
        {
          title: '广州'
        }
      ]
    }
  },
  methods: {
    change: function () {
      let me = this
      me.set('loading', true)
      if (me.get('data')) {
        setTimeout(function () {
          me.set('data', null)
          me.set('loading', false)
        }, 1000);
      }
      else {
        setTimeout(function () {
          let data = [
            {
              title: '北京'
            },
            {
              title: '上海'
            },
            {
              title: '广州'
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
    <ListItem>
      1 号员工
    </ListItem>
    <ListItem>
      2 号员工
    </ListItem>
    <ListItem>
      3 号员工
    </ListItem>
  </List>
  `
}
```


> 列表为空

```js
export default {
  template: `
  <List>
    <template slot="empty">
      空空的
    </template>
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
  <List clickable>
    <template slot="header">
      最近聊天记录
    </template>
    <ListItem on-click="clickItem()">
      <Avatar
        circle
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />
      Junmer
    </ListItem>
    <ListItem>
      <Avatar
        circle
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />
      Junmer
    </ListItem>
    <ListItem>
      <Avatar
        circle
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />
      Junmer
    </ListItem>
    <ListItem>
      <Avatar
        circle
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />
      Junmer
    </ListItem>
  </List>
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
simple | 是否是简洁风格 | boolean | - | -
loading | 是否展示 loading | boolean | - | -
clickable | 列表项是否可点击 | boolean | - | -
size | 列表的大小 | string | default, small, large | default
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> List Slots

参数 | 说明
---|---
header | 列表的 header
empty | 列表为空时的内容
children | 列表项

> ListItem Slots

参数 | 说明
---|---
children | 列表内容

> ListItem Events

事件名称 | 说明 | 回调参数
---|---|---
click | clickable 为 true 时，点击列表的 item 触发 | -
