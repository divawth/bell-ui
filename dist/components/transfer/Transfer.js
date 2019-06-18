import template from './template/Transfer.html';
export default {
    propTypes: {
        data: {
            type: 'array',
            value: function () {
                return [];
            }
        },
        targetKeys: {
            type: 'array',
            value: function () {
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
    template: template,
    data: function () {
        var me = this;
        return {
            leftKeys: [],
            rightKeys: [],
            checkLeftAll: false,
            checkRightAll: false,
            left: [],
            right: [],
            onLeftChange: function (left) {
                me.set({
                    left: left,
                    checkLeftAll: left && left.length == me.get('leftList.length')
                });
            },
            onRightChange: function (right) {
                me.set({
                    right: right,
                    checkRightAll: right && right.length == me.get('rightList.length')
                });
            },
            onCheckLeftAllChange: function (isCheckAll) {
                me.set({
                    left: isCheckAll ? me.getListKeys(me.get('leftList')) : []
                });
            },
            onCheckRightAllChange: function (isCheckAll) {
                me.set({
                    right: isCheckAll ? me.getListKeys(me.get('rightList')) : []
                });
            }
        };
    },
    computed: {
        rightList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*'],
            get: function () {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data
                    || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) { return targetKeys.indexOf(item['key']) !== -1; });
            }
        },
        leftList: {
            deps: ['targetKeys', 'targetKeys.length', 'data.*', 'data'],
            get: function () {
                var me = this;
                var data = me.get('data');
                var targetKeys = me.get('targetKeys');
                if (!data
                    || !targetKeys) {
                    return [];
                }
                return data.filter(function (item) { return targetKeys.indexOf(item['key']) === -1; });
                ;
            }
        }
    },
    methods: {
        addToLeft: function () {
            var me = this;
            me.get('right').map(function (item) {
                Yox.array.remove('targetKeys', item.key);
            });
        },
        addToRight: function () {
            var me = this;
            me.set({
                targetKeys: Yox.array.merge(me.get('targetKeys'), me.get('left'))
            });
        },
        getListCheckedkeys: function (list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) {
                    if (item.checked) {
                        return item.keys;
                    }
                });
            }
            return keys;
        },
        getListKeys: function (list) {
            var keys = [];
            if (list.length) {
                keys = list.map(function (item) { return item.key; });
            }
            return keys;
        }
    }
};
//# sourceMappingURL=Transfer.js.map