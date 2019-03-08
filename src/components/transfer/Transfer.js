export default {
  template: `
<div class="bell-transfer">
  <div class="bell-transfer-list">
    <div class="bell-transfer-list-header">
      <span class="bell-transfer-list-header-checkbox">
        <Checkbox model="checkLeftAll" onChange="{{onCheckLeftAllChange}}">
        </Checkbox>
      </span>
      <span class="bell-transfer-list-header-title">
        {{leftLabel}}
      </span>
      <span class="bell-transfer-list-header-count">
        {{left.length}} / {{leftList.length}}
      </span>
    </div>

    <div class="bell-transfer-list-body">
      <CheckboxGroup vertical model="left" onChange="{{onLeftChange}}">
        {{#each leftList}}
          <Checkbox value="{{this.key}}">
            <span>
              {{text}}
            </span>
          </Checkbox>
        {{/each}}
      </CheckboxGroup>
    </div>
  </div>

  <div class="bell-transfer-actions">
    <Button shape="circle" on-click="addToLeft()">
      <i class="bell-icon bell-icon-ios-arrow-left"></i>
    </Button>
    <Button shape="circle" on-click="addToRight()">
      <i class="bell-icon bell-icon-ios-arrow-right"></i>
    </Button>
  </div>

  <div class="bell-transfer-list">
    <div class="bell-transfer-list-header">
      <span class="bell-transfer-list-header-checkbox">
        <Checkbox model="checkRightAll" onChange="{{onCheckRightAllChange}}">
        </Checkbox>
      </span>
      <span class="bell-transfer-list-header-title">
        {{rightLabel}}
      </span>
      <span class="bell-transfer-list-header-count">
        {{right.length}} / {{rightList.length}}
      </span>
    </div>
    <div class="bell-transfer-list-body">
      <CheckboxGroup vertical model="right" onChange="{{onRightChange}}">
        {{#each rightList}}
          <Checkbox value="{{this.key}}">
            <span>
              {{text}}
            </span>
          </Checkbox>
        {{/each}}
      </CheckboxGroup>
    </div>
  </div>
</div>
  `,

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