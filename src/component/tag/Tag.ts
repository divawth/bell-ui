import Yox from 'yox'

import template from './template/Tag.hbs'
// import './style/Tag.styl'

import Icon from '../icon/Icon'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_TYPE_ARRAY,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

export default Yox.define({

  template,

  name: '${prefix}Tag',

  propTypes: {
    type: {
      type: oneOf(RAW_TYPE_ARRAY),
    },
    checkable: {
      type: RAW_BOOLEAN,
    },
    closable: {
      type: RAW_BOOLEAN,
    },
    checked: {
      type: RAW_BOOLEAN,
    },
    color: {
      type: RAW_STRING,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  computed: {
    presetName() {
      const color = this.get('color')
      if (color && /^[a-z]+$/.test(color)) {
        return color
      }
    },
    customColor() {
      const color = this.get('color')
      if (color && (/^#[\w\d]+$/.test(color) || /rgb/i.test(color))) {
        return color
      }
    },
  },

  methods: {
    toggleChecked() {
      this.fire(
        {
          type: 'change',
          ns: 'tag',
        },
        {
          checked: !this.get('checked'),
        }
      )
    }
  },

  components: {
    Icon,
  }

})
