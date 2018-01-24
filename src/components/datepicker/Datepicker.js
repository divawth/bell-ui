import {
    firstDateInWeek,
    lastDateInWeek,
    normalizeDate,
    firstDateInMonth,
    lastDateInMonth,
    simplifyDate,
    offsetMonth,
    parseDate
} from './function/util'

const WEEKS = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];

const MODE_YEAR = 'year';
const MODE_MONTH = 'month';
const MODE_WEEK = 'week';
const MODE_DATE = 'date';
const MODE_TIME = 'time';

const DAY = 24 * 60 * 60 * 1000;
const stableDuration = 41 * DAY;

export default {
    template: `
        <div class="bell-datepicker
        ">
            <div class="bell-datepicker-button" style="width: {{width}}px;">
                <Input {{...inputOptions}}></Input>
            </div>

            <div class="bell-datepicker-panel{{#if !isOpen}} bell-hide{{/if}}">
                <div class="bell-datepicker-header">
                    <Button size="small" type="text" on-click="prevYear()">
                        <i class="bell-icon bell-icon-ios-arrow-left"></i>
                        <i class="bell-icon bell-icon-ios-arrow-left"></i>
                    </Button>

                    {{#if viewMode == MODE_DATE}}
                    <Button size="small" type="text" on-click="prevMonth()">
                        <i class="bell-icon bell-icon-ios-arrow-left"></i>
                    </Button>
                    {{/if}}

                    <span class="bell-datepicker-header-label">
                        {{currentYear}} 年
                    </span>

                    {{#if viewMode == MODE_DATE}}
                    <span class="bell-datepicker-header-label">
                        {{currentMonth}} 月
                    </span>
                    <Button size="small" type="text" on-click="nextMonth()">
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                    </Button>
                    {{/if}}

                    <Button size="small" type="text" on-click="nextYear()">
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                    </Button>
                </div>

                <div class="bell-datepicker-content">
                    {{#if viewMode == MODE_DATE}}
                        <div class="bell-datepicker-table-date">
                            <div class="bell-datepicker-weeks">
                                {{#each weeks}}
                                    <span class="bell-datepicker-col">
                                        {{this}}
                                    </span>
                                {{/each}}
                            </div>
                            <div class="bell-datepicker-days">
                                {{#each dayList:index}}
                                    <span
                                        class="bell-datepicker-col bell-datepicker-col-{{phase}}
                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}
                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}
                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}
                                        {{#if isCurrentDate}} bell-datepicker-col-checked{{/if}}"
                                        on-click="dateClick(this)"
                                    >
                                        {{date}}
                                    </span>
                                    {{#if index % 7 == 6}}
                                        <div class="bell-datepicker-divide"></div>
                                    {{/if}}
                                {{/each}}
                            </div>
                        </div>
                    {{else if viewMode == MODE_MONTH}}
                        <div class="bell-datepicker-table-month">
                            <div class="bell-datepicker-months">
                                {{#each monthList:index}}
                                {{/each}}
                            </div>
                        </div>
                    {{/if}}
                </div>
            </div>
        </div>
    `,

    propTypes: {
        today: {
            type: ['string', 'object'],
            value: new Date()
        },
        defaultValue: {
            type: ['string', 'object'],
            value: new Date()
        },
        firstDay: {
            type: 'numeric',
            value: 0
        },
        viewMode: {
            type: 'string',
            value: MODE_DATE
        },
        multiple: {
            type: ['string', 'boolean'],
            value: false
        },
        stable: {
            type: ['string', 'boolean'],
            value: true
        },
        onChange: {
            type: 'function'
        }
    },

    data: function () {
        let me = this;
        return {
            // Input 的宽度
            width: 220,
            // 选项卡是否展开
            isOpen: false,
            inputOptions: {
                placeholder: '选择日期',
                value: '',
                onFocus: function () {
                    me.set({
                        isOpen: true
                    });
                }
            },

            date: new Date(me.get('defaultValue')),

            MODE_YEAR: MODE_YEAR,
            MODE_MONTH: MODE_MONTH,
            MODE_DATE: MODE_DATE,
            MODE_TIME: MODE_TIME,
            MODE_WEEK: MODE_WEEK,

            weeks: WEEKS,
            dayList: []
        }
    },

    computed: {
        currentYear: function () {
            var me = this;
            var date = me.get('date');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.year;
        },
        currentMonth: function () {
            var me = this;
            var date = me.get('date');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate: function (offset) {
            var me = this;
            var date = me.get('date');

            date = offsetMonth(date, offset);

            me.set({
                date: date,
                dayList: me.createRenderData(date)
            });
        },
        prevYear: function () {
            this.changeDate(-12);
        },
        prevMonth: function () {
            this.changeDate(-1);
        },
        nextYear: function () {
            this.changeDate(12);
        },
        nextMonth: function () {
            this.changeDate(1);
        },
        dateClick: function (date) {
            if (!date.isCurrentMonth) {
                return;
            }
            var me = this;
            var inputValue   = ''
                            + date.year
                            + '年'
                            + date.month
                            + '月'
                            + date.date
                            + '日';

            date = parseDate(date);
            me.set({
                date: date,
                isOpen: false,
                dayList: me.createRenderData(date),
                'inputOptions.value': inputValue
            });
            me.get('onChange') && me.get('onChange')(date);
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, today, date) {
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

                if (time > today) {
                    item.phase = 'future';
                }
                else if (time < today) {
                    item.phase = 'past';
                }
                else {
                    item.phase = 'today';
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
            var firstDay = me.get('firstDay');
            var today = normalizeDate(me.get('today'));
            date = date ? date : today;

            var startDate;
            var endDate;

            if (me.get('viewMode') === MODE_DATE) {
                startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
                endDate = lastDateInWeek(lastDateInMonth(date), firstDay);
            }
            else {
                startDate = firstDateInWeek(date, firstDay);
                endDate = lastDateInWeek(date, firstDay);
            }

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            if (me.get('viewMode') === MODE_DATE
                && me.get('stable')
            ) {

                var duration = endDate - startDate;
                var offset = stableDuration - duration;

                if (offset > 0) {
                    endDate += offset;
                }

            }
            return me.getDatasource(startDate, endDate, today, date);
        }
    },

    afterMount: function () {
        var me = this;
        var today = me.get('today');
        today = today ? today : new Date();
        var date = me.get('date');
        date = date ? date : today;
        me.set({
            dayList: me.createRenderData(date)
        });

        me.documentClickHandler = function (e) {
            if (me.$el.contains(e.target)) {
                return false;
            }
            me.set({
                isOpen: false
            });
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