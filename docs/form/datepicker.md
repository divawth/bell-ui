#### DatePicker 日期选择器

选择日期，支持年、月、日期等类型，支持选择范围。

> 基本用法

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <DatePicker
        model="value"
        type="date"
        clearable
        placeholder="Select date"
      />
      <br><br>
      <DatePicker
        type="date"
        disabled
        placeholder="Select date"
      />
    </div>
  `,
  data: {
    value: null
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
  isViewFullBlock: true,
  height: 400,
  template: `
    <DatePicker
      model="value"
      type="date"
      clearable
      block
      placeholder="Select date"
    />
  `,
}
```

> 状态

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <DatePicker
        status="info"
        placeholder="Select date"
      />
      <br><br>
      <DatePicker
        status="warning"
        placeholder="Select date"
      />
      <br><br>
      <DatePicker
        status="success"
        placeholder="Select date"
      />
      <br><br>
      <DatePicker
        status="error"
        placeholder="Select date"
      />
    </div>
  `
}
```

> 快捷方式

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px">
      <DatePicker
        type="date"
        shortcuts="{{shortcuts1}}"
        placeholder="Select date"
      />
      <br><br>
      <DatePicker
        type="dateRange"
        shortcuts="{{shortcuts2}}"
        placement="bottom-start"
        placeholder="Select date"
      />
    </div>
  `,
  data() {
    return {
      shortcuts1: [
        {
          text: 'Today',
          onClick() {
            this.$message.info('Click today')
            return new Date()
          }
        },
        {
          text: 'Yesterday',
          onClick() {
            this.$message.info('Click yesterday')
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            return date
          }
        },
        {
          text: 'One week',
          onClick() {
            this.$message.info('Click a week ago')
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            return date
          }
        }
      ],
      shortcuts2: [
        {
          text: '1 week',
          onClick() {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        },
        {
          text: '1 month',
          onClick() {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            return [start, end]
          }
        },
        {
          text: '3 months',
          onClick() {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            return [start, end]
          }
        }
      ]
    }
  }
}
```

> 面板不联动

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <DatePicker
        splitPanel
        type="dateRange"
        placeholder="Select date"
      />
    </div>
  `
}
```

> 多选

```js
export default {
  isViewFullBlock: true,
  height: 500,
  template: `
    <div style="height: 450px;">
      <DatePicker
        multiple
        type="date"
        placeholder="Select date"
        width="300"
      />
      <br><br>
      <DatePicker
        multiple
        type="date"
        value="{{value}}"
        placeholder="Select date"
        width="300"
      />
    </div>
  `,
  data() {
    return {
      value: [new Date('2019/5/26'), new Date('2019/5/27'), new Date('2019/5/27')]
    }
  }
}
```

> 类型

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div style="height: 550px;">
      <DatePicker
        type="date"
        defaultDate="{{defaultDate}}"
        placeholder="Select date"
        width="240"
      />
      <br><br>
      <DatePicker
        type="dateRange"
        defaultDate="{{defaultDate}}"
        placeholder="Select date range"
        placement="bottom-start"
        width="240"
      />
      <br><br>
      <DatePicker
        type="year"
        defaultDate="{{defaultDate}}"
        placeholder="Select year"
        placement="bottom-start"
        width="240"
      />
      <br><br>
      <DatePicker
        type="month"
        defaultDate="{{defaultDate}}"
        placeholder="Select month"
        placement="bottom-start"
        width="240"
      />
      <br><br>
      <DatePicker
        type="week"
        defaultDate="{{defaultDate}}"
        placeholder="Select week"
        placement="bottom-start"
        width="240"
      />
    </div>
  `,
  data() {
    return {
      defaultDate: new Date('1991/4/14')
    }
  }
}
```

> 日期格式

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div style="height: 550px">
      <DatePicker
        value="{{value1}}"
        format="yyyy年MM月dd日"
        type="date"
        placeholder="Select date"
        width="200"
      />
      <br><br>
      <DatePicker
        value="{{value2}}"
        format="yyyy/MM/dd"
        type="dateRange"
        placeholder="Select date"
        width="200"
      />
      <br><br>
      <DatePicker
        value="{{value3}}"
        format="yyyy年MM月"
        type="month"
        placeholder="Select date"
        width="200"
      />
      <br><br>
      <DatePicker
        value="{{value4}}"
        format="yyyy年"
        type="year"
        placeholder="Select date"
        width="200"
      />
      <br><br>
      <DatePicker
        value="{{value5}}"
        format="yyyy/MM/dd"
        type="week"
        placeholder="Select date"
        width="200"
      />
    </div>
  `,
  data() {
    return {
      value1: new Date('2019/1/1'),
      value2: [new Date('2019/1/1'), new Date('2019/2/16')],
      value3: new Date('2019/3/11'),
      value4: new Date('2017/3/11'),
      value5: undefined,
    }
  }
}
```

> 不可选日期

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 350px">
      <DatePicker
        type="date"
        disabledDate="{{disabledDate1}}"
        placeholder="Select date"
        width="200"
      />
      <br><br>
      <DatePicker
        type="dateRange"
        disabledDate="{{disabledDate1}}"
        placeholder="Select date"
        width="200"
      />
    </div>
  `,
  data() {
    return {
      disabledDate1 (date) {
        return date && date.valueOf() < Date.now() - 86400000;
      },
      disabledDate2 (date) {
        const disabledDay = date.getDate();
        return disabledDay === 15;
      }
    }
  }
}
```


> 尺寸

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 350px">
      <DatePicker size="small" type="date" placeholder="Select date" />
      <br><br>
      <DatePicker type="date" placeholder="Select date" />
      <br><br>
      <DatePicker size="large" type="date" placeholder="Select date" />
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 日期选择器类型 | string | date, dateRange, month, year, week | date
size | 大小 | string | `default`, `small`, `large` | `default`
status | 状态 | string | `info`, `warning`, `success`, `error` | -
value | 日期 | Date | - | -
format | 日期显示格式 | string | - | `yyyy-MM-dd`
placement | 日期选择器出现的位置 | string | `bottom-start`
placeholder | 占位文本 | string | -
splitPanel | 开启后，左右面板不联动，仅在 `dateRange` 下可用 | boolean | `false`
multiple | 开启后，可以选择多个日期，仅在 `date` 下可用 | boolean | `false`
disabled | 禁用后无法再选择 | boolean | `false`
block | 是否为块级元素 | boolean | - | `false`
shortcuts | 快捷方式 | Array | -
defaultDate | 默认显示视图的日期 | Date | -
disabledDate | 不可选择的日期 | Function | -
clearable | 是否显示清除按钮 | boolean | `false`
width | 宽度 | numeric | -
className | 自定义类名 | string | - | -
style | 自定义内联样式 | string | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值改变之后的回调 | 选中的值