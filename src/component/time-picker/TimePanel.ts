import Yox from 'yox'

import Button from '../button/Button'
import template from './template/TimePanel.hbs'

import {
  TRUE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  padStart,
} from '../util'

import {
  getValidTimeItemIndex,
  scrollTimeItemInToView,
} from './util'

export default Yox.define({

  template,

  propTypes: {
    hourList: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    hourIndex: {
      type: RAW_NUMBER,
    },
    minuteList: {
      type: RAW_ARRAY,
      required: TRUE,
    },
    minuteIndex: {
      type: RAW_NUMBER,
    },
    secondList: {
      type: RAW_ARRAY,
    },
    secondIndex: {
      type: RAW_NUMBER,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    showSecond(): boolean {
      return this.get('secondList.length') > 0
    },
    validHourIndex(): number {
      return getValidTimeItemIndex(
        this.get('hourList.length'),
        this.get('hourIndex')
      )
    },
    validMinuteIndex(): number {
      return getValidTimeItemIndex(
        this.get('minuteList.length'),
        this.get('minuteIndex')
      )
    },
    validSecondIndex(): number {
      return getValidTimeItemIndex(
        this.get('secondList.length'),
        this.get('secondIndex')
      )
    },
    hasValue(): boolean {
      return this.get('validHourIndex') >= 0
        && this.get('validMinuteIndex') >= 0
        && (!this.get('showSecond') || this.get('validSecondIndex') >= 0)
    },
  },

  watchers: {
    hourIndex(newValue) {
      scrollTimeItemInToView(
        this.$refs.hourList as HTMLElement,
        newValue
      )
    },
    minuteIndex(newValue) {
      scrollTimeItemInToView(
        this.$refs.minuteList as HTMLElement,
        newValue
      )
    },
    secondIndex(newValue) {
      scrollTimeItemInToView(
        this.$refs.secondList as HTMLElement,
        newValue
      )
    },
  },

  filters: {
    padStart,
  },

  methods: {
    handleHourClick(hourIndex: number) {

      let minuteIndex = this.get('validMinuteIndex')
      if (minuteIndex < 0) {
        minuteIndex = 0
      }

      let secondIndex = this.get('validSecondIndex')
      if (this.get('showSecond') && secondIndex < 0) {
        secondIndex = 0
      }

      this.fireChange(hourIndex, minuteIndex, secondIndex)

    },
    handleMinuteClick(minuteIndex: number) {

      let hourIndex = this.get('validHourIndex')
      if (hourIndex < 0) {
        hourIndex = 0
      }

      let secondIndex = this.get('validSecondIndex')
      if (this.get('showSecond') && secondIndex < 0) {
        secondIndex = 0
      }

      this.fireChange(hourIndex, minuteIndex, secondIndex)

    },
    handleSecondClick(secondIndex: number) {

      let hourIndex = this.get('validHourIndex')
      if (hourIndex < 0) {
        hourIndex = 0
      }

      let minuteIndex = this.get('validMinuteIndex')
      if (minuteIndex < 0) {
        minuteIndex = 0
      }

      this.fireChange(hourIndex, minuteIndex, secondIndex)

    },
    handleSubmitClick() {

      let hour = -1
      let minute = -1
      let second = -1

      const hourIndex = this.get('validHourIndex')
      if (hourIndex >= 0) {
        hour = this.get('hourList')[hourIndex]
      }

      const minuteIndex = this.get('validMinuteIndex')
      if (minuteIndex >= 0) {
        minute = this.get('minuteList')[minuteIndex]
      }

      const secondIndex = this.get('validSecondIndex')
      if (this.get('showSecond') && secondIndex >= 0) {
        second = this.get('secondList')[secondIndex]
      }

      this.fire(
        {
          type: 'submit',
          ns: 'timePanel',
        },
        {
          hour,
          minute,
          second,
        }
      )


    },
    fireChange(hourIndex: number, minuteIndex: number, secondIndex: number) {
      this.fire(
        {
          type: 'change',
          ns: 'timePanel',
        },
        {
          hourIndex,
          minuteIndex,
          secondIndex,
        }
      )
    }
  },

  components: {
    Button,
  },

})
