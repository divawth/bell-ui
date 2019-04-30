import TimePickerTpl from './template/TimePicker.html'

export default {
  template: TimePickerTpl,
  propTypes: {
    unit: {
      type: 'string',
      value: '分'
    },
    onChange: {
      type: 'function'
    },
    tens: {
      type: 'number',
      value: 0
    },
    ones: {
      type: 'number',
      value: 0
    }
  },

  data: function () {
    var me = this;
    return {

    };
  },

  watchers: {
    tens: function (val) {
      var me = this;
      var ones = me.get('ones');
      var result = val * 10 + ones;
      me.get('onChange') && me.get('onChange')(result);
    },
    ones: function (val) {
      var me = this;
      var tens = me.get('tens');
      var result = tens * 10 + val;
      me.get('onChange') && me.get('onChange')(result);
    }
  },

  methods: {
    upTens: function () {
      this.decrease('tens', 1, 0);
    },
    downTens: function () {
      this.increase('tens', 1, 5);
    },
    upOnes: function () {
      this.decrease('ones', 1, 0);
    },
    downOnes: function () {
      this.increase('ones', 1, 9);
    }
  },

  afterMount: function () {
    var me = this;
    var namespace = '.timeInput' + Math.random();

    me.namespace = namespace;

  },

  beforeDestroy: function () {
    var me = this;
    eventEmitter.off(me.namespace);
  }
}