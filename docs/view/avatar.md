> 基础用法

提供三种大小的头像

    export default {
        template: `
            <div>
                <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />

                <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

                <Avatar src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="small" />
            </div>
        `
    }

> 设置圆形的头像

    export default {
        template: `
            <div>
                <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="large" />

                <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" />

                <Avatar shape="circle" src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4" size="small" />
            </div>
        `
    }

> 设置文字或者 icon 的头像

    export default {
        template: `
            <div>

                <Avatar shape="circle" size="small" fontSize="12">
                    MB
                </Avatar>

                <Avatar shape="circle" fontSize="16">
                    MB
                </Avatar>

                <Avatar size="small">
                    <i class="bell-icon bell-icon-person"></i>
                </Avatar>

                <Avatar shape="circle" backgroundColor="#f90">
                    <i class="bell-icon bell-icon-person"></i>
                </Avatar>

                <Avatar size="small" color="#090">
                    <i class="bell-icon bell-icon-person"></i>
                </Avatar>
            </div>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
size | 大小 | string | small, large | -
src | 图片地址 | string | - | -
srcset | srcset | string | - | -
shape | 形状 | string | circle | -
className | 添加类 | string | - | -
fontSize | 图标大小 | number | - | 26
backgroundColor | 背景色 | string | - | #ccc
color | 文字颜色 | string | - | -
