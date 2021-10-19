import Yox from 'yox'

import template from './template/Spin.hbs'
// import './style/Spin.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_DEFAULT,
  RAW_LIGHT,
  RAW_SIZE_ARRAY,
  RAW_TYPE_ARRAY,
  RAW_TYPE_PRIMARY,
  RAW_THEME_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
  supportTransform,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Spin',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
      value: RAW_TYPE_PRIMARY,
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    theme: {
      type: oneOf(RAW_THEME_ARRAY),
      value: RAW_LIGHT,
    },
    fixed: {
      type: RAW_BOOLEAN,
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
      type: RAW_STYLE_TYPE,
    },
  },

  data() {
    return {
      legacy: !supportTransform,
    }
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