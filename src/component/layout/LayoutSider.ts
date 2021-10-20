import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/LayoutSider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  toNumber,
} from '../util'

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
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    customWidth() {
      if (this.get('collapsed')) {
        return 80
      }
      return toNumber(this.get('width'))
    }
  },

  components: {
    Icon,
  }

})
