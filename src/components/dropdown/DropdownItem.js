import template from './template/DropdownItem.html'
import { 
  RAW_STRING, RAW_BOOLEAN
} from '../constant'

export default {
  propTypes: {
    divided: {
      type: RAW_BOOLEAN,
      value: false
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: false
    }, 
    selected: {
      type: RAW_BOOLEAN,
      value: false
    }, 
    name: {
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