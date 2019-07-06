import Yox, { Listener } from 'yox'
import template from './template/InputNumber.hbs'

import {
  FALSE,
  TRUE,
  RAW_FUNCTION,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  DOCUMENT,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({
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
    value(value: number) {
      this.fire(
        'change.inputNumber',
        { value }
      )
    }
  },

  computed: {
    computedValue(): number {
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
      this.increase('value', +this.get('step'), +this.get('max'))
    },
    down() {
      this.decrease('value', +this.get('step'), +this.get('min'))
    },
    blur() {
      this.set('isFocus', FALSE)
      this.fire('blur.inputNumber')
    },
    focus() {
      this.set('isFocus', TRUE)
      this.fire('focus.inputNumber')
    }
  },

  afterMount() {

    const me = this, doc = DOCUMENT

    const onKeydown: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      switch ((event.originalEvent as KeyboardEvent).keyCode) {
        case 38:
          me.up()
          break
        case 40:
          me.down()
          break
      }
    }

    Yox.dom.on(
      doc,
      'keydown',
      onKeydown
    )

    me.on(
      'beforeDestroy.hook',
      function () {
        Yox.dom.off(
          doc,
          'keydown',
          onKeydown
        )
      }
    )

  }
})
