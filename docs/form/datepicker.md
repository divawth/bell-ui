> 基础用法

    export default {
        template: `
            <div>
                <Datepicker defaultValue="{{date}}" viewMode="date" onChange="{{onChange}}"></Datepicker>
                <Datepicker defaultValue="{{date}}" viewMode="month" onChange="{{onChange}}"></Datepicker>
            </div>
        `,
        data: function () {
            let me = this;
            return {
                checkDate: '',
                date: '2016/09/08',
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