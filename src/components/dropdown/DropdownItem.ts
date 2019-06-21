import Yox from 'yox'

import template from './template/DropdownItem.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.create({
  propTypes: {
    divided: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    disabled: {
      type: RAW_BOOLEAN,
      value: FALSE
    },
    selected: {
      type: RAW_BOOLEAN,
      value: FALSE
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
})