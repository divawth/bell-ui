> 基础用法

    export default {
        template: `
            <Form v-ref:form-inline :model="formInline" :rules="ruleInline" inline>
                <FormItem prop="user">
                    <Input type="text" :value.sync="formInline.user" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" :value.sync="formInline.password" placeholder="Password">
                        <Icon type="ios-locked-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button type="primary" on-click="handleSubmit('formInline')">登录</Button>
                </FormItem>
            </Form>
        `,
        data: {
            value: 3
        }
    }

#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 表单数据对象 | object | - | -
rules | 表单验证规则 | object | - | -
inline | 是否开启行内表单模式 | boolean | - | -
labelPosition | 表单域标签的位置，可选值为 left、right、top | string | - | -
labelWidth | 表单宽度 | number | - | -
showMessage | 是否显示校验错误信息 | boolean | true | -
