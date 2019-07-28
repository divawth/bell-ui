import Yox, { CustomEventInterface } from 'yox'

import template from './template/Select.hbs'

import {
  contains
} from '../util'

import {
  NULL,
  FALSE,
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  DOCUMENT,
} from '../constant'

export default Yox.define({
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

  template,

  data() {
    return {
      count: 0,
      visible: FALSE,
      hoverIndex: 0,
      selectedIndex: NULL,
      selectedText: NULL,
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'optionSelectedChange.select',
        { value },
        TRUE
      )

      this.fire(
        'change.select',
        {
          value: value,
          text: this.get('selectedText'),
          index: this.get('selectedIndex')
        }
      )
    }
  },

  events: {
    selectedOptionChange(event) {
      let option = event.target
      if (!this.get('multiple')) {
        this.set({
          selectedIndex: option.get('index'),
          selectedText: option.get('text')
        })
      }
    },

    optionAdd() {
      this.increase('count')
    },

    optionRemove() {
      this.decrease('count')
    },

    optionSelect(event) {
      let me = this
      let option = event.target

      let value = option.get('value')
      let text = option.get('text')
      let index = option.get('index')

      if (me.get('multiple')) {
        me.set({
          value: me.setArrayValue(value, me.get('value')),
          selectedText: me.setArrayValue(text, me.get('selectedText')),
          selectedIndex: index,
          visible: TRUE
        })
      }
      else {
        me.set({
          value: value,
          selectedText: text,
          selectedIndex: index,
          visible: FALSE
        })
      }
    }
  },

  methods: {
    clear() {
      this.set({
        value: NULL,
        selectedText: NULL,
        selectedIndex: NULL
      })
      this.fire('clear.select')
    },
    setArrayValue(text: string, values: string[]) {

      values = this.copy(values)
      if (Yox.is.array(values)) {
        let index = values.indexOf(text)
        if (index >= 0) {
          values.splice(index, 1)
        }
        else {
          values.push(text)
        }
      }
      else {
        values = [text]
      }

      return values.length ? values : NULL

    },

    tagClose(event: CustomEventInterface, text: string, index: number) {
      let me = this

      this.set({
        value: me.setArrayValue(me.get('value')[index], me.get('value')),
        selectedText: me.setArrayValue(text, me.get('selectedText'))
      })
      event.stop()

    },

    toggleMenu() {
      if (this.get('disabled')) {
        return
      }
      this.toggle('visible')
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

    if (me.get('value') != NULL
      && me.get('selectedText') == NULL
      && me.get('selectedIndex') == NULL
    ) {
      me.fire(
        'optionSelectedChange',
        {
          value: me.get('value')
        },
        TRUE
      )
    }

    const documentClickHandler = function (e: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }

      let element = me.$el
      let target = e.originalEvent.target as HTMLElement
      if (contains(element, target)) {
        return
      }
      me.set({
        visible: FALSE
      })
    }

    const documentKeydownHander = function (e: CustomEventInterface) {
      if (!me.get('visible')) {
        return
      }

      switch ((e.originalEvent as KeyboardEvent).keyCode) {
        case 40:
          e.prevent()
          me.increaseHoverIndex()
          break

        case 38:
          e.prevent()
          me.decreaseHoverIndex()
          break

        case 13:
          me.selectOption()
          break
      }
    }

    Yox.dom.on(
      DOCUMENT,
      'click',
      documentClickHandler
    )
    Yox.dom.on(
      DOCUMENT,
      'keydown',
      documentKeydownHander
    )

    me.on(
      'beforeDestroy.hook',
      function (event) {
        if (event.phase === Yox.Event.PHASE_CURRENT) {
          Yox.dom.off(
            DOCUMENT,
            'click',
            documentClickHandler
          )
          Yox.dom.off(
            DOCUMENT,
            'keydown',
            documentKeydownHander
          )
        }
      }
    )
  }
})
