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
      type: ['string', 'boolean']
    }
  },

  template,

  data() {
    return {
      collapsed: false
    }
  },

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