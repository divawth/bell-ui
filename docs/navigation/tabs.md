> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs value="name1">
      <TabPanel label="标签一" name="name1">标签一的内容</TabPanel>
      <TabPanel label="标签二" name="name2">标签二的内容</TabPanel>
      <TabPanel label="标签三" name="name3">标签三的内容</TabPanel>
    </Tabs>
  `
}
```

> 禁用某一项

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs>
      <TabPanel label="标签一">标签一的内容</TabPanel>
      <TabPanel label="标签二" disabled>标签二的内容</TabPanel>
      <TabPanel label="标签三">标签三的内容</TabPanel>
    </Tabs>
  `
}
```

> 有图标的标签

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs>
      <TabPanel label="macOS" icon="happy">标签一的内容</TabPanel>
      <TabPanel label="Windows" icon="happy">标签二的内容</TabPanel>
      <TabPanel label="Linux" icon="happy">标签三的内容</TabPanel>
    </Tabs>
  `
}
```

> size 控制大小

```js
export default {
  isViewFullBlock: true,
  height: 300,
  data: function () {
    return {
      tabsList: [],
      size: 'default'
    }
  },
  template: `
    <div>
      <RadioGroup model="size" type="info">
        <Radio label="small" value="small"></Radio>
        <Radio label="default" value="default"></Radio>
        <Radio label="large" value="large"></Radio>
      </RadioGroup>
      <Tabs size="{{size}}" style="margin-top: 10px">
        {{#each tabsList}}
          <TabPanel label="{{name}}">{{content}}</TabPanel>
        {{/each}}
      </Tabs>
    </div>
  `,
  afterMount: function () {
    let tabsList = []
    for (let i = 0; i < 3; i++) {
      tabsList.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
    this.set({
      tabsList: tabsList
    })
  }
}
```

> extra 添加附加操作

```js
export default {
  data: function () {
    return {
      tabsList: []
    }
  },
  template: `
    <div>
      <Tabs>
        {{#each tabsList}}
          <TabPanel label="{{name}}">{{content}}</TabPanel>
        {{/each}}

        <template slot="extra">
          <Button border="none" on-click="addTab()">
            Add
          </Button>
        </template>
      </Tabs>
    </div>
  `,
  methods: {
    addTab () {
      let tabsList = this.copy(this.get('tabsList'))
      tabsList.push({
        name: `Tab ${tabsList.length}`,
        content: `Content of tab ${tabsList.length}`
      });
      this.set({
        tabsList: tabsList
      })
    }
  },
  afterMount: function () {
    let tabsList = []
    for (let i = 0; i < 3; i++) {
      tabsList.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
    this.set({
      tabsList: tabsList
    })
  }
}
```

> 卡片式的标签

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs size="small" type="card">
      <TabPanel label="标签一">标签一的内容</TabPanel>
      <TabPanel label="标签二">标签二的内容</TabPanel>
      <TabPanel label="标签三">标签三的内容</TabPanel>
    </Tabs>
  `
}
```

> closable 设置可关闭的卡片按钮，tabRemove 接受关闭事件

设置 closable 之后必须给 TabPanel 传 key。

```js
export default {
  data: function () {
    return {
      tabsList: []
    }
  },
  template: `
    <div>
      <Tabs type="card" closable on-tab-remove="removeTab($data)">
        {{#each tabsList}}
          <TabPanel key="{{name}}" label="{{name}}">{{content}}</TabPanel>
        {{/each}}
      </Tabs>
    </div>
  `,
  methods: {
    removeTab(data) {
      let list = this.copy(this.get('tabsList'))
      list = list.filter((item, index) => {
        return index !== data.id
      })
      this.set({
        tabsList: list
      })
    }
  },
  afterMount: function () {
    let tabsList = []
    for (let i = 0; i < 3; i++) {
      tabsList.push({
        name: `Tab ${i}`,
        content: `Content of tab ${i}`
      });
    }
    this.set({
      tabsList: tabsList
    })
  }
}
```

#### API

> Tabs Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | tabs 类型 | string | card | -
size | 大小 | string | default, small, large | default
closable | 是否可以关闭页签，仅在 type="card" 时有效 | boolean | - | false
value | 当前选中的 tab 的 name 值 | string, number | - | -

> Tabs Events

事件名称 | 说明 | 回调参数
---|---|---
tabRemove | 删除 tab 的时候回调（仅开启 closable 时有效） | name

> TabPanel Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 用于标识当前面板，对应 value，默认为其索引值 | string | - | -
label | 选项卡头显示文字 | string | - | -
icon | 选项卡图标 | string | - | -
disabled | 是否禁用该选项卡 | boolean | - | false