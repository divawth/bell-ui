import ItemTpl from './template/Item.html'

export default {
  template: ItemTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    disableHover: {
      type: 'boolean'
    },
    active: {
      type: 'boolean'
    }
  },

  data() {
    return {
      nestedIsShow: false
    }
  },

  methods: {
    itemClick(event, hasNested) {
      if (!hasNested) {
        this.fire('click');
        event.stop();
        return;
      }
      this.toggle('nestedIsShow');
      event.stop();
    }
  }
};