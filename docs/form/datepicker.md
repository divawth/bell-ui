#### DatePicker 日期选择器

选择或输入日期，支持年、月、日期等类型，支持选择范围。
                

> Date

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 400px;">
      <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
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
    <div>
      <DatePicker type="date" shortcuts="{{shortcuts1}}" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" shortcuts="{{shortcuts2}}" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `,
  data() {
    return {
      shortcuts1: [
        {
          text: 'Today',
          value () {
            return new Date();
          },
          onClick: (picker) => {
            this.$Message.info('Click today');
          }
        },
        {
          text: 'Yesterday',
          value () {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
          onClick: (picker) => {
            this.$Message.info('Click yesterday');
          }
        },
        {
          text: 'One week',
          value () {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
          onClick: (picker) => {
            this.$Message.info('Click a week ago');
          }
        }
      ],
      shortcuts2: [
        {
          text: '1 week',
          value () {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
            return [start, end];
          }
        },
        {
          text: '1 month',
          value () {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
            return [start, end];
          }
        },
        {
          text: '3 months',
          value () {
            const end = new Date();
            const start = new Date();
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
            return [start, end];
          }
        }
      ]
    }
  }
}
```

> DateRange

```js
export default {
  template: `
    <div>
      <DatePicker type="dateRange" splitPanels placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `
}
```

> 多选

```js
export default {
  template: `
    <div>
      <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
    </div>
  `
}
```

> 显示星期数 

```js
export default {
  template: `
    <div>
      <DatePicker type="date" show-week-numbers placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="daterange" show-week-numbers placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `
}
```

> 起始日期 

```js
export default {
  template: `
    <div>
      <DatePicker type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>            
      <DatePicker type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `
}
```

> 日期格式 

```js
export default {
  template: `
    <div>
      <DatePicker :value="value1" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>            
      <DatePicker :value="value2" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `,
  data() {
    return {
      value1: '2019-01-01',
      value2: ['2019-01-01', '2019-02-15']
    }
  }
}
```

> 日期时间选择

```js
export default {
  template: `
    <div>
      <DatePicker type="datetime" placeholder="Select date and time" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="datetime" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="datetimerange" placeholder="Select date and time" style="width: 300px"></DatePicker>
      <br><br>
      <DatePicker type="datetimerange" format="yyyy-MM-dd HH:mm" placeholder="Select date and time(Excluding seconds)" style="width: 300px"></DatePicker>
    </div>
  `
}
```

> 年和月 

```js
export default {
  template: `
    <div>            
      <DatePicker type="year" placeholder="Select year" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="month" placeholder="Select month" style="width: 200px"></DatePicker>
    </div>
  `
}
```

> 不可选日期 

```js
export default {
  template: `
    <div>            
      <DatePicker type="date" options="{{options3}}" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="date" options="{{options4}}" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `,
  data() {
    return {
      options3: {
        disabledDate (date) {
          return date && date.valueOf() < Date.now() - 86400000;
        }
      },
      options4: {
        disabledDate (date) {
          const disabledDay = date.getDate();
          return disabledDay === 15;
        }
      }
    }
  }
}
```

> 带有确认操作 

```js
export default {
  template: `
    <div>            
      <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" confirm placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `
}
```

> 手动控制组件  

```js
export default {
  template: `
    <div>            
      <DatePicker
        :open="open"
        :value="value3"
        confirm
        type="date"
        @on-change="handleChange"
        @on-clear="handleClear"
        @on-ok="handleOk">
        <a href="javascript:void(0)" @click="handleClick">
            <Icon type="ios-calendar-outline"></Icon>
            <template v-if="value3 === ''">Select date</template>
            <template v-else>{{ value3 }}</template>
        </a>
      </DatePicker>
    </div>
  `,
  data () {
    return {
      open: false,
      value3: ''
    }
  },
  methods: {
    handleClick () {
      this.open = !this.open;
    },
    handleChange (date) {
      this.value3 = date;
    },
    handleClear () {
      this.open = false;
    },
    handleOk () {
      this.open = false;
    }
  }
}
```

> 尺寸

```js
export default {
  template: `
    <div>            
      <DatePicker size="small" type="date" placeholder="Select date"></DatePicker>
      <br><br>
      <DatePicker type="date" placeholder="Select date"></DatePicker>
      <br><br>
      <DatePicker size="large" type="date" placeholder="Select date"></DatePicker>
    </div>
  `
}
```

#### API

> Props

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
type | 日期选择器类型 | string | date, dateRange, week, month, year | date
value | 日期 | Date | - | -
formatText | 可以用来格式化date | string | - | YYYY-MM-DD
placement | 日期选择器出现的位置，可选值为toptop-starttop-endbottombottom-startbottom-endleftleft-startleft-endrightright-startright-end，2.12.0 版本开始支持自动识别 | string | bottom-start
placeholder | 占位文本 | string | -
options | 选择器的额外配置 | Object | -
split-panels | 开启后，左右面板不联动，仅在 daterange 和 datetimerange 下可用。| boolean | false
multiple | 开启后，可以选择多个日期，仅在 date 下可用。| boolean | false
show-week-numbers | 开启后，可以显示星期数。| boolean | false
start-date | 设置默认显示的起始日期。| Date | -
confirm | 
open | 
size | 
disabled | 
clearable | 
readonly | 
editable | 
transfer | 
element-id | 
time-picker-options | 

> options
选择器额外配置





> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值改变之后的回调 | 选中的值
openChange
ok
clear