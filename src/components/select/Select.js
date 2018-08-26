import Tag from '../tag/Tag';
import {
    contains
} from '../util';

export default {
    template: `
        <div class="bell-select
            {{#if size}} bell-select-{{size}}{{/if}}
            {{#if type}} bell-select-{{type}}{{/if}}
            {{#if disabled}} bell-select-disabled{{/if}}
            {{#if placement}} bell-select-{{placement}}{{/if}}
            {{#if multiple}} bell-select-multiple{{/if}}
            {{#if className}} {{className}}{{/if}}
            {{#if visible}} bell-active{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <div class="bell-select-button" on-click="toggleMenu()">

                <input type="hidden" model="value" />

                <span class="bell-select-value
                    {{#if value == null}} bell-hide{{/if}}
                ">
                    {{#if selectedText && !multiple}}
                        {{selectedText}}
                    {{else if selectedText}}
                        {{#each selectedText:index}}
                        <Tag size="tiny" closable on-close="tagClose($event, this, index)">
                            {{this}}
                        </Tag>
                        {{/each}}
                    {{else if defaultText}}
                        {{{defaultText}}}
                    {{else}}
                        请选择...
                    {{/if}}
                </span>

                <span class="bell-select-placeholder
                    {{#if value != null}} bell-hide{{/if}}
                ">
                    {{#if defaultText}}
                        {{{defaultText}}}
                    {{else}}
                        请选择...
                    {{/if}}
                </span>

                <span class="bell-icon bell-icon-arrow-down-b bell-select-arrow"></span>
            </div>

            <div class="bell-select-dropdown">
                <ul class="bell-select-list">
                    {{#if hasSlot('children')}}
                        <slot name="children" />
                    {{/if}}
                </ul>
            </div>
        </div>
    `,

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        defaultText: {
            type: 'string'
        },
        value: {
            type: ['numeric', 'string']
        },
        size: {
            type: 'string'
        },
        type: {
            type: 'string'
        },
        disabled: {
            type: 'boolean'
        },
        placement: {
            type: 'string'
        },
        multiple: {
            type: 'boolean'
        }
    },

    data() {
        return {
            count: 0,
            visible: false,
            hoverIndex: 0,
            selectedIndex: null,
            selectedText: null,
        }
    },

    watchers: {
        value(value){
            let me = this;

            me.fire(
                'optionSelectedChange',
                {
                    value: value
                },
                true
            );

            me.fire(
                'change',
                {
                    value: value,
                    text: me.get('selectedText'),
                    index: me.get('selectedIndex')
                }
            );
        }
    },

    events: {
        selectedOptionChange(event) {
            let me = this;
            let option = event.target;
            if (me.get('selectedText') == null
                && me.get('selectedIndex') == null
            ) {
                me.set({
                    selectedIndex: option.get('index'),
                    selectedText: option.get('text'),
                });
            }
            event.stop();
        },

        optionAdd() {
            this.increase('count');
        },

        optionRemove() {
            this.decrease('count');
        },

        optionSelect(event) {

            let me = this;
            let option = event.target;

            let value = option.get('value');
            let text = option.get('text');
            let index = option.get('index');

            if (me.get('multiple')) {

                me.set({
                    value: me.setArrayValue(value, me.get('value')),
                    selectedText: me.setArrayValue(text, me.get('selectedText')),
                    selectedIndex: index,
                    visible: true
                });

            }
            else {

                me.set({
                    value: value,
                    selectedText: text,
                    selectedIndex: index,
                    visible: false
                });

            }
        }
    },

    methods: {
        setArrayValue: function (text, values) {

            values = this.copy(values);
            if (Array.isArray(values)) {
                let index = values.indexOf(text);
                if (index >= 0) {
                    values.splice(index, 1);
                }
                else {
                    values.push(text);
                }
            }
            else {
                values = [ text ];
            }

            return values.length ? values : null;

        },

        tagClose(event, text, index) {

            let me = this;

            this.set({
                value: me.setArrayValue(me.get('value')[index], me.get('value')),
                selectedText: me.setArrayValue(text, me.get('selectedText'))
            });
            event.stop();

        },

        toggleMenu() {
            let me = this;
            if (me.get('disabled')) {
                return false;
            }
            me.toggle('visible');
        },

        decreaseHoverIndex() {
            let me = this;
            let hoverIndex = me.get('hoverIndex');
            hoverIndex = hoverIndex <= 0 ? (me.get('count') - 1) : hoverIndex - 1;
            me.set({
                hoverIndex: hoverIndex
            });
            me.fire(
                'optionHoveredChange',
                {
                    index: hoverIndex
                },
                true
            );
        },

        increaseHoverIndex() {

            let me = this;
            let hoverIndex = me.get('hoverIndex');
            hoverIndex = hoverIndex >= (me.get('count') - 1) ? 0 : hoverIndex + 1;
            me.set({
                hoverIndex: hoverIndex
            });

            me.fire(
                'optionHoveredChange',
                {
                    index: hoverIndex
                },
                true
            );

        },

        selectOption() {
            this.fire(
                'optionHoveredChange',
                {
                    index: this.get('hoverIndex'),
                    selected: true
                },
                true
            );
        }

    },

    afterMount() {
        let me = this;

        if (me.get('value') != null
            && me.get('selectedText') == null
            && me.get('selectedIndex') == null
        ) {
            me.fire(
                'optionSelectedChange',
                {
                    value: me.get('value')
                },
                true
            );
        }

        me.documentClickHandler = function (e) {

            if (!me.get('visible')) {
                return
            }

            let element = me.$el;
            let target = e.originalEvent.target;
            if (contains(element, target)) {
                return;
            }
            me.set({
                visible: false
            });

        };

        me.documentKeydownHander = function (e) {

            if (!me.get('visible')) {
                return;
            }

            switch (e.originalEvent.keyCode) {

                case 40:
                    e.prevent();
                    me.increaseHoverIndex();
                    break;

                case 38:
                    e.prevent();
                    me.decreaseHoverIndex();
                    break;

                case 13:
                    me.selectOption();

            };

        };

        Yox.dom.on(
            document,
            'click',
            me.documentClickHandler
        );
        Yox.dom.on(
            document,
            'keydown',
            me.documentKeydownHander
        );
    },

    beforeDestroy() {
        let me = this;
        Yox.dom.off(
            document,
            'click',
            me.documentClickHandler
        );
        Yox.dom.off(
            document,
            'keydown',
            me.documentKeydownHander
        );
    }
};