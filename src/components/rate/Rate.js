export default {
    template: `
        <div class="bell-rate
            {{#if className}} {{className}}{{/if}}
            {{#if readOnly}} bell-rate-read-only{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-mouseleave="handleLeave()">

            <input type="hidden" model="value">
            {{#each createRateList():index}}
                <span class="bell-icon bell-rate-star-full
                    {{#if hoverValue >= index}} active{{/if}}
                " on-mousemove="handleMove($event, index)"
                on-click="handleClick($event, index)"
                >
                    {{#if half}}
                        <span type="half"
                        class="bell-icon bell-rate-star-content
                        {{#if index - hoverValue == 0.5}} active{{/if}}">
                        </span>
                    {{/if}}
                </span>
            {{/each}}

            {{#if showTexts}}
                <span class="bell-rate-text">
                    {{#if hasSlot('children')}}
                        <slot name="children" />
                    {{else}}
                        {{value + 1}} 星
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
        onChange: {
            type: 'function'
        }
    },

    data() {
        let me = this;
        return {
            hoverValue: -1
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

            if (me.get('readOnly')) {
                return;
            }

            let isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            let currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                hoverValue: currentValue
            });
        },

        handleLeave() {
            let me = this;
            if (me.get('readOnly')) {
                return;
            }

            let value = me.get('value');
            me.set({
                hoverValue: value >= 0 ? value : -1
            });
        },

        handleClick(event, index) {
            let me = this;
            if (me.get('readOnly')) {
                return;
            }
            let isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            let currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                value: currentValue
            });
        }
    }
};