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
      <Menu theme="{{theme}}" activeName="1" on-change="change()">
        <MenuItem name="1">
          <Icon name="windows-fill" />
          内容管理
        </MenuItem>
        <MenuItem name="2" disabled>
          <Icon name="apple-fill" />
          用户管理
        </MenuItem>
        <SubMenu name="3">
          <template slot="title">
            <Icon name="google-fill" />
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
        </SubMenu>
        <MenuItem name="4">
          <Icon name="settings-4-fill" />
          <a href="https://yoxjs.github.io/yox/#/ts" target="_blank">
            综合设置（外链）
          </a>
        </MenuItem>
      </Menu>
      <br>
      <p style="margin-top: 140px">切换主题</p>
      <RadioGroup model="theme">
        <Radio value="light">
          light
        </Radio>
        <Radio value="dark" checked>
          dark
        </Radio>
      </RadioGroup>
    </div>
  `,
  methods: {
    change(event, data) {
      console.log(data)
    }
  }
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
          <Icon name="windows-fill" />
          内容管理
        </MenuItem>
        <MenuItem name="2" disabled>
          <Icon name="apple-fill" />
          用户管理
        </MenuItem>
        <SubMenu name="3">
          <template slot="title">
            <Icon name="google-fill" />
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
        </SubMenu>
        <MenuItem name="4">
          <Icon name="settings-4-fill" />
          <a href="https://ng.ant.design" target="_blank">综合设置</a>
        </MenuItem>
      </Menu>
      <br>
      <p>切换主题</p>
      <RadioGroup model="theme">
        <Radio value="light">
          light
        </Radio>
        <Radio value="dark" checked>
          dark
        </Radio>
      </RadioGroup>
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
        <SubMenu name="1">
          <template slot="title">
            <Icon name="windows-fill" />
            内容管理
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2" disabled>评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </SubMenu>
        <SubMenu name="2">
          <template slot="title">
            <Icon name="apple-fill" />
            用户管理
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <MenuItem name="2-2">活跃用户</MenuItem>
        </SubMenu>
        <SubMenu name="3">
          <template slot="title">
            <Icon name="google-fill" />
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
        </SubMenu>
      </Menu>

      <br>
      <p>切换主题</p>
      <RadioGroup model="theme">
        <Radio value="light">
          light
        </Radio>
        <Radio value="dark" checked>
          dark
        </Radio>
      </RadioGroup>
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
      <Button type="primary" on-click="toggle('collapsed')">
        {{collapsed ? '展开' : '收起'}}
      </Button>
      <br><br>
      <Menu theme="dark" mode="inline" collapsed="{{collapsed}}">
        <MenuItem name="4">
          {{#if !collapsed}}
            <Icon name="windows-fill" />
            内容管理
          {{else}}
            <Tooltip placement="right" content="内容管理">
              <Icon name="windows-fill" size="24" />
            </Tooltip>
          {{/if}}
        </MenuItem>
        <SubMenu name="1">
          <template slot="title">
            {{#if !collapsed}}
              <Icon name="windows-fill" size="14" />
              内容管理
            {{else}}
              <Icon name="windows-fill" size="24" />
            {{/if}}
          </template>
          <MenuItem name="1-1">文章管理</MenuItem>
          <MenuItem name="1-2">评论管理</MenuItem>
          <MenuItem name="1-3">举报管理</MenuItem>
        </SubMenu>
        <SubMenu name="2">
          <template slot="title">
            {{#if !collapsed}}
              <Icon name="apple-fill" size="14" />
              用户管理
            {{else}}
              <Icon name="apple-fill" size="24" />
            {{/if}}
          </template>
          <MenuItem name="2-1">新增用户</MenuItem>
          <SubMenu name="2-2">
            <template slot="title">
              <Icon name="apple-fill" />
              新增用户
            </template>
            <MenuItem name="2-2-1">新增用户2</MenuItem>
            <MenuItem name="2-2-2">新增用户2</MenuItem>
          </SubMenu>
        </SubMenu>
        <SubMenu name="3">
          <template slot="title">
            {{#if !collapsed}}
              <Icon name="google-fill" size="14" />
              统计分析
            {{else}}
              <Icon name="google-fill" size="24" />
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
        </SubMenu>
      </Menu>
    </div>
  `,
  data: function () {
    return {
      collapsed: false
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
openNames | 默认展开的 sub menu | array | - | []
collapsed | 在 mode 状态下, 收起菜单 | boolean | - | false