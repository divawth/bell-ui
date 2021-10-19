import Yox from 'yox'

import template from './template/Article.hbs'
// import './style/Article.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Article',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    showLink: {
      type: RAW_BOOLEAN,
    },
    subTitle: {
      type: RAW_STRING,
    },
    signature: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  components: {
    Icon,
  }

})
