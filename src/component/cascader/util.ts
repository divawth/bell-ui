import Yox from 'yox'
import { FALSE } from '../constant'

export function isLeafOption(option: any) {
  return !option.children && option.isLeaf !== FALSE
}

export function getSelectedOptions(options: any[], value: any[]) {

  const result: any[] = []

  let index = 0

  const next = function (options: any[]) {
    Yox.array.each(
      options,
      function (item) {
        if (value[index] == item.value) {
          result.push(item)
          if (item.children) {
            index++
            next(item.children)
          }
        }
      }
    )
  }

  next(options)

  return result

}