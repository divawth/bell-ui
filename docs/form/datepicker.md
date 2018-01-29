> Date

    export default {
        template: `
            <div>
                <Datepicker mode="date" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: {
            onChange: function (newValue, oldValue) {
                console.log(newValue, oldValue)
            }
        }
    }

> DateRange

    export default {
        template: `
            <div>
                <Datepicker mode="dateRange" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: {
            onChange: function (data) {
                console.log(data)
            }
        }
    }

> DateWeek

    export default {
        template: `
            <div>
                <Datepicker mode="week" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: {
            onChange: function (data) {
                console.log(data)
            }
        }
    }

> DateMonth

    export default {
        template: `
            <div>
                <Datepicker mode="month" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: {
            onChange: function (data) {
                console.log(data)
            }
        }
    }

> DateYear

    export default {
        template: `
            <div>
                <Datepicker mode="year" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: {
            onChange: function (data) {
                console.log(data)
            }
        },
        events: {
            yearChange: function (event, data) {
                this.set({
                    year: data.year
                });
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
mode | 日期选择器类型 | string | date, dateRange, week, month, year | date

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值改变之后的回调 | 选中的值