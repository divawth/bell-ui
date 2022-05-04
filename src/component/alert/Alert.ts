import Yox from 'yox'

import template from './template/Alert.hbs'
// import './style/Alert.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STATUS_ARRAY,
  RAW_TYPE_WARNING,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  getStatusIconName,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Alert',

  propTypes: {
    status: {
      type: oneOf(RAW_STATUS_ARRAY),
      value: RAW_TYPE_WARNING,
    },
    title: {
      type: RAW_STRING,
    },
    showIcon: {
      type: RAW_BOOLEAN,
    },
    banner: {
      type: RAW_BOOLEAN,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    iconName() {
      return getStatusIconName(
        this.get('status')
      )
    },
  },

  components: {
    Icon,
  }

})
