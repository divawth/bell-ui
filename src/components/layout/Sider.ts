import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Sider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  model: 'collapsed',

  propTypes: {
    collapsed: {
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
