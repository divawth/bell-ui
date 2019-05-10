import template from './template/Divider.html'

export default {
  propTypes: {
    type: {
      type: 'string',
      value: 'horizontal'
    },
    dashed: {
      type: 'boolean',
      value: false
    },
    orientation: {
      type: 'string',
      value: 'center'
    },
    text: {
      type: 'string'
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