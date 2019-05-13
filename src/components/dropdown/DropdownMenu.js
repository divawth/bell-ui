import template from './template/DropdownMenu.html'
import { 
  RAW_STRING, RAW_BOOLEAN
} from '../constant'

export default {
  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template
}