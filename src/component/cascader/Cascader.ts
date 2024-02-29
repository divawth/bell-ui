import Yox, { CustomEventInterface } from 'yox'

import template from './template/Cascader.hbs'
// import './style/Cascader.styl'

import Tag from '../tag/Tag'
import Icon from '../icon/Icon'
import Empty from '../empty/Empty'
import Popover from '../popover/Popover'
import Checkbox from '../checkbox/Checkbox'
import CascaderOptions from './CascaderOptions'

import {
  TRUE,
  FALSE,
  UNDEFINED,
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
  RAW_ALL,
  RAW_PARENT,
  RAW_CHILD,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  toPixel,
  getNodesProps,
  renderNodesProps,
} from '../util'

import {
  fireClickEvent,
  onClickEventByEnterPress,
} from '../event'

import {
  setCheckedOptions,
  formatOptions,
  searchOptions,
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
    showSearch: {
      type: RAW_BOOLEAN,
    },
    block: {
      type: RAW_BOOLEAN,
    },
    changeOnSelect: {
      type: RAW_BOOLEAN,
    },
    showCheckedStrategy: {
      type: oneOf([RAW_ALL, RAW_PARENT, RAW_CHILD]),
      value: RAW_PARENT,
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
      isSearching: FALSE,
      query: '',
      queryWidth: 0,
      loadingOptions: [],
      checkedOptions: data.checkedOptions,
      selectedOptions: data.selectedOptions,
      indeterminateOptions: data.indeterminateOptions,
    }
  },

  computed: {
    searchResult(): any[] {
      return searchOptions(
        this.get('options'),
        this.get('checkedOptions'),
        this.get('query'),
      )
    },
    actualOptions(): any[] {

      const showCheckedStrategy = this.get('showCheckedStrategy')
      const checkedOptions = this.get('checkedOptions')

      if (showCheckedStrategy === RAW_ALL) {
        return checkedOptions
      }

      const showChildStrategy = showCheckedStrategy === RAW_CHILD
      const actualOptions: any[] = []
      const checkedValues = this.get('checkedValues')
      const checkedKeys = checkedValues.map(renderNodesProps)

      Yox.array.each(
        checkedOptions,
        function (options: any[], index) {

          let isParentChecked = FALSE

          const values = checkedValues[index]
          if (values.length > 1) {
            const copyed = values.slice()
            copyed.pop()
            const parentKey = renderNodesProps(copyed)
            isParentChecked = checkedKeys.indexOf(parentKey) >= 0
          }

          if (Yox.array.last(options).children) {
            // branch 节点，父级没选中时有效
            // 如果父级选中了，则有效的是父级
            if (!showChildStrategy && !isParentChecked) {
              actualOptions.push(options)
            }
          }
          else {
            // leaf 节点
            if (showChildStrategy || !isParentChecked) {
              actualOptions.push(options)
            }
          }
        }
      )

      return actualOptions

    },
    actualValues(): any[] {
      return getNodesProps(this.get('actualOptions'), 'value')
    },
    actualTexts(): string[] {
      const texts = getNodesProps(this.get('actualOptions'), 'text')
      if (this.get('multiple')) {
        return texts.map(function (item: string[]) {
          return Yox.array.last(item) as string
        })
      }
      return texts.map(renderNodesProps)
    },
    loadingValues(): any[] {
      return getNodesProps(this.get('loadingOptions'), 'value')
    },
    checkedValues(): any[] {
      return getNodesProps(this.get('checkedOptions'), 'value')
    },
    selectedValues(): any[] {
      return getNodesProps(this.get('selectedOptions'), 'value')
    },
    indeterminateValues(): any[] {
      return getNodesProps(this.get('indeterminateOptions'), 'value')
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
    searchInputStyle(): object | void {
      const width = this.get('queryWidth')
      if (width) {
        return {
          width: toPixel(width)
        }
      }
    },
  },

  watchers: {
    query(value) {
      if (value) {
        const { searchMirror } = this.$refs
        if (searchMirror) {
          this.set({
            queryWidth: (searchMirror as HTMLSpanElement).offsetWidth
          })
        }
      }
      else {
        this.set({
          queryWidth: 0,
        })
      }
    }
  },

  events: {
    loading: {
      listener(event, data) {

        event.stop()

        if (data.loading) {
          this.append('loadingOptions', data.options)
        }
        else {
          const loadingKeys = this.get('loadingValues').map(renderNodesProps)
          const loadingKey = renderNodesProps(data.values)

          const index = loadingKeys.indexOf(loadingKey)
          if (index >= 0) {
            this.removeAt('loadingOptions', index)
          }
        }

      },
      ns: 'cascaderOption',
    },
    select: {
      listener(event, data) {
        event.stop()
        this.selectOption(data)
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
        this.hideOverlay()
      },
      ns: 'popover',
    },
  },

  methods: {
    selectOption(data: any) {
      const me = this
      const isLeafOption = data.isLeaf

      me.set({
        selectedOptions: data.options,
      })

      if (me.get('multiple')) {
        if (isLeafOption) {
          me.setOptionChecked(
            data.values,
            !data.checked
          )
        }
      }
      else {
        if (isLeafOption || me.get('changeOnSelect')) {
          me.setCheckedOptions([data.options])
        }
        if (isLeafOption) {
          this.hideOverlay()
        }
      }
    },
    hideOverlay() {
      const me = this
      me.set({
        isVisible: FALSE,
      })
      // Popover 需要 nextTick 才会隐藏浮层
      // 这里等隐藏后再改变搜索状态，不然会引起浮层内容切换，会有闪烁问题
      if (me.get('isSearching')) {
        me.nextTick(function () {
          me.set({
            isSearching: FALSE,
            query: '',
          })
        })
      }
    },
    onClick(event?: CustomEventInterface) {
      const me = this
      const isVisible = me.get('isVisible')
      if (me.get('showSearch')) {
        me.set({
          isSearching: TRUE,
          isVisible: TRUE,
        })
        me.nextTick(function () {
          const searchInput = this.$refs.searchInput as HTMLInputElement
          searchInput.focus()
        })
      }
      else {
        me.set({
          isVisible: !isVisible,
        })
      }
      fireClickEvent(event)
    },
    onSearchInputKeydown(event: CustomEventInterface) {
      event.stop()

      const query = this.get('query')
      const actualValues = this.get('actualValues')
      if (query || actualValues.length === 0) {
        return
      }

      const originalEvent = event.originalEvent as KeyboardEvent
      if (originalEvent.keyCode === 8) {
        // 删除最后一个选中项
        this.setOptionChecked(
          actualValues[actualValues.length - 1],
          FALSE
        )
      }

    },
    onSearchResultClick(event: CustomEventInterface, data: any) {
      event.stop()
      if (this.get('multiple')) {
        this.selectOption({
          options: data.options,
          values: data.values,
          checked: data.checked,
          isLeaf: TRUE,
        })
      }
      else {
        this.selectOption({
          options: data.options,
          values: data.values,
          isLeaf: TRUE,
        })
      }
    },
    onClearClick(event: CustomEventInterface) {

      // 停止冒泡，否则会展开下拉框
      event.stop()
      fireClickEvent(event)

      this.set({
        indeterminateOptions: [],
      })

      this.setCheckedOptions([])

    },
    onOptionRemove(event: CustomEventInterface, index: number) {

      event.stop()

      const value = this.get(`actualValues.${index}`)
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
        indeterminateOptions,
      })

      me.setCheckedOptions(checkedOptions)

    },
    setCheckedOptions(checkedOptions: any[][]) {

      const me = this

      if (checkedOptions === me.get('checkedOptions')) {
        return
      }

      me.set({
        checkedOptions
      })

      let value = me.get('actualValues')
      if (!me.get('multiple') && value.length === 1) {
        value = value[0]
      }

      me.set({
        value,
      })

      me.fire(
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

  beforePropsUpdate(props) {

    const { options, value, multiple } = props

    if (options !== this.get('options')
      || (value !== UNDEFINED && value !== this.get('value'))
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
    Checkbox,
    CascaderOptions,
  },

})
