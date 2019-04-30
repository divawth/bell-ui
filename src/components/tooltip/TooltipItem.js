import TooltipItemTpl from './template/TooltipItem.html'

export default {
  template: TooltipItemTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
  },

  afterMount() {
    let me = this;
    me.fire(
      'hasTooltipItem'
    );
  }
};