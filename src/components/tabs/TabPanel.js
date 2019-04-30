import TabPanelTpl from './template/TabPanel.html'

export default {
  template: TabPanelTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    name: {
      type: 'string'
    },
    label: {
      type: 'string'
    }
  },

  data() {
    return {
      isActive: false
    }
  },

  events: {
    tabsValueUpdate(event, data) {
      let me = this;
      if (!data.value) {
        return;
      }
      me.set({
        isActive: me.get('name') == data.value
      });
    }
  },

  afterMount() {
    let me = this;
    me.fire(
      'addTabLabel',
      {
        label: me.get('label'),
        name: me.get('name')
      }
    );
  }
};