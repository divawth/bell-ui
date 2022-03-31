import Yox from 'yox'

import template from './template/Description.hbs'
// import './style/Description.styl'

import {
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  RAW_DEFAULT,
  RAW_SIZE_ARRAY,
  RAW_SLOT_CHILDREN,
  RAW_STYLE_TYPE,
} from '../constant'

import {
  oneOf,
} from '../util'

import {
  addSlots2Props,
} from './util'

const COLUMN_DEFAULT = 3

export default Yox.define({

  template,

  name: '${prefix}Description',

  propTypes: {
    title: {
      type: RAW_STRING,
    },
    simple: {
      type: RAW_BOOLEAN,
    },
    size: {
      type: oneOf(RAW_SIZE_ARRAY),
      value: RAW_DEFAULT,
    },
    column: {
      type: RAW_NUMERIC,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    const data = { }
    const children = this.get(RAW_SLOT_CHILDREN)
    if (children) {
      addSlots2Props(
        this,
        children,
        data,
        this.get('column') || COLUMN_DEFAULT
      )
    }
    return data
  },

  beforePropsUpdate(props) {

    const children = props[RAW_SLOT_CHILDREN]
    if (!children) {
      return
    }

    addSlots2Props(
      this,
      children,
      props,
      props.column || COLUMN_DEFAULT,
    )

  }

})
