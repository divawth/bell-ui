import template from './template/Submenu.html'
import { findComponentUpward } from '../util'
import {
  NULL,
  FALSE,
  TRUE,
  RAW_STRING
} from '../constant'

export default {
  propTypes: {
    name: {
      type: RAW_STRING
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data() {
    return {
      isOpen: FALSE,
      isActive: FALSE,
      activeName: NULL,
      mode: NULL,
      theme: NULL,
      isCollapsed: FALSE
    }
  },

  methods: {
    click () {
      this.get('isOpen') ? this.close() : this.open()
    },

    close() {
      let me = this
      let element = me.$refs.menu.$el
      element.style.height = element.clientHeight + 'px'

      me.closeTimer = setTimeout(
        () => {
          element.style.height = 0
          element.style.overflow = 'hidden'
          me.initTimer = setTimeout(
            () => {
              element.style.height = ''
              element.style.overflow = ''
              me.set('isOpen', FALSE)
            },
            100
          )
        }
      )
    },

    open() {
      let me = this
      me.set('isOpen', TRUE)

      me.nextTick(() => {
        let element = me.$refs.menu.$el
        let height = element.clientHeight
        element.style.height = 0

        me.openTimer = setTimeout(
          () => {
            element.style.height = height + 'px'
            me.initTimer = setTimeout(
              () => {
                element.style.height = ''
              },
              100
            )
          }
        )
      })
    }
  },

  events: {
    themeChanged(_, data) {
      this.set('theme', data.theme)
    },
    isCollapsedChanged(_, data) {
      this.set('isCollapsed', data.isCollapsed)
    },
    menuItemSelected(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        this.set('isActive', data.name === this.get('activeName'))
      }
      else if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.set('activeName', data.name)
        if (this.get('mode') !== 'inline' || this.get('isCollapsed')) {
          this.toggle('isOpen')
        }
      }
    }
  },
   
  afterMount () {
    let element = findComponentUpward(this, '${prefix}menu')
    this.set({
      'mode': element.get('mode'),
      'theme': element.get('theme'),
      'isActive': element.get('activeName') === this.get('name'),
      'isOpen': element.get('openNames').indexOf(this.get('name')) >= 0 
    })
  }
}