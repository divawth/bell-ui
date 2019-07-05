#### DatePicker 日期选择器

选择或输入日期，支持年、月、日期等类型，支持选择范围。


> Date

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 350px;">
      <DatePicker type="date" placeholder="Select date" style="width: 280px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" placement="bottom-start" placeholder="Select date" style="width: 280px"></DatePicker>
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
    <div style="height: 350px">
      <DatePicker type="date" shortcuts="{{shortcuts1}}" placeholder="Select date" style="width: 280px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" shortcuts="{{shortcuts2}}" placement="bottom-start" placeholder="Select date" style="width: 280px"></DatePicker>
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

> 面板不联动

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 300px;">
      <DatePicker type="dateRange" splitPanel placeholder="Select date" style="width: 300px"></DatePicker>
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
      <DatePicker type="date" multiple placeholder="Select date" style="width: 300px"></DatePicker>
      <br><br>
      <DatePicker type="date" value="{{value}}" multiple placeholder="Select date" style="width: 300px"></DatePicker>
    </div>
  `,
  data() {
    return {
      value: [new Date('2019/5/26'), new Date('2019/5/27'), new Date('2019/5/27')]
    }
  }
}
```

> 起始日期

```js
export default {
  isViewFullBlock: true,
  height: 600,
  template: `
    <div style="height: 550px;">
      <DatePicker type="date" startDate="{{startDate}}" placeholder="Select date" style="width: 240px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" startDate="{{startDate}}" placement="bottom-start" placeholder="Select date" style="width: 240px"></DatePicker>
      <br><br>
      <DatePicker type="year" startDate="{{startDate}}" placement="bottom-start" placeholder="Select date" style="width: 240px"></DatePicker>
      <br><br>
      <DatePicker type="month" startDate="{{startDate}}" placement="bottom-start" placeholder="Select date" style="width: 240px"></DatePicker>
      <br><br>
      <DatePicker type="week" startDate="{{startDate}}" placement="bottom-start" placeholder="Select date" style="width: 240px"></DatePicker>
    </div>
  `,
  data() {
    return {
      startDate: new Date('1991/4/14')
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
      <DatePicker value="{{value1}}" formatText="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker value="{{value2}}" formatText="yyyy/MM/dd$-yyyy/MM/dd" type="dateRange" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker value="{{value3}}" formatText="yyyy年MM月" type="month" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker value="{{value4}}" formatText="yyyy年" type="year" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker value="{{value2}}" formatText="yyyy/MM/dd$-yyyy/MM/dd" type="week" placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `,
  data() {
    return {
      value1: new Date('2019/1/1'),
      value2: [new Date('2019/1/1'), new Date('2019/2/16')],
      value3: new Date('2019/3/11'),
      value4: new Date('2017/3/11')
    }
  }
}
```

> 年和月

```js
export default {
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 350px">
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
  isViewFullBlock: true,
  height: 400,
  template: `
    <div style="height: 350px">
      <DatePicker type="date" disabledDate="{{disabledDate1}}" placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" disabledDate="{{disabledDate2}}" placeholder="Select date" style="width: 200px"></DatePicker>
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

> 带有确认操作

```js
export default {
  isViewFullBlock: true,
  height: 500,
  template: `
    <div style="height: 450px">
      <DatePicker type="date" confirm placeholder="Select date" style="width: 200px"></DatePicker>
      <br><br>
      <DatePicker type="dateRange" confirm placeholder="Select date" style="width: 200px"></DatePicker>
    </div>
  `
}
```