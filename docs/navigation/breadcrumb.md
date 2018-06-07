> 基础用法

    export default {
        template: `
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Components</BreadcrumbItem>
                <BreadcrumbItem>Layout</BreadcrumbItem>
            </Breadcrumb>
        `
    }

> 使用 to 跳转

    export default {
        template: `
            <Breadcrumb>
                <BreadcrumbItem to="/docs/#/form/input">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/docs/#/form/select">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Layout
                </BreadcrumbItem>
            </Breadcrumb>
        `
    }

> 带图标的

    export default {
        template: `
            <Breadcrumb>
                <BreadcrumbItem to="/">
                    <Icon type="ios-home-outline"></Icon> Home
                </BreadcrumbItem>
                <BreadcrumbItem to="/components/breadcrumb">
                    <Icon type="social-buffer-outline"></Icon> Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Icon type="pound"></Icon> Breadcrumb
                </BreadcrumbItem>
            </Breadcrumb>
        `
    }


> 使用 separator 修改界定符

    export default {
        template: `
            <Breadcrumb>
                <BreadcrumbItem separator="=>">
                    Home
                </BreadcrumbItem>
                <BreadcrumbItem separator="=>">
                    Components
                </BreadcrumbItem>
                <BreadcrumbItem>
                    Layout
                </BreadcrumbItem>
            </Breadcrumb>
        `
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
hash | 添加链接 | string | - | -
separator | 界定符 | string | - | '/'
