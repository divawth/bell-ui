import template from './template/SmallTable.html'
import { RAW_STRING, RAW_BOOLEAN, RAW_FUNCTION, RAW_ARRAY, TRUE, NULL } from '../constant'

export default {
  propTypes: {
    list: {
      type: RAW_ARRAY
    },
    columns: {
      type: RAW_ARRAY,
      require: TRUE
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
      default: false
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
      currentItem: null,
      isObject(data) {
        return Object.prototype.toString.call(data).toLocaleLowerCase().substr(8, 6) === 'object'
      }
    }
  },

  computed: {
    checkAll () {
      return this.get('list').filter(function(item) {
        return item.checked
      }).length === this.get('list').length
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
    checkedChange(data, index) {
      this.setChecked(data.isChecked, TRUE, index)
      data.index = index
      this.fire('select', data)
    },
    checkedAllChange(_, data) {
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
        'currentItem': null
      })
    },
    click(item, data, index) {
      item.action(data, index)
    },
    rowClick(data, index) {
      if (!this.get('highlightRow') || this.get('header')) {
        return
      }
      data.index = index
      this.fire('currentChange', {
        current: data,
        oldCurrent: this.get('currentItem')
      })
      this.set({
        'currentItem': data
      })
    },

    setChecked(value, force, index) {
      let list = this.copy(this.get('list'))
      list = list.map(function(item, key) {
        if (force && index == null) {
          item.checked = value
        }
        else if (index != null) {
          if (key === index) {
            item.checked = value
          }
        }
        else {
          item.checked = item.checked != null ? item.checked : value
        }
        return item
      })

      this.fire('selectChange', list)
      this.set({ list })
    }
  },

  afterMount: function () {
    let me = this
    if (!me.get('columns').length) {
      return
    }

    if (me.get('selection')) {
      me.setChecked()
    }
    let colWidths = []
    me.get('columns').forEach(function(item) {
      let colWidth = me.$el.clientWidth / 3
      if (item.width) {
        colWidth = item.width
      }
      colWidths.push(colWidth)
    })
    me.set({ colWidths })
  }
}