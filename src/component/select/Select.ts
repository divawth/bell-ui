import Yox, { CustomEventInterface } from 'yox'

import template from './template/Select.hbs'
// import './style/Select.styl'

import Tag from '../tag/Tag'
import Icon from '../icon/Icon'
import Empty from '../empty/Empty'
import Popover from '../popover/Popover'
import Option from './Option'

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
  RAW_TOP,
  RAW_BOTTOM,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_CUSTOM,
  RAW_SLOT_CHILDREN,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
} from '../util'

import {
  isOptionSelected,
  getOptionsByChildren,
} from './util'

import {
  fireClickEvent,
  onClickEventByEnterPress,
} from '../event'

export default Yox.define({

  template,

  name: '${prefix}Select',

  propTypes: {
    options: {
      type: RAW_ARRAY,
    },
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
    },
    placement: {
      type: oneOf([RAW_TOP, RAW_BOTTOM]),
      value: RAW_BOTTOM,
    },
    multiple: {
      type: RAW_BOOLEAN,
    },
    showClear: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
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
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      RAW_TOP,
      RAW_CUSTOM,
      isFocus: FALSE,
      isVisible: FALSE,
      selectedOptions: [],
    }
  },

  computed: {
    allOptions(): any[] {
      const options = this.get('options')
      if (options) {
        return options
      }
      const children = this.get(RAW_SLOT_CHILDREN)
      if (children) {
        return getOptionsByChildren(this, children)
      }
      return []
    },
    selectedOptions(): any[] {
      const value = this.get('value')
      const allOptions = this.get('allOptions')
      const result: any[] = []

      Yox.array.each(
        allOptions,
        function (item: any) {
          if (isOptionSelected(value, item.value)) {
            result.push(item)
          }
        }
      )

      return result
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const width = this.get('width')
      if (width) {
        result.push({
          width: toPixel(width)
        })
      }

      const style = this.get('style')
      if (style) {
        result.push(style)
      }

      if (result.length > 0) {
        return result
      }
    },
  },

  events: {
    click: {
      listener(event, data) {

        event.stop()

        this.selectOption(data.value)

        if (!this.get('multiple')) {
          this.set('isVisible', FALSE)
        }

      },
      ns: 'option',
    },
    outside: {
      listener(event) {

        event.stop()

        this.set('isVisible', FALSE)

      },
      ns: 'popover',
    }
  },

  methods: {

    onClick(event?: CustomEventInterface) {
      this.toggle('isVisible')
      fireClickEvent(event)
    },

    onClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()
      fireClickEvent(event)

      this.set('value', UNDEFINED)
      this.fireChange(UNDEFINED)

    },

    onOptionRemove(event: CustomEventInterface, index: number) {

      event.stop()

      this.removeAt('value', index)

      this.fireChange(
        this.get('value')
      )

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
        me.fireChange(
          me.get('value')
        )

      }
      else {

        if (values !== value) {
          me.set('value', value)
          me.fireChange(value)
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
        me.fireChange(
          me.get('value')
        )

      }
      else {

        if (values !== value) {
          return
        }

        me.set('value', UNDEFINED)
        me.fireChange(UNDEFINED)

      }

    },

    fireChange(value) {

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        {
          value,
        }
      )

      this.fire(
        {
          type: 'change',
          ns: 'select',
        },
        {
          value,
        },
        TRUE
      )

    }

  },

  afterMount() {
    onClickEventByEnterPress(this)
  },

  afterUpdate() {
    if (this.get('isVisible') && this.get('multiple')) {
      const popover = this.$refs.popover as any
      popover.refreshOverlayRect()
    }
  },

  components: {
    Tag,
    Icon,
    Empty,
    Popover,
    Option,
  },

})
