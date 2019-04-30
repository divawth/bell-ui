import SelectTpl from './template/Select.html'
import {
  contains
} from '../util';

export default {
  template: SelectTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    defaultText: {
      type: 'string'
    },
    value: {
      type: ['numeric', 'string']
    },
    size: {
      type: 'string'
    },
    type: {
      type: 'string'
    },
    disabled: {
      type: 'boolean'
    },
    placement: {
      type: 'string'
    },
    multiple: {
      type: 'boolean'
    }
  },

  data() {
    return {
      count: 0,
      visible: false,
      hoverIndex: 0,
      selectedIndex: null,
      selectedText: null,
    }
  },

  watchers: {
    value(value) {
      let me = this;
      me.fire(
        'optionSelectedChange',
        {
          value: value
        },
        true
      );

      me.fire(
        'change',
        {
          value: value,
          text: me.get('selectedText'),
          index: me.get('selectedIndex')
        }
      );
    }
  },

  events: {
    selectedOptionChange(event) {
      let me = this;
      let option = event.target;
      if (me.get('selectedText') == null
        && me.get('selectedIndex') == null
      ) {
        me.set({
          selectedIndex: option.get('index'),
          selectedText: option.get('text'),
        });
      }
      event.stop();
    },

    optionAdd() {
      this.increase('count');
    },

    optionRemove() {
      this.decrease('count');
    },

    optionSelect(event) {

      let me = this;
      let option = event.target;

      let value = option.get('value');
      let text = option.get('text');
      let index = option.get('index');

      if (me.get('multiple')) {

        me.set({
          value: me.setArrayValue(value, me.get('value')),
          selectedText: me.setArrayValue(text, me.get('selectedText')),
          selectedIndex: index,
          visible: true
        });

      }
      else {

        me.set({
          value: value,
          selectedText: text,
          selectedIndex: index,
          visible: false
        });

      }
    }
  },

  methods: {
    setArrayValue: function (text, values) {

      values = this.copy(values);
      if (Array.isArray(values)) {
        let index = values.indexOf(text);
        if (index >= 0) {
          values.splice(index, 1);
        }
        else {
          values.push(text);
        }
      }
      else {
        values = [text];
      }

      return values.length ? values : null;

    },

    tagClose(event, text, index) {

      let me = this;

      this.set({
        value: me.setArrayValue(me.get('value')[index], me.get('value')),
        selectedText: me.setArrayValue(text, me.get('selectedText'))
      });
      event.stop();

    },

    toggleMenu() {
      let me = this;
      if (me.get('disabled')) {
        return false;
      }
      me.toggle('visible');
    },

    decreaseHoverIndex() {
      let me = this;
      let hoverIndex = me.get('hoverIndex');
      hoverIndex = hoverIndex <= 0 ? (me.get('count') - 1) : hoverIndex - 1;
      me.set({
        hoverIndex: hoverIndex
      });
      me.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        true
      );
    },

    increaseHoverIndex() {

      let me = this;
      let hoverIndex = me.get('hoverIndex');
      hoverIndex = hoverIndex >= (me.get('count') - 1) ? 0 : hoverIndex + 1;
      me.set({
        hoverIndex: hoverIndex
      });

      me.fire(
        'optionHoveredChange',
        {
          index: hoverIndex
        },
        true
      );

    },

    selectOption() {
      this.fire(
        'optionHoveredChange',
        {
          index: this.get('hoverIndex'),
          selected: true
        },
        true
      );
    }

  },

  afterMount() {
    let me = this;

    if (me.get('value') != null
      && me.get('selectedText') == null
      && me.get('selectedIndex') == null
    ) {
      me.fire(
        'optionSelectedChange',
        {
          value: me.get('value')
        },
        true
      );
    }

    me.documentClickHandler = function (e) {

      if (!me.get('visible')) {
        return
      }

      let element = me.$el;
      let target = e.originalEvent.target;
      if (contains(element, target)) {
        return;
      }
      me.set({
        visible: false
      });

    };

    me.documentKeydownHander = function (e) {

      if (!me.get('visible')) {
        return;
      }

      switch (e.originalEvent.keyCode) {

        case 40:
          e.prevent();
          me.increaseHoverIndex();
          break;

        case 38:
          e.prevent();
          me.decreaseHoverIndex();
          break;

        case 13:
          me.selectOption();

      };

    };

    Yox.dom.on(
      document,
      'click',
      me.documentClickHandler
    );
    Yox.dom.on(
      document,
      'keydown',
      me.documentKeydownHander
    );
  },

  beforeDestroy() {
    let me = this;
    Yox.dom.off(
      document,
      'click',
      me.documentClickHandler
    );
    Yox.dom.off(
      document,
      'keydown',
      me.documentKeydownHander
    );
  }
};