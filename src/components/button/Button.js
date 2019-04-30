import ButtonTpl from './template/Button.html'

export default {
  template: ButtonTpl,
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
    }
  }
};