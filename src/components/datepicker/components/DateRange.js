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
        <div class="bell-datepicker-daterange-wrapper">
            <div class="bell-datepicker-table-date">
                <div class="bell-datepicker-weeks">
                    {{#each weeks}}
                        <span class="bell-datepicker-col">
                            {{this}}
                        </span>
                    {{/each}}
                </div>
                <div class="bell-datepicker-days">
                    {{#each dateList:index}}
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

                        {{#if index % 7 == 6}}
                            <div class="bell-datepicker-divide"></div>
                        {{/if}}
                    {{/each}}
                </div>
            </div>
            <div class="bell-datepicker-table-date">
                <div class="bell-datepicker-weeks">
                    {{#each weeks}}
                        <span class="bell-datepicker-col">
                            {{this}}
                        </span>
                    {{/each}}
                </div>
                <div class="bell-datepicker-days">
                    {{#each nextDateList:index}}
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

                        {{#if index % 7 == 6}}
                            <div class="bell-datepicker-divide"></div>
                        {{/if}}
                    {{/each}}
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
            startDate: me.get('start') ? simplifyDate(new Date(me.get('start'))) : '',
            endDate: me.get('end') ? simplifyDate(new Date(me.get('end'))) : '',
            dateList: [],
            nextDateList: []
        }
    },

    methods: {
        hover: function  (date) {
            var me = this;
            var startDate = me.get('startDate');
            var endDate = me.get('endDate');

            if (!date.isCurrentMonth
                || !startDate
                || endDate
            ) {
                return;
            }

            var rangDate = '';
            if (!startDate
                || me.get('endDate')
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
            var startDate = me.get('startDate');
            var endDate = me.get('endDate');

            if (!startDate || me.get('endDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))
            ) {
                startDate = date;
                endDate = '';
            }
            else {
                endDate = date;
            }
            me.set({
                startDate: startDate,
                endDate: endDate
            });
            me.refresh(
                getOffsetTime(parseDate(startDate)),
                getOffsetTime(parseDate(endDate))
            );
            me.fire(
                'deteRangeChange',
                {
                    start: startDate,
                    end: endDate,
                }
            );
        },
        refresh: function (start, end) {
            var me = this;

            var dateList = me.copy(me.get('dateList'));
            var nextDateList = me.copy(me.get('nextDateList'));

            if (end) {
                for (var i = 0; i < dateList.length; i++) {
                    var item = dateList[i];
                    var itemTime = getOffsetTime(parseDate(item));
                    item.isRangeDate
                        = itemTime < end
                        && itemTime > start;
                    item.isCheckedDate
                        = itemTime == end || itemTime == start;

                    var nextItem = nextDateList[i];
                    var nextItemTime = getOffsetTime(parseDate(nextItem));
                    nextItem.isRangeDate
                        = nextItemTime < end
                        && nextItemTime > start;

                    nextItem.isCheckedDate
                        = nextItemTime == end || nextItemTime == start;
                }
            }
            else if (start) {
                for (var i = 0; i < dateList.length; i++) {

                    var item = dateList[i];
                    item.isCheckedDate
                        = getOffsetTime(parseDate(item)) == start;

                    var nextItem = nextDateList[i];
                    nextItem.isCheckedDate
                        = getOffsetTime(parseDate(nextItem)) == start;
                }
            }
            me.set({
                dateList: dateList,
                nextDateList: nextDateList
            });
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, date) {
            var me = this;
            var data = [];
            date = simplifyDate(date);
            for (var time = start, item; time <= end; time += DAY) {
                item = simplifyDate(time);
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

            return me.getDatasource(startDate, endDate, date);
        }
    },

    afterMount: function () {
        var me = this;

        var today = new Date();

        var date = me.get('start');
        date = date ? date : today;

        me.set({
            dateList: me.createRenderData(date),
            nextDateList: me.createRenderData(offsetMonth(date, 1))
        });
    },
    beforeDestroy: function () {
        var me = this;
    }
}