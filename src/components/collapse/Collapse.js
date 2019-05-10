import template from './template/Collapse.html'

export default {


  name: '${prefix}collapse',

  propTypes: {
    activeName: {
      type: 'numeric'
    },
    accordion: {
      type: 'boolean'
    },
    bordered: {
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

  watchers: {
    accordion(accordion) {
      this.fire(
        'accordionChanged',
        { accordion },
        true
      )
    }
  },

  events: {
    panelOpen(event, data) {
      if (event.phase === Yox.Event.PHASE_UPWARD) {
        this.fire(
          'panelOpen',
          {
            name: data.name,
            isOpen: data.isOpen
          },
          true
        )
      }
    }
  }

}