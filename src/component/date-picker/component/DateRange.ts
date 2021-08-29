import Yox from 'yox'

import Icon from '../../icon/Icon'
import template from '../template/DateRange.hbs'

import {
  WEEKS,
  DateRow,
  SimpleDate,
  offsetMonth,
  toSimpleDate,
  toTimestamp,
  createDateViewDatasource,
} from '../util'

import {
  TRUE,
  FALSE,
  UNDEFINED,
  RAW_DATE,
  RAW_STRING,
  RAW_NUMBER,
  RAW_FUNCTION,
  RAW_BOOLEAN,
} from '../../constant'

function getEndTimestamp(startTimestamp: number, endTimestamp: number) {

  const startDate = new Date(startTimestamp)
  const endDate = new Date(endTimestamp)

  startDate.setDate(1)
  endDate.setDate(1)

  if (endDate.getTime() > startDate.getTime()) {
    return endDate.getTime()
  }

  return offsetMonth(endTimestamp, 1)

}

export default Yox.define({

  template,

  propTypes: {
    splitPanel: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    defaultStartDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    checkedStartDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    defaultEndDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    checkedEndDate: {
      type: [RAW_DATE, RAW_NUMBER],
    },
    disabledDate: {
      type: RAW_FUNCTION,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data(options) {

    const props = options.props || {}

    const startTimestamp = toTimestamp(props.defaultStartDate || props.checkedStartDate)
    const endTimestamp = toTimestamp(props.defaultEndDate || props.checkedEndDate || startTimestamp)

    return {
      weeks: WEEKS,

      startTimestamp,
      endTimestamp: getEndTimestamp(startTimestamp, endTimestamp),

      // 点击后钉住的日期
      pinDate: UNDEFINED,
      // 当 pinDate 存在时，tempDate 是 hover 时临时选中的开始或结束日期
      tempDate: UNDEFINED,
    }

  },

  computed: {
    startDate(): SimpleDate {
      return toSimpleDate(this.get('startTimestamp'))
    },
    endDate(): SimpleDate {
      return toSimpleDate(this.get('endTimestamp'))
    },
    startDatasource(): DateRow[] {
      return createDateViewDatasource(this.get('startTimestamp'))
    },
    endDatasource(): DateRow[] {
      return createDateViewDatasource(this.get('endTimestamp'))
    },
    checkedStartTimestamp(): number {
      const checkedStartDate = this.get('checkedStartDate')
      return checkedStartDate
        ? toTimestamp(checkedStartDate)
        : 0
    },
    checkedEndTimestamp(): number {
      const checkedEndDate = this.get('checkedEndDate')
      return checkedEndDate
        ? toTimestamp(checkedEndDate)
        : 0
    },
    computedCheckedStartTimestamp(): number {
      const pinDate = this.get('pinDate')
      if (!pinDate) {
        return this.get('checkedStartTimestamp')
      }
      const tempDate = this.get('tempDate')
      return tempDate
        ? Math.min(pinDate.timestamp, tempDate.timestamp)
        : pinDate.timestamp
    },
    computedCheckedEndTimestamp(): number {
      const pinDate = this.get('pinDate')
      if (!pinDate) {
        return this.get('checkedEndTimestamp')
      }
      const tempDate = this.get('tempDate')
      return tempDate
        ? Math.max(pinDate.timestamp, tempDate.timestamp)
        : 0
    },
  },

  watchers: {
    checkedStartDate(value) {
      if (value) {
        this.set('startTimestamp', toTimestamp(value))
      }
    },
    checkedEndDate(value) {
      const startTimestamp = this.get('startTimestamp')
      if (startTimestamp && value) {
        this.set(
          'endTimestamp',
          getEndTimestamp(startTimestamp, toTimestamp(value))
        )
      }
    }
  },

  filters: {
    isCurrentMonth(item: SimpleDate, base: SimpleDate) {
      return base.year === item.year && base.month === item.month
    },

    isEnabled(item: SimpleDate) {
      const disabledDate = this.get('disabledDate')
      return disabledDate
        ? disabledDate(item)
        : TRUE
    },
  },

  methods: {
    offsetStart(offset: number) {
      this.set(
        'startTimestamp',
        offsetMonth(
          this.get('startTimestamp'),
          offset
        )
      )
      if (!this.get('splitPanel')) {
        this.set(
          'endTimestamp',
          offsetMonth(
            this.get('endTimestamp'),
            offset
          )
        )
      }
    },
    offsetEnd(offset: number) {
      this.set(
        'endTimestamp',
        offsetMonth(
          this.get('endTimestamp'),
          offset
        )
      )
      if (!this.get('splitPanel')) {
        this.set(
          'startTimestamp',
          offsetMonth(
            this.get('startTimestamp'),
            offset
          )
        )
      }
    },
    hover(item: SimpleDate) {
      const pinDate = this.get('pinDate')
      if (pinDate) {
        this.set('tempDate', pinDate.timestamp !== item.timestamp ? item : UNDEFINED)
      }
    },
    leave() {
      this.set('tempDate', UNDEFINED)
    },
    click(item: SimpleDate) {

      const me = this
      const pinDate = me.get('pinDate')
      if (!pinDate) {
        me.set('pinDate', item)
        return
      }

      if (pinDate.timestamp === item.timestamp) {
        return
      }

      if (item.timestamp > pinDate.timestamp) {
        me.fire(
          {
            type: 'change',
            ns: 'range',
          },
          {
            start: pinDate,
            end: item,
          }
        )
      }
      else {
        me.fire(
          {
            type: 'change',
            ns: 'range',
          },
          {
            start: item,
            end: pinDate,
          }
        )
      }

      // 等外部更新完 start 和 end 再重置，避免闪烁
      me.nextTick(
        function () {
          me.set({
            pinDate: UNDEFINED,
            tempDate: UNDEFINED,
          })
        }
      )

    },

  },

  components: {
    Icon,
  }

})
