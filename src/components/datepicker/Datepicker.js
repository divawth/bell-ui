import {
    lpad
} from './function/util'

export default {
    template: `
        <div class="bell-datepicker
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>

            <div class="bell-datepicker-el" on-click="click()">
                <Input placeholder="请选择日期..."
                    model="formateDate"
                    type="input"
                    on-focus="focus()"
                    clearable
                />
            </div>

            <div class="bell-datepicker-poper
                {{#if isPopuping}} bell-isPopuping{{/if}}
                {{#if isPopdowning}} bell-isPopdowning{{/if}}
                {{#if isOpen}} bell-show{{/if}}
            ">
                {{#if mode == 'date'}}
                    <Date />
                {{else if mode == 'dateRange'}}
                    <DateRange />
                {{else if mode == 'week'}}
                    <DateWeek />
                {{else if mode == 'year'}}
                    <DateYear />
                {{else if mode == 'month'}}
                    <DateMonth />
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
        formate: {
            type: 'function'
        }
    },

    data() {
        let me = this;
        return {

            formateDate: null,
            date: null,
            start: null,
            end: null,

            isPopuping: false,
            isPopdowning: false,
            isOpen: false,

        }
    },

    events: {
        change(event, data) {
            let me = this;
            if (event.target != me) {
                if (!data.value) {
                    this.fire('clear');
                }
                event.stop();
            }
        },

        yearChange(event, date) {
            this.dateChange(date);
        },

        monthChange(event, date) {
            this.dateChange(date);
        },

        deteChange(event, date) {
            this.dateChange(date);
        },

        weekRangeChange(event, date) {
            this.dateRangeChange(date);
        },

        deteRangeChange(event, date) {
            this.dateRangeChange(date);
        },
    },

    methods: {

        focus() {
            this.open();
        },

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
                }
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
                }
            );
        },

        formateDate(date) {
            let result = '';
            if (this.get('formate')) {
                return this.get('formate')(date);
            }
            if (!date) {
                return result;
            }
            if (arguments.length > 1) {
                let start = arguments[0];
                let end = arguments[1];

                result = start.year + '年'
                        + lpad(start.month) + '月'
                        + lpad(start.date) + '日'
                        + ' - '
                        + end.year + '年'
                        + lpad(end.month) + '月'
                        + lpad(end.date) + '日';
            }
            else {
                if (date.year) {
                    result += date.year + '年';
                }
                if (date.month) {
                    result += lpad(date.month) + '月';
                }
                if (date.date) {
                    result += lpad(date.date) + '日';
                }
            }
            return result;
        },

        dateChange(date) {

            let me = this;
            let formateDate = me.get('formateDate');
            let newFormateDate = me.formateDate(date);
            if (newFormateDate !== formateDate) {
                me.fire(
                    'change',
                    {
                        value: {
                            formateDate: newFormateDate,
                            date: date,
                        },
                        oldValue: {
                            formateDate: formateDate,
                            date: me.get('date')
                        }
                    }
                );
            }
            me.set({
                date: date,
                formateDate: newFormateDate
            });
            me.close();

        },

        dateRangeChange(data) {
            let end = data.end;

            if (!end) {
                return;
            }

            let me = this;
            let start = data.start;

            me.fire(
                'change',
                {
                    value: {
                        start: start,
                        end: end,
                        startDate: me.formateDate(start),
                        endDate: me.formateDate(end),
                        formateDate: me.formateDate(start, end)
                    },
                    oldValue: {
                        start: me.get('start'),
                        end: me.get('end'),
                        startDate: me.formateDate(me.get('start')),
                        endDate: me.formateDate(me.get('end')),
                        formateDate: me.formateDate(me.get('start'), me.get('end'))
                    }
                }
            );

            me.set({
                start: start,
                end: end,
                formateDate: me.formateDate(start, end)
            });
            me.close();

        }
    },

    afterMount() {
        let me = this;

        me.documentClickHandler = function (e) {
            let element = me.$el;
            let target = e.originalEvent.target;
            if (element.contains && element.contains(target)) {
                return false;
            }
            else if (element.compareDocumentPosition && element.compareDocumentPosition(target) > 16) {
                return false;
            }
            me.close();
        };

        Yox.dom.on(
            document,
            'click',
            me.documentClickHandler
        );

    },

    beforeDestroy() {
        Yox.dom.off(
            document,
            'click',
            this.documentClickHandler
        );
    }
};