import template from './template/ButtonGroup.html'

export default {
  propTypes: {
    size: {
      type: 'string'
    },
    shape: {
      type: 'string'
    },
    vertical: {
      type: 'boolean',
      value: false
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },
  template
};