import Yox, { CustomEventInterface, YoxInterface } from 'yox'

import template from './template/Select.hbs'

import {
  oneOf,
  contains,
  onTransitionEnd,
} from '../util'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  DOCUMENT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_CLICK,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
  RAW_BOTTOM,
  RAW_TOP,
} from '../constant'

const CLASS_VISIBLE = '${prefix}dropdown-visible'
const CLASS_FADE = '${prefix}dropdown-fade'

export default Yox.define({

  template,

  name: '${prefix}select',

  propTypes: {
    defaultText: {
      type: RAW_STRING,
    },
    value: {
      type: [RAW_ARRAY, RAW_STRING, RAW_NUMBER],
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: oneOf([RAW_TOP, RAW_BOTTOM]),
      value: RAW_BOTTOM,
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    prefix: {
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
      visible: FALSE,
      selectedOptions: [],
    }
  },

  watchers: {
    value(value: any) {
      this.fire(
        'change.select',
        { value }
      )
    },
    visible(visible: boolean) {
      const me = this
      const element = me.$el as HTMLElement
      const list = me.$refs.list as HTMLElement
      if (visible) {
        Yox.dom.addClass(element, CLASS_VISIBLE)
        setTimeout(
          function () {
            Yox.dom.addClass(element, CLASS_FADE)
          },
          20
        )
      }
      else {
        Yox.dom.removeClass(element, CLASS_FADE)
        onTransitionEnd(
          list,
          function () {
            Yox.dom.removeClass(element, CLASS_VISIBLE)
          }
        )
      }
    }
  },

  events: {

    'add.selectOption': function (event) {
      event.stop()
      const { target } = event
      if (target.get('isSelected')) {
        this.notifyOptionSelected(target)
      }
    },

    'remove.selectOption': function (event) {
      event.stop()
      const { target } = event
      if (target.get('isSelected')) {
        this.notifyOptionUnselected(target)
      }
    },

    'click.selectOption': function (event) {

      event.stop()

      const me = this

      // 这里是 option 和 select 沟通的地方
      // 只是反向再告诉 option 它应该是选中还是取消选中
      const { target } = event
      const value = target.get('value')
      const multiple = me.get('multiple')

      if (multiple) {

        const values = me.get('value')
        const selected = Yox.is.array(values) && Yox.array.has(values, value)
          ? FALSE
          : TRUE

        if (selected) {
          me.notifyOptionSelected(target)
        }
        else {
          me.notifyOptionUnselected(target)
        }

        me.fire(
          'sync.select',
          {
            value,
            multiple,
            selected,
          },
          TRUE
        )

      }
      else {
        me.set('visible', FALSE)
        me.notifyOptionSelected(target)
        me.fire(
          'sync.select',
          {
            value,
            multiple,
            selected: TRUE,
          },
          TRUE
        )
      }

    }
  },

  methods: {

    handleToggleClick() {
      this.toggle('visible')
    },

    handleClearClick(event: CustomEventInterface) {
      // 停止冒泡，否则会展开下拉框
      event.stop()
      this.set({
        value: UNDEFINED,
        selectedOptions: [],
      })
      this.fire('clear.select')
    },

    handleRemoveOption(event: CustomEventInterface, index: number) {

      event.stop()

      this.removeAt('value', index)
      this.removeAt('selectedOptions', index)

    },

    notifyOptionSelected(option: YoxInterface) {

      const me = this
      const value = option.get('value')
      const text = (option as any).getText()

      if (me.get('multiple')) {

        const values = me.get('value')

        if (Yox.is.array(values)
          && Yox.array.has(values, value)
        ) {
          return
        }

        me.append('value', value)
        me.append('selectedOptions', { value, text })

      }
      else {
        const selectedOptions = me.get('selectedOptions')

        me.set('value', value)

        if (!selectedOptions[0]
          || selectedOptions[0].value !== value
        ) {
          me.set('selectedOptions', [{ value, text }])
        }
      }

    },

    notifyOptionUnselected(option: YoxInterface) {

      const me = this
      const values = me.get('value')

      const value = option.get('value')

      if (me.get('multiple')) {

        const selectedIndex = Yox.is.array(values)
          ? Yox.array.indexOf(values, value)
          : -1

        if (selectedIndex < 0) {
          return
        }

        me.removeAt('value', selectedIndex)
        me.removeAt('selectedOptions', selectedIndex)

      }
      else {

        if (values !== value) {
          return
        }

        me.set('value', UNDEFINED)
        me.set('selectedOptions', [])

      }

    },

  },

  afterMount() {

    const me = this

    const onClick = function (event: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }
      const element = me.$el
      const target = event.originalEvent.target as HTMLElement
      if (contains(element, target)) {
        return
      }
      me.set('visible', FALSE)
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_CLICK,
      onClick
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            RAW_CLICK,
            onClick
          )
        }
      }
    )
  }
})
