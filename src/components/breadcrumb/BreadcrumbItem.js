import template from './template/BreadcrumbItem.html'
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
    },
    to: {
      type: RAW_STRING
    },
    separator: {
      type: RAW_STRING
    }
  },

  template
}