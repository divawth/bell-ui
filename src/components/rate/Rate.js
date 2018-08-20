export default {
    template: `
        <div class="bell-rate
            {{#if className}} {{className}}{{/if}}
            {{#if readOnly}} bell-rate-readonly{{/if}}
            {{#if type}} bell-rate-{{type}}{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-mouseleave="handleLeave()">

            <input type="hidden" model="value">
            {{#each 1 => count}}
                <span class="bell-icon bell-rate-star-full
                    {{#if activeValue - this >= 1}} active{{/if}}
                " on-mousemove="handleMove($event, this)"
                on-click="handleClick($event, this)"
                >
                    {{#if half}}
                        <span type="half"
                        class="bell-icon bell-rate-star-content
                        {{#if activeValue - this == 0.5}} active{{/if}}">
                        </span>
                    {{/if}}
                </span>
            {{/each}}

            {{#if showTexts}}
                <span class="bell-rate-text">
                    {{#if hasSlot('children')}}
                        <slot name="children" />
                    {{else}}
                        {{value}} 星
                    {{/if}}
                </span>
            {{/if}}

        </div>
    `,
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
        value: {
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
            return hoverValue < 0 ? this.get('value') : hoverValue;
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
                hoverValue: me.get('value') >= 0 ? me.get('value') : -1
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
                value: index
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