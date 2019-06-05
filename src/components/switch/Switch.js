
import template from './template/Switch.html'
import { RAW_STRING, RAW_BOOLEAN } from '../constant'

export default {
  model: 'checked',

  propTypes: {
    type: {
      type: RAW_STRING
    },
    size: {
      type: RAW_STRING
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    checked: {
      type: RAW_BOOLEAN
    },
    loading: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template,

  model: 'checked',

  methods: {
    click() {
      if (this.get('disabled')
        || this.get('loading')
      ) {
        return
      }
      this.toggle('checked')
      this.fire(
        'change.switch',
        {
          checked: this.get('checked')
        }
      )
    }
  }
}