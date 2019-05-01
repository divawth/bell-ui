import ButtonTpl from './template/Button.html'

export default {
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string',
      value: 'default'
    },
    borderType: {
      type: 'string', 
      value: 'solid'
    },
    label: {
      type: 'string'
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
    }
  },
  template: ButtonTpl
};