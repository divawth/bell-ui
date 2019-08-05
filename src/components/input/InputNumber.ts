import Yox, { Listener } from 'yox'

import template from './template/InputNumber.hbs'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  UNDEFINED,
  RAW_FUNCTION,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
  RAW_EVENT_KEYDOWN,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    formatter: {
      type: RAW_FUNCTION,
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    max: {
      type: RAW_NUMERIC,
      value: 100,
    },
    min: {
      type: RAW_NUMERIC,
      value: 0,
    },
    value: {
      type: RAW_NUMERIC,
    },
    step: {
      type: RAW_NUMERIC,
      value: 1,
    },
    editable: {
      type: RAW_BOOLEAN,
      value: TRUE,
    },
    readOnly: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placeholder: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      isFocus: FALSE,
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
    computedValue: {
      get(): string {
        const formatter = this.get('formatter')
        const value = this.get('value')
        return formatter
          ? formatter(value)
          : value
      },
      set(value: string) {
        this.set('value', value)
      }
    },
    upDisabled(): boolean {
      const max = this.get('max')
      return max != null
        && max - this.get('value') < this.get('step')
    },
    downDisabled(): boolean {
      const min = this.get('min')
      return min != null
        && this.get('value') - min < this.get('step')
    }
  },

  methods: {
    up() {
      const max = this.get('max')
      this.increase(
        'value',
        +this.get('step'),
        Yox.is.numeric(max) ? +max : UNDEFINED
      )
    },
    down() {
      const min = this.get('min')
      this.decrease(
        'value',
        +this.get('step'),
        Yox.is.numeric(min) ? +min : UNDEFINED
      )
    },
    handleFocus() {
      this.set('isFocus', TRUE)
      this.fire('focus.inputNumber')
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire('blur.inputNumber')
    },
  },

  afterMount() {

    const me = this

    const onKeydown: Listener = function (event) {
      if (!me.get('isFocus')) {
        return
      }
      // 阻止事件默认行为，避免光标的跳动
      switch ((event.originalEvent as KeyboardEvent).keyCode) {
        case 38:
          me.up()
          event.prevent()
          break
        case 40:
          me.down()
          event.prevent()
          break
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_KEYDOWN,
      onKeydown
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            RAW_EVENT_KEYDOWN,
            onKeydown
          )
        }
      }
    )

  }
})
