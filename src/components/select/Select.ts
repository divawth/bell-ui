import Yox, { CustomEventInterface, Data, YoxInterface } from 'yox'

import template from './template/Select.hbs'

import {
  contains, oneOf
} from '../util'

import {
  FALSE,
  TRUE,
  UNDEFINED,
  DOCUMENT,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_EVENT_CLICK,
  RAW_EVENT_KEYDOWN,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}select',

  propTypes: {
    clearable: {
      type: RAW_BOOLEAN,
    },
    defaultText: {
      type: RAW_STRING,
    },
    value: {
      type: [ RAW_ARRAY, RAW_STRING, RAW_NUMBER ],
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    placement: {
      type: RAW_STRING,
      value: 'bottom',
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    prefix: {
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
      count: 0,
      visible: FALSE,
      hoverIndex: 0,
      selectedOptions: [],
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'change.select',
        { value }
      )
    }
  },

  events: {

    'add.selectOption': function (event) {
      event.stop()
      this.increase('count')
      const { target } = event
      if (target.get('isSelected')) {
        this.notifyOptionSelected(target)
      }
    },

    'remove.selectOption': function (event) {
      event.stop()
      this.decrease('count')
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
      const text = option.get('text')

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

        let selectedIndex = Yox.is.array(values) ? Yox.array.indexOf(values, value) : -1
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

    decreaseHoverIndex() {
      let hoverIndex = this.get('hoverIndex')
      hoverIndex = hoverIndex <= 0 ? (this.get('count') - 1) : hoverIndex - 1
      this.set({
        hoverIndex: hoverIndex
      })
      this.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        TRUE
      )
    },

    increaseHoverIndex() {
      let hoverIndex = this.get('hoverIndex')
      hoverIndex = hoverIndex >= (this.get('count') - 1) ? 0 : hoverIndex + 1
      this.set({
        hoverIndex: hoverIndex
      })

      this.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        TRUE
      )
    },

    selectOption() {
      this.fire(
        'optionHoveredChange',
        {
          index: this.get('hoverIndex'),
          selected: TRUE
        },
        TRUE
      )
    }

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
      me.set({
        visible: FALSE,
      })
    }

    const onKeydown = function (event: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }
      switch ((event.originalEvent as KeyboardEvent).keyCode) {
        case 40:
          event.prevent()
          me.increaseHoverIndex()
          break

        case 38:
          event.prevent()
          me.decreaseHoverIndex()
          break

        case 13:
          me.selectOption()
          break
      }
    }

    Yox.dom.on(
      DOCUMENT,
      RAW_EVENT_CLICK,
      onClick
    )
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
            RAW_EVENT_CLICK,
            onClick
          )
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
