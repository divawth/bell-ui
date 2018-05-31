export default {
    template: `
        <div class="bell-datepicker
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>

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
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        mode: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        }
    },

    events: {

        yearChange(event, data) {
            let me = this;
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

        monthChange(event, data) {
            let me = this;
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

        weekRangeChange(event, data) {
            this.rangeChange(data);
        },

        deteRangeChange(event, data) {
            this.rangeChange(data);
        },

        deteChange(event, data) {
            let me = this;
            let date = data.date;
            let value = me.get('value');
            let newValue = me.formateDate(date);
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

    data() {
        let me = this;
        return {
            value: '',
            currentValue: null,
            isPopuping: false,
            isPopdowning: false,
            isOpen: false,
            onFocus() {
                me.open();
            }
        }
    },

    methods: {
        open() {
            let me = this;
            me.set({
                isPopuping: true
            });
            setTimeout(
                () => {
                    me.set({
                        isPopuping: false,
                        isOpen: true
                    });
                },
                300
            );
        },

        close() {
            let me = this;
            if (!me.get('isOpen')) {
                return;
            }
            me.set({
                isPopdowning: true
            });
            setTimeout(
                () => {
                    me.set({
                        isPopdowning: false,
                        isOpen: false
                    });
                },
                300
            );
        },

        formateDate(date) {
            return date.year + '年' + date.month + '月' + date.date + '日';
        },

        rangeChange(data) {
            let me = this;
            let start = data.start;
            let end = data.end;
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

    afterMount() {
        let me = this;
        me.documentClickHandler = (e) => {
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

    beforeDestroy() {
        let me = this;
        document.removeEventListener(
            'click',
            me.documentClickHandler
        );
    }
};