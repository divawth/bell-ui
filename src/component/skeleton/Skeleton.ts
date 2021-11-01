import Yox from 'yox'

import template from './template/Skeleton.hbs'
// import './style/Skeleton.styl'

import {
  TRUE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_STYLE_TYPE,
  RAW_OBJECT,
  RAW_SMALL,
  RAW_LARGE,
  RAW_SHAPE_CIRCLE,
  RAW_SHAPE_ROUND,
  SKELETON_ROW_HEIGHT,
} from '../constant'

export default Yox.define({

  template,

  name: '${prefix}Skeleton',

  propTypes: {
    title: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
      value: TRUE,
    },
    paragraph: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
      value: TRUE,
    },
    avatar: {
      type: [RAW_BOOLEAN, RAW_OBJECT],
    },
    loading: {
      type: RAW_BOOLEAN,
    },
    active: {
      type: RAW_BOOLEAN,
    },
    className: {
      type: RAW_STRING,
    },
    style: {
      type: RAW_STYLE_TYPE,
    }
  },

  data() {
    return {
      ROW_HEIGHT: SKELETON_ROW_HEIGHT,
    }
  },

  computed: {
    titleWidth() {
      const title = this.get('title')
      if (title) {
        const defaultWidth = '38%'
        if (Yox.is.boolean(title)) {
          return defaultWidth
        }
        if (Yox.is.number(title.width)) {
          return title.width + 'px'
        }
        return title.width || defaultWidth
      }
    },
    paragraphWidth() {
      const paragraph = this.get('paragraph')
      if (paragraph) {
        const defaultWidth = '61%'
        if (Yox.is.boolean(paragraph)) {
          return defaultWidth
        }
        if (Yox.is.number(paragraph.width)) {
          return paragraph.width + 'px'
        }
        return paragraph.width || defaultWidth
      }
    },
    paragraphRows() {
      const paragraph = this.get('paragraph')
      if (paragraph) {
        if (Yox.is.boolean(paragraph)) {
          return 3
        }
        if (Yox.is.number(paragraph.rows)) {
          return paragraph.rows
        }
      }
    },
    avatarSize() {
      const avatar = this.get('avatar')
      if (avatar) {
        const defaultSize = 32
        if (Yox.is.boolean(avatar)) {
          return defaultSize
        }
        if (Yox.is.number(avatar.size)) {
          return avatar.size
        }
        if (avatar.size === RAW_SMALL) {
          return 24
        }
        if (avatar.size === RAW_LARGE) {
          return 40
        }
        return defaultSize
      }
    },
    avatarShape() {
      const avatar = this.get('avatar')
      if (avatar) {
        const defaultShape = RAW_SHAPE_CIRCLE
        if (Yox.is.boolean(avatar)) {
          return defaultShape
        }
        if (avatar.shape === RAW_SHAPE_ROUND) {
          return RAW_SHAPE_ROUND
        }
        return defaultShape
      }
    }
  }

})
