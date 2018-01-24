import {
    firstDateInWeek,
    lastDateInWeek,
    normalizeDate,
    firstDateInMonth,
    lastDateInMonth,
    simplifyDate,
    offsetMonth,
    parseDate
} from '../function/util'

const WEEKS = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];

const DAY = 24 * 60 * 60 * 1000;
const stableDuration = 41 * DAY;

export default {
    template: `
        <div class="bell-datepicker-table-date">
            <div class="bell-datepicker-weeks">
                {{#each weeks}}
                    <span class="bell-datepicker-col">
                        {{this}}
                    </span>
                {{/each}}
            </div>
            <div class="bell-datepicker-days">
                {{#each dateList}}
                    <div class="bell-datepicker-row" on-click="click(this)">
                        {{#each this}}
                            <span
                                class="bell-datepicker-col
                                {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}
                                {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}
                                {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}
                                {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"
                            >
                                {{date}}
                            </span>
                        {{/each}}
                    </div>
                {{/each}}
            </div>
        </div>
    `,

    propTypes: {
        date: {
            type: ['string', 'number']
        },
        firstDay: {
            type: ['number', 'string']
        }
    },

    data: function () {
        let me = this;
        return {
            weeks: WEEKS,
            dateList: []
        }
    },

    methods: {
        click: function (date) {
            if (!date.isCurrentMonth) {
                return;
            }
            var me = this;
            me.fire(
                'deteChange',
                {
                    date: date
                }
            );

            date = parseDate(date);
            me.set({
                checkedDate: date,
                dateList: me.createRenderData(date),
            });
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, date) {
            var me = this;
            var data = [];
            date = simplifyDate(date);
            for (var time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
                if (item.year == date.year
                    && item.month == date.month
                    && item.date == date.date
                    && item.day == date.day
                ) {
                    item.isCurrentDate = true;
                }

                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                data.push(item);
            }
            return data;

        },
        createRenderData: function (date) {

            var me = this;
            var firstDay = me.get('firstDay') || 0;
            date = normalizeDate(date);

            var startDate;
            var endDate;

            startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(date), firstDay);

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            var duration = endDate - startDate;
            var offset = stableDuration - duration;

            if (offset > 0) {
                endDate += offset;
            }

            var list = me.getDatasource(startDate, endDate, date);
            return me.format(list);
        },
        format: function (list) {
            var result = [];
            var arr = [];
            for(var i = 0; i < list.length; i++) {
                arr.push(list[i])
                if (i % 7 == 6) {
                    result.push(arr);
                    arr = [];
                }
            }
            return result;
        }
    },

    afterMount: function () {
        var me = this;

        var today = new Date();

        var date = me.get('checkedDate');
        date = date ? date : today;

        me.set({
            dateList: me.createRenderData(date)
        });
    },
    beforeDestroy: function () {
        var me = this;
    }
}