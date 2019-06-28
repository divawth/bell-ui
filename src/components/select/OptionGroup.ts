import Yox from 'yox'

import template from './template/OptionGroup.hbs'

import { RAW_STRING } from '../constant'

export default Yox.define({
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
})