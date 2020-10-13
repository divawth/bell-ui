import Yox, { Listener } from 'yox'

import template from './template/InputNumber.hbs'
// import './style/InputNumber.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  FALSE,
  DOCUMENT,
  UNDEFINED,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_EVENT_KEYDOWN,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_EVENT_BEFORE_DESTROY,
} from '../constant'

import {
  oneOf,
  toNumber,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}InputNumber',

  propTypes: {
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    max: {
      type: RAW_NUMERIC,
    },
    min: {
      type: RAW_NUMERIC,
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
    autoFocus: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    readOnly: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    block: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placeholder: {
      type: RAW_STRING,
    },
    width: {
      type: RAW_NUMERIC,
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
    value(value) {
      this.fire(
        {
          type: 'change',
          ns: 'inputNumber',
        },
        { value }
      )
    }
  },

  computed: {
    computedValue: {
      get(): string {
        return this.get('value')
      },
      set(value: string) {
        this.set('value', toNumber(value, 0))
      }
    },
    upDisabled(): boolean {
      const max = this.get('max')
      return Yox.is.numeric(max)
        && max - this.get('value') < this.get('step')
    },
    downDisabled(): boolean {
      const min = this.get('min')
      return Yox.is.numeric(min)
        && this.get('value') - min < this.get('step')
    }
  },

  methods: {
    up() {
      const max = this.get('max')
      const step = this.get('step')
      this.increase(
        'value',
        toNumber(step),
        Yox.is.numeric(max) ? +max : UNDEFINED
      )
    },
    down() {
      const min = this.get('min')
      const step = this.get('step')
      this.decrease(
        'value',
        toNumber(step),
        Yox.is.numeric(min) ? +min : UNDEFINED
      )
    },
    handleFocus() {
      this.set('isFocus', TRUE)
      this.fire({
        type: 'focus',
        ns: 'inputNumber',
      })
    },
    handleBlur() {
      this.set('isFocus', FALSE)
      this.fire({
        type: 'blur',
        ns: 'inputNumber',
      })
    },
  },

  components: {
    Icon,
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
      RAW_EVENT_BEFORE_DESTROY,
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
