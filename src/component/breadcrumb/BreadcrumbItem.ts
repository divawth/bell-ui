import Yox from 'yox'

import template from './template/BreadcrumbItem.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}BreadcrumbItem',

  propTypes: {
    last: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data(options) {
    const breadcrumb = findComponentUpward(options.parent, '${prefix}Breadcrumb')
    return {
      separator: breadcrumb.get('separator')
    }
  }

})