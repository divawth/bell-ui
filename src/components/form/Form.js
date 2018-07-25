export default {
    template: `
        <div class="bell-form
            {{#if className}} {{className}}{{/if}}
            {{#if inline}} bell-form-inline{{/if}}
        "{{#if style}} {{style}}{{/if}}>
            {{#if hasSlot('children')}}
                <slot name="children" />
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
        value: {
            type: 'object'
        },
        rules: {
            type: 'object'
        },
        inline: {
            type: 'boolean'
        },
        labelPosition: {
            type: ['left', 'right', 'top'],
            value: 'left'
        },
        labelWidth: {
            type: 'number'
        },
        showMessage: {
            type: 'boolean'
        }
    },
    methods: {
        validate() {
            let me = this;
            let flag = true;
            let rules = me.get('rules');
            let result = me.get('value');
            let errorMsgs = [];

            if (rules) {
                Yox.object.each(
                    rules,
                    function (list, key) {
                        Yox.array.each(
                            list,
                            function (item) {
                                let value = result[key];
                                if (item.required && value == undefined) {
                                    errorMsgs.push(item.message);
                                    flag = false;
                                }
                            }
                        );
                    }
                );
            }
            return flag;
        }
    },
    afterMount() {
        let me = this;
        me.fire(
            'setRules',
            {
                rules: me.get('rules'),
                value: me.get('value')
            },
            true
        );
    }
};