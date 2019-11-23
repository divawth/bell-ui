> 基本用法

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <PageHeader
      showBack
      title="这是一个标题"
      on-back="back()"
    >
      <template slot="breadcrumb">
        <Breadcrumb>
          <BreadcrumbItem>
            一级菜单
          </BreadcrumbItem>
          <BreadcrumbItem>
            二级菜单
          </BreadcrumbItem>
          <BreadcrumbItem last>
            三级菜单
          </BreadcrumbItem>
        </Breadcrumb>
      </template>

      <template slot="tags">
        <Tag type="success">
          成功
        </Tag>
        <Tag type="error">
          失败
        </Tag>
      </template>

      <template slot="extra">
        <Button>
          取消
        </Button>
        <Button type="primary">
          确定
        </Button>
      </template>

      <template slot="content">
        这是内容
      </template>

    </PageHeader>
  `,
  methods: {
    back() {
      console.log('back')
    }
  }
}
```

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
title | 标题 | string | - | -
showBack | 是否显示返回图标 | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Slots

参数 | 说明
---|---
breadcrumb | 面包屑
tags | 自定义标签
extra | 自定义右侧内容

> Event

参数 | 说明
---|---
back | 点击返回按钮时触发