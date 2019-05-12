import template from './template/Button.html'
import { oneOf } from '../util'
import { 
  RAW_TINY,
  RAW_SMALL,
  RAW_LARGE,

  RAW_STRING, 
  RAW_BOOLEAN
} from '../constant'

export default {
  propTypes: {
    type: {
      type: oneOf(['primary', 'info', 'success', 'warning', 'error']),
      value: 'default'
    },
    borderType: {
      type: oneOf(['solid', 'none', 'dashed']), 
      value: 'solid'
    },
    shape: {
      type: RAW_STRING
    },
    icon: {
      type: RAW_STRING
    },
    size: {
      type: oneOf([ RAW_TINY, RAW_SMALL, RAW_LARGE ])
    },
    fluid: {
      type: RAW_BOOLEAN
    },
    disabled: {
      type: RAW_BOOLEAN
    },
    ghost: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },
  template
};