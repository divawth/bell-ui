import Yox from 'yox'

import Icon from '../icon/Icon'
import template from './template/Spin.hbs'

import {
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_SIZE_COMMON,
  RAW_DEFAULT,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

export default Yox.define({

  template,

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    size: {
      type: oneOf(RAW_SIZE_COMMON),
      value: RAW_DEFAULT,
    },
    fixed: {
      type: RAW_BOOLEAN,
      value: FALSE,
    },
    icon: {
      type: RAW_STRING,
      value: 'loader-line',
    },
    text: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STRING,
    },
  },

  methods: {
    updatePosition() {
      if (supportTransform) {
        return
      }
      if (!this.get('fixed')) {
        return
      }
      const content = this.$refs.content as HTMLElement
      content.style.marginLeft = -0.5 * content.offsetWidth + 'px'
      content.style.marginTop = -0.5 * content.offsetHeight + 'px'
    }
  },

  components: {
    Icon,
  },

  afterMount() {
    this.updatePosition()
  }

})