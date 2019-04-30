import DialogTpl from './template/Dialog.html'

export default {

  template: DialogTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    open: {
      type: ['string', 'number', 'boolean']
    }
  },

  methods: {
    maskClick: function () {
      this.fire('maskClick');
    }
  },

  watchers: {
    open: function (isOpen) {
      this.setStatus();
    }
  },

  methods: {
    setStatus: function () {
      let me = this;
      let element = me.$el;
      var contentElement = element.querySelector('.bell-dialog-content');
      if (me.get('open')) {
        contentElement.style.marginTop = '-250px';
        element.style.display = 'flex';
        setTimeout(
          function () {
            contentElement.style.marginTop = 0;
          },
          300
        );
      }
      else {
        contentElement.style.marginTop = '-250px';
        setTimeout(
          function () {
            element.style.display = 'none';
          },
          300
        );
      }
    }
  },

  afterMount() {
    this.setStatus();
    document.body.appendChild(this.$el);
  }

};