import template from './template/Transfer.html'

export default {
  propTypes: {
    data: {
      type: 'array',
      value() {
        return [];
      }
    },
    targetKeys: {
      type: 'array',
      value() {
        return [];
      }
    },
    onChange: {
      type: 'function'
    },
    leftLabel: {
      type: 'string'
    },
    rightLabel: {
      type: 'string'
    }
  },
  template,
  data() {
    let me = this;
    return {
      leftKeys: [],
      rightKeys: [],

      checkLeftAll: false,
      checkRightAll: false,

      left: [],
      right: [],

      onLeftChange(left) {
        me.set({
          left: left,
          checkLeftAll: left && left.length == me.get('leftList.length')
        });
      },
      onRightChange(right) {
        me.set({
          right: right,
          checkRightAll: right && right.length == me.get('rightList.length')
        });
      },
      onCheckLeftAllChange(isCheckAll) {
        me.set({
          left: isCheckAll ? me.getListKeys(me.get('leftList')) : []
        });
      },
      onCheckRightAllChange(isCheckAll) {
        me.set({
          right: isCheckAll ? me.getListKeys(me.get('rightList')) : []
        });
      }
    }
  },

  computed: {
    rightList: {
      deps: ['targetKeys', 'targetKeys.length', 'data.*'],
      get() {
        let me = this;
        let data = me.get('data');
        let targetKeys = me.get('targetKeys');
        if (!data
          || !targetKeys
        ) {
          return [];
        }
        return data.filter(item => targetKeys.indexOf(item['key']) !== -1);
      }
    },

    leftList: {
      deps: ['targetKeys', 'targetKeys.length', 'data.*', 'data'],
      get() {
        let me = this;
        let data = me.get('data');
        let targetKeys = me.get('targetKeys');
        if (!data
          || !targetKeys
        ) {
          return [];
        }
        return data.filter(item => targetKeys.indexOf(item['key']) === -1);;
      }
    }
  },
  methods: {
    addToLeft() {
      let me = this;
      me.get('right').map(item => {
        Yox.array.remove('targetKeys', item.key);
      });
    },
    addToRight() {
      let me = this;
      me.set({
        targetKeys: Yox.array.merge(me.get('targetKeys'), me.get('left'))
      });
    },
    getListCheckedkeys(list) {
      let keys = [];
      if (list.length) {
        keys = list.map(item => {
          if (item.checked) {
            return item.keys
          }
        });
      }
      return keys;
    },
    getListKeys(list) {
      let keys = [];
      if (list.length) {
        keys = list.map(item => item.key);
      }
      return keys;
    }
  }
};