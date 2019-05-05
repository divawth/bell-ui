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
  
  methods: {
    toggleCollapsed() {
      this.toggle('isCollapsed')
    }
  },

  afterMount() {
    this.fire(
      'hasSider'
    );
  }
};