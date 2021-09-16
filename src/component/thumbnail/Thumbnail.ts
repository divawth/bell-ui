import Yox from 'yox'

import template from './template/Thumbnail.hbs'
// import './style/Thumbnail.styl'

import Icon from '../icon/Icon'
import Spin from '../spin/Spin'
import Upload from '../upload/Upload'

import {
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
  RAW_FUNCTION,
  RAW_IMAGE_ACCEPT,
} from '../constant'

import {
  toNumber,
} from '../util'

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
    simple: {
      type: RAW_BOOLEAN,
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    showZoom: {
      type: RAW_BOOLEAN,
    },
    showUpload: {
      type: RAW_BOOLEAN,
    },
    showDownload: {
      type: RAW_BOOLEAN,
    },
    showDelete: {
      type: RAW_BOOLEAN,
    },
    url: {
      type: RAW_STRING,
    },
    formatUrl: {
      type: RAW_FUNCTION,
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
    accept: {
      type: RAW_STRING,
      value: RAW_IMAGE_ACCEPT,
    },
    beforeUpload: {
      type: RAW_FUNCTION,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    }
  },

  data() {
    const me = this
    return {
      uploadImage(data) {

        const { onStart, onEnd } = data

        data.onStart = function () {
          me.set('loading', TRUE)
          onStart()
        }
        data.onEnd = function () {
          me.set('loading', FALSE)
          onEnd()
        }

        me.fire(
          {
            type: 'upload',
            ns: 'thumbnail',
          },
          data
        )

      },
    }
  },

  computed: {
    customWidth(): number {
      return toNumber(this.get('width'))
    },
    customHeight(): number {
      return toNumber(this.get('height'))
    },
  },

  components: {
    Icon,
    Spin,
    Upload,
  }

})
