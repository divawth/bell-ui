import template from './template/Page.html';
import { FALSE, RAW_STRING, RAW_BOOLEAN, RAW_NUMERIC } from '../constant';
export default {
    propTypes: {
        size: {
            type: RAW_STRING
        },
        simple: {
            type: RAW_STRING
        },
        total: {
            type: RAW_NUMERIC
        },
        current: {
            type: RAW_NUMERIC,
            value: 1
        },
        pageSize: {
            type: RAW_NUMERIC,
            value: 10
        },
        showSizer: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        pageSizeOpts: {
            type: 'array'
        },
        showElevator: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        showTotal: {
            type: RAW_BOOLEAN,
            value: FALSE
        },
        placement: {
            type: RAW_STRING
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
        var me = this;
        var getPageList = function () {
            var pageList = [];
            if (me.get('showSizer')
                && me.get('pageSizeOpts')) {
                Yox.array.each(me.get('pageSizeOpts'), function (value) {
                    pageList.push({
                        text: value + ' 条/页',
                        value: value
                    });
                });
            }
            return pageList;
        };
        return {
            pageList: getPageList(),
            count: 0,
            currentPage: 1,
            elevatorPage: ''
        };
    },
    events: {
        change: function (event) {
            if (event.target != this) {
                event.stop();
            }
        }
    },
    watchers: {
        current: function (value) {
            this.fire('change.page', {
                value: value
            });
        }
    },
    methods: {
        elevator: function () {
            var page = this.get('elevatorPage');
            if (Yox.is.numeric(page)) {
                this.changePage(+page);
                return;
            }
        },
        pageSizeChange: function (event, data) {
            this.updateCount();
            this.fire('pageSizeChange.page', {
                value: data.value
            });
            event.stop();
        },
        fastPrev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 5, 1);
        },
        fastNext: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 5, me.get('count'));
        },
        prev: function () {
            var me = this;
            if (me.get('current') < 1) {
                return;
            }
            me.decrease('current', 1, 1);
            if (me.get('simple')) {
                me.decrease('currentPage', 1, 1);
            }
        },
        next: function () {
            var me = this;
            if (me.get('current') >= me.get('count')) {
                return;
            }
            me.increase('current', 1, me.get('count'));
            if (me.get('simple')) {
                me.increase('currentPage', 1, me.get('count'));
            }
        },
        changePage: function (page) {
            this.set({
                current: page,
                currentPage: page
            });
        },
        updateCount: function () {
            var me = this;
            if (me.get('total')) {
                var count = 1;
                if (me.get('total') > me.get('pageSize')) {
                    count = Math.ceil(me.get('total') / me.get('pageSize'));
                }
                me.set({
                    count: count
                });
            }
        }
    },
    afterMount: function () {
        var me = this;
        me.updateCount();
        me.documentKeydownHander = function (event) {
            var currentPage = +me.get('currentPage');
            var current = me.get('current');
            var count = me.get('count');
            switch (event.originalEvent.keyCode) {
                case 40:
                    current = current + 1 > count ? count : current + 1;
                    break;
                case 38:
                    current = current > 1 ? current - 1 : 1;
                    break;
                case 13:
                    if (Yox.is.number(currentPage)
                        && currentPage > 0
                        && currentPage <= count) {
                        current = currentPage;
                    }
                    break;
            }
            me.set({
                current: current,
                currentPage: current
            });
        };
        Yox.dom.on(document, 'keydown', me.documentKeydownHander);
    },
    beforeDestroy: function () {
        var me = this;
        Yox.dom.off(document, 'keydown', me.documentKeydownHander);
    }
};
//# sourceMappingURL=Page.js.map