import template from './template/Card.html'

export default {
  
  propTypes: {
    bordered: {
      type: 'boolean',
      value: true
    },
    hoverDisabled: {
      type: 'boolean',
      value: true
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template
}