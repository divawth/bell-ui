import SiderTpl from './template/Sider.html'

export default {
  template: SiderTpl,
  
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
    let me = this;
    me.fire(
      'hasSider',
      {
        hasSider: true
      }
    );
  }
};