> 行内表单

设置属性 inline，表单元素可以水平排列。

```js
export default {
  isViewFullBlock: true,
  height: 300,
  template: `
  <div>
    <Form
      ref="form"
      inline
      showMessage
    >
      <FormItem prop="username">
        <Input
          model="form.username"
          placeholder="Username"
          status="{{errors.username ? 'error' : ''}}"
        >
          <Icon
            slot="prepend"
            name="user-2-fill"
            color="#999"
            size="16"
          />
        </Input>
      </FormItem>
      <FormItem prop="password">
        <Input
          type="password"
          model="form.password"
          placeholder="Password"
          status="{{errors.password ? 'error' : ''}}"
        >
          <Icon
            slot="append"
            name="lock-fill"
            color="#999"
            size="16"
          />
        </Input>
      </FormItem>
      <FormItem>
        <Button
          type="primary"
          on-click="handleSubmit()"
        >
          登录
        </Button>
      </FormItem>
    </Form>
  </div>
  `,
  data: {
    errors: null,
    form: {
      username: '',
      password: ''
    },
  },
  methods: {
    handleSubmit() {
      let errors = this.$refs.form.validate(
        this.get('form'),
        {
          username: {
            type: 'string',
            required: true,
            empty: false,
          },
          password: {
            type: 'string',
            required: true,
            empty: false,
            min: 6
          }
        },
        {
          username: {
            required: '缺少用户名',
            empty: '用户名不能是空字符串'
          },
          password: {
            required: '缺少密码',
            empty: '密码不能是空字符串',
            min: '密码长度不能小于 6 位'
          }
        }
      )
      this.set({
        errors: errors
      })
      if (errors) {
        this.$message.error('验证失败!')
      }
      else {
        this.$message.success('提交成功!')
      }
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
    <Form labelWidth="120">
      <FormItem label="Input" showRequiredMark>
        <Input
          model="form.input"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="InputNumber" showRequiredMark>
        <InputNumber
          model="form.number"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="Select">
        <Select
          model="form.select"
          placeholder="请选择..."
        >
          <Option value="beijing">
            北京
          </Option>
          <Option value="shanghai">
            上海
          </Option>
          <Option value="shenzhen">
            深圳
          </Option>
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker
          model="form.date"
          placeholder="Select date"
        />
      </FormItem>
      <FormItem label="Slider">
        <Slider
          model="form.slider"
          min="0"
          max="10"
          showStops
          showTooltip
        />
      </FormItem>
      <FormItem label="Radio">
        <RadioGroup model="form.radio">
          <Radio value="male">
            Male
          </Radio>
          <Radio value="female">
            Female
          </Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Checkbox">
        <CheckboxGroup model="form.checkbox">
          <Checkbox value="eat">
            Eat
          </Checkbox>
          <Checkbox value="sleep">
            Sleep
          </Checkbox>
          <Checkbox value="run">
            Run
          </Checkbox>
          <Checkbox value="movie">
            Movie
          </Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Switch">
        <Switch model="form.switch">
          <template slot="on">
            On
          </template>
          <template slot="off">
            Off
          </template>
        </Switch>
      </FormItem>
      <FormItem label="Text" labelAlign="top">
        <Textarea
          rows="3"
          model="form.textarea"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem>
        <Button type="primary">
          Submit
        </Button>
        <Button>
          Cancel
        </Button>
      </FormItem>
    </Form>
  </div>
  `,
  data() {
    return {
      form: {
        input: '',
        number: 0,
        select: '',
        radio: 'male',
        checkbox: [],
        switch: true,
        date: '',
        time: '',
        slider: 5,
        textarea: ''
      }
    }
  }
}
```

> labelAlign - left

```js
export default {
  isViewFullBlock: true,
  template: `
  <Form labelAlign="left" labelWidth="100">
    <FormItem label="Title">
      <Input />
    </FormItem>
    <FormItem label="Title name">
      <Input />
    </FormItem>
    <FormItem label="Aligned title">
      <Input />
    </FormItem>
  </Form>
  `
}
```

> labelAlign - right

```js
export default {
  isViewFullBlock: true,
  template: `
  <Form labelAlign="right" labelWidth="100">
    <FormItem label="Title">
      <Input />
    </FormItem>
    <FormItem label="Title name">
      <Input />
    </FormItem>
    <FormItem label="Aligned title">
      <Input />
    </FormItem>
  </Form>
  `
}
```

> labelAlign - top

```js
export default {
  isViewFullBlock: true,
  template: `
  <Form labelAlign="top" labelWidth="100">
    <FormItem label="Title">
      <Input />
    </FormItem>
    <FormItem label="Title name">
      <Input />
    </FormItem>
    <FormItem label="Aligned title">
      <Input />
    </FormItem>
  </Form>
  `
}
```

> 自定义验证

```js
export default {
  template: `
    <div>
      <Form ref="form" labelWidth="80" labelAlign="left">
        <FormItem
          prop="password"
          label="Password"
          message="{{errors.password}}"
        >
          <Input
            type="password"
            model="form.password"
            status="{{errors.password ? 'error' : ''}}"
          />
        </FormItem>
        <FormItem
          prop="passwordConfirm"
          label="Confirm"
        >
          <Input
            type="password"
            model="form.passwordConfirm"
            status="{{errors.passwordConfirm ? 'error' : ''}}"
          />
        </FormItem>
        <FormItem
          prop="age"
          label="Age"
        >
          <InputNumber
            model="form.age"
            status="{{errors.age ? 'error' : ''}}"
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            on-click="handleSubmit()"
          >
            Submit
          </Button>
        </FormItem>
    </Form>
    </div>
  `,
  data: {
    errors: {},
    form: {
      password: '',
      passwordConfirm: '',
      age: 0
    }
  },
  methods: {
    handleSubmit() {
      let errors = this.$refs.form.validate(
        this.get('form'),
        {
          password: {
            type: 'string',
            required: true,
            empty: false,
            min: 6
          },
          // 自定义验证逻辑
          passwordConfirm: {
            required: true,
            validate: function (value, data) {
               if (!value) {
                 return 'empty'
               }
               if (value !== data.password) {
                 return 'equals'
               }
            }
          },
          age: {
            type: 'int',
            min: 1,
            max: 100
          }
        },
        {
          password: {
            required: '缺少密码',
            empty: '密码不能是空字符串',
            min: '密码长度不能小于 6 位'
          },
          passwordConfirm: {
            required: '缺少密码验证',
            empty: '密码验证不能是空字符串',
            equals: '两次输入的密码不相同'
          },
          age: {
            type: '请输入整数',
            min: '年龄不能小于 1 岁',
            max: '年龄不能大于 100 岁',
          }
        }
      )
      console.log(errors)
      this.set({
        errors: errors
      })
      if (errors) {
        this.$message.error('验证失败!')
      }
      else {
        this.$message.success('提交成功!')
      }
    }
  }
}
```

#### Form API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
inline | 是否开启行内表单模式 | boolean | - | `false`
labelAlign | 表单域标签的位置 | string | `left`, `right`, `top` | `right`
labelWidth | 表单域标签的宽度 | number | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

#### FormItem API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
prop | 表单域字段名 | string | - | -
label | 标签文本 | string | - | -
labelAlign | 表单域标签垂直对齐方式 | string | `middle`, `top`, `bottom` | `middle`
showMessage | 是否显示校验错误信息 | boolean | - | `true`
message | 错误信息 | string | - | -
showRequiredMark | 是否在 label 左侧添加一个红色 * | boolean | - | `false`
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -