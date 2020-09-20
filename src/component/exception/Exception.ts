import Yox from 'yox'

import template from './template/Exception.hbs'
// import './style/Exception.styl'

import {
  RAW_STRING,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Exception',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    subTitle: {
      type: RAW_STRING,
    },
    status: {
      type: oneOf([403, 404, 500]),
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

})