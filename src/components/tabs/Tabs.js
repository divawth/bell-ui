import TabsTpl from './template/Tabs.html'

export default {
  template: TabsTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    value: {
      type: 'string'
    }
  },

  data() {
    return {
      tabLabels: []
    };
  },

  computed: {
    translateStyle() {
      let me = this;
      let index = 0;
      Yox.array.each(
        me.get('tabLabels'),
        (item, key) => {
          if (item.name == me.get('value')) {
            index = key;
            return false;
          }
        }
      );
      return index * (-100) + '%';

    }
  },

  events: {
    addTabLabel(event, data) {
      let me = this;
      let tabLabels = me.copy(me.get('tabLabels'));
      tabLabels.push(data);
      me.set({
        tabLabels: tabLabels
      });
    }
  },

  watchers: {
    value(value) {
      this.fire(
        'tabsValueUpdate',
        {
          value: value
        },
        true
      );
    }
  },

  methods: {
    clickTabLabel(data) {
      let me = this;
      me.set({
        value: data.name
      });
    }
  }
};