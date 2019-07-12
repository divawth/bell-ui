import Yox, { Data } from 'yox'

import template from './template/SmallTable.hbs'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_ARRAY,
  NULL,
  UNDEFINED
} from '../constant'

interface Row {
  text: string,
  size: string,
  action: (item: Data, index: number) => void
}

export default Yox.define({
  propTypes: {
    list: {
      type: RAW_ARRAY
    },
    columns: {
      type: RAW_ARRAY,
      required: TRUE
    },
    stripe: {
      type: RAW_BOOLEAN
    },
    border: {
      type: RAW_BOOLEAN
    },
    setRowClassName: {
      type: RAW_FUNCTION
    },
    height: {
      type: RAW_STRING
    },
    width: {
      type: RAW_STRING
    },
    header: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    fixed: {
      type: RAW_BOOLEAN
    },
    highlightRow: {
      type: RAW_BOOLEAN
    },
    setIndex: {
      type: RAW_FUNCTION
    },
    selection: {
      type: RAW_BOOLEAN
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
      colWidths: [],
      currentItem: NULL,
      UNDEFINED
    }
  },

  filters: {
    isObject(value) {
      return Yox.is.object(value)
    }
  },

  computed: {
    checkAll(): boolean {
      return this.get('list').filter(function(item) {
        return item.checked
      }).length === this.get('list.length')
    }
  },

  events: {
    'clearCurrentRow.table': function () {
      this.clearCurrentRow()
    },
    'selectAll.table': function () {
      this.selectAll()
    }
  },

  methods: {
    checkedChange(data: Data, index: number) {
      this.setChecked(data.isChecked, TRUE, index)
      data.index = index
      this.fire('select', data)
    },
    checkedAllChange(_: any, data: Data) {
      this.setChecked(data.isChecked, TRUE)
      this.fire('selectAll', data)
    },
    selectAll() {
      this.checkedAllChange(NULL, {
        isChecked: TRUE
      })
    },
    clearCurrentRow() {
      this.set({
        currentItem: NULL
      })
    },
    click(row: Row, item: Data, index: number) {
      row.action(item, index)
    },

    rowClick(item: Data, index: number) {
      if (!this.get('highlightRow') || this.get('header')) {
        return
      }
      this.fire('rowChange.table', {
        index: index,
        current: item,
        oldCurrent: this.get('currentItem')
      })
      this.set({
        currentIndex: index,
        currentItem: item
      })
    },

    setChecked(value: boolean, force: boolean, index?: number) {
      let list = this.copy(this.get('list'))
      list = list.map(function(item: Data, key: number) {
        if (force && index == NULL) {
          item.checked = value
        }
        else if (index != NULL) {
          if (key === index) {
            item.checked = value
          }
        }
        else {
          item.checked = item.checked != NULL ? item.checked : value
        }
        return item
      })

      this.fire('selectChange.table', list)
      this.set({ list })
    }
  },

  afterMount() {
    let me = this
    if (!me.get('columns').length) {
      return
    }

    if (me.get('selection')) {
      me.setChecked(FALSE, TRUE)
    }
    let colWidths = []
    me.get('columns').forEach(function(item: Data) {
      let colWidth = me.$el.clientWidth / 3
      if (item.width) {
        colWidth = item.width
      }
      colWidths.push(colWidth)
    })
    me.set({ colWidths })
  }
})
