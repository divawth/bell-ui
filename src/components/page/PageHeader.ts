import Yox from 'yox'

import template from './template/PageHeader.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}page-header',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    showBack: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

})