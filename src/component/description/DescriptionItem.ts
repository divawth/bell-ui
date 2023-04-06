import Yox from 'yox'

import {
  RAW_STRING,
  RAW_NUMERIC,
  RAW_BOOLEAN,
} from '../constant'

export default Yox.define({

  name: '${prefix}DescriptionItem',

  propTypes: {
    label: {
      type: RAW_STRING,
    },
    span: {
      type: RAW_NUMERIC,
    },
    highlight: {
      type: RAW_BOOLEAN,
    }
  },

})
