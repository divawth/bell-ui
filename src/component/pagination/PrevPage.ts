import Yox from 'yox'

import template from './template/PrevPage.hbs'

import {
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  template,

  propTypes: {
    disabled: {
      type: RAW_BOOLEAN,
    },
  }

})