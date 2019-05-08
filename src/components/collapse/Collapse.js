import template from './template/Collapse.html'

export default {

  propTypes: {
    activeName: {
      type: 'numeric'
    },
    accordion: {
      type: 'boolean'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  events: {
    panelOpen(_, data) {
      if (data.name) {
        this.fire(
          'panelActiveName',
          {
            name: name
          },
          true
        )
      }
    }
  },

  afterMount() {
    let me = this
    let name = me.get('activeName')
    let accordion = me.get('accordion')
    if (name) {
      me.fire(
        'panelActiveName',
        {
          name: name
        },
        true
      )
    }
    if (accordion) {
      me.fire(
        'panelAccordion',
        {
          accordion: true
        },
        true
      )
    }
  }

}