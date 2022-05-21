import Yox from 'yox'

import { FALSE, RAW_SLOT_CHILDREN } from '../constant'

export function isOptionSelected(values: any, value: any) {
  return Yox.is.array(values)
    ? Yox.array.has(values, value, FALSE)
    : values == value
}

export function getOptionsByChildren(instance: any, children: any[]) {

  const result: any[] = []

  const next = function (children) {
    children.forEach(
      function (vnode) {
        const { tag, props, slots } = vnode
        if (tag === 'Option' && props) {
          const { text, value } = props
          result.push({
            text,
            value,
          })
        }
        else if (tag === 'OptionGroup' && slots && slots[RAW_SLOT_CHILDREN]) {
          const children = slots[RAW_SLOT_CHILDREN](instance)
          if (children) {
            next(children)
          }
        }
      }
    )
  }

  next(children)

  return result

}