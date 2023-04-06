import { VNode, YoxInterface } from 'yox'
import { UNDEFINED, RAW_SLOT_PREFIX, RAW_SLOT_CHILDREN } from '../constant'
import { toNumber } from '../util'

type DescriptionItem = {
  label: string
  name: string
  span: number
  highlight: boolean
}

export function addSlots2Props(instance: YoxInterface, children: VNode[], props: Record<string, any>, column: number) {

  let cells: DescriptionItem[][] = []
  let columnArray: DescriptionItem[] | void
  let columnItem: DescriptionItem | void
  let columnSpanSum = 0
  let index = 0

  children.forEach(
    function (vnode: any) {
      if (vnode.tag === 'DescriptionItem') {

        const { label, span, highlight } = vnode.props
        const name = 'cell' + index++

        if (!columnArray) {
          columnArray = []
          cells.push(columnArray)
        }

        let spanCount = toNumber(span, 1)
        if (spanCount > column - columnSpanSum) {
          spanCount = column - columnSpanSum
        }

        columnItem = {
          label,
          name,
          span: spanCount,
          highlight,
        }

        columnArray.push(columnItem)
        props[RAW_SLOT_PREFIX + name] = vnode.slots[RAW_SLOT_CHILDREN](instance)

        columnSpanSum += columnItem.span

        if (columnSpanSum >= column) {
          columnArray = columnItem = UNDEFINED
          columnSpanSum = 0
        }

      }
    }
  )

  if (columnItem && columnArray) {
    columnItem.span = column - columnArray.length + 1
  }

  props.cells = cells

}
