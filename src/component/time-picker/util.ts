import {
  leftPad,
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
    result.hour = date.getHours()
    result.minute = date.getMinutes()
    result.second = date.getSeconds()

    result.hourIndex = hourList.indexOf(result.hour)
    result.minuteIndex = minuteList.indexOf(result.minute)
    result.secondIndex = secondList.indexOf(result.second)

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
      leftPad(hour)
    )
  }
  if (minute >= 0) {
    list.push(
      leftPad(minute)
    )
  }
  if (second >= 0) {
    list.push(
      leftPad(second)
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

export function scrollTimeItemInToView(listElement: HTMLElement, index: number) {

  const itemElement = listElement.children[index]
  if (!itemElement) {
    return
  }

  scrollTo(
    listElement,
    listElement.scrollTop,
    (itemElement as HTMLElement).offsetHeight * index,
    600
  )

}