import Yox from 'yox'

import {
  RAW_STRING,
  RAW_NUMERIC,
} from '../constant'

export default Yox.define({

  name: '${prefix}DescriptionItem',

  propTypes: {
    label: {
      type: RAW_STRING,
    },
    span: {
      type: RAW_NUMERIC,
    }
  },

})
