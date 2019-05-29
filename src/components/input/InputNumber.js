import template from './template/InputNumber.html'

export default {
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    status: {
      type: 'string'
    },
    maxValue: {
      type: 'numeric'
    },
    minValue: {
      type: 'numeric',
      value: 0
    },
    value: {
      type: 'numeric'
    },
    step: function (val) {
      return val === undefined ? 1 : +val
    },
    size: {
      type: 'string'
    },
    readonly: {
      type: 'boolean',
      value: false
    },
    disabled: {
      type: 'boolean'
    },
    editable: {
      type: 'boolean',
      value: true
    },
    placeholder: {
      type: 'string'
    }
  },

  template,

  data() {
    return {
      isFocus: false
    }
  },

  watchers: {
    value(val) {
      let me = this
      if (!Yox.is.numeric(val)) {
        me.set({
          value: +me.get('minValue')
        })
        return
      }
      me.fire(
        'change',
        {
          value: +val
        }
      )
    }
  },

  methods: {
    up() {
      let me = this
      me.increase('value', me.get('step'), me.get('maxValue'))
      me.fire('change', {
        value: +me.get('value')
      })
    },
    down() {
      let me = this
      let value = me.decrease('value', me.get('step'), me.get('minValue'))
      me.fire('change', {
        value: +me.get('value')
      })
    },
    blur() {
      this.set({
        isFocus: false
      })
      this.fire('blur')
    },
    focus() {
      this.set({
        isFocus: true
      })
      this.fire('focus')
    },
    documentKeydownHander(event) {
      let me = this
      switch (event.originalEvent.keyCode) {
        case 38:
          me.up()
          break
        case 40:
          me.down()
          break
      }
    }
  },

  afterMount() {
    let me = this
    me.documentKeydownHander = me.documentKeydownHander.bind(me)
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHander
    )
  },

  beforeDestroy() {
    let me = this
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHander
    )
  }
}
