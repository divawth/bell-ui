> 基础用法

    export default {
        template: `
            <div>
                <Form ref="formInline" model="formInline" rules="{{ruleInline}}" messages="{{messageInline}}" inline>
                    <FormItem prop="user">
                        <Input type="text" status="{{#if errors.user}}error{{/if}}" model="formInline.user" placeholder="Username">
                            <template slot="prepend">
                                <Icon type="ios-person-outline" slot="prepend"></Icon>
                            </template>
                        </Input>
                        <p class="bell-text tiny error">
                          {{errors.user}}
                        </p>
                    </FormItem>
                    <FormItem prop="password">
                        <Input type="password" status="{{#if errors.password}}error{{/if}}" model="formInline.password" placeholder="Password">
                            <template slot="prepend">
                                <Icon type="ios-locked-outline" slot="prepend"></Icon>
                            </template>
                        </Input>
                        <p class="bell-text tiny error">
                          {{errors.password}}
                        </p>
                    </FormItem>
                    <FormItem>
                        <Button type="primary" on-click="handleSubmit()">登录</Button>
                    </FormItem>
                </Form>
                <p>
                    {{formInline.user}}:
                    {{formInline.password}}
                </p>
            </div>
        `,
        data: {
            errors: null,
            formInline: {
                user: '',
                password: ''
            },
            ruleInline: {
                user: {
                    type: 'string',
                    required: true,
                },
                password: {
                    require: true,
                    type: 'string',
                    min: 6
                }
            },
            messageInline: {
                user: {
                    empty: '请填写用户名'
                },
                password: {
                    empty: '请填写密码',
                    min: '密码长度不能小于 6 位'
                }
            }

        },
        methods: {
            handleSubmit(name) {
              console.log(this.$refs['formInline'].validate)
                this.$refs['formInline'].validate((isValid, errors) => {
                    this.set({
                        errors: errors
                    })
                    if (isValid) {
                        this.$Message.success('提交成功!');
                    } else {
                        this.$Message.error('表单验证失败!');
                    }
                })
            }
        }
    }

#### Form API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 表单数据对象 | object | - | -
rules | 表单验证规则 | object | - | -
messages | 表单验证之后的错误提示 | object | - | -
inline | 是否开启行内表单模式 | boolean | - | -
labelPosition | 表单域标签的位置，可选值为 left、right、top | string | - | -
labelWidth | 表单宽度 | number | - | -
showMessage | 是否显示校验错误信息 | boolean | true | -

> methods

参数 | 说明 | 参数
---|---|---|---|---
validate | 对整个表单进行校验，参数为检验完的回调，会返回一个 Boolean 表示成功与失败 | callback
validateField | 对部分表单字段进行校验的方法，参数1为需校验的 prop，参数2为检验完回调，同上 | callback
resetFields | 对整个表单进行重置，将所有字段值重置为空并移除校验结果 | -

#### FormItem API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
prop | 对应表单域 model 里的字段 | string | - | -
label | 标签文本 | string | - | -
labelWidth | 表单域标签的的宽度 | number | - | -
required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | - | -
rules | 表单验证规则 | number | - | -
errorMsg | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | - | -