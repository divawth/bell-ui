import template from './template/OptionGroup.html'
import { RAW_STRING } from '../constant'

export default {
  propTypes: {
    label: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template
}