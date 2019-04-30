import IconTpl from './Icon.html'

export default {
  template: IconTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    size: function (value) {
      return value != null ? +value : 14;
    },
    color: {
      type: 'string'
    }
  }
};