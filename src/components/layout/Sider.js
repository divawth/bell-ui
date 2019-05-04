import template from './template/Sider.html'

export default {
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    collapsible: {
      type: ['boolean'],
      value: false
    }
  },

  template,
  
  watchers: {
    collapsed(collapsed) {
      var me = this;
      Yox.nextTick(function () {
        me.fire(
          'collapse',
          {
            isCollapsed: collapsed
          }
        );
      });
    }
  },

  afterMount() {
    this.fire(
      'hasSider'
    );
  }
};