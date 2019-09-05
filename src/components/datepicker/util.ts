import { toString } from '../util'

export const WEEKS = ['日', '一', '二', '三', '四', '五', '六']

export const SECOND = 1000
export const MINUTE = 60 * SECOND
export const HOUR = 60 * MINUTE
export const DAY = 24 * HOUR

export const STABLE_DURATION = 41 * DAY
export const MONTHS = [
  '一月', '二月', '三月', '四月', '五月',
  '六月', '七月', '八月', '九月', '十月',
  '十一月', '十二月'
]

export const RAW_TYPE_DATE = 'date'
export const RAW_TYPE_DATE_RANGE = 'dateRange'
export const RAW_TYPE_WEEK = 'week'
export const RAW_TYPE_YEAR = 'year'
export const RAW_TYPE_MONTH = 'month'

export interface SimpleMonth {
  timestamp: number,
  year: number,
  month: number,
  text: string,
}

export interface SimpleDate {
  timestamp: number,
  year: number,
  month: number,
  date: number,
}

export interface SimpleRange {
  start: SimpleDate,
  end: SimpleDate,
}

export interface DateRow {
  start: SimpleDate,
  end: SimpleDate,
  list: SimpleDate[],
}

export interface Shortcut {
  text: string,
  onClick: () => Date | Date[],
}

export function toSimpleDate(timestamp: number): SimpleDate {
  const result = new Date(timestamp)
  return {
    year: result.getFullYear(),
    month: result.getMonth() + 1,
    date: result.getDate(),
    timestamp: result.getTime(),
  }
}

export function toDate(date: Date | number | void) {
  if (date instanceof Date) {
    return date
  }
  if (date) {
    return new Date(date)
  }
}

export function toTimestamp(date: Date | number | void) {
  let timestamp = 0
  if (date instanceof Date) {
    timestamp = date.getTime()
  }
  else if (date) {
    timestamp = date
  }
  const result = timestamp ? new Date(timestamp) : new Date()
  result.setHours(0, 0, 0, 0)
  return result.getTime()
}

export function offsetMonth(timestamp: number, offset: number) {

  const date = new Date(timestamp)

  date.setDate(1)
  date.setMonth(date.getMonth() + offset)

  return date.getTime()

}

function firstDateInWeek(date: Date) {
  const day = date.getDay()
  return new Date(date.getTime() - day * DAY)
}

function lastDateInWeek(date: Date) {
  const day = date.getDay()
  return new Date(date.getTime() - (6 - day) * DAY)
}

function firstDateInMonth(date: Date) {
  date.setDate(1)
  return date
}

function lastDateInMonth(date: Date) {
  date.setDate(1)
  date.setMonth(date.getMonth() + 1)
  return new Date(date.getTime() - DAY)
}

export function createYearViewDatasource(startYear: number, count: number) {
  let result: number[][] = [], list: number[] = []
  for (let i = 0; i < count; i++) {
    list.push(i + startYear)
    if (i % 4 === 3) {
      result.push(list)
      list = []
    }
  }
  return result
}

export function createMonthViewDatasource(year: number) {

  let result: SimpleMonth[][] = [], list: SimpleMonth[] = [], date = new Date()

  date.setFullYear(year)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)

  for (let i = 0, len = MONTHS.length; i < len; i++) {

    date.setMonth(i)

    list.push({
      timestamp: date.getTime(),
      year,
      month: i + 1,
      text: MONTHS[i],
    })
    if (i % 4 === 3) {
      result.push(list)
      list = []
    }
  }
  return result
}

export function createDateViewDatasource(timestamp: number) {

  let startDate = firstDateInWeek(firstDateInMonth(new Date(timestamp))).getTime()
  let endDate = lastDateInWeek(lastDateInMonth(new Date(timestamp))).getTime()

  let duration = endDate - startDate
  let offset = STABLE_DURATION - duration

  if (offset > 0) {
    endDate += offset
  }

  let result: DateRow[] = [], list: SimpleDate[] = []
  for (let i = 0, time = startDate; time <= endDate; i++, time += DAY) {

    list.push(toSimpleDate(time))

    if (i % 7 === 6) {
      result.push({
        start: list[0],
        end: list[list.length - 1],
        list: list,
      })
      list = []
    }

  }

  return result
}

function lpad(value: number): string {
  return value < 10
    ? '0' + value
    : '' + value
}

/**
 * yyyy -> 2019
 * M    -> 1
 * MM   -> 01
 * d    -> 1
 * dd   -> 01
 */
export function formatDate(date: Date, format: string) {
  return format
    .replace(/yyyy/i, toString(date.getFullYear()))
    .replace(/MM/i, lpad(date.getMonth() + 1))
    .replace(/M/i, toString(date.getMonth()))
    .replace(/dd/i, lpad(date.getDate()))
    .replace(/d/i, toString(date.getDate()))
}
