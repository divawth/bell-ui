import Yox, { Data, CustomEventInterface } from 'yox'

import template from './template/Table.hbs'
// import './style/Table.styl'

import Icon from '../icon/Icon'
import Empty from '../empty/Empty'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'
import ResizeObserver from '../resize-observer/ResizeObserver'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_OBJECT,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toPixel,
} from '../util'

interface ButtonConfig {
  type: string | void,
  text: string | void,
  size: string | void,
  shape: string | void,
  onClick: (item: Data, index: number) => void
}

const SORT_ORDER_ASC = 'asc'
const SORT_ORDER_DESC = 'desc'

export default Yox.define({

  template,

  name: '${prefix}Table',

  propTypes: {
    list: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    columns: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    selection: {
      type: RAW_ARRAY,
    },
    stripe: {
      type: RAW_BOOLEAN,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    scroll: {
      type: RAW_OBJECT,
    },
    height: {
      type: RAW_NUMERIC,
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

    let sortKey = UNDEFINED
    let sortOrder = UNDEFINED

    Yox.array.each(
      this.get('columns'),
      function (item: any) {
        if (item.visible !== FALSE && item.defaultSortOrder) {
          sortKey = item.key
          sortOrder = item.defaultSortOrder
        }
      }
    )

    return {
      FALSE,
      SORT_ORDER_ASC,
      SORT_ORDER_DESC,

      colWidths: UNDEFINED,
      sortKey,
      sortOrder,
    }
  },

  computed: {
    renderColumns(): any[] {

      const columns = this.get('columns')
      const result = columns
      .filter(function (item: any) {
        return item.visible !== FALSE
      })
      .map(function (item: any) {
        return Yox.object.copy(item)
      })

      let fixedLeft = 0
      let fixedRight = 0
      let lastFixedLeftCol
      let lastFixedRightCol
      const length = result.length

      for (let i = 0; i < length; i++) {
        const col = result[i]
        if (col.fixed === 'left') {
          lastFixedLeftCol = col
          col.style = {
            left: toPixel(fixedLeft)
          }
          fixedLeft += col.width || 0
        }
        else {
          break
        }
      }
      for (let i = length - 1; i >= 0; i--) {
        const col = result[i]
        if (col.fixed === 'right') {
          lastFixedRightCol = col
          col.style = {
            right: toPixel(fixedRight)
          }
          fixedRight += col.width || 0
        }
        else {
          break
        }
      }

      if (lastFixedLeftCol) {
        lastFixedLeftCol.lastFixed = 'left'
      }
      if (lastFixedRightCol) {
        lastFixedRightCol.lastFixed = 'right'
      }

      return result
    },
    allChecked: {
      deps: ['selection', 'selection.length'],
      get(): boolean {
        const selection = this.get('selection')
        const list = this.get('list')
        return selection && list
          && selection.length > 0
          && selection.length === list.length
      },
      set(checked): void {
        let selection = this.get('selection')
        if (checked) {
          selection = this.get('list').map(
            function (item: any) {
              return item.key
            }
          )
        }
        else {
          selection = []
        }
        this.set('selection', selection)
      }
    },
    scrollWidthStyle(): object | void {
      const scrollWidth = this.get('scroll.x')
      if (scrollWidth > 0) {
        return {
          width: toPixel(scrollWidth)
        }
      }
    },
    scrollHeightStyle(): object | void {
      const scrollHeight = this.get('scroll.y')
      if (scrollHeight > 0) {
        return {
          height: toPixel(scrollHeight)
        }
      }
    },
    inlineStyle(): object[] | void {
      const result: object[] = []

      const customStyle: Record<string, string> = {}

      const width = this.get('width')
      const height = this.get('height')

      if (width) {
        customStyle.width = toPixel(width)
        customStyle.overflowX = 'auto'
      }
      if (height) {
        customStyle.height = toPixel(height)
        customStyle.overflowY = 'auto'
      }

      if (Yox.object.keys(customStyle).length > 0) {
        result.push(customStyle)
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

  watchers: {
    selection(selection) {
      this.fire(
        'change.table',
        {
          selection,
        }
      )
    }
  },

  filters: {
    inArray: Yox.array.has,
  },

  methods: {
    onResize(_, data) {
      this.updateColumnWidths(data.width)
    },
    allCheckedChange(event: CustomEventInterface, data: Data) {
      event.stop()
      this.set('allChecked', data.checked)
    },
    rowCheckedChange(event: CustomEventInterface, data: Data, index: number) {

      event.stop()

      let selection = this.get('selection')
      let key = this.get(`list.${index}.key`)

      if (data.checked) {
        if (!Yox.is.array(selection) || !Yox.array.has(selection, key)) {
          this.append('selection', key)
        }
      }
      else {
        this.remove('selection', key)
      }

    },
    clickButton(button: ButtonConfig, item: Data, index: number) {
      button.onClick(item, index)
    },
    sortColumn(key: string, order: string) {
      this.set({
        sortKey: key,
        sortOrder: order,
      })
      this.fire(
        'sort',
        {
          key,
          order,
        }
      )
    },

    updateColumnWidths(totalWidth: number) {

      let columns = this.get('columns')
      if (!columns || !columns.length) {
        return
      }

      let colIndex = 0
      let colWidths: number[] = [], noWidths: number[] = [], widthSum = 0

      Yox.array.each(
        columns,
        function (col: any) {
          if (col.visible === FALSE) {
            return
          }
          if (col.width > 0) {
            colWidths[colIndex] = col.width
            widthSum += col.width
          }
          else if (col.key === 'selection') {
            colWidths[colIndex] = 50
            widthSum += 50
          }
          else {
            noWidths.push(colIndex)
          }
          colIndex++
        }
      )

      totalWidth -= widthSum

      let noCount = noWidths.length
      if (totalWidth > 0 && noCount) {
        Yox.array.each(
          noWidths,
          function (index) {
            let colWidth = Math.floor(totalWidth / noCount)
            colWidths[index] = colWidth
            totalWidth -= colWidth
            noCount--
          }
        )
      }

      this.set('colWidths', colWidths)

    }

  },

  components: {
    Icon,
    Empty,
    Button,
    Checkbox,
    ResizeObserver,
  }

})
