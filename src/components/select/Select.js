export default {
    template: `
<div class="bell-select
{{#if size}} bell-select-{{size}}{{/if}}
{{#if disabled}} bell-select-disabled{{/if}}
{{#if placement}} bell-select-{{placement}}{{/if}}
"
    {{#if style}} style="{{style}}"{{/if}}
>
    <div class="bell-select-button{{#if visible}} bell-active{{/if}}" on-click="toggleMenu()">
        <input type="hidden" model="value" />
        <span class="bell-select-value{{#if valueToText(value) == null}} bell-hide{{/if}}">
            {{{valueToText(value)}}}
        </span>
        <span class="bell-select-placeholder{{#if valueToText(value) != null}} bell-hide{{/if}}">
            {{#if defaultText}}
                {{{defaultText}}}
            {{else}}
                请选择...
            {{/if}}
        </span>
        <span class="bell-icon bell-icon-arrow-down-b bell-select-arrow"></span>
    </div>

    <div class="bell-select-dropdown{{#if !visible}} bell-hide{{/if}}"
    {{#if style}} style="{{style}}"{{/if}}
    >
        <ul class="bell-select-dropdown-list">
            {{#each list:index}}
            <li class="bell-select-dropdown-item{{#if focusIndex == index}} bell-focus{{/if}}{{#if value == val}} bell-active{{/if}}" on-click="itemClick(index)">
                {{text}}
            </li>
            {{/each}}
        </ul>
    </div>
</div>
    `,

    propTypes: {

        style: {
            type: 'string'
        },

        defaultText: {
            type: 'string'
        },

        list: {
            type: 'array',
            require: true
        },

        value: {
            type: 'string'
        },

        size: {
            type: 'string'
        },

        disabled: {
            type: 'string'
        },

        placement: {
            type: 'string'
        },

        autoComplete: {
            type: 'string'
        }
    },

    data: function () {
        return {
            visible: false,
            focusIndex: null
        }
    },

    filters: {
        valueToText: function (value) {
            if (value == null) {
                return '';
            }
            return this.valueMap[value];
        }
    },

    methods: {
        toggleMenu: function () {
            var me = this;
            if (me.get('disabled') || me.get('autoComplete')) {
                return false;
            }
            me.set({
                visible: !me.get('visible')
            });
        },

        itemClick: function (index) {
            var me = this;
            var list = me.get('list')
            me.set({
                value: list[index].val,
                focusIndex: index,
                visible: false
            });
        },

        setFocusIndex: function (option) {
            var me = this;
            var focusIndex = me.get('focusIndex');
            var value = me.get('value');
            var list = me.get('list');
            var length = list.length - 1;

            if (focusIndex == null) {
                focusIndex = 0;
            }

            if (option == 'up') {
                focusIndex = focusIndex + 1 > length
                            ? 0
                            : focusIndex + 1;
                me.set({
                    focusIndex: focusIndex
                });
            }
            else if (option == 'down') {
                focusIndex = focusIndex - 1 < 0
                            ? length
                            : focusIndex - 1;
                me.set({
                    focusIndex: focusIndex
                });
            }
            else if (option == 'enter') {
                me.set({
                    value: list[focusIndex].val,
                    focusIndex: focusIndex,
                    visible: false
                });
            }
        }
    },

    afterMount: function () {
        var me = this;
        me.valueMap = {};
        Yox.array.each(
            me.get('list'),
            function (item, index) {
                me.valueMap[item.val] = item.text;
                if (item.val == me.get('value')) {
                    me.set({
                        focusIndex: index
                    });
                }
            }
        );

        me.documentClickHandler = function (e) {
            if (me.$el.contains(e.target)) {
                return false;
            }
            me.set({
                visible: false
            });
        };

        me.documentKeydownHander = function (e) {
            var code = e.keyCode;
            if (!me.get('visible')) {
                return;
            }
            if (code === 40) {
                // up
                e.preventDefault();
                me.setFocusIndex('up');
            }
            else if (code === 38) {
                // down
                e.preventDefault();
                me.setFocusIndex('down');
            }
            else if (code == 13) {
                // enter
                me.setFocusIndex('enter');
            }
        };

        document.addEventListener(
            'click',
            me.documentClickHandler
        );
        document.addEventListener(
            'keydown',
            me.documentKeydownHander
        );
    },

    beforeDestroy: function () {
        var me = this;
        me.valueMap = null;
        document.removeEventListener(
            'click',
            me.documentClickHandler
        );
        document.removeEventListener(
            'keydown',
            me.documentKeydownHander
        );
    }
}