import template from './template/Option.html'
import { RAW_STRING, RAW_NUMERIC } from '../constant'

export default {
  propTypes: {
    value: {
      type: [ RAW_STRING, RAW_NUMERIC ]
    },
    text: {
      type: [ RAW_STRING, RAW_NUMERIC ]
    },
    index: {
      type: [ RAW_STRING, RAW_NUMERIC ],
      require: true
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,
  events: {
    optionHoveredChange(_, data) {
      let me = this
      let isHover = data.index == me.get('index')
      me.set({
        isHover: isHover
      })
      if (isHover && !me.get('isSelected')) {
        me.set({
          isSelected: data.selected
        })
      }
    },

    optionSelectedChange(_, data) {
      let value = this.get('value')
      let values = data.value

      let isSelected = Yox.is.array(values) ? values.indexOf(value) >= 0 : values == value
      this.set({
        isSelected: isSelected
      })
      
      if (isSelected) {
        this.fire('selectedOptionChange')
      }
    }
  },

  data() {
    return {
      isSelected: false,
      isHover: false
    }
  },

  methods: {
    click() {
      this.fire(
        'optionSelect'
      )
    }
  },

  afterMount() {
    this.fire(
      'optionAdd',
      {
        value: this.get('value'),
        text: this.get('text'),
        index: this.get('index')
      }
    )
  },

  beforeDestroy() {
    this.fire(
      'optionRemove'
    )
  }

}