import TableTpl from './template/Table.html'

export default {
  template: TableTpl,
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
      value: []
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
      fixedLeftList: [],
      fixedRightList: []
    };
  },

  methods: {
    click: function (item, data, index) {
      item.action(data, index);
    },
    clearCurrentRow: function () {
      this.$refs.smallTable.clearCurrentRow();
    },
    selectAll: function () {
      this.$refs.smallTable.selectAll();
    }
  },

  afterMount: function () {
    let me = this;
    if (!me.get('columns').length) {
      return;
    }
    let fixedLeftList = [];
    let fixedRightList = [];
    let columns = me.copy(me.get('columns'));
    columns.forEach(item => {
      let fixed = item.fixed;
      switch(fixed) {
        case 'left': 
          item.fixed = null;
          fixedLeftList.push(item);
          break;
        case 'right': 
          item.fixed = null;
          fixedRightList.push(item);
          break;
      }
    });
    me.set({
      fixedLeftList,
      fixedRightList
    });
  }
};