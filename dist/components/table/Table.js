import template from './template/Table.html';
import { RAW_STRING, RAW_BOOLEAN, RAW_FUNCTION, RAW_ARRAY, TRUE } from '../constant';
export default {
    propTypes: {
        list: {
            type: RAW_ARRAY
        },
        columns: {
            type: RAW_ARRAY,
            value: function () {
                return [];
            }
        },
        stripe: {
            type: RAW_BOOLEAN
        },
        border: {
            type: RAW_BOOLEAN
        },
        setRowClassName: {
            type: RAW_FUNCTION
        },
        height: {
            type: RAW_STRING
        },
        width: {
            type: RAW_STRING
        },
        highlightRow: {
            type: RAW_BOOLEAN
        },
        setIndex: {
            type: RAW_FUNCTION
        },
        selection: {
            type: RAW_BOOLEAN
        },
        className: {
            type: RAW_STRING
        },
        style: {
            type: RAW_STRING
        }
    },
    template: template,
    data: function () {
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
            this.fire('clearCurrentRow.table', TRUE);
        },
        selectAll: function () {
            this.fire('selectAll.table', TRUE);
        }
    },
    afterMount: function () {
        if (!this.get('columns').length) {
            return;
        }
        var fixedLeftList = [];
        var fixedRightList = [];
        var columns = this.copy(this.get('columns'));
        columns.forEach(function (item) {
            var fixed = item.fixed;
            switch (fixed) {
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
        this.set({
            fixedLeftList: fixedLeftList,
            fixedRightList: fixedRightList
        });
    }
};
//# sourceMappingURL=Table.js.map