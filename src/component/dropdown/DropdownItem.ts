import Yox from 'yox'

import template from './template/DropdownItem.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}DropdownItem',

  propTypes: {
    name: {
      type: RAW_STRING,
    },
    divided: {
      type: RAW_BOOLEAN,
    },
    disabled: {
      type: RAW_BOOLEAN,
    },
    active: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },
})