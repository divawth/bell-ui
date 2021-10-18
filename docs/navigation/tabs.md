> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs value="name2">
      <TabPanel label="标签一" name="name1">
        标签一的内容
      </TabPanel>
      <TabPanel label="标签二" name="name2">
        标签二的内容
      </TabPanel>
      <TabPanel label="标签三" name="name3">
        标签三的内容
      </TabPanel>
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
    <Tabs value="1">
      <TabPanel label="标签一">
        标签一的内容
      </TabPanel>
      <TabPanel label="标签二" disabled>
        标签二的内容
      </TabPanel>
      <TabPanel label="标签三">
        标签三的内容
      </TabPanel>
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
      <TabPanel label="标签一" name="name1" icon="windows-fill">
        标签一的内容
      </TabPanel>
      <TabPanel label="标签二" name="name2" icon="apple-fill">
        标签二的内容
      </TabPanel>
      <TabPanel label="标签三" name="name3" icon="google-fill">
        标签三的内容
      </TabPanel>
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
        <Radio value="small">
          small
        </Radio>
        <Radio value="default">
          default
        </Radio>
        <Radio value="large">
          large
        </Radio>
      </RadioGroup>
      <Tabs size="{{size}}" style="margin-top: 10px">
        {{#each tabsList}}
          <TabPanel label="{{name}}">
            {{content}}
          </TabPanel>
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

> 卡片式的标签

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Tabs type="card">
      <TabPanel label="标签一" name="name1">
        标签一的内容
      </TabPanel>
      <TabPanel label="标签二" name="name2" icon="apple-fill">
        标签二的内容
      </TabPanel>
      <TabPanel label="标签三" name="name3">
        标签三的内容
      </TabPanel>
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
          <TabPanel key="{{name}}" name="{{name}}" label="{{name}}">
            {{content}}
          </TabPanel>
        {{/each}}
      </Tabs>
    </div>
  `,
  methods: {
    removeTab(data) {
      let list = this.copy(this.get('tabsList'))
      this.set({
        tabsList: list.filter(item => {
          return item.name !== data.name
        })
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
value / `model` | 当前选中的 tab 的 name 值 | string | - | -
type | tabs 类型 | string | `card` | -
size | 大小 | string | `default`, `small`, `large` | `default`
closable | 是否可以关闭页签，仅在 `type="card"` 时有效 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Tabs Events

事件名称 | 说明 | 回调参数
---|---|---
tabRemove | 删除 tab 时触发（仅开启 closable 时有效） | `{name: ''}`

> TabPanel Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
name | 用于标识当前面板，对应 value | string | - | 该选项卡在选项卡列表中的顺序值，如第一个选项卡则为 '1'
label | 选项卡头显示文字 | string | - | -
icon | 选项卡图标 | string | - | -
disabled | 是否禁用该选项卡 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -