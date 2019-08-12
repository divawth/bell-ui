> 基础用法

```js
export default {
  template: `
    <div>
      <Select model="value" on-change="change()">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
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
          text: '广州广州广州广州广州广州广州广州广州广州',
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
    change: function (events, data) {
      console.log(data);
    }
  }
}
```

> 设置 size 大小

```js
export default {
  template: `
    <div>
      <Select size="large" model="value">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <br>
      <Select model="value">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <br>
      <Select model="value" size="small">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <style>
        .bell-select {
          margin-bottom: 20px;
        }
      </style>
    </div>
  `,
  watchers: {
    value (value) {
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
          text: '广州广州广州广州广州广州广州广州广州广州',
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
      {{#each list:index}}
        <Option value="{{value}}">
          {{text}}
        </Option>
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
          text: '广州广州广州广州广州广州广州广州广州广州',
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
      <Select placement="top" size="large" model="value">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <br>
      <Select placement="top" model="value">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <br>
      <Select placement="top" model="value" size="small">
        {{#each list:index}}
          <Option value="{{value}}">
            {{text}}
          </Option>
        {{/each}}
      </Select>
      <style>
        .bell-select {
          margin-bottom: 20px;
        }
      </style>
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
          text: '广州广州广州广州广州广州广州广州广州广州',
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

> 使用 multiple 支持多选

```js
  export default {
    template: `
      <div>
        <Select multiple model="value" on-change="change()">
          {{#each list:index}}
            <Option value="{{this.value}}" text="{{this.text}}">
              {{text}}
              {{#if isCurrentValue(this.value)}}
                <Icon style="float: right;" type="md" name="checked" />
              {{/if}}
            </Option>
          {{/each}}
        </Select>
        <p>
          value: {{value}}
        </p>
      </div>
    `,
    filters: {
      isCurrentValue(value) {
        return this.get('value') && this.get('value').indexOf(value) >= 0
      }
    },
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
      change: function (events, data) {
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
          <Option value="{{value}}">
            {{ label }}
          </Option>
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{value}}">
            {{ label }}
          </Option>
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
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
        }
      ],
      model7: ''
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
        北京
        <span style="float:right;color:#ccc">中国</span>
      </Option>
      <Option index="1" value="2" text="深圳">
        深圳
        <span style="float:right;color:#ccc">中国</span>
      </Option>
      <Option index="2" value="3" text="石家庄">
        石家庄
        <span style="float:right;color:#ccc">中国</span>
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
          <Option value="{{value}}">
            {{text}}
          </Option>
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
          text: '广州广州广州广州广州广州广州广州广州广州',
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
    change: function (events, data) {
      console.log(data);
    }
  }
}
```

> 前缀图标

```js
export default {
  template: `
  <div>
    <Select model="value" prefix="home">
      <OptionGroup label="Hot Cities">
        {{#each cityList1}}
          <Option value="{{value}}">
            {{ label }}
          </Option>
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{value}}">
            {{ label }}
          </Option>
        {{/each}}
      </OptionGroup>
    </Select>
    <Select model="value">
      <template slot="prefix">
        <Avatar
          shape="circle"
          src="https://avatars0.githubusercontent.com/u/17703135?s=400&u=612ef7e55a4394c89e2f53f8f360c9b3b2336ace&v=4"
          size="small"
          style="vertical-align:middle"
        />
      </template>
      <OptionGroup label="Hot Cities">
        {{#each cityList1}}
          <Option value="{{value}}">
            {{ label }}
          </Option>
        {{/each}}
      </OptionGroup>
      <OptionGroup label="Other Cities">
        {{#each cityList2}}
          <Option value="{{value}}">
            {{ label }}
          </Option>
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
          label: 'New York'
        },
        {
          value: 'London',
          label: 'London'
        },
        {
          value: 'Sydney',
          label: 'Sydney'
        }
      ],
      cityList2: [
        {
          value: 'Ottawa',
          label: 'Ottawa'
        },
        {
          value: 'Paris',
          label: 'Paris'
        },
        {
          value: 'Canberra',
          label: 'Canberra'
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
disabled | 是否禁用 | boolean | - | false
clearable | 是否可以清空选项，只在单选时有效 | boolean | - | -
size | 大小 | string | default, small, large | default
placement | 弹窗的展开方向 | string | bottom, top | -
defaultText | 选择框默认文字 | string | - | -
prefix | 自定义 Select 内头部图标 | string | - | -
width | 选择框宽度 | string, number | -

> Select Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值发生改变的时候回调 | value
clear | 清空按钮时候触发 | value

> Option Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 当前值 | string, number | - | -
text | 选中时展示的文本 | string | - | -
disabled | 是否禁用 | boolean | - | false
