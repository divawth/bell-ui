import Yox from 'yox'

import template from './template/TooltipItem.hbs'

import { RAW_STRING } from '../constant'

export default Yox.create({

  propTypes: {
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    },
  },

  template,

  afterMount() {
    this.fire(
      'hasItem.tootipItem'
    )
  }
})
