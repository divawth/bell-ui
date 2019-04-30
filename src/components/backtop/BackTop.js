import BackTopTpl from './template/BackTop.html'

export default {
  template: BackTopTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    bottom: {
      type: 'numeric',
      value: 30
    },
    right: {
      type: 'numeric',
      value: 30
    },
    height: {
      type: 'numeric',
      value: 400
    },
    fix: {
      type: 'string'
    }
  },

  data() {
    return {
      isShow: false
    }
  },

  methods: {
    back() {
      let me = this;
      let top = me.container.scrollTop;
      me.container.scrollTop = 0;
      me.fire('click');
    }
  },

  afterMount() {
    let me = this;
    let container = me.container = me.$parent.$el;
    me.handleScroll = () => {
      me.set({
        isShow: container.scrollTop >= me.get('height')
      });
    };

    container.addEventListener('scroll', me.handleScroll);
    container.addEventListener('resize', me.handleScroll);
  },

  beforeDestroy() {
    let me = this;
    me.container.removeEventListener('scroll', me.handleScroll);
    me.container.removeEventListener('resize', me.handleScroll);
  }
}