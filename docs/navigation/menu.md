### Menu 导航菜单

为页面和功能提供导航的菜单列表。


> 水平菜单

```js
export default {
  isViewFullBlock: true,
  height: 400,
  data: function () {
    return {
      theme: 'dark'
    }
  },
  template: `
    <div class="bell-template">
      <Menu theme="{{theme}}" activeName="1">
        <MenuItem name="1">
          <Icon name="paper"></Icon>
          内容管理
        </MenuItem>
        <MenuItem name="2">
          <Icon name="people"></Icon>
          用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon name="stats" />
            统计分析（子菜单）
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
          <Icon name="settings"></Icon>
          <a href="https://yoxjs.github.io/yox/#/ts" target="_blank">
            综合设置（外链）
          </a>
        </MenuItem>
      </Menu>
      <br>
      <p style="margin-top: 140px">切换主题</p>
      <RadioGroup model="theme" type="info">
        <Radio label="light" value="light"></Radio>
        <Radio label="dark" value="dark" checked></Radio>
      </RadioGroup>
      <style>
        .bell-icon {
          margin-right: 6px;
        }
      </style>
    </div>
  `,
}
```

> 垂直菜单

```js
export default {
  isViewFullBlock: true,
  height: 440,
  data: function () {
    return {
      theme: 'dark'
    }
  },
  template: `
    <div class="bell-template" style="width: 280px;">
      <Menu mode="vertical" theme="{{theme}}" activeName="1">
        <MenuItem name="1">
          <Icon name="paper"></Icon>
          内容管理
        </MenuItem>
        <MenuItem name="2">
          <Icon name="people"></Icon>
          用户管理
        </MenuItem>
        <Submenu name="3">
          <template slot="title">
            <Icon name="stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
        <MenuItem name="4">
          <Icon name="settings"></Icon>
          <a href="https://ng.ant.design" target="_blank">综合设置</a>
        </MenuItem>
      </Menu>
      <br>
      <p>切换主题</p>
      <RadioGroup model="theme" type="info">
        <Radio label="light" value="light"></Radio>
        <Radio label="dark" value="dark" checked></Radio>
      </RadioGroup>
      <style>
        .bell-icon {
          margin-right: 6px;
        }
      </style>
    </div>
  `,
}
```

> 内嵌菜单

```js
export default {
  isViewFullBlock: true,
  height: 600,
  data: function () {
    return {
      theme: 'dark'
    }
  },
  template: `
    <div class="bell-template" style="width: 280px;">
      <Menu theme="{{theme}}" mode="inline" activeName="1-3" openNames="{{["1", "2"]}}">
        <Submenu name="1">
          <template slot="title">
            <Icon name="paper" />
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            <Icon name="people" />
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            <Icon name="stats" />
            统计分析
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>

      <br>
      <p>切换主题</p>
      <RadioGroup model="theme" type="info">
        <Radio label="light" value="light"></Radio>
        <Radio label="dark" value="dark" checked></Radio>
      </RadioGroup>
      <style>
        .bell-icon {
          margin-right: 6px;
        }
      </style>
    </div>
  `,
}
```

> 内嵌菜单被展开/缩起

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div class="bell-template" style="width: 200px;">
      <Button type="primary" on-click="toggle('isCollapsed')">
        {{isCollapsed ? '展开' : '收起'}}
      </Button>
      <br><br>
      <Menu theme="dark" mode="inline" isCollapsed="{{isCollapsed}}">
        <MenuItem name="4">
          {{#if !isCollapsed}}
            <Icon name="paper" />
            内容管理
          {{else}}
            <Tooltip placement="right" content="内容管理">
              <Icon name="paper" size="32" />
            </Tooltip>
          {{/if}}
        </MenuItem>
        <Submenu name="1">
          <template slot="title">
            {{#if !isCollapsed}}
              <Icon name="paper" size="14" />
              内容管理
            {{else}}
              <Icon name="paper" size="32" />
            {{/if}}
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </Submenu>
        <Submenu name="2">
          <template slot="title">
            {{#if !isCollapsed}}
              <Icon name="people" size="14" />
              用户管理
            {{else}}
              <Icon name="people" size="32" />
            {{/if}}
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <Submenu name="2-2">
            <template slot="title">
              <Icon name="people" />
              新增用户
            </template>
            <MenuItem name="2-2-1">新增用户2</MenuItem>
            <MenuItem name="2-2-2">新增用户2</MenuItem>
          </Submenu>
        </Submenu>
        <Submenu name="3">
          <template slot="title">
            {{#if !isCollapsed}}
              <Icon name="stats" size="14" />
              统计分析
            {{else}}
              <Icon name="stats" size="32" />
            {{/if}}
          </template>
          <MenuGroup title="使用">
            <MenuItem name="3-1">新增和启动</MenuItem>
            <MenuItem name="3-2">活跃分析</MenuItem>
            <MenuItem name="3-3">时段分析</MenuItem>
          </MenuGroup>
          <MenuGroup title="留存">
            <MenuItem name="3-4">用户留存</MenuItem>
            <MenuItem name="3-5">流失用户</MenuItem>
          </MenuGroup>
        </Submenu>
      </Menu>
      <style>
        .bell-icon {
          margin-right: 6px;
        }
      </style>
    </div>
  `,
  data: function () {
    return {
      isCollapsed: false
    }
  }
}
```

#### API

> Menu props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
mode | 菜单类型 | string | horizontal, vertical, inline | horizontal
theme | 主题 | string | light、dark | dark
activeName | 默认选中菜单 | string | - | -
openNames | 默认展开的 submenu | array | - | []
isCollapsed | 在 mode 状态下, 收起菜单 | boolean | - | false