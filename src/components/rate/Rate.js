export default {
    template: `
        <div class="bell-rate
        {{#if readOnly}} bell-rate-read-only{{/if}}
        " on-mouseleave="handleLeave()">
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
        count: {
            type: 'number',
            value: 5
        },
        value: function (value) {
            console.log(typeof value, value)
            return value
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

    data: function () {
        var me = this;
        return {
            hoverValue: -1
        }
    },

    filters: {
        createRateList: function () {
            var me = this;
            var list = new Array(me.get('count'));
            var texts = me.get('texts');
            if (texts && texts.length) {
                Yox.array.each(
                    list,
                    function (item, index) {
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
        handleMove: function (event, index) {
            var me = this;

            if (me.get('readOnly')) {
                return;
            }

            var isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            var currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                hoverValue: currentValue
            });
        },

        handleLeave: function () {
            var me = this;
            if (me.get('readOnly')) {
                return;
            }

            var value = me.get('value');
            me.set({
                hoverValue: value >= 0 ? value : -1
            });
        },

        handleClick: function (event, index) {
            var me = this;
            if (me.get('readOnly')) {
                return;
            }
            var isHalf = event.originalEvent && event.originalEvent.target.getAttribute('type') == 'half';
            var currentValue = index;
            if (isHalf) {
                currentValue -= 0.5;
            }

            me.set({
                value: currentValue
            });
        }
    }
}