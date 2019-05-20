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
import template from '../template/DateRange.html'

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

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    start: {
      type: 'numeric'
    },
    end: {
      type: 'numeric'
    },
    firstDay: {
      type: 'numeric'
    }
  },
  
  template,

  data() {
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
    currentYear() {
      let me = this;
      let date = me.get('modeDate');
      date = date ? simplifyDate(date) : simplifyDate(new Date());
      return date.year;
    },
    currentMonth() {
      let me = this;
      let date = me.get('modeDate');
      date = date ? simplifyDate(date) : simplifyDate(new Date());
      return date.month;
    }
  },

  methods: {
    changeDate(offset) {
      let me = this;
      let date = me.get('modeDate');

      date = offsetMonth(date, offset);

      let dateList = me.createRenderData(
        date,
        me.get('checkedStartDate'),
        me.get('checkedEndDate')
      );
      let nextDateList = me.createRenderData(
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
    hover(date) {
      let me = this;
      let startDate = me.get('checkedStartDate');
      let endDate = me.get('checkedEndDate');

      if (!date.isCurrentMonth
        || !startDate
        || endDate
      ) {
        return;
      }

      let rangDate = '';
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
    click(date) {
      if (!date.isCurrentMonth) {
        return;
      }
      let me = this;
      let checkedStartDate = me.get('checkedStartDate');
      let checkedEndDate = me.get('checkedEndDate');

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
    refresh(start, end) {
      let me = this;

      let dateList = me.copy(me.get('dateList'));
      let nextDateList = me.copy(me.get('nextDateList'));

      if (end) {
        Yox.array.each(
          dateList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                let itemTime = getOffsetTime(parseDate(item));
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
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                let itemTime = getOffsetTime(parseDate(item));
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
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
                item.isCheckedDate
                  = getOffsetTime(parseDate(item)) == start;
                item.isRangeDate = false;
              }
            );
          }
        );
        Yox.array.each(
          nextDateList,
          (arr) => {
            Yox.array.each(
              arr,
              (item) => {
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
    getDatasource(start, end, date, checkedStart, checkedEnd) {
      let me = this;
      let data = [];
      date = simplifyDate(date);
      checkedStart = getOffsetTime(parseDate(checkedStart));
      checkedEnd = getOffsetTime(parseDate(checkedEnd));

      for (let time = start, item; time <= end; time += DAY) {
        item = simplifyDate(time);
        let itemTime = getOffsetTime(parseDate(item));
        item.isPrevMonth = item.month < date.month;
        item.isCurrentMonth = item.month == date.month;
        item.isLastMonth = item.month > date.month;
        item.isCheckedDate = itemTime === checkedStart || itemTime === checkedEnd;
        item.isRangeDate = itemTime > checkedStart && itemTime < checkedEnd;
        data.push(item);
      }
      return data;

    },
    createRenderData(date, checkedStart, checkedEnd) {

      let me = this;
      let firstDay = me.get('firstDay') || 0;
      date = normalizeDate(date);

      let startDate;
      let endDate;

      startDate = firstDateInWeek(firstDateInMonth(date), firstDay);
      endDate = lastDateInWeek(lastDateInMonth(date), firstDay);

      startDate = normalizeDate(startDate);
      endDate = normalizeDate(endDate);

      let duration = endDate - startDate;
      let offset = stableDuration - duration;

      if (offset > 0) {
        endDate += offset;
      }
      let list = me.getDatasource(
        startDate,
        endDate,
        date,
        checkedStart,
        checkedEnd
      );
      return me.format(list);

    },
    format(list) {
      let result = [];
      let arr = [];
      for (let i = 0; i < list.length; i++) {
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

    let date = me.get('start');
    date = date ? date : today;

    let dateList = me.createRenderData(
      date,
      me.get('checkedStartDate'),
      me.get('checkedEndDate')
    );
    let nextDateList = me.createRenderData(
      offsetMonth(date, 1),
      me.get('CheckedStartDate'),
      me.get('CheckedEndDate'),
    );
    me.set({
      modeDate: date,
      dateList: dateList,
      nextDateList: nextDateList
    });
  }
};