import Yox from 'yox'

import template from './template/Thumbnail.hbs'
// import './style/Thumbnail.styl'

import Icon from '../icon/Icon'
import Spin from '../spin/Spin'

import {
  TRUE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Thumbnail',

  propTypes: {
    width: {
      type: RAW_NUMERIC,
      required: TRUE,
    },
    height: {
      type: RAW_NUMERIC,
      required: TRUE,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    showZoom: {
      type: RAW_BOOLEAN,
    },
    showDownload: {
      type: RAW_BOOLEAN,
    },
    showDelete: {
      type: RAW_BOOLEAN,
    },
    src: {
      type: RAW_STRING,
    },
    srcSet: {
      type: RAW_STRING,
    },
    alt: {
      type: RAW_STRING,
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
    Spin,
  }

})
