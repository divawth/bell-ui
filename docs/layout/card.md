### Card 卡片

通用卡片容器

### 何时使用

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

> 基础使用

```js
export default {
  template: `
    <Card width="300">
      <CardHeader>
        <template slot="title">
          Card title
        </template>
        <a
          slot="extra"
          href="xx"
        >
          More
        </a>
      </CardHeader>
      <CardBody>
        Card content
      </CardBody>
    </Card>
  `
}
```

> 卡片示例

```js
export default {
  height: 640,
  template: `
  <Card>
    <CardHeader>
      <template slot="title">
        标题
      </template>

      <template slot="subTitle">
        副标题
      </template>

      <Avatar
        slot="avatar"
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />
    </CardHeader>

    <CardMedia>

      <template slot="title">
        标题
      </template>

      <template slot="subTitle">
        副标题
      </template>

      <img
        src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
      />

    </CardMedia>

    <CardBody>
      散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
      调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
      似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
      找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
    </CardBody>

    <CardFooter>
      <Button>
        Action1
      </Button>
      <Button>
        Action2
      </Button>
    </CardFooter>
  </Card>
  `
}
```

> 简洁风格（无边框）

```js
export default {
  template: `
    <div style="background: #ccc; padding: 15px;">
      <Card simple width="300">
        <CardHeader>
          <template slot="title">
            Card title
          </template>
          <a
            slot="extra"
            href="xx"
          >
            More
          </a>
        </CardHeader>

        <CardBody>
          Card content
        </CardBody>
      </Card>
    </div>
  `
}
```

> 阴影

```js
export default {
  template: `
  <Card shadow="hover" width="300">
    <CardHeader>
      <template slot="title">
        Card title
      </template>
      <a
        slot="extra"
        href="xx"
      >
        More
      </a>
    </CardHeader>

    <CardBody>
      Card content
    </CardBody>
  </Card>
  `
}
```

#### API

> Card Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
simple | 是否是简洁风格（无边框） | boolean | - | `false`
shadow | 何时显示阴影 | string | `always`, `hover`, `never` | `always`
width | 显示宽度 | numeric | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Card Slots

参数 | 说明
---|---
children | 内容



> CardHeader Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CardHeader Slots

参数 | 说明
---|---
title | 标题
subTitle | 子标题
extra | 标题栏右侧的内容
avatar | 头像



> CardBody Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CardBody Slots

参数 | 说明
---|---
children | 内容



> CardMedia Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CardMedia Slots

参数 | 说明
---|---
title | 标题
subTitle | 子标题
children | 内容



> CardFooter Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> CardFooter Slots

参数 | 说明
---|---
children | 内容