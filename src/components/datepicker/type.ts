export interface DateType {
  date: number,
  day: number,
  month: number,
  year: number,
  isCurrentMonth?: boolean,
  isLastMonth?: boolean,
  isPrevMonth?: boolean,
  isCheckedDate?: boolean,
  isRangeDate?: boolean,
  isCurrentDate?: boolean,
  disabled?: boolean,
}

export interface DateRangeType {
  start: DateType,
  end: DateType,
}

export interface ShortcutType {
  text: string,
  value: () => Date | Date[],
  onClick: () => void,
}