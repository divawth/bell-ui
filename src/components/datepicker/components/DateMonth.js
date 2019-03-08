const MONTHS = [
  '一月',
  '二月',
  '三月',
  '四月',
  '五月',
  '六月',
  '七月',
  '八月',
  '九月',
  '十月',
  '十一月',
  '十二月',
];

export default {
  template: `
<div class="bell-datepicker-month
  {{#if className}} {{className}}{{/if}}
"{{#if style}} {{style}}{{/if}}>

  <div class="bell-datepicker-header">
    <span class="bell-datepicker-header-button" on-click="prevMore()">
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
    </span>

    <span class="bell-datepicker-header-button" on-click="prev()">
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-left"></i>
    </span>

    <span class="bell-text-medium">
      {{modeYear}} 年
    </span>

    <span class="bell-datepicker-header-button" on-click="next()">
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
    </span>

    <span class="bell-datepicker-header-button" on-click="nextMore()">
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
      <i class="bell-icon bell-text-medium bell-text-muted bell-icon-ios-arrow-right"></i>
    </span>
  </div>

  <div class="bell-datepicker-body">
    {{#each months:index}}
      <span
        class="bell-datepicker-col
        {{#if checkedMonth == index && checkedYear == modeYear}} bell-datepicker-col-checked{{/if}}"
        on-click="click(index)"
      >
        {{this}}
      </span>
    {{/each}}
  </div>

</div>
  `,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    date: {
      type: 'numeric'
    },
    firstDay: {
      type: 'numeric'
    },
    year: {
      type: 'numeric'
    }
  },

  data() {
    let me = this;
    return {
      checkedMonth: '',
      checkedYear: '',
      modeYear: me.get('year') ? me.get('year') : new Date().getFullYear(),
      months: MONTHS
    }
  },

  methods: {
    prevMore() {
      this.decrease('modeYear', 10);
    },
    prev() {
      this.decrease('modeYear', 1);
    },
    nextMore() {
      this.increase('modeYear', 10);
    },
    next() {
      this.increase('modeYear', 1);
    },
    click(month) {

      let me = this;
      let year = me.get('modeYear');

      me.set({
        checkedYear: year,
        checkedMonth: month
      });

      me.fire(
        'monthChange',
        {
          year: year,
          month: month + 1
        }
      );

    }
  }
};