import template from './template/Button.html'

export default {
  propTypes: {
    type: {
      type: 'string',
      value: 'default'
    },
    borderType: {
      type: 'string', 
      value: 'solid'
    },
    shape: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    fluid: {
      type: 'boolean'
    },
    disabled: {
      type: 'boolean'
    },
    ghost: {
      type: 'boolean'
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