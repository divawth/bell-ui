import Yox from 'yox'

import Button from '../button/Button'
import ResizeObserver from '../resize-observer/ResizeObserver'
import template from './template/TimePanel.hbs'

import {
  TRUE,
  RAW_ARRAY,
  RAW_STRING,
  RAW_NUMBER,
  RAW_STYLE_TYPE,
  RAW_BOOLEAN,
} from '../constant'

import {
  getNowTime,
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
    hourIndex() {
      this.scrollHourIntoView(TRUE)
    },
    minuteIndex() {
      this.scrollMinuteIntoView(TRUE)
    },
    secondIndex() {
      this.scrollSecondIntoView(TRUE)
    },
  },

  events: {
    resize: {
      listener(event, data) {
        if (event.phase !== Yox.Event.PHASE_UPWARD) {
          return
        }
        event.stop()
        if (data.height > 0) {
          this.scrollHourIntoView()
          this.scrollMinuteIntoView()
          this.scrollSecondIntoView()
        }
      },
      ns: 'resizeObserver'
    }
  },

  filters: {
    padStart,
  },

  methods: {
    scrollHourIntoView(animated?: boolean) {
      const hourIndex = this.get('hourIndex')
      if (hourIndex >= 0) {
        scrollTimeItemInToView(
          this.$refs.hourList as HTMLElement,
          hourIndex,
          animated
        )
      }
    },
    scrollMinuteIntoView(animated?: boolean) {
      const minuteIndex = this.get('minuteIndex')
      if (minuteIndex >= 0) {
        scrollTimeItemInToView(
          this.$refs.minuteList as HTMLElement,
          minuteIndex,
          animated
        )
      }
    },
    scrollSecondIntoView(animated?: boolean) {
      const secondIndex = this.get('secondIndex')
      if (secondIndex >= 0) {
        scrollTimeItemInToView(
          this.$refs.secondList as HTMLElement,
          secondIndex,
          animated
        )
      }
    },
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
    handleNowClick() {

      const date = new Date(getNowTime())

      const hour = date.getHours()
      let hourIndex = -1

      const hourList = this.get('hourList')
      if (hourList) {
        hourIndex = hourList.indexOf(hour)
      }

      const minute = date.getMinutes()
      let minuteIndex = -1

      const minuteList = this.get('minuteList')
      if (minuteList) {
        minuteIndex = minuteList.indexOf(minute)
      }

      const second = date.getMinutes()
      let secondIndex = -1

      const secondList = this.get('secondList')
      if (this.get('showSecond') && secondList) {
        secondIndex = secondList.indexOf(second)
      }

      this.fireChange(hourIndex, minuteIndex, secondIndex)

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
    },
  },

  components: {
    Button,
    ResizeObserver,
  },

})
