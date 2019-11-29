### Layout 布局

采用 flex 布局实现，请注意浏览器兼容性问题。

> 基础用法

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Layout vertical className="layout-demo">
      <LayoutHeader>
        Logo

        <template slot="extra">
          Extra
        </template>
      </LayoutHeader>
      <LayoutContent>
        Content
      </LayoutContent>
      <LayoutFooter>
        官网
        <br>
        Copyright © 2019
      </LayoutFooter>
    </Layout>
  `,
}
```

> 有侧边栏

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Layout vertical className="layout-demo">
      <LayoutHeader>
        Header
      </LayoutHeader>
      <Layout className="layout-demo">
        <LayoutSider>
          Sider
        </LayoutSider>
        <LayoutContent>
          Content
        </LayoutContent>
      </Layout>
      <LayoutFooter>
        Footer
      </LayoutFooter>
    </Layout>
  `
}
```

> Sider 在右边

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Layout vertical className="layout-demo">
      <LayoutHeader>
        Header
      </LayoutHeader>
      <Layout className="layout-demo">
        <LayoutContent>
          Content
        </LayoutContent>
        <LayoutSider>
          Sider
        </LayoutSider>
      </Layout>
      <LayoutFooter>
        Footer
      </LayoutFooter>
    </Layout>
  `,
}
```

> Sider 在最左侧

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Layout className="layout-demo">
      <LayoutSider
        collapsed="{{collapsed}}"
        showTrigger
      >
        Sider
      </LayoutSider>
      <Layout vertical className="layout-demo">
        <LayoutHeader>
          Header
        </LayoutHeader>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </Layout>
  `,
  data: {
    collapsed: false,
  }
}
```

> 自定义折叠触发器

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
    <Layout className="layout-demo">
      <LayoutSider collapsed="{{collapsed}}">

        <template slot="logo">
          Logo
        </template>

        Sider
      </LayoutSider>
      <Layout vertical className="layout-demo">
        <LayoutHeader>
          <Button on-click="toggle('collapsed')">
            <Icon
              name="menu-line"
            />
          </Button>
        </LayoutHeader>
        <LayoutContent>Content</LayoutContent>
        <LayoutFooter>Footer</LayoutFooter>
      </Layout>
    </Layout>
  `,
  data: {
    collapsed: false,
  }
}
```

> Header Slots

参数 | 说明
---|---
children | 自定义内容
extra | 右侧的内容

> Sider Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
collapsed / `model` | 是否展开状态 | boolean | - | -
showTrigger | 是否显示触发器 | boolean | - | -
width | 展开状态的宽度 | number | - | 200

> Sider Slots

参数 | 说明
---|---
logo | 自定义 logo