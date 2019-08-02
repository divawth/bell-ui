import Yox, { CustomEventInterface, Data } from 'yox'

import template from './template/Select.hbs'

import {
  contains
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
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}select',

  propTypes: {
    clearable: {
      type: RAW_BOOLEAN
    },
    defaultText: {
      type: RAW_STRING
    },
    value: {
      type: [ RAW_NUMERIC, RAW_STRING ]
    },
    size: {
      type: RAW_STRING
    },
    type: {
      type: RAW_STRING
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    placement: {
      type: RAW_STRING
    },
    multiple: {
      type: RAW_BOOLEAN
    },
    prefix: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
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
        { value },
        TRUE
      )
      this.fire(
        'change.select',
        { value }
      )
    }
  },

  events: {
    'selected.selectOption': function (event) {
      if (this.get('multiple')) {
        return
      }
      const { target } = event
      const value = target.get('value')
      const text = target.get('text')

      const data: Data = { value }
      const selectedOptions = this.get('selectedOptions')
      if (!selectedOptions[0]
        || selectedOptions[0].value !== value
      ) {
        data.selectedOptions = [{ value, text }]
      }

      this.set(data)

    },

    'add.selectOption': function (event) {
      event.stop()
      this.increase('count')
      // 判断 option 的 isSelected
    },

    'remove.selectOption': function (event) {
      event.stop()
      this.decrease('count')
    },

    'click.selectOption': function (event) {
      event.stop()

      const me = this

      const { target } = event
      const value = target.get('value')

      if (me.get('multiple')) {
        let values = me.get('value')
        if (Yox.is.array(values)) {
          values = me.copy(values)
        }
        else {
          values = []
        }

        const selectedIndex = Yox.array.indexOf(values, value)

        // 取消选中
        if (selectedIndex >= 0) {
          values.splice(selectedIndex, 1)
        }
        // 选中
        else {
          values.push(value)
        }

        me.set({
          value: values,
          visible: TRUE,
        })
      }
      else {
        me.set({
          value,
          visible: FALSE,
        })
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
