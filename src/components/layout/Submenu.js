import SubmenuTpl from './template/Submenu.html'

export default {
  template: SubmenuTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    isCollapsed: {
      type: ['string', 'boolean']
    }
  },

  data() {
    return {
      isOpen: false
    }
  },

  events: {
    activeSubMenuChange(openNames) {
      let me = this;
      let isOpen = openNames.indexOf(me.get('name')) != -1;
      this.set({
        isOpen: isOpen
      });
    }
  },

  transitions: {
    groups: {
      enter(el, done) {
        let clientHeight = el.clientHeight;
        el.style.height = 0;
        setTimeout(
          () => {
            el.style.height = clientHeight + 'px';
          },
          50
        );
        setTimeout(done, 300);
      },
      leave(el, done) {
        el.style.height = 0;
        Yox.dom.removeClass(el, 'bell-visible');
        setTimeout(done, 300);
      }
    }
  },

  methods: {
    click(name) {
      this.toggle('isOpen');
      this.fire(
        'click',
        {
          isOpen: this.get('isOpen')
        }
      );
    }
  }
};