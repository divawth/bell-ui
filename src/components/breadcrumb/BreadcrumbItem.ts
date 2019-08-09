import Yox from 'yox'

import template from './template/BreadcrumbItem.hbs'

import {
  RAW_STRING,
} from '../constant'

export default Yox.define({
  template,
  propTypes: {
    to: {
      type: RAW_STRING,
    },
    separator: {
      type: RAW_STRING,
      value: '/',
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },
})