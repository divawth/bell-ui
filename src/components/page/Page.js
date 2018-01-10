export default {
    template: `
<div class="bell-page
{{#if size}} bell-page-{{size}}{{/if}}
{{#if className}} {{className}}{{/if}}
">
{{#partial pageCenter}}
    {{#if current - 3 > 1}}
        <li class="bell-page-item bell-page-item-prev" on-click="fastPrev()">
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
        </li>
    {{/if}}

    {{#if current - 2 > 1}}
        <li class="bell-page-item" on-click="changePage(current - 2)">
            {{ current - 2 }}
        </li>
    {{/if}}

    {{#if current - 1 > 1}}
        <li class="bell-page-item" on-click="changePage(current - 1)">
            {{ current - 1 }}
        </li>
    {{/if}}

    {{#if current != 1 && current != count}}
        <li class="bell-page-item bell-active">
            {{ current }}
        </li>
    {{/if}}

    {{#if current + 1 < count}}
        <li class="bell-page-item" on-click="changePage(current + 1)">
            {{ current + 1 }}
        </li>
    {{/if}}

    {{#if current + 2 < count}}
        <li class="bell-page-item" on-click="changePage(current + 2)">
            <a>{{ current + 2 }}</a>
        </li>
    {{/if}}

    {{#if current + 3 < count}}
        <li class="bell-page-item bell-page-item-next" on-click="fastNext()">
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
        </li>
    {{/if}}
{{/partial}}

    {{#if showTotal}}
    <span class="bell-page-total">
        共 {{total}} 条
    </span>
    {{/if}}

    {{#if showSizer}}
    <div class="bell-page-select">
        <Select list="{{pageList}}"
            model="pageSize"
            size="{{size}}"
        />
    </div>
    {{/if}}

    {{#if !simple}}
    <ul class="bell-page-list">

        <li class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">
            <i class="bell-icon bell-icon-ios-arrow-left"></i>
        </li>

        <li class="bell-page-item{{#if current == 1}} bell-active{{/if}}" on-click="changePage(1)">
            1
        </li>

        {{#if count > 1}}
            {{> pageCenter}}
            <li class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">
                {{count}}
            </li>
        {{/if}}

        <li class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">
            <i class="bell-icon bell-icon-ios-arrow-right"></i>
        </li>
    </ul>
    {{else}}
        <div class="bell-page-simple">
            <span class="bell-page-item bell-page-prev{{#if current <= 1}} bell-disabled{{/if}}" on-click="prev()">
                <i class="bell-icon bell-icon-ios-arrow-left"></i>
            </span>

            <div class="bell-page-input">
                <Input model="currentPage"
                    size="{{size}}"
                ></Input>
            </div>

            {{'/'}}

            <span class="bell-page-item{{#if current == count}} bell-active{{/if}}" on-click="changePage(count)">
                {{count}}
            </span>

            <span class="bell-page-item bell-page-next {{count}}{{#if current >= count}} bell-disabled{{/if}}" on-click="next()">
                <i class="bell-icon bell-icon-ios-arrow-right"></i>
            </span>
        </div>
    {{/if}}

    {{#if showElevator}}
    <div class="bell-page-elevator">
        跳至
        <div class="bell-page-input">
            <Input placeholder="请输入..."
                model="currentPage"
                size="{{size}}"
            ></Input>
        </div>
        页
    </div>
    {{/if}}
</div>
    `,

    propTypes: {
        size: {
            type: 'string'
        },
        simple: {
            type: 'string'
        },
        total: {
            type: 'string'
        },
        current: {
            type: 'string',
            value: 1
        },
        pageSize: {
            type: 'string',
            value: 10
        },
        showSizer: {
            type: 'string'
        },
        pageSizeOpts: {
            type: 'array'
        },
        showElevator: {
            type: 'string'
        },
        showTotal: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        onChange: {
            type: 'function'
        },
        onPageSizeChange: {
            type: 'function'
        }
    },

    data: function () {
        var me = this;
        var getPageList = function () {
            var pageList = [];
            if (me.get('showSizer')
                && me.get('pageSizeOpts')
            ) {
                Yox.array.each(
                    me.get('pageSizeOpts'),
                    function (value) {
                        pageList.push({
                            text: value + ' 条/页',
                            val: value
                        });
                    }
                );
            }
            return pageList;
        };
        return {
            pageList: getPageList(),
            count: 0,
            currentPage: 1
        }
    },

    watchers: {
        pageSize: function (value) {
            var me = this;
            me.updateCount();
            me.get('onPageSizeChange') && me.get('onPageSizeChange')(value);
        },
        current: function (value) {
            var me = this;
            me.get('onChange') && me.get('onChange')(value);
        }
    },

    methods: {

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
        },

        setCurrent: function (option) {
            var me = this;
            var currentPage = +me.get('currentPage');
            var current = me.get('current');
            var count = me.get('count');

            if (option == 'enter') {
                if (Yox.is.number(currentPage)
                    && currentPage > 0
                    && currentPage <= count
                ) {
                    current = currentPage;
                }
            }
            else if (option == 'up') {
                current = current > 1 ? current - 1 : 1;
            }
            else if (option == 'down') {
                current = current + 1 > count ? count : current + 1;
            }

            me.set({
                current: current,
                currentPage: current
            });
        }
    },

    afterMount: function () {
        var me = this;
        me.updateCount();

        me.documentKeydownHander = function (e) {
            var code = e.keyCode;
            if (code === 40) {
                // up
                e.preventDefault();
                me.setCurrent('down');
            }
            else if (code === 38) {
                // down
                e.preventDefault();
                me.setCurrent('up');
            }
            else if (code == 13) {
                // enter
                me.setCurrent('enter');
            }
        };

        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    },

    beforeDestroy: function () {
        var me = this;
        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    }
};