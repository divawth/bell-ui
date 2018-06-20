> Date

    export default {
        template: `
            <div>
                <DatePicker mode="date" on-change="change()" />
                <p>{{ formateDate }}</p>
            </div>
        `,
        methods: {
            change: function (event, data) {
                this.set({
                    formateDate: data.value.formateDate
                });
            }
        }
    }

> DateRange

    export default {
        template: `
            <div>
                <DatePicker mode="dateRange" on-change="change()" />
                <p>{{ formateDate }}</p>
            </div>
        `,
        methods: {
            change: function (events, data) {
                this.set({
                    formateDate: data.value.formateDate
                });
            }
        }
    }

> DateWeek

    export default {
        template: `
            <div>
                <DatePicker mode="week" on-change="change()" />
                <p>{{ formateDate }}</p>
            </div>
        `,
        methods: {
            change: function (event, data) {
                this.set({
                    formateDate: data.value.formateDate
                });
            }
        }
    }

> DateMonth

    export default {
        template: `
            <div>
                <DatePicker mode="month" on-change="change()" />
                <p>{{ formateDate }}</p>
            </div>
        `,
        methods: {
            change: function (event, data) {
                this.set({
                    formateDate: data.value.formateDate
                });
            }
        }
    }

> DateYear

    export default {
        template: `
            <div>
                <DatePicker mode="year" on-change="change()"/>
                <p>{{ formateDate }}</p>
            </div>
        `,
        methods: {
            change: function (event, data) {
                this.set({
                    formateDate: data.value.formateDate
                });
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
mode | 日期选择器类型 | string | date, dateRange, week, month, year | date
format | 可以用来格式化date | function | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
change | 值改变之后的回调 | 选中的值
clear | 清空值时候的回掉 | -