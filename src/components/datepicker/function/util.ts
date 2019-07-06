import Yox from "yox"
import { DateType } from "../type";

export function normalizeDate(date: Date) {
  return date.setHours(0, 0, 0, 0)
}

export function offsetSecond(date: Date | number, offset: number) {
  let value: number
  if (date instanceof Date) {
    value = date.getTime()
  }
  else {
    value = date
  }
  return new Date(value + offset * 1000)
}

export function offsetMinute(date: Date | number, offset: number) {
  return offsetSecond(date, offset * 60)
}

export function offsetHour(date: Date | number, offset: number) {
  return offsetMinute(date, offset * 60)
}

export function offsetDate(date: Date | number, offset: number) {
  return offsetHour(date, offset * 24)
}

export function offsetMonth(date: Date | number, offset: number) {
  if (date instanceof Date) {
    date = date.getTime()
  }
  date = new Date(date)
  date.setDate(1)
  date.setMonth(date.getMonth() + offset)
  return date
}

export function firstDateInWeek(date: Date | number, firstDay: number) {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  let day = date.getDay()
  day = day >= firstDay ? day : (day + 7)

  return offsetDate(date, -1 * (day - firstDay))
}

export function lastDateInWeek(date: Date | number, firstDay: number) {
  return offsetDate(
    firstDateInWeek(date, firstDay),
    6
  )
}

export function firstDateInMonth(date: Date | number) {
  if (typeof date === 'number') {
    date = new Date(date)
  }
  return offsetDate(
    date,
    1 - date.getDate()
  )
}

export function lastDateInMonth(date: Date | number) {
  return offsetDate(
    firstDateInMonth(
      offsetMonth(date, 1)
    ),
    -1
  )
}

export function isValidDate(date: Date | number) {
  const time = typeof date === 'number'
    ? date
    : date.getTime && date.getTime()

  if (Yox.is.number(time)) {
    return ('' + time).length > 8
  }
  return false
}

export function parseDate(data: DateType) {
  let year: number = data.year
  let month: number = data.month
  let date: number = data.date

  if (year > 1000
    && month >= 1 && month <= 12
    && date >= 1 && date <= 31
  ) {
    return new Date(year, month - 1, date)
  }
}

export function simplifyDate(date: Date) {
  if (!date) {
    date = new Date()
  }
  return {
    year: date.getFullYear(),
    month: date.getMonth() + 1,
    date: date.getDate(),
    day: date.getDay()
  }
}

export function getOffsetTime(date: Date) {
  return date.getTime()
}

export function lpad(num: number, length?: number) {
  if (num == undefined) {
    return ''
  }
  if (length == null) {
    length = 2
  }
  var arr = new Array(
    length - ('' + num).length + 1
  )

  return arr.join('0') + num
}

export function formatList(list: DateType[]) {
  let result = []
  let arr = []
  for (let i = 0; i < list.length; i++) {
    arr.push(list[ i ])
    if (i % 7 == 6) {
      result.push(arr)
      arr = []
    }
  }
  return result
}