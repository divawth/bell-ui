import {
    lpad
} from './function/util'
import {
    contains
} from '../util'

const DAY_MAP = {
    '1': '一',
    '2': '二',
    '3': '三',
    '4': '四',
    '5': '五',
    '6': '六',
    '0': '日',
}

export default {
    template: `
        <div class="bell-datepicker
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

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
        value: {
            type: 'object'
        },
        formateText: {
            type: 'string'
        }
    },

    data() {
        let me = this;
        return {
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

            if (event.target != this) {
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

            if (!date) {
                return false;
            }
            let argsLen = arguments.length;
            let result = '';
            let me = this;
            let startFormat = me.get('formateText').split('$')[0];
            let endFormat = me.get('formateText').split('$')[1];

            if (argsLen > 1) {
                let start = arguments[0];
                let end = arguments[1];

                let formatStart = startFormat
                        .replace(/yyyy/i, start.year)
                        .replace(/yy/i, +('' + start.year).substr(2))
                        .replace(/MM/, lpad(start.month))
                        .replace(/M/, start.month)
                        .replace(/dd/i, lpad(start.date))
                        .replace(/d/i, start.date)
                        .replace(/w/, DAY_MAP[start.day]);

                let formatEnd = endFormat
                        .replace(/yyyy/i, end.year)
                        .replace(/yy/i, +('' + end.year).substr(2))
                        .replace(/MM/, lpad(end.month))
                        .replace(/M/, end.month)
                        .replace(/dd/i, lpad(end.date))
                        .replace(/d/i, end.date)
                        .replace(/w/, DAY_MAP[end.day]);

                result = formatStart + formatEnd;

            }
            else {
                result = startFormat
                    .replace(/yyyy/i, date.year)
                    .replace(/yy/i, +('' + date.year).substr(2))
                    .replace(/MM/, lpad(date.month))
                    .replace(/M/, date.month)
                    .replace(/dd/i, lpad(date.date))
                    .replace(/d/i, date.date)
                    .replace(/w/, DAY_MAP[date.day]);
            }
            return result.trim();
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
        if (!me.get('formateText')) {
            switch(me.get('mode')) {
                case 'date':
                    me.set({
                        formateText: 'YYYY/MM/DD'
                    });
                    break;
                case 'dateRange':
                    me.set({
                        formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
                    });
                    break;
                case 'week':
                    me.set({
                        formateText: 'YYYY/MM/DD $- YYYY/MM/DD'
                    });
                    break;
                case 'year':
                    me.set({
                        formateText: 'YYYY'
                    });
                    break;
                case 'month':
                    me.set({
                        formateText: 'YYYY/MM'
                    });
                    break;
            }
        }

        if (me.get('value')) {
            me.dateChange(me.get('value'));    
        }
        
        me.documentClickHandler = function (e) {
            if (!me.get('isOpen')) {
                return
            }
            let element = me.$el;
            let target = e.originalEvent.target;
            if (contains(element, target)) {
                return;
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