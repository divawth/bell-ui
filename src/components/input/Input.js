import InputTpl from './template/Input.html';

let TEXT_TYPE_PASSWORD = 'password';
let TEXT_TYPE_TEXTAREA = 'textarea';
let TEXT_TYPE_TEXT = 'text';

export default {
  template: InputTpl,

  propTypes: {
    style: {
      type: 'string'
    },
    size: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    placeholder: {
      type: 'string'
    },
    value: {
      type: 'string'
    },
    icon: {
      type: 'string'
    },
    rows: {
      type: 'number'
    },
    disabled: {
      type: 'boolean'
    },
    clearable: {
      type: 'boolean'
    },
    secure: {
      type: 'boolean'
    },
    prefix: {
      type: 'string'
    },
    suffix: {
      type: 'string'
    }
  },

  data() {
    let me = this;
    return {
      TEXT_TYPE_TEXT: TEXT_TYPE_TEXT,
      TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA,
      TEXT_TYPE_PASSWORD: TEXT_TYPE_PASSWORD,

      isSecure: true,
      isFocus: false,
      currentType: me.get('type')
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'change',
        {
          value: value
        }
      );
    },
    isSecure(isSecure) {
      this.set({
        currentType: isSecure ? TEXT_TYPE_PASSWORD : TEXT_TYPE_TEXT
      });
    }
  },

  methods: {
    blur(args) {
      this.set({
        isFocus: false
      });
      this.fire('blur');
    },
    focus(args) {
      this.set({
        isFocus: true
      });
      this.fire('focus');
    },
    clear() {
      this.set({
        value: ''
      });
    }
  },

  afterMount() {
    let me = this;

    me.documentKeydownHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keydown');
        if (event.keyCode === 13) {
          me.fire('enter');
        }
      }
    };
    me.documentKeyupHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keyup');
      }
    };
    me.documentKeypressHandler = function (event) {
      event = event.originalEvent;
      if (me.$refs && event.target == me.$refs.input) {
        me.fire('keypress');
      }
    };
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHandler
    );
    Yox.dom.on(
      document,
      'keyup',
      me.documentKeyupHandler
    );
    Yox.dom.on(
      document,
      'keypress',
      me.documentKeypressHandler
    );
  },

  beforeDestroy() {
    let me = this;
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHandler
    );
    Yox.dom.off(
      document,
      'keyup',
      me.documentKeyupHandler
    );
    Yox.dom.off(
      document,
      'keypress',
      me.documentKeypressHandler
    );
  }
};