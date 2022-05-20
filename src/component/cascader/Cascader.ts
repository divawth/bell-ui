import Yox, { CustomEventInterface } from 'yox'

import template from './template/Cascader.hbs'
// import './style/Cascader.styl'

import Tag from '../tag/Tag'
import Icon from '../icon/Icon'
import Empty from '../empty/Empty'
import Popover from '../popover/Popover'
import CascaderOptions from './CascaderOptions'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ARRAY,
  RAW_SIZE_ARRAY,
  RAW_DEFAULT,
  RAW_TYPE_INFO,
  RAW_TYPE_SUCCESS,
  RAW_TYPE_ERROR,
  RAW_TYPE_WARNING,
  RAW_TOP,
  RAW_TOP_START,
  RAW_TOP_END,
  RAW_BOTTOM,
  RAW_BOTTOM_START,
  RAW_BOTTOM_END,
  RAW_CUSTOM,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
} from '../util'

import {
  fireClickEvent,
  onClickEventByEnterPress,
} from '../event'

import {
  isLeafOption,
  getSelectedOptions,
} from './util'

export default Yox.define({

  template,

  name: '${prefix}Cascader',

  propTypes: {
    options: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    placeholder: {
      type: RAW_STRING,
      value: '请选择...'
    },
    value: {
      type: RAW_ARRAY,
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
      type: oneOf([RAW_TOP, RAW_TOP_START, RAW_TOP_END, RAW_BOTTOM, RAW_BOTTOM_START, RAW_BOTTOM_END]),
      value: RAW_BOTTOM_START,
    },
    clearable: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    changeOnSelect: {
      type: RAW_BOOLEAN,
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
      tempSelectedOptions: [],
      tempSelectedValue: this.get('value'),
    }
  },

  watchers: {
    value(value) {
      this.set({
        tempSelectedOptions: this.get('selectedOptions'),
        tempSelectedValue: value,
      })
    }
  },

  computed: {
    selectedOptions(): any[] {
      return getSelectedOptions(
        this.get('options'),
        this.get('value')
      )
    },
    selectedText(): string {
      const result: string[] = []
      Yox.array.each(
        this.get('selectedOptions'),
        function (option: any) {
          result.push(
            option.text
          )
        }
      )
      return result.join(' / ')
    },
    isReversed(): boolean {
      const placement = this.get('placement')
      return placement.indexOf('top') >= 0
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

        const tempSelectedValue = this.copy(this.get('tempSelectedValue'))
        const tempSelectedOptions = this.copy(this.get('tempSelectedOptions'))

        const selectedIndex = data.index
        const selectedOption = data.option
        const needChange = this.get('changeOnSelect') || isLeafOption(selectedOption)

        tempSelectedValue.length =
        tempSelectedOptions.length = selectedIndex

        tempSelectedValue[selectedIndex] = selectedOption.value
        tempSelectedOptions[selectedIndex] = selectedOption

        const changes: Record<string, any> = {
          tempSelectedValue,
          tempSelectedOptions,
        }

        if (needChange) {
          changes.value = tempSelectedValue
        }

        this.set(changes)

        if (needChange) {
          // @ts-ignore
          this.fireChange(tempSelectedValue)
        }

      },
      ns: 'cascaderOptions',
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
    onClick() {
      this.toggle('isVisible')
      fireClickEvent()
    },
    onClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()
      fireClickEvent(event)

      const value = []

      this.set({
        value,
      })

      // @ts-ignore
      this.fireChange(value)

    },
    fireChange(value) {
      this.fire(
        {
          type: 'change',
          ns: 'cascader',
        },
        {
          value,
        }
      )
    }
  },

  afterMount() {
    onClickEventByEnterPress(this)
  },

  components: {
    Tag,
    Icon,
    Empty,
    Popover,
    CascaderOptions,
  },

})
