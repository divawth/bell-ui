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
const MODE_DAY = 'day';
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
                    <Button size="small" type="text" on-click="prevMonth()">
                        <i class="bell-icon bell-icon-ios-arrow-left"></i>
                    </Button>

                    <span class="bell-datepicker-header-label">
                        {{currentYear}}
                    </span>
                    <span class="bell-datepicker-header-label">
                        {{currentMonth}}
                    </span>

                    <Button size="small" type="text" on-click="nextMonth()">
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                    </Button>
                    <Button size="small" type="text" on-click="nextYear()">
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                        <i class="bell-icon bell-icon-ios-arrow-right"></i>
                    </Button>
                </div>

                <div class="bell-datepicker-content">
                    {{#if viewMode == MODE_YEAR}}
                        <div class="bell-datepicker-table-years">
                            <div class="bell-datepicker-weeks">

                            </div>
                            <div class="bell-datepicker-days">

                            </div>
                        </div>
                    {{/if}}

                    {{#if viewMode == MODE_MONTH}}
                        <div class="bell-datepicker-table-months">
                            <div class="bell-datepicker-month">

                            </div>
                        </div>
                    {{/if}}

                    {{#if viewMode == MODE_DAY}}
                        <div class="bell-datepicker-table-days">
                            <div class="bell-datepicker-weeks">
                                {{#each weeks}}
                                    <span class="bell-datepicker-col">
                                        {{this}}
                                    </span>
                                {{/each}}
                            </div>
                            <div class="bell-datepicker-days">
                                {{#each dayList:index}}
                                    <span class="bell-datepicker-col bell-datepicker-col-{{phase}}" on-click="dateClick(this)">
                                        {{date}}
                                    </span>
                                    {{#if index % 7 == 6}}
                                        <div class="bell-datepicker-divide"></div>
                                    {{/if}}
                                {{/each}}
                            </div>
                        </div>
                    {{/if}}

                    {{#if viewMode == MODE_TIME}}
                        <div class="bell-datepicker-table-times">
                            <div class="bell-datepicker-weeks">

                            </div>
                            <div class="bell-datepicker-days">

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
        date: {
            type: ['string', 'object'],
            value: new Date()
        },
        firstDay: {
            type: 'numeric',
            value: 0
        },
        viewMode: {
            type: 'string',
            value: MODE_DAY
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
                },
                onChange: function (value) {
                    console.log(value)
                }
            },

            MODE_YEAR: MODE_YEAR,
            MODE_MONTH: MODE_MONTH,
            MODE_DAY: MODE_DAY,
            MODE_TIME: MODE_TIME,

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
                data: me.createRenderData(date)
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
            var me = this;
            var inputValue   = ''
                            + date.year
                            + '年'
                            + date.month
                            + '月'
                            + date.day
                            + '日';

            date = parseDate(date);
            me.set({
                'inputOptions.value': inputValue,
                date: date,
                isOpen: false
            });
            me.get('onChange') && me.get('onChange')(date);
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, today) {
            var me = this;
            var data = [ ];

            for (var time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
                // 过去 or 现在 or 将来
                if (time > today) {
                    item.phase = 'future';
                }
                else if (time < today) {
                    item.phase = 'past';
                }
                else {
                    item.phase = 'today';
                }
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

            var isMonthMode = me.get('viewMode') === MODE_DAY;
            if (isMonthMode) {
                startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
                endDate = lastDateInWeek(lastDateInMonth(date), firstDay);
            }
            else {
                startDate = firstDateInWeek(date, firstDay);
                endDate = lastDateInWeek(date, firstDay);
            }

            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);

            if (isMonthMode && me.get('stable')) {

                var duration = endDate - startDate;
                var offset = stableDuration - duration;

                if (offset > 0) {
                    endDate += offset;
                }

            }
            me.set({
                dayList: me.getDatasource(startDate, endDate, today)
            });
        }
    },

    afterMount: function () {
        var me = this;
        var today = me.get('today');
        today = today ? today : new Date();
        var date = me.get('date');
        date = date ? date : today;
        me.createRenderData(date);
    }
}