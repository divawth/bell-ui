### Card 卡片

通用卡片容器

### 何时使用

基础容器，用来显示文字、列表、图文等内容，也可以配合其它组件一起使用。

> 基础使用

    export default {
      template: `
        <Card style="width: 300px;">
          <CardHeader>
            <template slot="title">
              Card title
            </template>
            <template slot="extra">
              <a>More</a>
            </template>
          </CardHeader>
          
          <CardBody>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </CardBody>
        </Card>
      `
    }
    
> 卡片示例

    export default {
      height: 640,
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

            <CardBody>
              散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
              调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
              似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
              找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
            </CardBody>

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

> bordered 设置成 false 

    export default {
      template: `
        <div style="bell-template" style="background: #ccc; padding: 15px 0;">
          <Card bordered="{{false}}" style="width: 300px;">
            <CardHeader>
              <template slot="title">
                Card title
              </template>
              <template slot="extra">
                <a>More</a>
              </template>
            </CardHeader>
            
            <CardBody>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardBody>
          </Card>
        </div>
      `
    }
  
> disHover 设置成 false 

    export default {
      template: `
        <Row>
          <Card disHover="{{false}}" style="width: 300px;">
            <CardHeader>
              <template slot="title">
                Card title
              </template>
              <template slot="extra">
                <a>More</a>
              </template>
            </CardHeader>
            
            <CardBody>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </CardBody>
          </Card>
        </Row>
      `
    }

#### API

> Card Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
bordered | 是否有边框 | boolean | - | true
disHover | 通过设置 disHover 来禁用鼠标悬停显示阴影效果 | boolean | - | true

