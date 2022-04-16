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
          status="{{errors.username ? 'error' : undefined}}"
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
          status="{{errors.password ? 'error' : undefined}}"
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

      // 通过第三方校验器获得一个校验结果，推荐使用 x-validator
      let errors = {
        username: 'username 错误',
        password: 'password 错误'
      }

      this.$refs.form.validate(errors)
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
  height: 1200,
  template: `
  <div>
    <Form labelWidth="120" showColon>
      <FormItem label="Input" showRequiredMark extra="这是一段说明文字">
        <Input
          model="form.input"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="Input" showRequiredMark extra="第一行文字\n第二行文字">
        <Input
          model="form.input"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="InputNumber" showRequiredMark showMessage message="这是一段错误提示">
        <InputNumber
          status="error"
          model="form.number"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="InputNumber" showRequiredMark showMessage message="第一个错误提示\n第二个错误提示">
        <InputNumber
          status="error"
          model="form.number"
          placeholder="Enter something..."
        />
      </FormItem>
      <FormItem label="Select">
        <Select
          model="form.select"
          placeholder="请选择..."
        >
          <Option value="beijing" text="北京" />
          <Option value="shanghai" text="上海" />
          <Option value="shenzhen" text="深圳" />
        </Select>
      </FormItem>
      <FormItem label="DatePicker">
        <DatePicker
          model="form.date"
          placeholder="Select date"
        />
      </FormItem>
      <FormItem label="TimePicker">
        <TimePicker
          model="form.time"
          placeholder="Select time"
        />
      </FormItem>
      <FormItem label="ColorPicker">
        <ColorPicker
          model="form.color"
          showAlpha
        />
      </FormItem>
      <FormItem label="Slider1">
        <Slider
          model="form.slider1"
          min="0"
          max="10"
          showStops
          showTooltip
        />
      </FormItem>
      <FormItem label="Slider2">
        <Slider
          model="form.slider2"
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
      <FormItem label="Checkbox">
        <CheckboxGroup vertical model="form.checkbox">
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
      <FormItem label="Text">
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
        slider1: 5,
        slider2: [2, 8],
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

#### Form API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
inline | 是否开启行内表单模式 | boolean | - | -
showColon | 是否显示 label 后面的冒号 | boolean | - | -
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
labelAlign | 表单域标签垂直对齐方式 | string | `top`, `middle`, `bottom` | -
showMessage | 是否显示校验错误信息 | boolean | - | `true`
message | 错误信息 | string | - | -
extra | 额外的提示信息 | string | - | -
showRequiredMark | 是否在 label 左侧添加一个红色 * | boolean | - | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -