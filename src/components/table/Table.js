import template from './template/Table.html'
import { RAW_STRING, RAW_BOOLEAN, RAW_FUNCTION, RAW_ARRAY, TRUE } from '../constant'

export default {
  propTypes: {
    list: {
      type: RAW_ARRAY
    },
    columns: {
      type: RAW_ARRAY,
      value: function () {
        return []
      }
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
      fixedLeftList: [],
      fixedRightList: []
    }
  },

  methods: {
    click(item, data, index) {
      item.action(data, index)
    },
    clearCurrentRow() {
      this.fire(
        'clearCurrentRow.table',
        TRUE
      )
    },
    selectAll() {
      this.fire(
        'selectAll.table',
        TRUE
      )
    }
  },

  afterMount() {
    if (!this.get('columns').length) {
      return
    }
    let fixedLeftList = []
    let fixedRightList = []
    let columns = this.copy(this.get('columns'))
    columns.forEach(item => {
      let fixed = item.fixed
      switch(fixed) {
        case 'left': 
          item.fixed = null
          fixedLeftList.push(item)
          break
        case 'right': 
          item.fixed = null
          fixedRightList.push(item)
          break
      }
    })
    this.set({
      fixedLeftList,
      fixedRightList
    })
  }
}