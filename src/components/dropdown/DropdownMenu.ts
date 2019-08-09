import Yox from 'yox'

import template from './template/DropdownMenu.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})