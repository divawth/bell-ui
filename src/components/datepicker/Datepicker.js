export default {
    template: `
        <div class="bell-datepicker
        ">
            <div class="bell-datepicker-el" on-click="click()">
                <Input placeholder="请选择日期..."
                    style="width: 200px;"
                    model="value"
                    onFocus="{{onFocus}}"
                    type="input"
                    clearable
                >
                </Input>
            </div>

            <div class="bell-datepicker-poper
            {{#if isPopuping}} bell-isPopuping{{/if}}
            {{#if isPopdowning}} bell-isPopdowning{{/if}}
            {{#if isOpen}} bell-show{{/if}}
            ">
                {{#if mode == 'date'}}
                    <Date></Date>
                {{else if mode == 'dateRange'}}
                    <DateRange></DateRange>
                {{else if mode == 'week'}}
                    <DateWeek></DateWeek>
                {{else if mode == 'year'}}
                    <DateYear></DateYear>
                {{else if mode == 'month'}}
                    <DateMonth></DateMonth>
                {{/if}}
            </div>
        </div>
    `,

    propTypes: {
        mode: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        }
    },

    events: {
        yearChange: function (event, data) {
            var me = this;
            me.get('onChange') && me.get('onChange')(
                {
                    year: data.year
                }
            );
            me.set({
                currentValue: data,
                value: data.year + '年'
            });
            me.close();
        },
        monthChange: function (event, data) {
            var me = this;
            me.get('onChange') && me.get('onChange')(
                {
                    year: data.year,
                    month: data.month
                }
            );
            me.set({
                currentValue: data,
                value: data.year + '年' + data.month + '月'
            });
            me.close();
        },
        weekRangeChange: function (event, data) {
            this.rangeChange(data);
        },
        deteRangeChange: function (event, data) {
            this.rangeChange(data);
        },
        deteChange: function (event, data) {
            var me = this;
            var date = data.date;
            var value = me.get('value');
            var newValue = me.formateDate(date);
            if (newValue !== value) {
                me.get('onChange') && me.get('onChange')(
                    {
                        value: newValue,
                        date: date
                    },
                    {
                        value: value,
                        date: me.get('currentValue')
                    }
                );
            }
            me.set({
                currentValue: date,
                value: me.formateDate(date)
            });
            me.close();
        }
    },

    data: function () {
        let me = this;
        return {
            value: '',
            currentValue: null,
            isPopuping: false,
            isPopdowning: false,
            isOpen: false,
            onFocus: function () {
                me.open();
            }
        }
    },

    methods: {
        open: function () {
            var me = this;
            me.set({
                isPopuping: true
            });
            setTimeout(
                function () {
                    me.set({
                        isPopuping: false,
                        isOpen: true
                    });
                },
                300
            );
        },
        close: function () {
            var me = this;
            if (!me.get('isOpen')) {
                return;
            }
            me.set({
                isPopdowning: true
            });
            setTimeout(
                function () {
                    me.set({
                        isPopdowning: false,
                        isOpen: false
                    });
                },
                300
            );
        },
        formateDate: function (date) {
            return date.year + '年' + date.month + '月' + date.date + '日';
        },
        rangeChange: function (data) {
            var me = this;
            var start = data.start;
            var end = data.end;
            if (!end) {
                return;
            }
            me.get('onChange') && me.get('onChange')(
                {
                    start: start,
                    end: end,
                    date: me.formateDate(start)
                },
                {
                    start: start,
                    end: end,
                    date: me.formateDate(end)
                }
            );
            me.set({
                currentValue: {
                    start: start,
                    end: end,
                    date: me.formateDate(start)
                },
                value: me.formateDate(start) + '-' + me.formateDate(end)
            });
            me.close();
        }
    },

    afterMount: function () {
        var me = this;
        me.documentClickHandler = function (e) {
            if (me.$el.contains(e.target)) {
                return false;
            }
            me.close();
        };
        document.addEventListener(
            'click',
            me.documentClickHandler
        );
    },

    beforeDestroy: function () {
        var me = this;
        document.removeEventListener(
            'click',
            me.documentClickHandler
        );
    }
}