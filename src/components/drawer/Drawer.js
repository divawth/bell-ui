import {
  contains
} from '../util'
import DrawerTpl from './Drawer.html'

export default {
  template: DrawerTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    position: {
      type: 'string',
      value: 'left'
    },
    useMask: {
      type: 'boolean',
    },
    open: {
      type: 'boolean'
    },
    size: function (value) {
      return value != null ? +value : 300;
    }
  },

  afterMount() {

    let me = this;

    me.documentClickHandler = function (event) {

      if (!me.get('open')) {
        return
      }
      let element = me.$refs.drawContent;
      let target = event.originalEvent.target;
      if (contains(element, target)) {
        return;
      }
      me.set({
        open: false
      });

    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
  },

  beforeDestroy() {
    let me = this;
    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
  }
};