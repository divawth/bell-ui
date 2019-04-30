import CircleTpl from './template/Circle.html'

export default {
  template: CircleTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    percent: {
      type: 'number',
      value: 0
    },
    size: {
      type: 'number',
      value: 120
    },
    strokeWidth: {
      type: 'number',
      value: 6
    },
    strokeColor: {
      type: 'string',
      value: '#2db7f5'
    },
    strokeLinecap: {
      type: ['square', 'round'],
      value: 'round'
    },
    trailWidth: {
      type: 'number',
      value: 5
    },
    trailColor: {
      type: 'string',
      value: '#eaeef2'
    }
  },

  computed: {
    strokeDasharray() {
      let me = this;
      let len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
      return `${len}px ${len}px`;
    },
    strokeDashoffset() {
      let me = this;
      let len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
      let percent = me.get('percent');
      return `${((100 - percent) / 100 * len)}px`;
    }
  }
};