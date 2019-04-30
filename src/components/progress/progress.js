import ProgressTpl from './template/Progress.html'

export default {
  template: ProgressTpl,
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
    type: {
      type: 'string'
    },
    strokeWidth: {
      type: 'string',
      value: 10
    },
    hideInfo: {
      type: 'boolean',
      value: false
    },
    vertical: {
      type: 'boolean',
      value: false
    },
    active: {
      type: 'boolean',
      value: false
    }
  }
};