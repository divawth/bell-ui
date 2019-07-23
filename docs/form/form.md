> 行内表单

设置属性 inline，表单元素可以水平排列。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Form ref="formInline" model="formInline" rules="{{ruleInline}}" messages="{{messageInline}}" inline>
      <FormItem prop="user">
        <Input type="text" status="{{#if errors.user}}error{{/if}}" model="formInline.user" placeholder="Username">
          <template slot="prepend">
            <Icon name="person" slot="prepend" style="color: #bbb;" />
          </template>
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input type="password" status="{{#if errors.password}}error{{/if}}" model="formInline.password" placeholder="Password">
          <template slot="prepend">
            <Icon name="lock" slot="prepend" style="color: #bbb;" />
          </template>
        </Input>
      </FormItem>
      <FormItem>
        <Button type="primary" on-click="handleSubmit()">登录</Button>
      </FormItem>
    </Form>
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
        required: true,
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
      this.$refs['formInline'].validate((isValid, errors) => {
        this.set({
          errors: errors
        })
        if (isValid) {
          this.$Message.success('提交成功!')
        } else {
          this.$Message.error('表单验证失败!')
        }
      })
    }
  }
}
```

> 表单控件

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
  <div>
    <Form model="formItem" labelWidth="80">
      <FormItem label="Input">
        <Input model="formItem.input" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem label="Select">
        <Select model="formItem.select">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker type="date" placeholder="Select date" model="formItem.date"></DatePicker>
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup model="formItem.radio">
          <Radio value="male">Male</Radio>
          <Radio value="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup model="formItem.checkbox">
          <Checkbox value="Eat"></Checkbox>
          <Checkbox value="Sleep"></Checkbox>
          <Checkbox value="Run"></Checkbox>
          <Checkbox value="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <Switch model="formItem.switch" size="large">
          <span slot="open">On</span>
          <span slot="close">Off</span>
        </Switch>
      </FormItem>
      <FormItem label="Text">
        <Input model="formItem.textarea" type="textarea" placeholder="Enter something..."></Input>
      </FormItem>
      <FormItem>
        <Button type="primary">Submit</Button>
        <Button style="margin-left: 8px">Cancel</Button>
      </FormItem>
    </Form>
  </div>
  `,
  data() {
    return {
      formItem: {
        input: '',
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: [20, 50],
        textarea: ''
      }
    }
  }
}
```

> labelPosition

```js
export default {
  isViewFullBlock: true,
  height: 640,
  template: `
  <div>
    <Form model="formLeft" labelPosition="left" labelWidth="100">
      <FormItem label="Title">
        <Input model="formLeft.input1"></Input>
      </FormItem>
      <FormItem label="Title name">
        <Input model="formLeft.input2"></Input>
      </FormItem>
      <FormItem label="Aligned title">
        <Input model="formLeft.input3"></Input>
      </FormItem>
    </Form>
    <Form model="formRight" labelPosition="right" labelWidth="100">
      <FormItem label="Title">
        <Input model="formRight.input1"></Input>
      </FormItem>
      <FormItem label="Title name">
        <Input model="formRight.input2"></Input>
      </FormItem>
      <FormItem label="Aligned title">
        <Input model="formRight.input3"></Input>
      </FormItem>
    </Form>
    <Form model="formTop" labelPosition="top">
      <FormItem label="Title">
        <Input model="formTop.input1"></Input>
      </FormItem>
      <FormItem label="Title name">
        <Input model="formTop.input2"></Input>
      </FormItem>
      <FormItem label="Aligned title">
        <Input model="formTop.input3"></Input>
      </FormItem>
    </Form>
  </div>
  `
}
```

> 自定义验证

```js
export default {
  template: `
    <div>
      <Form ref="formCustom" model="formCustom">
        <FormItem label="Password" prop="passwd" error="{{errors[ 'passwd' ] && errors[ 'passwd' ]}}">
          <Input status="{{#if errors.passwd}}error{{/if}}" type="password" model="formCustom.passwd" />
        </FormItem>
        <FormItem label="Confirm" prop="passwdCheck">
          <Input status="{{#if errors.passwdCheck}}error{{/if}}" type="password" model="formCustom.passwdCheck" />
        </FormItem>
        <FormItem label="Age" prop="age">
          <Input status="{{#if errors.age}}error{{/if}}" type="text" model="formCustom.age" number />
        </FormItem>
        <FormItem>
          <Button type="primary" on-click="handleSubmit('formCustom')">Submit</Button>
        </FormItem>
    </Form>
    </div>
  `,
  data: {
    errors: {},
    formCustom: {
      passwd: '',
      passwdCheck: '',
      age: ''
    }
  },
  methods: {
    handleSubmit (name) {
      let values = this.get('formCustom')
      let errors = {}
      for(key in values) {
        if (key === 'passwd' && !values[ key ]) {
          errors[ key ] = '填写密码'
        }
      }
      this.set({ errors })
    }
  }
}
```

#### Form API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
model | 表单数据对象 | object | - | -
rules | 表单验证规则 | object | - | -
messages | 表单验证之后的错误提示 | object | - | -
inline | 是否开启行内表单模式 | boolean | - | false
labelPosition | 表单域标签的位置，可选值为 left、right、top | string | - | -
labelWidth | 表单宽度 | number | - | -
showMessage | 是否显示校验错误信息 | boolean | true | -

#### FormItem API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
prop | 对应表单域 model 里的字段 | string | - | -
label | 标签文本 | string | - | -
labelWidth | 表单域标签的的宽度 | number | - | -
labelFor | 指定原生的 label 标签的 for 属性，配合控件的 element-id 属性，可以点击 label 时聚焦控件。 | string | - | -
showMessage | 表单域标签的的宽度 | number | - | -
required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean | - | -