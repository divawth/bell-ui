import Yox from 'yox'

import template from './template/Sider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

export default Yox.define({
  propTypes: {
    isCollapsed: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  model: 'isCollapsed',

  template,

  afterMount() {
    this.fire(
      'hasSider'
    )
  }
})
