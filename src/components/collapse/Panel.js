import template from './template/Panel.html'
import { findComponentUpward } from '../util'

export default {

  propTypes: {
    title: {
      type: 'string'
    },
    name: {
      type: 'numeric'
    },
    isActive: {
      type: 'boolean'
    },
    showIcon: {
      type: 'boolean',
      value: true
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
      accordion: false,
    }
  },

  events: {
    accordionChanged(_, data) {
      this.set('accordion', data.accordion)
    },

    panelOpen(event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        let me = this
        if (data.name === me.get('name')) {
          data.isOpen ? me.open() : me.close()
        }
        else if (me.get('accordion')) {
          me.close()
        }
      }
    }
  },

  methods: {

    click() {
      this.fire(
        'panelOpen',
        {
          name: this.get('name'),
          isOpen: !this.get('isOpen')
        }
      )
    },

    close() {
      let me = this
      let element = me.$refs.panelContent
      element.style.height = element.clientHeight + 'px'

      me.closeTimer = setTimeout(
        () => {
          element.style.height = 0
          me.initTimer = setTimeout(
            () => {
              element.style.height = ''
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
        let element = me.$refs.panelContent
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

  afterMount () {
    let collapse = findComponentUpward(this, '${prefix}collapse')
    this.set('accordion', collapse.get('accordion'))
    this.watch(
      'isActive',
      {
        watcher(isActive) {
          if (isActive == null) {
            return
          }
          this.fire(
            'panelOpen',
            {
              name: this.get('name'),
              isOpen: isActive 
            }
          )
        },
        immediate: true
      }
    )
  },

  beforeDestroy() {
    let me = this
    clearTimeout(me.closeTimer)
    clearTimeout(me.initTimer)
    clearTimeout(me.openTimer)
  }
}
