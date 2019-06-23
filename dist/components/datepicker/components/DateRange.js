import Yox from 'yox';
import { firstDateInWeek, lastDateInWeek, normalizeDate, firstDateInMonth, lastDateInMonth, simplifyDate, offsetMonth, parseDate, getOffsetTime, formatList } from '../function/util';
import template from '../template/DateRange.hbs';
import { RAW_NUMERIC, RAW_STRING, RAW_BOOLEAN, RAW_ARRAY, RAW_FUNCTION } from '../../constant';
import { isDate } from '../../util';
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant';
export default Yox.create({
    propTypes: {
        splitPanel: {
            type: RAW_BOOLEAN
        },
        startDate: {
            type: isDate()
        },
        value: {
            type: RAW_ARRAY
        },
        disabledDate: {
            type: RAW_FUNCTION
        },
        firstDay: {
            type: RAW_NUMERIC
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
        return {
            weeks: WEEKS,
            startModeDate: '',
            endModeDate: '',
            checkedStartDate: '',
            checkedEndDate: '',
            startModeList: [],
            endModeList: []
        };
    },
    computed: {
        startModeDateYear: function () {
            return simplifyDate(this.get('startModeDate')).year;
        },
        startModeDateMonth: function () {
            return simplifyDate(this.get('startModeDate')).month;
        },
        endModeDateYear: function () {
            return simplifyDate(this.get('endModeDate')).year;
        },
        endModeDateMonth: function () {
            return simplifyDate(this.get('endModeDate')).month;
        }
    },
    events: {
        'clear.datepicker': function (event) {
            this.set({
                checkedStartDate: '',
                checkedEndDate: '',
                endModeList: this.createRenderData(this.get('endModeDate'), '', ''),
                startModeList: this.createRenderData(this.get('startModeDate'), '', '')
            });
            event.stop();
        }
    },
    methods: {
        changeStartModeDate: function (offset) {
            var me = this;
            var startModeDate = me.get('startModeDate');
            startModeDate = offsetMonth(startModeDate, offset);
            var startModeList = me.createRenderData(startModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
            me.set({
                startModeDate: startModeDate,
                startModeList: startModeList
            });
            if (me.get('endModeDate').getTime() <= startModeDate.getTime()) {
                me.changeEndModeDate(offset);
            }
        },
        changeEndModeDate: function (offset) {
            var me = this;
            var endModeDate = me.get('endModeDate');
            endModeDate = offsetMonth(endModeDate, offset);
            var endModeList = me.createRenderData(endModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
            me.set({
                endModeDate: endModeDate,
                endModeList: endModeList
            });
            if (me.get('endModeDate').getTime() <= me.get('startModeDate').getTime()) {
                me.changeStartModeDate(offset);
            }
        },
        startPrevYear: function () {
            this.changeStartModeDate(-12);
            if (!this.get('splitPanel')) {
                this.changeEndModeDate(-12);
            }
        },
        startPrevMonth: function () {
            this.changeStartModeDate(-1);
            if (!this.get('splitPanel')) {
                this.changeEndModeDate(-1);
            }
        },
        startNextYear: function () {
            this.changeStartModeDate(12);
        },
        startNextMonth: function () {
            this.changeStartModeDate(1);
        },
        endPrevYear: function () {
            this.changeEndModeDate(-12);
        },
        endPrevMonth: function () {
            this.changeEndModeDate(-1);
        },
        endNextYear: function () {
            this.changeEndModeDate(12);
            if (!this.get('splitPanel')) {
                this.changeStartModeDate(12);
            }
        },
        endNextMonth: function () {
            this.changeEndModeDate(1);
            if (!this.get('splitPanel')) {
                this.changeStartModeDate(1);
            }
        },
        hover: function (date) {
            var me = this;
            var startDate = me.get('checkedStartDate');
            var endDate = me.get('checkedEndDate');
            if (!startDate || endDate) {
                return;
            }
            var rangDate = '';
            if (!startDate
                || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(startDate))) {
                rangDate = '';
            }
            else {
                rangDate = date;
            }
            me.refresh(getOffsetTime(parseDate(startDate)), getOffsetTime(parseDate(rangDate)));
        },
        click: function (date) {
            var me = this;
            var checkedStartDate = me.get('checkedStartDate');
            var checkedEndDate = me.get('checkedEndDate');
            if (!checkedStartDate || me.get('checkedEndDate')
                || getOffsetTime(parseDate(date)) < getOffsetTime(parseDate(checkedStartDate))) {
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
            me.refresh(getOffsetTime(parseDate(checkedStartDate)), getOffsetTime(parseDate(checkedEndDate)));
            if (checkedStartDate && checkedEndDate) {
                me.fire('change.daterange', {
                    start: checkedStartDate,
                    end: checkedEndDate
                });
            }
        },
        refresh: function (start, end) {
            var me = this;
            var startModeList = me.copy(me.get('startModeList'));
            var endModeList = me.copy(me.get('endModeList'));
            if (end) {
                Yox.array.each(startModeList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate
                            = itemTime < end
                                && itemTime > start;
                        item.isCheckedDate
                            = itemTime == end || itemTime == start;
                    });
                });
                Yox.array.each(endModeList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        var itemTime = getOffsetTime(parseDate(item));
                        item.isRangeDate
                            = itemTime < end
                                && itemTime > start;
                        item.isCheckedDate
                            = itemTime == end || itemTime == start;
                    });
                });
            }
            else if (start) {
                Yox.array.each(startModeList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        item.isCheckedDate
                            = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
                Yox.array.each(endModeList, function (arr) {
                    Yox.array.each(arr, function (item) {
                        item.isCheckedDate
                            = getOffsetTime(parseDate(item)) == start;
                        item.isRangeDate = false;
                    });
                });
            }
            me.set({
                startModeList: startModeList,
                endModeList: endModeList
            });
        },
        getDataSource: function (start, end, date, checkedStartDate, checkedEndDate) {
            var data = [];
            date = simplifyDate(date);
            var checkedStart = getOffsetTime(parseDate(checkedStartDate));
            var checkedEnd = getOffsetTime(parseDate(checkedEndDate));
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                var itemTime = getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd;
                item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd;
                if (this.get('disabledDate')) {
                    item.disabled = this.get('disabledDate')(parseDate(item));
                }
                data.push(item);
            }
            return data;
        },
        createRenderData: function (date, checkedStartDate, checkedEndDate) {
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
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDataSource(startDate, endDate, date, checkedStartDate, checkedEndDate);
            return formatList(list);
        }
    },
    watchers: {
        value: function (value) {
            var checkedStartDate = simplifyDate(value[0]);
            var checkedEndDate = simplifyDate(value[1]);
            var startModeList = this.createRenderData(this.get('startModeDate'), checkedStartDate, checkedEndDate);
            var endModeList = this.createRenderData(this.get('endModeDate'), checkedStartDate, checkedEndDate);
            this.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate,
                startModeList: startModeList,
                endModeList: endModeList
            });
        }
    },
    afterMount: function () {
        var me = this;
        var startModeDate = me.get('startDate') ? me.get('startDate') : new Date();
        var endModeDate = offsetMonth(startModeDate, 1);
        var startModeList = me.createRenderData(startModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
        var endModeList = me.createRenderData(endModeDate, me.get('checkedStartDate'), me.get('checkedEndDate'));
        var value = me.get('value');
        if (value) {
            var checkedStartDate = simplifyDate(value[0]);
            var checkedEndDate = simplifyDate(value[1]);
            me.set({
                checkedStartDate: checkedStartDate,
                checkedEndDate: checkedEndDate
            });
            me.fire('change.daterange', {
                start: checkedStartDate,
                end: checkedEndDate
            });
        }
        me.set({
            startModeDate: startModeDate,
            endModeDate: endModeDate,
            startModeList: startModeList,
            endModeList: endModeList
        });
    }
});
//# sourceMappingURL=DateRange.js.map