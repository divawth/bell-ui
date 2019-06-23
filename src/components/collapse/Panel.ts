import Yox from 'yox'

import template from './template/Panel.hbs'

import {
  NULL,
  TRUE,
  FALSE,
  RAW_STRING,
  RAW_BOOLEAN,
  RAW_NUMERIC,
  UNDEFINED,
} from '../constant'

import {
  findComponentUpward,
} from '../util'

export default Yox.create({

  propTypes: {
    title: {
      type: RAW_STRING
    },
    name: {
      type: RAW_NUMERIC
    },
    isActive: {
      type: RAW_BOOLEAN
    },
    showIcon: {
      type: RAW_BOOLEAN,
      value: TRUE
    },
    className: {
      type: RAW_STRING
    },
    style: {
      type: RAW_STRING
    }
  },

  template,

  data(options) {
    const collapse = findComponentUpward(options.parent, '${prefix}collapse')
    return {
      opened: FALSE,
      accordion: collapse
        ? collapse.get('accordion')
        : FALSE
    }
  },

  events: {
    'change.accordion': function (_, data) {
      this.set('accordion', data.accordion)
    },
    'change.opened': function (event, data) {
      if (event.phase === Yox.Event.PHASE_DOWNWARD) {
        const me = this
        if (data.name === me.get('name')) {
          data.opened ? me.open() : me.close()
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
        'change.opened',
        {
          name: this.get('name'),
          opened: !this.get('opened'),
        }
      )
    },

    close() {

      const me = this, opened = me.get('opened')
      if (!opened) {
        return
      }

      me.removeTimer()

      const { content } = me.$refs
      content.style.height = content.clientHeight + 'px'

      me.toggleTimer = setTimeout(
        function () {
          me.toggleTimer = UNDEFINED
          content.style.height = 0
          me.initTimer = setTimeout(
            function () {
              me.initTimer = UNDEFINED
              content.style.height = ''
              me.set('opened', FALSE)
            },
            100
          )
        }
      )

    },

    open() {

      const me = this, opened = me.get('opened')
      if (opened) {
        return
      }

      me.removeTimer()

      me.set('opened', TRUE)
      me.nextTick(function () {

        const { content } = me.$refs

        const height = content.clientHeight
        content.style.height = 0

        me.toggleTimer = setTimeout(
          function () {
            me.toggleTimer = UNDEFINED
            content.style.height = height + 'px'
            me.initTimer = setTimeout(
              function () {
                me.initTimer = UNDEFINED
                content.style.height = ''
              },
              100
            )
          }
        )
      })
    },

    removeTimer() {
      const { toggleTimer, initTimer } = this
      if (toggleTimer) {
        clearTimeout(toggleTimer)
        this.toggleTimer = UNDEFINED
      }
      if (initTimer) {
        clearTimeout(initTimer)
        this.initTimer = UNDEFINED
      }
    }
  },

  afterMount() {
    this.watch(
      'isActive',
      {
        watcher(isActive: boolean) {
          if (isActive == NULL) {
            return
          }
          this.fire(
            'change.opened',
            {
              name: this.get('name'),
              opened: isActive
            }
          )
        },
        immediate: TRUE
      }
    )
  },

  beforeDestroy() {
    this.removeTimer()
  }
})