import Yox, { Data, CustomEventInterface } from 'yox'

import Empty from '../empty/Empty'
import Button from '../button/Button'
import Checkbox from '../checkbox/Checkbox'

import template from './template/Table.hbs'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_ARRAY,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

interface ButtonConfig {
  type: string | void,
  text: string | void,
  size: string | void,
  shape: string | void,
  onClick: (item: Data, index: number) => void
}

export default Yox.define({

  template,

  name: '${prefix}table',

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
      value: FALSE,
    },
    simple: {
      type: RAW_BOOLEAN,
      value: FALSE,
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
      type: RAW_STRING,
    }
  },

  data() {
    return {
      colWidths: UNDEFINED,
    }
  },

  computed: {
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
    }
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

    updateColWidths() {

      let el = this.$el
      if (!el) {
        return
      }

      let totalWidth = el.clientWidth
      if (!totalWidth) {
        return
      }

      let columns = this.get('columns')
      if (!columns || !columns.length) {
        return
      }

      let colWidths: number[] = [], noWidths: number[] = [], widthSum = 0

      Yox.array.each(
        columns,
        function (col: any, index) {
          if (col.width > 0) {
            colWidths[index] = col.width
            widthSum += col.width
          }
          else if (col.key === 'selection') {
            colWidths[index] = 50
            widthSum += 50
          }
          else {
            noWidths.push(index)
          }
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
    Empty,
    Button,
    Checkbox,
  },

  afterMount() {
    this.updateColWidths()
  }

})
