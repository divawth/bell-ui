import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/LayoutSider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
} from '../constant'

export default Yox.define({

  template,

  model: 'collapsed',

  name: '${prefix}LayoutSider',

  propTypes: {
    showTrigger: {
      type: RAW_BOOLEAN,
    },
    collapsed: {
      type: RAW_BOOLEAN,
    },
    width: {
      type: RAW_NUMERIC,
      value: 200
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
