> 基础用法

```js
export default {
  template: `
    <div>
      <Select model="value">
        {{#each list:index}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <p>
        value: {{value}}
      </p>
    </div>
  `,
  data: function () {
    return {
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ],
      value: 2
    }
  },
  watchers: {
    value: function (value) {
      console.log(value)
    }
  }
}
```

> block

```js
export default {
  template: `
    <Select model="value" block>
      {{#each list:index}}
        <Option value="{{this.value}}" text="{{this.text}}" />
      {{/each}}
    </Select>
  `,
  data: function () {
    return {
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ],
      value: 2
    }
  }
}
```

> 大小

```js
export default {
  template: `
    <div>
      <Select size="large" model="value1">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select model="value2">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select size="small" model="value3">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
    </div>
  `,
  watchers: {
    value1: function (value) {
      console.log('value1', value)
    },
    value2: function (value) {
      console.log('value2', value)
    },
    value3: function (value) {
      console.log('value3', value)
    }
  },
  data: function () {
    return {
      value1: 1,
      value2: 2,
      value3: 3,
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ]
    }
  }
}
```

> 状态

```js
export default {
  template: `
    <div>
      <Select status="info" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select status="warning" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select status="success" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select status="error" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
    </div>
  `,
  watchers: {
    value: function (value) {
      console.log(value)
    }
  },
  data: function () {
    return {
      value: 1,
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ]
    }
  }
}
```

> 使用 disabled 禁用状态

```js
export default {
  template: `
    <Select disabled model="value">
      {{#each list}}
        <Option value="{{this.value}}" text="{{this.text}}" />
      {{/each}}
    </Select>
  `,
  data: function () {
    return {
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ]
    }
  }
}
```

> placement 设置弹窗的展开方向

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="margin-top: 200px;">
      <Select placement="top-start" size="large" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select placement="top-start" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <br><br>
      <Select placement="top-start" size="small" model="value">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
    </div>
  `,
  data: function () {
    return {
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ]
    }
  }
}
```

> 多选

```js
  export default {
    template: `
      <div>
        <Select size="large" multiple clearable model="value" on-change="change()" width="240">
          {{#each list}}
            <Option value="{{this.value}}" text="{{this.text}}" />
          {{/each}}
        </Select>
        <br><br>
        <Select multiple model="value1" on-change="change()" width="240">
          {{#each list}}
            <Option value="{{this.value}}" text="{{this.text}}" />
          {{/each}}
        </Select>
        <br><br>
        <Select size="small" multiple model="value2" on-change="change()" width="240">
          {{#each list}}
            <Option value="{{this.value}}" text="{{this.text}}" />
          {{/each}}
        </Select>
        <p>
          value: {{value}}
        </p>
      </div>
    `,
    data: function () {
      return {
        list: [
          {
            text: '深圳',
            value: 1
          },
          {
            text: '广州',
            value: 2
          },
          {
            text: '上海',
            value: 3
          },
          {
            text: '北京',
            value: 4
          },
          {
            text: '杭州',
            value: 5
          },
          {
            text: '武汉',
            value: 6
          }
        ]
      }
    },
    methods: {
      change: function (event, data) {
        console.log(data);
      }
    }
  }
```

> 分组

```js
export default {
  template: `
  <div>
    <Select size="large" model="value">
      <OptionGroup label="Hot Cities">
        {{#each cityList1}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
    </Select>
  </div>
  `,
  data () {
    return {
      value: 'London',
      cityList1: [
        {
          value: 'New York',
          text: 'New York'
        },
        {
          value: 'London',
          text: 'London'
        },
        {
          value: 'Sydney',
          text: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          text: 'Ottawa'
        },
        {
          value: 'Paris',
          text: 'Paris'
        },
        {
          value: 'Canberra',
          text: 'Canberra'
        }
      ],
    }
  }
}
```

> 自定义模板

```js
export default {
  template: `
  <div>
    <Select size="large" model="value">
      <Option index="0" value="1" text="北京">
        <span style="float:right;color:#ccc">
          中国
        </span>
        北京
      </Option>
      <Option index="1" value="2" text="深圳">
        <span style="float:right;color:#ccc">
          中国
        </span>
        深圳
      </Option>
      <Option index="2" value="3" text="石家庄">
        <span style="float:right;color:#ccc">
          中国
        </span>
        石家庄
      </Option>
    </Select>
  </div>
  `
}
```

> 可清空

```js
export default {
  template: `
    <div>
      <Select clearable model="value" on-change="change()">
        {{#each list}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </Select>
      <p>
        value: {{value}}
      </p>
    </div>
  `,
  data: function () {
    return {
      list: [
        {
          text: '深圳',
          value: 1
        },
        {
          text: '广州',
          value: 2
        },
        {
          text: '上海',
          value: 3
        },
        {
          text: '北京',
          value: 4
        }
      ],
      value: 2
    }
  },
  methods: {
    change: function (event, data) {
      console.log(data)
    }
  }
}
```

> 前缀图标

```js
export default {
  template: `
  <div>
    <Select model="value" prefix="home-heart-fill">
      <OptionGroup label="Hot Cities">
        {{#each cityList1}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
    </Select>
    <br><br>
    <Select model="value">
      <template slot="prefix">
        <Avatar
          shape="circle"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
          size="small"
        />
      </template>
      <OptionGroup label="Hot Cities">
        {{#each cityList1}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{this.value}}" text="{{this.text}}" />
        {{/each}}
      </OptionGroup>
    </Select>
  </div>
  `,
  data () {
    return {
      cityList1: [
        {
          value: 'New York',
          text: 'New York'
        },
        {
          value: 'London',
          text: 'London'
        },
        {
          value: 'Sydney',
          text: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          text: 'Ottawa'
        },
        {
          value: 'Paris',
          text: 'Paris'
        },
        {
          value: 'Canberra',
          text: 'Canberra'
        }
      ],
      model7: ''
    }
  }
}
```

#### API

> Select Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 选中值 | string | - | -
multiple | 是否支持多选 | boolean | - | -
disabled | 是否禁用 | boolean | - | `false`
clearable | 是否可以清空选项，只在单选时有效 | boolean | - | -
block | 是否为块级元素 | boolean | - | `false`
size | 大小 | string | `default`, `small`, `large` | `default`
placement | 弹窗的展开方向 | string | `bottom`, `top` | -
placeholder | 选择框默认文字 | string | - | -
prefix | 自定义 Select 内头部图标 | string | - | -
width | 选择框宽度 | numeric | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Select Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值发生改变的时候回调 | value

> Option Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 当前值 | string, number | - | -
text | 选中时展示的文本 | string | - | -
disabled | 是否禁用 | boolean | - | false
