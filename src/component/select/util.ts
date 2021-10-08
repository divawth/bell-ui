import Yox from 'yox'

import { FALSE } from '../constant'

export function isOptionSelected(values: any[] | any, value: any) {
  return Yox.is.array(values)
    ? Yox.array.has(values, value, FALSE)
    : values == value
}