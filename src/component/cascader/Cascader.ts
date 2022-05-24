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
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_FUNCTION,
  RAW_DEFAULT,
  RAW_SIZE_ARRAY,
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
  renderValue,
  getOptionsProps,
  setCheckedOptions,
  formatOptions,
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
    multiple: {
      type: RAW_BOOLEAN,
    },
    showClear: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    changeOnSelect: {
      type: RAW_BOOLEAN,
    },
    loadData: {
      type: RAW_FUNCTION,
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
    const data = formatOptions(
      this.get('options'),
      this.get('value'),
      this.get('multiple')
    )

    return {
      RAW_CUSTOM,
      isFocus: FALSE,
      isVisible: FALSE,
      checkedOptions: data.checkedOptions,
      selectedOptions: data.selectedOptions,
      indeterminateOptions: data.indeterminateOptions,
    }
  },

  computed: {
    checkedValues(): any[] {
      return getOptionsProps(this.get('checkedOptions'), 'value')
    },
    checkedTexts(): string[] {
      return getOptionsProps(this.get('checkedOptions'), 'text').map(renderValue)
    },
    selectedValues(): any[] {
      return getOptionsProps(this.get('selectedOptions'), 'value')
    },
    indeterminateValues(): any[] {
      return getOptionsProps(this.get('indeterminateOptions'), 'value')
    },
    isReversed(): boolean {
      const placement = this.get('placement')
      return placement.indexOf(RAW_TOP) >= 0
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
    select: {
      listener(event, data) {

        event.stop()

        const me = this

        const multiple = me.get('multiple')

        const isLeafOption = data.isLeaf

        // 多选模式下，change 只能通过 checked 触发
        const needChange = multiple
          ? FALSE
          : (me.get('changeOnSelect') || isLeafOption)

        me.set({
          selectedOptions: data.options,
        })

        if (needChange) {
          this.set({
            checkedOptions: [data.options],
          })
          const value = this.get('checkedValues')
          this.set({
            value,
          })
          this.fireChange(value)
        }

        if (multiple) {
          if (isLeafOption) {
            me.setOptionChecked(
              data.values,
              !data.checked
            )
          }
        }
        else if (isLeafOption) {
          this.set({
            isVisible: FALSE,
          })
        }

      },
      ns: 'cascaderOption',
    },
    check: {
      listener(event, data) {

        event.stop()

        this.setOptionChecked(data.values, data.checked)

      },
      ns: 'cascaderOption',
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

      this.set({
        checkedOptions: [],
      })

      const value = this.get('checkedValues')
      this.set({
        value,
      })
      this.fireChange(value)

    },
    onOptionRemove(event: CustomEventInterface, index: number) {

      event.stop()

      const value = this.get(`checkedValues.${index}`)

      this.setOptionChecked(value, FALSE)

    },
    setOptionChecked(value: any[], checked: boolean) {

      const me = this

      const checkedOptions = me.copy(me.get('checkedOptions'))
      const indeterminateOptions = me.copy(me.get('indeterminateOptions'))

      setCheckedOptions(
        me.get('options'),
        checkedOptions,
        indeterminateOptions,
        [value],
        [checked]
      )

      me.set({
        checkedOptions,
        indeterminateOptions,
      })

      const checkedValues = me.get('checkedValues')
      me.set({
        value: checkedValues,
      })
      me.fireChange(checkedValues)

    },
    fireChange(value: any[]) {
      this.fire(
        {
          type: 'change',
          ns: 'cascader',
        },
        {
          value,
        }
      )
    },
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

  beforePropsUpdate(props) {

    const { options, value, multiple } = props

    if (options !== this.get('options')
      || value !== this.get('value')
    ) {
      this.set(
        formatOptions(options, value, multiple)
      )
    }

  },

  components: {
    Tag,
    Icon,
    Empty,
    Popover,
    CascaderOptions,
  },

})
