基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

> 示例一个

    export default {
        template: `
        <div>
            <Card>
                <CardHeader>
                    <template slot="title">
                        Myron Avatar
                    </template>

                    <template slot="subTitle">
                        sub title
                    </template>

                    <template slot="avatar">
                        <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" ></Avatar>
                    </template>
                </CardHeader>

                <CardMedia title="Image Title" subTitle="Image Sub Title">
                    <img src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />
                </CardMedia>

                <CardTitle title="Content Title" subTitle="Content Title"/>

                <CardText>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </CardText>

                <CardActions>
                    <Button>
                        Action1
                    </Button>
                    <Button>
                        Action2
                    </Button>
                </CardActions>
            </Card>
        </div>
        `
    }

> 示例一个

    export default {
        template: `
        <div>
            <Card>

                <CardTitle>
                    <template slot="title">
                        <span>22</span>Content Title
                    </template>
                    <template slot="subTitle">
                        Content Title
                    </template>

                    <template slot="actions">
                        <Button>
                            Act1
                        </Button>
                        <Button>
                            Act2
                        </Button>
                    </template>
                </CardTitle>

                <CardText>
                    散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
                    调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
                    似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
                    找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                </CardText>

                <CardActions>
                    <Button>
                        Action1
                    </Button>
                    <Button>
                        Action2
                    </Button>
                </CardActions>
            </Card>
        </div>
        `
    }

#### API

### CardHeader

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
titleClass | 标题样式 | string | - | -
subTitleClass | 副标题样式 | string | - | -

> slot

名称 | 说明
---|---
title | 用于放置标题文字
subTitle | 用于放置副标题文字
avatar | 用于放置 Avatar 组件

### CardMedia

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
titleClass | 标题样式 | string | - | -
subTitleClass | 副标题样式 | string | - | -

> slot

名称 | 说明
---|---
title | 用于放置标题文字
subTitle | 用于放置副标题文字

### CardTitle

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
titleClass | 标题样式 | string | - | -
subTitleClass | 副标题样式 | string | - | -

### CardText

> slot

名称 | 说明
---|---
title | 用于放置标题文字
subTitle | 用于放置副标题文字

### CardActions

> children

名称 | 说明
---|---
default | 用于放置按钮
