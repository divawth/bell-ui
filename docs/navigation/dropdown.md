#### Dropdown 下拉菜单

展示一组折叠的下拉菜单。

> 基础用法

需要配合 DropdownMenu 和 DropdownItem 两个组件来使用。设置 slot 为 list。本例还展示了禁用项和分隔线。

```js
export default {
  template: `
    <div>
      <Dropdown>
        <a href="javascript:void(0)">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <Dropdown style="margin-left: 20px">
        <Button type="primary">
          下拉菜单
          <Icon type="ios-arrow-down"></Icon>
        </Button>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
    </div>
  `
}
```

> 触发方式

通过设置属性 trigger 可以更改触发方式。设置 custom 时使用 visible 控制展示隐藏

```js
export default {
  template: `
    <div>
      <Dropdown>
        <a href="javascript:void(0)">
          hover 触发
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <Dropdown trigger="click" style="margin-left: 20px">
        <a href="javascript:void(0)">
          click 触发
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <Dropdown trigger="custom" visible="{{visible}}" style="margin-left: 20px">
        <a href="javascript:void(0)" on-click="handleOpen()">
          custom 触发
          <Icon type="arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <p>常用于各种自定义下拉内容的场景。</p>
            <div style="text-align: right;margin:10px;">
              <Button type="primary" on-click="handleClose()">关闭</Button>
            </div>
          </DropdownMenu>
        </template>
      </Dropdown>
      <style>
        p {
          margin: 10px;
          font-size: 14px;
          white-space: nowrap;
        }
      </style>
    </div>
  `,
  methods: {
    handleOpen () {
      this.set('visible', true)
    },
    handleClose () {
      this.set('visible', false)
    }
  }
}
```
> 对齐方式

通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向。

```js
export default {
  template: `
    <div>
      <Dropdown placement="bottom-start">
        <a href="javascript:void(0)">
          菜单(左)
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <Dropdown style="margin-left: 20px">
        <a href="javascript:void(0)">
          菜单(居中)
          <Icon type="ios-arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
      <Dropdown style="margin-left: 20px" placement="bottom-end">
        <a href="javascript:void(0)">
          菜单(右)
          <Icon type="arrow-down"></Icon>
        </a>
        <template slot="list">
          <DropdownMenu>
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem disabled>豆汁儿</DropdownItem>
            <DropdownItem>冰糖葫芦</DropdownItem>
            <DropdownItem divided>北京烤鸭</DropdownItem>
          </DropdownMenu>
        </template>
      </Dropdown>
    </div>
  `
}
```
#### API

> Dropdown Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
placement | tabs 类型 | string | line 和 card | line
trigger | 触发方式, 需配合 visible 一起使用 | string | hover（悬停）click（点击）custom（自定义） | hover
visible | 手动控制下拉框的显示，在 trigger = 'custom' 时使用 | boolean | - | false

> DropdownItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
divided | 显示分割线 | boolean | - | false
disabled | 禁用该项 | boolean | - | false
selected | 标记该项为选中状态 | boolean | - | false
name | 用来标识这一项 | string | - | false