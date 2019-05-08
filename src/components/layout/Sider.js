import template from './template/Sider.html'

export default {
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    isCollapsed: {
      type: 'boolean'
    }
  },

  model: 'isCollapsed',

  template,

  afterMount() {
    this.fire(
      'hasSider'
    )
  }
}