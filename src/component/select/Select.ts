import Yox, { CustomEventInterface } from 'yox'

import template from './template/Select.hbs'
// import './style/Select.styl'

import Tag from '../tag/Tag'
import Icon from '../icon/Icon'
import Dropdown from '../dropdown/Dropdown'

import {
  oneOf,
} from '../util'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ARRAY,
  RAW_NUMBER,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_PLACEMENT_ARRAY,
  RAW_BOTTOM_START,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Select',

  propTypes: {
    placeholder: {
      type: RAW_STRING,
      value: '请选择...'
    },
    value: {
      type: [RAW_ARRAY, RAW_STRING, RAW_NUMBER],
    },
    status: {
      type: oneOf([RAW_TYPE_INFO, RAW_TYPE_SUCCESS, RAW_TYPE_ERROR, RAW_TYPE_WARNING]),
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    placement: {
      type: oneOf(RAW_PLACEMENT_ARRAY),
      value: RAW_BOTTOM_START,
    },
    multiple: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    clearable: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    block: {
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
    value(value) {

      // 在这同步 selectedOptions，可兼顾内外的改动
      this.updateSelectedOptions(value)

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        { value }
      )

    },
  },

  events: {
    update: {
      listener(event, data) {

        event.stop()
  
        const me = this
  
        if (data.isSelected) {
          me.selectOption(data.value)
        }
        else {
          me.deselectOption(data.value)
        }
  
        if (!me.get('multiple')) {
          me.set('visible', FALSE)
        }
  
      },
      ns: 'selectOption',
    }
  },

  methods: {

    handleClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()

      this.set('value', UNDEFINED)

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        {
          value: UNDEFINED,
        },
        TRUE
      )

      this.fire({
        type: 'clear',
        ns: 'select',
      })

    },

    handleRemoveOption(event: CustomEventInterface, index: number) {

      event.stop()

      this.removeAt('value', index)

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        {
          value: this.get('value')
        },
        TRUE
      )

    },

    handleOutsideClick(event: CustomEventInterface) {

      event.stop()

      this.set('visible', FALSE)

    },

    selectOption(value: any) {

      const me = this
      const values = me.get('value')

      if (me.get('multiple')) {

        if (Yox.is.array(values)
          && Yox.array.has(values, value)
        ) {
          return
        }

        me.append('value', value)

      }
      else {

        if (values !== value) {
          me.set('value', value)
        }
        // 更新 UI，因为 watcher 不会被触发
        else {
          this.updateSelectedOptions(value)
        }

      }

    },

    deselectOption(value: any) {

      const me = this
      const values = me.get('value')

      if (me.get('multiple')) {

        const selectedIndex = Yox.is.array(values)
          ? Yox.array.indexOf(values, value)
          : -1

        if (selectedIndex < 0) {
          return
        }

        me.removeAt('value', selectedIndex)

      }
      else {

        if (values !== value) {
          return
        }

        me.set('value', UNDEFINED)

      }

    },

    updateSelectedOptions(value: any) {

      // 用一个空数组，通过事件流收集选中的 option
      let selectedOptions = []

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        {
          value,
          selectedOptions,
        },
        TRUE
      )

      this.set('selectedOptions', selectedOptions)

    }

  },

  components: {
    Tag,
    Icon,
    Dropdown,
  },

  afterMount() {
    this.updateSelectedOptions(
      this.get('value')
    )
  }

})
