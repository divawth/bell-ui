export default {
    template: `
        <li class="bell-select-option
            {{#if className}} {{className}}{{/if}}
            {{#if isHover}} bell-hover{{/if}}
            {{#if isSelected}} bell-active{{/if}}
        "{{#if style}} style="{{style}}"{{/if}} on-click="click(index)">
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{else}}
                {{text}}
            {{/if}}
        </li>
    `,

    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        value: {
            type: ['string', 'numeric']
        },
        text: {
            type: ['string', 'numeric']
        },
        index: {
            type: 'number',
            require: true
        }
    },

    events: {
        updateOptionStatus(event, data) {
            let me = this;
            let isSelected = data.value == me.get('value') || data.index == me.get('index');
            me.set({
                isSelected: isSelected
            });
        },

        optionChangeByIndex: function (event, data) {
            let me = this;
            let isSelected = data.index == me.get('index');
            if (isSelected) {
                me.click();
            }
        },

        optionHoveredChange(event, data) {
            let me = this;
            let isHover = data.index == me.get('index');
            me.set({
                isHover: isHover
            });
            if (isHover && !me.get('isSelected')) {
                me.set({
                    isSelected: data.selected
                });
            }
        },

        optionSelectedChange(event, data) {
            this.set({
                isSelected: data.value == this.get('value')
            });
        }
    },

    data() {
        return {
            isSelected: false,
            isHover: false
        };
    },

    methods: {

        click() {
            this.fire(
                'optionSelect'
            );
        }

    },

    afterMount() {

        this.fire(
            'optionAdd'
        );

    },

    beforeDestroy() {
        this.fire(
            'optionRemove'
        );
    }

};