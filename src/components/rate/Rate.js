export default {
    template: `
        <div class="bell-rate
            {{#if className}} {{className}}{{/if}}
            {{#if readOnly}} bell-rate-readonly{{/if}}
            {{#if type}} bell-rate-{{type}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-mouseleave="handleLeave()">

            <input type="hidden" model="modelValue">
            {{#each createRateList():index}}
                <span class="bell-icon bell-rate-star-full
                    {{#if activeValue - index >= 1}} active{{/if}}
                " on-mousemove="handleMove($event, index)"
                on-click="handleClick($event, index)"
                >
                    {{#if half}}
                        <span type="half"
                        class="bell-icon bell-rate-star-content
                        {{#if activeValue - index == 0.5}} active{{/if}}">
                        </span>
                    {{/if}}
                </span>
            {{/each}}

            {{#if showTexts}}
                <span class="bell-rate-text">
                    {{#if hasSlot('children')}}
                        <slot name="children" />
                    {{else}}
                        {{modelValue}} 星
                    {{/if}}
                </span>
            {{/if}}

        </div>
    `,

    model: 'modelValue',

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        count: {
            type: 'number',
            value: 5
        },
        modelValue: {
            type: 'numeric'
        },
        half: {
            type: 'boolean',
            value: false
        },
        readOnly: {
            type: 'boolean',
            value: false
        },
        showTexts: {
            type: 'boolean',
            value: false
        },
        texts: {
            type: 'array'
        },
        textColor: {
            type: 'string',
            value: '#1F2D3D'
        },
        type: {
            type: 'string'
        }
    },

    data() {
        return {
            hoverValue: -1
        }
    },

    computed: {
        activeValue() {
            let hoverValue = this.get('hoverValue');
            return hoverValue < 0 ? this.get('modelValue') : hoverValue;
        }
    },

    filters: {
        createRateList() {
            let me = this;
            let list = new Array(me.get('count'));
            let texts = me.get('texts');
            if (texts && texts.length) {
                Yox.array.each(
                    list,
                    (item, index) => {
                        item.push({
                            text: texts[index] ? texts[index] : texts[texts.length]
                        });
                    }
                );
            }
            return list;
        }
    },

    methods: {
        handleMove(event, index) {
            let me = this;
            index += 1;

            if (me.get('readOnly')) {
                return;
            }
            event = event.originalEvent;
            let isHalf = event && event.target.getAttribute('type') == 'half';

            if (isHalf) {
                index -= 0.5;
            }

            me.set({
                hoverValue: index
            });
        },

        handleLeave() {
            let me = this;
            if (me.get('readOnly')) {
                return;
            }

            me.set({
                hoverValue: me.get('modelValue') >= 0 ? me.get('modelValue') : -1
            });
        },

        handleClick(event, index) {
            let me = this;
            if (me.get('readOnly')) {
                return;
            }

            index += 1;
            event = event.originalEvent;

            let isHalf = event && event.target.getAttribute('type') == 'half';
            if (isHalf) {
                index -= 0.5;
            }
            me.set({
                modelValue: index
            });
            me.fire(
                'change',
                {
                    value: index
                }
            );
        }
    }
};