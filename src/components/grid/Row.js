import RowTpl from './template/Row.html'

export default {
  template: RowTpl,

  propTypes: {
    className: {
      type: 'string'
    },
    gutter: {
      type: 'numeric'
    },
    type: {
      type: 'string'
    },
    justify: {
      type: 'string'
    },
    align: {
      type: 'string'
    }
  },

  data() {
    let me = this;
    return {
      style: ''
    }
  },

  computed: {
    style() {
      let me = this;
      let gap = me.get('gutter') / 2;
      let style = '';
      style = 'margin-left: -' + gap + 'px;margin-right: -' + gap + 'px;';
      return style;
    }
  },

  afterMount() {
    let me = this;
    me.fire(
      'updateGridGutter',
      {
        gutter: me.get('gutter')
      },
      true
    );
  }
};