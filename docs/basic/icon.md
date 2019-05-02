> 所有图标

使用 <a target="_blank" href="//ionicons.com/">ionicons</a>

    export default {
        template: `
            <div class="bell-template">
                <Icon type="happy" />
                <Icon type="happy" size="18"/>
                <Icon type="happy" size="18" color="#f90" />
                <Icon type="happy" size="18" spin />
                <Icon type="happy" size="18" rotate="90" />
            </div>
        `
    }

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 图标名称 | string | - | -
size | 图标的大小，单位是 px | string | - | 14
color | 图标的颜色 | String | - | -
spin | 是否展示图标动画 | Boolean | - | false
rotate | 旋转的角度 | Number | - | 0