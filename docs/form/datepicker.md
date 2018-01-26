> 基础用法

> Date

    export default {
        template: `
            <div>
                <Date></Date>
                <span>
                    {{#if date}}
                        {{date.year}} 年 {{date.month}} 月 {{date.date}} 日
                    {{/if}}
                </span>
            </div>
        `,
        data: {
            date: null
        },
        events: {
            deteChange: function (event, data) {
                this.set({
                    date: data.date
                });
            }
        }
    }

> DateRange

    export default {
        template: `
            <div>
                <DateRange></DateRange>
                <span>
                    {{#if startDate}}
                        {{startDate.year}} 年 {{startDate.month}} 月 {{startDate.date}} 日
                    {{/if}}
                        至
                    {{#if endDate}}
                        {{endDate.year}} 年 {{endDate.month}} 月 {{endDate.date}} 日
                    {{/if}}
                </span>
            </div>
        `,
        events: {
            deteRangeChange: function (event, data) {
                this.set({
                    startDate: data.start,
                    endDate: data.end
                });
            }
        }
    }

> DateWeek

    export default {
        template: `
            <div>
                <DateWeek></DateWeek>
                <span>
                    {{#if startDate}}
                        {{startDate.year}} 年 {{startDate.month}} 月 {{startDate.date}} 日
                    {{/if}}
                        至
                    {{#if endDate}}
                        {{endDate.year}} 年 {{endDate.month}} 月 {{endDate.date}} 日
                    {{/if}}
                </span>
            </div>
        `,
        events: {
            weekRangeChange: function (event, data) {
                this.set({
                    startDate: data.start,
                    endDate: data.end
                });
            }
        }
    }

> DateMonth

    export default {
        template: `
            <div>
                <DateMonth></DateMonth>
                <span>
                    {{#if year}}
                        {{year}} 年 {{month + 1}} 月
                    {{/if}}
                </span>
            </div>
        `,
        events: {
            monthChange: function (event, data) {
                this.set({
                    year: data.year,
                    month: data.month
                });
            }
        }
    }

> DateYear

    export default {
        template: `
            <div>
                <DateYear></DateYear>
                <span>
                    {{#if year}}
                        {{year}} 年
                    {{/if}}
                </span>
            </div>
        `,
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
today | 今天的日期 | Date | new Date() | 浏览器今天的值
defaultValue | 视图所在的日期 | Date | - | today
firstDay | 一周的第一天是周几 | number | 0-6 | 0
viewMode | 视图类型 | string | month, day, year | -
multiple | 是否可以多选 | boolean | - | false
stable | 视图是否稳定 | boolean | - | -

readonly | 完全只读 | boolean | - | false
format | 显示在输入框中的格式 | string | 年 yyyy，月 MM，日 dd，小时 HH，分 mm，秒 ss，AM/PM A | yyyy-MM-dd

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值改变之后的回调 | 选中的值，多选时以 `,` 分隔