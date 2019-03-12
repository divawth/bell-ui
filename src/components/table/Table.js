export default {
  template: `
<div{{#if fixedLeftList.length || fixedRightList.length || height}} class="bell-table-fixed"{{/if}} 
  style="{{#if width}} width: {{width}}px; overflow-x: auto;{{/if}}">

  {{#if height}}
  <div class="bell-table-fixed-header">
    <SmallTable {{...this}} header></SmallTable>
  </div>
  {{/if}}

  {{#if fixedLeftList.length}}
    <div class="bell-table-fixed-left">
      <SmallTable {{...this}} columns="{{fixedLeftList}}" list="{{list}}"></SmallTable>
    </div>
  {{/if}}
  <div class="bell-table-insert{{#if height}} bell-table-insert{{/if}}"{{#if height}}style="height: {{height}}px; overflow-y: auto;"{{/if}}>
    <SmallTable {{...this}}></SmallTable>
  </div>
  {{#if fixedRightList.length}}
    <div class="bell-table-fixed-right">
      <SmallTable {{...this}} columns="{{fixedRightList}}" list="{{list}}"></SmallTable>
    </div>
  {{/if}}
</div>
    `,
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
    highlightRow: {
      type: 'boolean'
    },
    setIndex: {
      type: 'function'
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
    }
  },

  afterMount: function () {
    let me = this;
    if (!me.get('columns').length) {
      return;
    }
    let fixedLeftList = [];
    let fixedRightList = [];
    me.get('columns').forEach(item => {
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