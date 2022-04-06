import {
  padStart,
  scrollTo,
} from '../util'

export function toTimeProps(value: Date | number | void, hourList: number[], minuteList: number[], secondList: number[]) {

  const result = {
    hour: -1,
    minute: -1,
    second: -1,
    hourIndex: -1,
    minuteIndex: -1,
    secondIndex: -1,
    text: '',
  }

  let date: Date

  if (value instanceof Date) {
    date = value
  }
  else if (typeof value === 'number' && value > 0) {
    date = new Date(value)
  }

  if (date) {
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()

    const hourIndex = hourList.indexOf(hour)
    const minuteIndex = minuteList.indexOf(minute)
    const secondIndex = secondList.indexOf(second)

    if (hourIndex >= 0) {
      result.hour = hour
      result.hourIndex = hourIndex
    }
    if (minuteIndex >= 0) {
      result.minute = minute
      result.minuteIndex = minuteIndex
    }
    if (secondIndex >= 0) {
      result.second = second
      result.secondIndex = secondIndex
    }

    result.text = formatTime(
      result.hour,
      result.minute,
      secondList.length > 0 ? result.second : -1
    )
  }

  return result

}

export function formatTime(hour: number, minute: number, second: number) {

  const list: string[] = []

  if (hour >= 0) {
    list.push(
      padStart(hour)
    )
  }
  if (minute >= 0) {
    list.push(
      padStart(minute)
    )
  }
  if (second >= 0) {
    list.push(
      padStart(second)
    )
  }

  return list.join(':')

}

export function createRangeList(start: number, end: number, step: number) {
  const list: number[] = []
  for (let i = start; i <= end; i += step) {
    list.push(i)
  }
  return list
}

export function getValidTimeItemIndex(listLength: number, index: number) {
  return index >= 0 && index < listLength
    ? index
    : -1
}

export function scrollTimeItemInToView(listElement: HTMLElement, index: number, animated?: boolean) {

  const itemElement = listElement.children[index]
  if (!itemElement) {
    return
  }

  scrollTo(
    listElement,
    listElement.scrollTop,
    (itemElement as HTMLElement).offsetHeight * index,
    animated ? 600 : 0
  )

}