import { firstDateInWeek, lastDateInWeek, normalizeDate, firstDateInMonth, lastDateInMonth, simplifyDate, offsetMonth, parseDate, getOffsetTime } from '../function/util';
import template from '../template/DateWeek.hbs';
import { RAW_NUMERIC, RAW_STRING, UNDEFINED } from '../../constant';
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant';
import { isDate } from '../../util';
export default {
    propTypes: {
        startDate: {
            type: isDate()
        },
        date: {
            type: RAW_NUMERIC
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
            dateList: [],
            modeDate: this.get('startDate') ? this.get('startDate') : new Date(),
            checkedIndex: 0,
            checkedDateTime: -1
        };
    },
    computed: {
        currentYear: function () {
            return simplifyDate(this.get('modeDate')).year;
        },
        currentMonth: function () {
            return simplifyDate(this.get('modeDate')).month;
        }
    },
    methods: {
        changeDate: function (offset) {
            var me = this;
            var date = me.get('modeDate');
            date = offsetMonth(date, offset);
            me.set({
                checkedIndex: -1,
                modeDate: date,
                dateList: me.createRenderData(date, me.get('checkedDateTime'))
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
        click: function (date) {
            this.fire('change.week', {
                start: date[0],
                end: date[date.length - 1]
            });
            this.refresh(getOffsetTime(parseDate(date[0])));
        },
        refresh: function (start) {
            var me = this;
            var dateList = me.get('dateList');
            var checkedIndex = '';
            var checkedDateTime = '';
            for (var i = 0; i < dateList.length; i++) {
                var item = dateList[i][0];
                var itemTime = getOffsetTime(parseDate(item));
                if (itemTime == start) {
                    checkedDateTime = itemTime;
                    checkedIndex = i;
                }
            }
            me.set({
                checkedDateTime: checkedDateTime,
                checkedIndex: checkedIndex
            });
        },
        // 获取渲染模板的数据
        getDatasource: function (start, end, date, checkedDateTime) {
            var data = [];
            date = simplifyDate(date);
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item));
                item.isPrevMonth = item.month < date.month;
                item.isCurrentMonth = item.month == date.month;
                item.isLastMonth = item.month > date.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function (modeDate, checkedDateTime) {
            var me = this;
            var firstDay = me.get('firstDay') || 0;
            modeDate = normalizeDate(modeDate);
            var startDate;
            var endDate;
            startDate = firstDateInWeek(firstDateInMonth(modeDate), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDate), firstDay);
            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);
            var duration = endDate - startDate;
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = me.getDatasource(startDate, endDate, modeDate, checkedDateTime);
            return me.format(list);
        },
        format: function (list) {
            var me = this;
            var result = [];
            var arr = [];
            var checkedIndex = -1;
            for (var i = 0; i < list.length; i++) {
                arr.push(list[i]);
                if (i % 7 == 6) {
                    if (getOffsetTime(parseDate(arr[0])) === me.get('checkedDateTime')) {
                        checkedIndex = result.length;
                    }
                    result.push(arr);
                    arr = [];
                }
            }
            me.set({
                checkedIndex: checkedIndex
            });
            return result;
        }
    },
    afterMount: function () {
        var me = this;
        var today = new Date();
        var date = me.get('modeDate');
        date = date ? date : today;
        me.set({
            modeDate: date,
            dateList: me.createRenderData(date, me.get('checkedDateTime'))
        });
        var start = me.get('value') ? me.get('value')[0] : UNDEFINED;
        if (start) {
            me.refresh(getOffsetTime(start));
            this.fire('change.week', {
                start: simplifyDate(start),
                end: simplifyDate(me.get('value')[1])
            });
        }
    }
};
//# sourceMappingURL=DateWeek.js.map