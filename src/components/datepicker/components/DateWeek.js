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
import template from '../template/DateWeek.html'

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
    // 表示第几周
    week: {
      type: 'numeric'
    },
    // date
    date: {
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
      dateList: [],
      // 默认是某周第一天
      modeDate: me.get('date') ? parseDate(me.get('date')) : '',
      checkedIndex: me.get('week'),
      checkedDateTime: -1
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

      me.set({
        checkedIndex: -1,
        modeDate: date,
        dateList: me.createRenderData(
          date,
          me.get('checkedDateTime')
        )
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
      let me = this;
      me.fire(
        'weekRangeChange',
        {
          start: date[0],
          end: date[date.length - 1]
        }
      );
      me.refresh(
        getOffsetTime(parseDate(date[0])),
        getOffsetTime(parseDate(date[date.length - 1]))
      );
    },
    refresh(start, end) {
      let me = this;
      let dateList = me.get('dateList');
      let checkedIndex = '';
      let checkedDateTime = '';
      for (let i = 0; i < dateList.length; i++) {
        let item = dateList[i][0];
        let itemTime = getOffsetTime(parseDate(item));
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
    getDatasource(start, end, date, checkedDateTime) {
      let me = this;
      let data = [];
      date = simplifyDate(date);
      for (let time = start, item; time <= end; time += DAY) {
        item = simplifyDate(time);
        item.isCurrentDate = checkedDateTime && checkedDateTime === getOffsetTime(parseDate(item));
        item.isPrevMonth = item.month < date.month;
        item.isCurrentMonth = item.month == date.month;
        item.isLastMonth = item.month > date.month;
        data.push(item);
      }
      return data;

    },
    createRenderData(modeDate, checkedDateTime) {

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

      let list = me.getDatasource(startDate, endDate, modeDate, checkedDateTime);
      return me.format(list);
    },
    format(list) {
      let me = this;
      let result = [];
      let arr = [];
      let checkedIndex = -1;
      for (let i = 0; i < list.length; i++) {
        arr.push(list[i])
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

  afterMount() {
    let me = this;

    let today = new Date();

    let date = me.get('modeDate');
    date = date ? date : today;

    me.set({
      modeDate: date,
      dateList: me.createRenderData(
        date,
        me.get('checkedDateTime')
      )
    });
  }
};