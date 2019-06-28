import Yox from 'yox';
import template from './template/SmallTable.hbs';
import { TRUE, FALSE, RAW_STRING, RAW_BOOLEAN, RAW_FUNCTION, RAW_ARRAY, NULL, } from '../constant';
export default Yox.define({
    propTypes: {
        list: {
            type: RAW_ARRAY
        },
        columns: {
            type: RAW_ARRAY,
            required: TRUE
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
        header: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        fixed: {
            type: RAW_BOOLEAN
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
            colWidths: [],
            currentItem: NULL,
        };
    },
    filters: {
        isObject: function (value) {
            return Yox.is.object(value);
        }
    },
    computed: {
        checkAll: function () {
            return this.get('list').filter(function (item) {
                return item.checked;
            }).length === this.get('list.length');
        }
    },
    events: {
        'clearCurrentRow.table': function () {
            this.clearCurrentRow();
        },
        'selectAll.table': function () {
            this.selectAll();
        }
    },
    methods: {
        checkedChange: function (data, index) {
            this.setChecked(data.isChecked, TRUE, index);
            data.index = index;
            this.fire('select', data);
        },
        checkedAllChange: function (_, data) {
            this.setChecked(data.isChecked, TRUE);
            this.fire('selectAll', data);
        },
        selectAll: function () {
            this.checkedAllChange(NULL, {
                isChecked: TRUE
            });
        },
        clearCurrentRow: function () {
            this.set({
                currentItem: NULL
            });
        },
        click: function (row, item, index) {
            row.action(item, index);
        },
        rowClick: function (item, index) {
            if (!this.get('highlightRow') || this.get('header')) {
                return;
            }
            this.fire('rowChange.table', {
                index: index,
                current: item,
                oldCurrent: this.get('currentItem')
            });
            this.set({
                currentIndex: index,
                currentItem: item
            });
        },
        setChecked: function (value, force, index) {
            var list = this.copy(this.get('list'));
            list = list.map(function (item, key) {
                if (force && index == NULL) {
                    item.checked = value;
                }
                else if (index != NULL) {
                    if (key === index) {
                        item.checked = value;
                    }
                }
                else {
                    item.checked = item.checked != NULL ? item.checked : value;
                }
                return item;
            });
            this.fire('selectChange.table', list);
            this.set({ list: list });
        }
    },
    afterMount: function () {
        var me = this;
        if (!me.get('columns').length) {
            return;
        }
        if (me.get('selection')) {
            me.setChecked(FALSE, TRUE);
        }
        var colWidths = [];
        me.get('columns').forEach(function (item) {
            var colWidth = me.$el.clientWidth / 3;
            if (item.width) {
                colWidth = item.width;
            }
            colWidths.push(colWidth);
        });
        me.set({ colWidths: colWidths });
    }
});
//# sourceMappingURL=SmallTable.js.map