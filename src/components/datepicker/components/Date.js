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
        <div class="bell-datepicker-date
            {{#if className}} {{className}}{{/if}}
        "{{#if style}} {{style}}{{/if}}>

            <div class="bell-datepicker-header">
                <span class="bell-datepicker-header-button" on-click="prevYear()">
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
                </span>

                <span class="bell-datepicker-header-button" on-click="prevMonth()">
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
                </span>

                <span class="bell-text-medium">
                    {{currentYear}} 年
                </span>
                <span class="bell-text-medium">
                    {{currentMonth}} 月
                </span>

                <span class="bell-datepicker-header-button" on-click="nextMonth()">
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
                </span>

                <span class="bell-datepicker-header-button" on-click="nextYear()">
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
                    <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
                </span>
            </div>

            <div class="bell-datepicker-table-date">
                <div class="bell-datepicker-weeks">
                    {{#each weeks}}
                        <span class="bell-datepicker-col bell-text-sub">
                            {{this}}
                        </span>
                    {{/each}}
                </div>
                <div class="bell-datepicker-days">
                    {{#each dateList:index}}
                        <div class="bell-datepicker-row">
                            {{#each this:index}}
                                <span
                                    class="bell-datepicker-col
                                    {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}
                                    {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}
                                    {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}
                                    {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"
                                    on-click="click(this)"
                                >
                                    {{date}}
                                </span>
                            {{/each}}
                        </div>
                    {{/each}}
                </div>
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
        date: {
            type: 'numeric'
        },
        firstDay: {
            type: 'numeric'
        }
    },

    data() {
        let me = this;
        return {
            weeks: WEEKS,
            dateList: [],
            checkedDate: '',
            // 视图日期
            modeDate: ''
        }
    },

    computed: {
        currentYear() {
            let me = this;
            let date = me.get('modeDate');
            date = date
                    ? simplifyDate(date)
                    : simplifyDate(new Date());
            return date.year;
        },
        currentMonth() {
            let me = this;
            let date = me.get('modeDate');
            date = date
                ? simplifyDate(date)
                : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate(offset) {
            let me = this;
            let date = me.get('modeDate');

            date = offsetMonth(date, offset);

            me.set({
                modeDate: date,
                dateList: me.createRenderData(date, me.get('checkedDate'))
            });
        },

        prevYear() {
            this.changeDate(-12);
        },
        prevMonth() {
            this.changeDate(-1);
        },
        nextYear() {
            this.changeDate(12);
        },
        nextMonth() {
            this.changeDate(1);
        },
        click(date) {
            if (!date.isCurrentMonth) {
                return;
            }
            let me = this;
            me.fire(
                'deteChange',
                date
            );

            date = parseDate(date);
            me.set({
                checkedDate: date,
                modeDate: date,
                dateList: me.createRenderData(date, date),
            });
        },
        // 获取渲染模板的数据
        getDatasource(start, end, modeDate, checkedDate) {
            let me = this;
            let data = [];
            modeDate = simplifyDate(modeDate);
            checkedDate = simplifyDate(checkedDate);
            for (let time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
                if (item.year == checkedDate.year
                    && item.month == checkedDate.month
                    && item.date == checkedDate.date
                    && item.day == checkedDate.day
                ) {
                    item.isCurrentDate = true;
                }

                item.isPrevMonth = item.month < modeDate.month;
                item.isCurrentMonth = item.month == modeDate.month;
                item.isLastMonth = item.month > modeDate.month;
                data.push(item);
            }
            return data;

        },
        createRenderData(modeDate, checkedDate) {

            let me = this;
            let firstDay = me.get('firstDay') || 0;
            modeDate = normalizeDate(modeDate);

            let startDate;
            let endDate;

            startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay);

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            let duration = endDate - startDate;
            let offset = stableDuration - duration;

            if (offset > 0) {
                endDate += offset;
            }
            let list = me.getDatasource(startDate, endDate, modeDate, checkedDate);
            return me.format(list);
        },
        format(list) {
            let result = [];
            let arr = [];
            for(let i = 0; i < list.length; i++) {
                arr.push(list[i])
                if (i % 7 == 6) {
                    result.push(arr);
                    arr = [];
                }
            }
            return result;
        }
    },

    afterMount() {
        let me = this;

        let today = new Date();
        let date = me.get('checkedDate');
        date = date ? date : today;

        me.set({
            modeDate: date,
            checkedDate: date,
            dateList: me.createRenderData(date, date)
        });
    }
};