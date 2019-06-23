import { firstDateInWeek, lastDateInWeek, normalizeDate, firstDateInMonth, lastDateInMonth, simplifyDate, offsetMonth, parseDate, formatList } from '../function/util';
import { WEEKS, DAY, STABLE_DURATION } from '../function/constant';
import template from '../template/Date.hbs';
import { RAW_NUMERIC, RAW_STRING, RAW_BOOLEAN, RAW_FUNCTION, RAW_ARRAY } from '../../constant';
import { isDate } from '../../util';
import Yox from 'yox';
export default Yox.create({
    propTypes: {
        multiple: {
            type: RAW_BOOLEAN
        },
        startDate: {
            type: isDate()
        },
        value: {
            type: isDate()
        },
        selected: {
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
        var modeDate = this.get('startDate') ? this.get('startDate') : new Date();
        var selectedDates = [];
        if (this.get('selected') && this.get('selected').length) {
            selectedDates = this.get('selected').map(function (item) {
                var date = simplifyDate(item);
                return date.year + "/" + date.month + "/" + date.date + "/" + date.day;
            });
        }
        return {
            weeks: WEEKS,
            currentDate: null,
            modeDate: simplifyDate(modeDate),
            dateList: [],
            selectedDates: selectedDates
        };
    },
    events: {
        'clear.datepicker': function (event) {
            this.set({
                currentDate: null,
                selectedDates: [],
                dateList: this.createRenderData(this.get('modeDate'), null, [])
            });
            event.stop();
        }
    },
    watchers: {
        value: function (date) {
            var value = date ? simplifyDate(date) : null;
            this.set({
                currentDate: value,
                dateList: this.createRenderData(this.get('modeDate'), value, this.get('selectedDates'))
            });
        },
        currentDate: {
            watcher: function (date) {
                this.fire('change.date', {
                    date: date,
                    selectedDates: this.get('selectedDates')
                });
            },
            sync: true
        }
    },
    methods: {
        changeDateList: function (offset) {
            var me = this;
            var modeDate = simplifyDate(offsetMonth(parseDate(me.get('modeDate')), offset));
            var dateList = me.createRenderData(modeDate, me.get('currentDate'), me.get('selectedDates'));
            me.set({
                modeDate: modeDate,
                dateList: dateList
            });
        },
        addDates: function (date) {
            var selectedDates = this.copy(this.get('selectedDates'));
            var index = this.getDateIndex(date, selectedDates);
            if (index < 0) {
                selectedDates.push(this.getDateString(date));
            }
            else {
                selectedDates.splice(index, 1);
            }
            this.set({ selectedDates: selectedDates });
        },
        click: function (date) {
            var me = this;
            me.get('multiple') && me.addDates(date);
            me.set({
                currentDate: date,
                dateList: me.createRenderData(me.get('modeDate'), date, me.get('selectedDates'))
            });
        },
        getDateString: function (date) {
            return date.year + "/" + date.month + "/" + date.date + "/" + date.day;
        },
        getDateIndex: function (item, list) {
            return list.indexOf(this.getDateString(item));
        },
        getDataSource: function (start, end, modeDate, currentDate, selectedDates) {
            var data = [];
            for (var time = start, item = void 0; time <= end; time += DAY) {
                item = simplifyDate(time);
                if (this.get('multiple')) {
                    if (this.getDateIndex(item, selectedDates) >= 0) {
                        item.isCurrentDate = true;
                    }
                }
                else if (currentDate
                    && currentDate.year === item.year
                    && currentDate.month === item.month
                    && currentDate.date === item.date) {
                    item.isCurrentDate = true;
                }
                if (this.get('disabledDate')) {
                    item.disabled = this.get('disabledDate')(parseDate(item));
                }
                item.isPrevMonth = item.month < modeDate.month;
                item.isCurrentMonth = item.month == modeDate.month;
                item.isLastMonth = item.month > modeDate.month;
                data.push(item);
            }
            return data;
        },
        createRenderData: function (modeDate, currentDate, selectedDates) {
            var firstDay = this.get('firstDay') || 0;
            var modeDateString = parseDate(modeDate);
            var startDate;
            var endDate;
            startDate = firstDateInWeek(firstDateInMonth(modeDateString), firstDay);
            endDate = lastDateInWeek(lastDateInMonth(modeDateString), firstDay);
            startDate = normalizeDate(startDate);
            endDate = normalizeDate(endDate);
            var duration = endDate - startDate;
            var offset = STABLE_DURATION - duration;
            if (offset > 0) {
                endDate += offset;
            }
            var list = this.getDataSource(startDate, endDate, modeDate, currentDate, selectedDates);
            return formatList(list);
        }
    },
    afterMount: function () {
        var me = this;
        var value = me.get('value') ? simplifyDate(me.get('value')) : null;
        me.set({
            currentDate: value,
            dateList: me.createRenderData(me.get('modeDate'), value, me.get('selectedDates'))
        });
        if (me.get('selected')) {
            me.fire('change.date', {
                date: value,
                selectedDates: me.get('selectedDates')
            });
        }
    }
});
//# sourceMappingURL=Date.js.map