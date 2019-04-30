import AlertTpl from './template/Alert.html'

export default {
  template: AlertTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    type: {
      type: 'string',
      value: 'primary'
    },
    closable: {
      type: 'boolean'
    },
    showIcon: {
      type: 'boolean'
    },
    center: {
      type: 'boolean'
    },
    closeText: {
      type: 'string'
    }
  },

  data() {
    return {
      hasDesc: false,
      paddingRight: 0
    }
  },

  methods: {
    close() {
      let container = this.$el;
      let classNames = container.getAttribute('class');
      Yox.dom.addClass(container, 'bell-hide');
      setTimeout(
        () => {
          container.remove();
        },
        500
      );
      this.fire('close');
    }
  },

  events: {
    hasDesc() {
      this.set({
        hasDesc: true
      });
    }
  },

  afterMount() {
    let me = this;

    if (me.get('closable')) {
      me.set({
        paddingRight: me.$refs.close.clientWidth
      });
    }
  }
};