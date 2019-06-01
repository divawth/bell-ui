import template from './template/InputNumber.html'
import { FALSE, TRUE, RAW_FUNCTION, RAW_STRING, RAW_NUMERIC, RAW_BOOLEAN, RAW_TYPE_ARRAY } from '../constant'
import { oneOf } from '../util'

export default {
  propTypes: {
    formatter: {
      type: RAW_FUNCTION
    },
    status: {
      type: oneOf(RAW_TYPE_ARRAY)
    },
    max: {
      type: RAW_NUMERIC,
      value: 100
    },
    min: {
      type: RAW_NUMERIC,
      value: 0
    },
    value: {
      type: RAW_NUMERIC
    },
    step: {
      type: RAW_NUMERIC,
      value: 1
    },
    size: {
      type: RAW_STRING
    },
    editable: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    readonly: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    placeholder: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      isFocus: FALSE
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'change.inputnumber',
        { value }
      )
    }
  },

  computed: {
    computedValue() {
      if (this.get('formatter')) {
        return this.get('formatter')(this.get('value'))
      }
      else {
        return this.get('value')
      }
    }
  },

  methods: {
    up() {
      let value = this.increase('value', +this.get('step'), +this.get('max'))
      this.fire(
        'change.inputnumber', 
        { value }
      )
    },
    down() {
      let value = this.decrease('value', +this.get('step'), +this.get('min'))
      this.fire(
        'change.inputnumber', 
        { value }
      )
    },
    blur() {
      this.set('isFocus', FALSE)
      this.fire('blur.inputnumber')
    },
    focus() {
      this.set('isFocus', TRUE)
      this.fire('focus.inputnumber')
    },
    documentKeydownHander(event) {
      switch (event.originalEvent.keyCode) {
        case 38:
          this.up()
          break
        case 40:
          this.down()
          break
      }
    }
  },

  afterMount() {
    this.documentKeydownHander = this.documentKeydownHander.bind(this)
    Yox.dom.on(
      document,
      'keydown',
      this.documentKeydownHander
    )
  },

  beforeDestroy() {
    Yox.dom.off(
      document,
      'keydown',
      this.documentKeydownHander
    )
  }
}
