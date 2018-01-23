> 基础用法

    export default {
        template: `
            <Datepicker onChange="{{onChange}}">

            </Datepicker>
        `,
        data: function () {
            let me = this;
            return {
                checkDate: '',
                onChange: function (val) {
                    me.set({
                        checkDate: val
                    });
                    console.log(me.get('checkDate'));
                }
            }
        }
    }


#### API

> Attributes

参数 | 说明 | 类型 | 可选值 | 默认值
---|---|---|---|---
today | 今天的日期 | Date | new Date() | 浏览器今天的值
date | 视图所在的日期 | Date | - | today
firstDay | 一周的第一天是周几 | number | 0-6 | 0
viewMode | 视图类型 | string | month, day, year | -
multiple | 是否可以多选 | boolean | - | false
stable | 视图是否稳定 | boolean | - | -

> Events

事件名称 | 说明 | 回调参数
---|---|---
onChange | 值改变之后的回调 | 选中的值，多选时以 `,` 分隔