> 基础用法

```js
export default {
  template: `
    <div>
      <Cascader
        showClear
        options="{{options}}"
        model="value"
      />
      <p>
        value: {{value}}
      </p>
    </div>
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  },
  watchers: {
    value: function (value) {
      console.log(value)
    }
  }
}
```

> 选择即改变

```js
export default {
  template: `
    <Cascader
      changeOnSelect
      options="{{options}}"
      model="value"
    />
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  }
}
```

> block

```js
export default {
  template: `
    <Cascader
      block
      options="{{options}}"
      model="value"
    />
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  }
}
```

> 大小

```js
export default {
  template: `
  <Space vertical>
    <Cascader
      size="large"
      options="{{options}}"
      model="value"
    />
    <Cascader
      options="{{options}}"
      model="value"
    />
    <Cascader
      size="small"
      options="{{options}}"
      model="value"
    />
  </Space>
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  }
}
```

> 状态

```js
export default {
  template: `
  <Space vertical>
    <Cascader
      status="info"
      options="{{options}}"
      model="value"
    />
    <Cascader
      status="warning"
      options="{{options}}"
      model="value"
    />
    <Cascader
      status="success"
      options="{{options}}"
      model="value"
    />
    <Cascader
      status="error"
      options="{{options}}"
      model="value"
    />
  </Space>
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  }
}
```

> 使用 disabled 禁用状态

```js
export default {
  template: `
    <Cascader
      disabled
      options="{{options}}"
      model="value"
    />
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
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
  <Space vertical>
    <Cascader
      placement="bottom-start"
      options="{{options}}"
      model="value"
    />
    <Cascader
      placement="bottom"
      options="{{options}}"
      model="value"
    />
    <Cascader
      placement="bottom-end"
      options="{{options}}"
      model="value"
    />
    <Cascader
      placement="top-start"
      options="{{options}}"
      model="value"
    />
    <Cascader
      placement="top"
      options="{{options}}"
      model="value"
    />
    <Cascader
      placement="top-end"
      options="{{options}}"
      model="value"
    />
  </Space>
  `,
  data: function () {
    return {
      value: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  }
}
```

> 多选

```js
export default {
  template: `
    <div>
      <Divider align="left">
        parent 模式
      </Divider>
      <Cascader
        multiple
        options="{{options}}"
        model="value1"
      />
      <Divider align="left">
        child 模式
      </Divider>
      <Cascader
        multiple
        showCheckedStrategy="child"
        options="{{options}}"
        model="value2"
      />
    </div>
  `,
  data: function () {
    return {
      value1: [1, 13],
      value2: [1, 13],
      options: [
        {
          text: '广东',
          value: 1,
          children: [
            {
              text: '广州',
              value: 11,
            },
            {
              text: '深圳',
              value: 12,
            },
            {
              text: '佛山',
              value: 13,
            },
          ]
        },
        {
          text: '江苏',
          value: 2,
          children: [
            {
              text: '南京',
              value: 21,
            },
            {
              text: '无锡',
              value: 22,
            },
            {
              text: '徐州',
              value: 23,
            },
          ]
        }
      ],
    }
  },
  watchers: {
    value: function (value) {
      console.log(value)
    }
  }
}
```


#### API

> Cascader Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
value | 选中值 | string | - | -
multiple | 是否支持多选 | boolean | - | -
showCheckedStrategy | 多选策略 | string | `all`, `parent`, `child` | `parent`
disabled | 是否禁用 | boolean | - | -
showClear | 是否可以清空选项，只在单选时有效 | boolean | - | -
changeOnSelect | 是否选择即改变 | boolean | - | -
block | 是否为块级元素 | boolean | - | -
size | 大小 | string | `default`, `small`, `large` | `default`
placement | 弹窗的展开方向 | string | `bottom`, `top` | `botom-start`
options | 数据化配置选项内容 | `{ text, value, children }[]` | - | -
placeholder | 选择框默认文字 | string | - | -
width | 选择框宽度 | numeric | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Cascader Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值发生改变的时候回调 | value
