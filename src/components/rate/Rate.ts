import Yox, { CustomEventInterface } from 'yox'

import template from './template/Rate.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_ARRAY,
} from '../constant'

export default Yox.define({
  propTypes: {
    count: {
      type: RAW_NUMERIC,
      value: 5
    },
    value: {
      type: RAW_NUMERIC
    },
    half: {
      type: RAW_BOOLEAN
    },
    readOnly: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    showTexts: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    texts: {
      type: RAW_ARRAY
    },
    type: {
      type: RAW_STRING,
      value: 'warning'
    },
    icon: {
      type: RAW_STRING,
      value: 'star'
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      hoverValue: -1
    }
  },

  computed: {
    activeValue() {
      return this.get('hoverValue') < 0 ? this.get('value') : this.get('hoverValue')
    }
  },

  filters: {
    getValue(index: number) {
      let texts = this.get('texts')
      return texts && texts[ index - 1 ]
    }
  },

  methods: {
    handleMove(event: CustomEventInterface, index: number) {
      if (this.get('readOnly')) {
        return
      }

      let mouseEvent = (event.originalEvent as CustomEventInterface).originalEvent as MouseEvent
      let isHalf = mouseEvent && (mouseEvent.target as HTMLElement).getAttribute('data-type') == 'half'

      if (isHalf) {
        index -= 0.5
      }

      this.set({
        hoverValue: index
      })
    },

    handleLeave() {
      if (this.get('readOnly')) {
        return
      }

      this.set({
        hoverValue: this.get('value') >= 0 ? this.get('value') : -1
      })
    },

    handleClick(event: CustomEventInterface, index: number) {
      if (this.get('readOnly')) {
        return
      }

      let clickEvent = (event.originalEvent as CustomEventInterface).originalEvent as MouseEvent
      let isHalf = clickEvent && (clickEvent.target as HTMLElement).getAttribute('data-type') == 'half'
      if (isHalf) {
        index -= 0.5
      }

      this.set({
        value: index
      })
      this.fire(
        'change',
        {
          value: index
        }
      )
    }
  }
})
