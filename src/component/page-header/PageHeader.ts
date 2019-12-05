import Yox from 'yox'

import template from './template/PageHeader.hbs'
// import './style/PageHeader.styl'

import Icon from '../icon/Icon'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}PageHeader',

  propTypes: {
    title: {
      type: RAW_STRING,
      required: TRUE,
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

  components: {
    Icon,
  }

})