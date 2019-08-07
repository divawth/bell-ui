import Yox from 'yox'

import template from './template/Sider.hbs'

import {
  RAW_STRING,
  RAW_BOOLEAN
} from '../constant'

export default Yox.define({
  propTypes: {
    collapsed: {
      type: RAW_BOOLEAN
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  model: 'collapsed',

  template,

  afterMount() {
    this.fire(
      'hasSider.sider'
    )
  }
})
