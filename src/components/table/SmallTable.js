import SmallTableTpl from './template/SmallTable.html'

export default {
  template: SmallTableTpl,
  propTypes: {
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    },
    list: {
      type: 'array'
    },
    columns: {
      type: 'array',
      default: []
    },
    stripe: {
      type: 'boolean'
    },
    border: {
      type: 'boolean'
    },
    setRowClassName: {
      type: 'function'
    },
    height: {
      type: 'string'
    },
    width: {
      type: 'string'
    },
    header: {
      type: 'boolean',
      default: false
    },
    highlightRow: {
      type: 'boolean'
    },
    setIndex: {
      type: 'function'
    },
    selection: {
      type: 'boolean'
    }
  },

  data() {
    return {
      colWidths: [],
      currentItem: null,
      isObject(data) {
        return Object.prototype.toString.call(data).toLocaleLowerCase().substr(8, 6) === 'object'
      },
    };
  },

  computed: {
    checkAll () {
      return this.get('list').filter(item => {
        return item.checked;
      }).length === this.get('list').length;
    }
  },

  methods: {
    checkedChange (data, index) {
      this.setChecked(data.isChecked, true, index);
      data.index = index;
      this.fire('select', data);
    },
    checkedAllChange (event, data) {
      this.setChecked(data.isChecked, true);
      this.fire('selectAll', data);
    },
    selectAll () {
      this.checkedAllChange(null, {
        isChecked: true
      });
    },
    clearCurrentRow: function () {
      this.set({
        'currentItem': null
      });
    },
    click: function (item, data, index) {
      item.action(data, index);
    },
    rowClick: function (data, index) {
      let me = this;
      if (!me.get('highlightRow') || me.get('header')) {
        return;
      }
      data.index = index;
      me.fire('currentChange', {
        current: data,
        oldCurrent: me.get('currentItem')
      });
      me.set({
        'currentItem': data
      });
    },

    setChecked(value, force, index) {
      let me = this;
      let list = me.copy(me.get('list'));
      list = list.map((item, key) => {
        if (force && index == null) {
          item.checked = value;
        }
        else if (index != null) {
          if (key === index) {
            item.checked = value
          }
        }
        else {
          item.checked = item.checked != null ? item.checked : value;
        }
        return item;
      });

      this.fire('selectChange', list);
      me.set({
        list
      });
    }
  },

  afterMount: function () {
    let me = this;
    if (me.get('selection')) {
      me.setChecked();
    }
    if (!me.get('columns').length) {
      return;
    }
    let colWidths = [];
    me.get('columns').forEach(item => {
      let colWidth = me.$el.clientWidth / 3;
      if (item.width) {
        colWidth = item.width;
      }
      colWidths.push(colWidth);
    });
    me.set({
      colWidths
    });
  }
};