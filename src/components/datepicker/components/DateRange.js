import {
    firstDateInWeek,
    lastDateInWeek,
    normalizeDate,
    firstDateInMonth,
    lastDateInMonth,
    simplifyDate,
    offsetMonth,
    parseDate,
    getOffsetTime
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
        <div class="bell-datepicker-daterange">
            <div class="bell-datepicker-header">
                <span class="bell-datepicker-header-button" on-click="prevYear()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-left"></i>
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-left"></i>
                </span>

                <span class="bell-datepicker-header-button" on-click="prevMonth()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-left"></i>
                </span>

                <span class="bell-text-medium">
                    {{currentYear}} 年
                </span>
                <span class="bell-text-medium bell-datepicker-header-month">
                    {{currentMonth}} 月
                </span>

                <span class="bell-text-medium">
                    {{currentYear}} 年
                </span>
                <span class="bell-text-medium">
                    {{currentMonth + 1}} 月
                </span>

                <span class="bell-datepicker-header-button" on-click="nextMonth()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-right"></i>
                </span>

                <span class="bell-datepicker-header-button" on-click="nextYear()">
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-right"></i>
                    <i class="bell-icon bell-text-medium bell-text-muted icon-ios-arrow-right"></i>
                </span>
            </div>
            <div class="bell-datepicker-daterange-wrapper">
                <div class="bell-datepicker-table-date">
                    <div class="bell-datepicker-weeks">
                        {{#each weeks}}
                            <span class="bell-datepicker-col bell-text-sub">
                                {{this}}
                            </span>
                        {{/each}}
                    </div>
                    <div class="bell-datepicker-days">
                        {{#each dateList:key}}
                            <div class="bell-datepicker-row">
                                {{#each this:index}}
                                    <span
                                        class="bell-datepicker-col
                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}
                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}
                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}
                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}
                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"
                                        on-click="click(this)"
                                        on-mouseover="hover(this)"
                                    >
                                        {{date}}
                                    </span>
                                {{/each}}
                            </div>
                        {{/each}}
                    </div>
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
                        {{#each nextDateList:key}}
                            <div class="bell-datepicker-row">
                                {{#each this:index}}
                                    <span
                                        class="bell-datepicker-col
                                        {{#if isCurrentMonth}} bell-datepicker-col-current-month{{/if}}
                                        {{#if isPrevMonth}} bell-datepicker-col-prev-month{{/if}}
                                        {{#if isLastMonth}} bell-datepicker-col-last-month{{/if}}
                                        {{#if isCurrentMonth && isCheckedDate}} bell-datepicker-col-checked{{/if}}
                                        {{#if isCurrentMonth && isRangeDate}} bell-datepicker-col-range{{/if}}"
                                        on-click="click(this)"
                                        on-mouseover="hover(this)"
                                    >
                                        {{date}}
                                    </span>
                                {{/each}}
                            </div>
                        {{/each}}
                    </div>
                </div>
            </div>
        </div>
    `,

    propTypes: {
        start: {
            type: ['string', 'number']
        },
        end: {
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
            // 视图日期
            modeDate: '',

            checkedStartDate: me.get('start') ? simplifyDate(new Date(me.get('start'))) : '',
            checkedEndDate: me.get('end') ? simplifyDate(new Date(me.get('end'))) : '',

            dateList: [],
            nextDateList: []
        }
    },

    computed: {
        currentYear: function () {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.year;
        },
        currentMonth: function () {
            var me = this;
            var date = me.get('modeDate');
            date = date ? simplifyDate(date) : simplifyDate(new Date());
            return date.month;
        }
    },

    methods: {
        changeDate: function (offset) {
            var me = this;
            var date = me.get('modeDate');

            date = offsetMonth(date, offset);

            var dateList = me.createRenderData(
                                date,
                                me.get('checkedStartDate'),
                                me.get('checkedEndDate')
                            );
            var nextDateList = me.createRenderData(
                                    offsetMonth(date, 1),
                                    me.get('checkedStartDate'),
                                    me.get('checkedEndDate'),
                                );
            me.set({
                modeDate: date,
                dateList: dateList,
                nextDateList: nextDateList
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
        hover: function  (date) {
            var me = this;
            var startDate = me.get('checkedStartDate');
            var endDate = me.get('checkedEndDate');

            if (!date.isCurrentMonth
                || !startDate
                || endDate
            ) {
                return;
            }

            var rangDate = '';
            if (!startDate
                || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))
            ) {
                rangDate = '';
            } else {
                rangDate = date;
            }

            me.refresh(
                getOffsetTime(parseDate(startDate)),
                getOffsetTime(parseDate(rangDate))
            );
        },
        click: function (date) {
            if (!date.isCurrentMonth) {
                return;
            }
            var me = this;
            var checkedStartDate = me.get('checkedStartDate');
            var checkedEndDate = me.get('checkedEndDate');

            if (!checkedStartDate || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))
            ) {
                checkedStartDate = date;
                checkedEndDate = '';
            }
            else {
                checkedEndDate = date;
            }
            me.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate
            });
            me.refresh(
                getOffsetTime(parseDate(checkedStartDate)),
                getOffsetTime(parseDate(checkedEndDate))
            );

            me.fire(
                'deteRangeChange',
                {
                    start: checkedStartDate,
                    end: checkedEndDate,
                }
            );
        },
        refresh: function (start, end) {
            var me = this;

            var dateList = me.copy(me.get('dateList'));
            var nextDateList = me.copy(me.get('nextDateList'));

            if (end) {
                Yox.array.each(
                    dateList,
                    function (arr) {
                        Yox.array.each(
                            arr,
                            function (item) {
                                var itemTime = getOffsetTime(parseDate(item));
                                item.isRangeDate
                                    = itemTime < end
                                    && itemTime > start;
                                item.isCheckedDate
                                    = itemTime == end || itemTime == start;
                            }
                        );
                    }
                );
                Yox.array.each(
                    nextDateList,
                    function (arr) {
                        Yox.array.each(
                            arr,
                            function (item) {
                                var itemTime = getOffsetTime(parseDate(item));
                                item.isRangeDate
                                    = itemTime < end
                                    && itemTime > start;
                                item.isCheckedDate
                                    = itemTime == end || itemTime == start;
                            }
                        );
                    }
                );
            }
            else if (start) {
                Yox.array.each(
                    dateList,
                    function (arr) {
                        Yox.array.each(
                            arr,
                            function (item) {
                                item.isCheckedDate
                                    = getOffsetTime(parseDate(item)) == start;
                                item.isRangeDate = false;
                            }
                        );
                    }
                );
                Yox.array.each(
                    nextDateList,
                    function (arr) {
                        Yox.array.each(
                            arr,
                            function (item) {
                                item.isCheckedDate
                                    = getOffsetTime(parseDate(item)) == start;
                                item.isRangeDate = false;
                            }
                        );
                    }
                );
            }

            me.set({
                dateList: dateList,
                nextDateList: nextDateList
            });
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, date, checkedStart, checkedEnd) {
            var me = this;
            var data = [];
            date = simplifyDate(date);
            checkedStart = getOffsetTime(parseDate(checkedStart));
            checkedEnd = getOffsetTime(parseDate(checkedEnd));

            for (var time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
                var itemTime = getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd;
                item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd;
                data.push(item);
            }
            return data;

        },
        createRenderData: function (date, checkedStart, checkedEnd) {

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
            var list = me.getDatasource(
                startDate,
                endDate,
                date,
                checkedStart,
                checkedEnd
            );
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

        var date = me.get('start');
        date = date ? date : today;

        var dateList = me.createRenderData(
                            date,
                            me.get('checkedStartDate'),
                            me.get('checkedEndDate')
                        );
        var nextDateList = me.createRenderData(
                                offsetMonth(date, 1),
                                me.get('CheckedStartDate'),
                                me.get('CheckedEndDate'),
                            );
        me.set({
            modeDate: date,
            dateList: dateList,
            nextDateList: nextDateList
        });
    },
    beforeDestroy: function () {
        var me = this;
    }
}