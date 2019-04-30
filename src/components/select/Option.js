import OptionTpl from './template/Option.html'

export default {
  template: OptionTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    value: {
      type: ['string', 'numeric']
    },
    text: {
      type: ['string', 'numeric']
    },
    index: {
      type: ['string', 'numeric'],
      require: true
    }
  },

  events: {

    optionHoveredChange(event, data) {
      let me = this;
      let isHover = data.index == me.get('index');
      me.set({
        isHover: isHover
      });
      if (isHover && !me.get('isSelected')) {
        me.set({
          isSelected: data.selected
        });
      }
    },

    optionSelectedChange(event, data) {
      let me = this;
      let value = me.get('value');
      let values = data.value;

      let isSelected = Array.isArray(values) ? values.indexOf(value) >= 0 : values == value;
      me.set({
        isSelected: isSelected
      });
      // 默认值的时候需要传给上层
      if (isSelected) {
        me.fire('selectedOptionChange');
      }
    }
  },

  data() {
    return {
      isSelected: false,
      isHover: false
    };
  },

  methods: {

    click() {
      this.fire(
        'optionSelect'
      );
    }

  },

  afterMount() {

    let me = this;
    me.fire(
      'optionAdd',
      {
        value: me.get('value'),
        text: me.get('text'),
        index: me.get('index')
      }
    );

  },

  beforeDestroy() {
    this.fire(
      'optionRemove'
    );
  }

};