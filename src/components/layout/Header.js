import template from './template/Header.html'
import { 
  RAW_STRING
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