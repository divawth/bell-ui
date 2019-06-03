import template from './template/Rate.html'
import { RAW_STRING, RAW_BOOLEAN, FALSE, RAW_NUMERIC, RAW_ARRAY } from '../constant'

export default {
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
    getValue(index) {
      let texts = this.get('texts')
      return texts && texts[ index - 1 ] 
    }
  },

  methods: {
    handleMove(event, index) {
      if (this.get('readOnly')) {
        return
      }

      event = event.originalEvent.originalEvent
      let isHalf = event && event.target.getAttribute('data-type') == 'half'

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

    handleClick(event, index) {
      if (this.get('readOnly')) {
        return
      }

      event = event.originalEvent.originalEvent

      let isHalf = event && event.target.getAttribute('data-type') == 'half'
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
}