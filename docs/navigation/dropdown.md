#### Dropdown 下拉菜单

展示一组折叠的下拉菜单。

> 基础用法

需要配合 DropdownMenu 和 DropdownItem 两个组件来使用。设置 slot 为 overlay。本例还展示了禁用项和分隔线。

```js
export default {
  template: `
    <div>
      <Dropdown
        visible="{{visible1}}"
        on-open="set('visible1', true)"
        on-close="set('visible1', false)"
      >
        <a href="javascript:void(0)">
          下拉菜单
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        visible="{{visible2}}"
        on-open="set('visible2', true)"
        on-close="set('visible2', false)"
      >
        <Button type="primary">
          下拉菜单
          <Icon name="arrow-down-s-line" />
        </Button>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
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
      <Dropdown
        visible="{{visible1}}"
        on-open="set('visible1', true)"
        on-close="set('visible1', false)"
      >
        <a href="javascript:void(0)">
          hover 触发
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        visible="{{visible2}}"
        on-open="set('visible2', true)"
        on-close="set('visible2', false)"
        trigger="click"
      >
        <a href="javascript:void(0)">
          click 触发
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        visible="{{visible3}}"
        trigger="custom"
      >
        <a href="javascript:void(0)" on-click="set('visible3', true)">
          custom 触发
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <p style="padding: 0 10px;">常用于各种自定义下拉内容的场景。</p>
          <div style="text-align: right;margin:10px;">
            <Button type="primary" on-click="set('visible3', false)">关闭</Button>
          </div>
        </DropdownMenu>
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
}
```
> 对齐方式

通过设置属性 placement 可以更改下拉菜单出现的方向，与 Poptip 和 Tooltip 配置一致，支持 12 个方向。

```js
export default {
  template: `
    <div>
      <Dropdown
        visible="{{visible1}}"
        on-open="set('visible1', true)"
        on-close="set('visible1', false)"
        placement="bottom-start"
      >
        <a href="javascript:void(0)">
          菜单(左)
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        visible="{{visible2}}"
        on-open="set('visible2', true)"
        on-close="set('visible2', false)"
      >
        <a href="javascript:void(0)">
          菜单(居中)
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <Dropdown
        visible="{{visible3}}"
        on-open="set('visible3', true)"
        on-close="set('visible3', false)"
        placement="bottom-end"
      >
        <a href="javascript:void(0)">
          菜单(右)
          <Icon name="arrow-down-s-line" />
        </a>
        <DropdownMenu slot="overlay">
          <DropdownItem>驴打滚</DropdownItem>
          <DropdownItem>炸酱面</DropdownItem>
          <DropdownItem disabled>豆汁儿</DropdownItem>
          <DropdownItem>冰糖葫芦</DropdownItem>
          <DropdownItem divided>北京烤鸭</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  `
}
```
#### API

> Dropdown Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
placement | 菜单显示方位 | string | `top`, `top-start`, `top-end`, `right`, `right-start`, `right-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end` | `bottom`
trigger | 触发方式 | string | hover（悬停）click（点击）custom（自定义） | `hover`
visible | 下拉框是否展开 | boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
open | 展开时触发 | -
close | 关闭时触发 | -

> Dropdown slots

参数 | 说明
---|---
children | 触发 open/close 的元素
overlay | open/close 的元素

> DropdownItem Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
divided | 显示分割线 | boolean | - | -
disabled | 禁用该项 | boolean | - | -
active | 标记该项为选中状态 | boolean | - | -
name | 用来标识这一项 | string | - | -