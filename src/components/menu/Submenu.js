import template from './template/Submenu.html'
import { findComponentUpward } from '../util'

export default {
  propTypes: {
    name: {
      type: 'string'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  data() {
    return {
      isOpen: false,
      isActive: false,
      activeName: null,
      mode: null,
      theme: null,
      isCollapsed: false
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
              me.set('isOpen', false)
            },
            100
          )
        }
      )
    },

    open() {
      let me = this
      me.set('isOpen', true)

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