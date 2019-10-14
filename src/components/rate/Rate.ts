import Yox, { CustomEventInterface } from 'yox'

import Icon from '../icon/Icon'
import template from './template/Rate.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ARRAY,
  RAW_TYPE_WARNING,
  RAW_TYPE_ARRAY,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}rate',

  propTypes: {
    count: {
      type: RAW_NUMERIC,
      value: 5,
    },
    value: {
      type: RAW_NUMERIC,
      value: 0,
    },
    half: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    readOnly: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    texts: {
      type: RAW_ARRAY,
    },
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_WARNING,
    },
    iconName: {
      type: RAW_STRING,
      value: 'star-fill',
    },
    iconSize: {
      type: RAW_NUMERIC,
      value: 18,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    return {
      hoverValue: -1,
    }
  },

  computed: {
    activeValue(): number {
      const hoverValue = this.get('hoverValue')
      return hoverValue < 0
        ? this.get('value')
        : hoverValue
    }
  },

  methods: {
    handleMove(event: CustomEventInterface, value: number) {

      const mouseEvent = event.originalEvent as MouseEvent
      if (this.hoverOnHalfIcon(mouseEvent.target as HTMLElement)) {
        value -= 0.5
      }

      this.set({
        hoverValue: value
      })
    },

    handleLeave() {
      const value = this.get('value')
      this.set({
        hoverValue: value >= 0 ? value : -1
      })
    },

    handleClick(event: CustomEventInterface, value: number) {

      const clickEvent = event.originalEvent as MouseEvent
      if (this.hoverOnHalfIcon(clickEvent.target as HTMLElement)) {
        value -= 0.5
      }

      this.set('value', value)

      this.fire(
        'change.rate',
        {
          value
        }
      )
    },

    hoverOnHalfIcon(element: HTMLElement) {
      return Yox.string.has(element.className, 'half')
    }
  },

  components: {
    Icon,
  }

})
