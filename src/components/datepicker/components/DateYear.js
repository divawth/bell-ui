import DateYearTpl from '../template/DateYear.html'

export default {
  template: DateYearTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    startYear: {
      type: 'numeric'
    }
  },

  data() {
    let me = this;
    return {
      modeYear: me.get('startYear'),
      checkedYear: '',
      years: []
    }
  },

  methods: {
    prev() {
      let me = this;
      me.decrease('modeYear', 12);
      me.getYearList(me.get('modeYear'));
    },
    next() {
      let me = this;
      me.increase('modeYear', 12);
      me.getYearList(me.get('modeYear'));
    },
    click(year) {
      let me = this;
      me.set({
        checkedYear: year
      });

      me.fire(
        'yearChange',
        {
          year: year
        }
      );
    },
    getYearList(startYear) {
      let me = this;
      let years = [];
      for (let item = startYear; item < startYear + 12; item++) {
        years.push(item);
      }
      me.set({
        modeYear: startYear,
        years: years
      });
    }
  },

  afterMount() {
    let me = this;
    let today = new Date();
    let start = me.get('startYear');
    start = start ? start : today.getFullYear();
    me.getYearList(start);
  }
};