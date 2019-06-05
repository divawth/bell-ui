import template from './template/TooltipItem.html'
import { RAW_STRING } from '../constant'

export default {

  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    },
  },

  template,

  afterMount() {
    this.fire(
      'hasItem.tootipItem'
    )
  }
}