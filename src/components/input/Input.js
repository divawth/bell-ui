define(function (require, exports, module) {
    'use strict';

    var TEXT_TYPE_INPUT = 'input';
    var TEXT_TYPE_TEXTAREA = 'textarea';

    return {
        template: require('tpl!./Input.html'),
        propTypes: {
            placeholder: {
                type: 'string'
            },
            style: {
                type: 'string'
            },
            value: {
                type: 'string'
            },
            onValueChange: {
                type: 'function'
            },
            size: {
                type: 'string'
            },
            icon: {
                type: 'string'
            },
            label: {
                type: 'string'
            },
            type: {
                type: 'string'
            },
            rows: {
                type: 'string'
            },
            disabled: {
                type: 'boolean'
            }
        },
        data: function () {
            return {
                text: '',
                TEXT_TYPE_INPUT: TEXT_TYPE_INPUT,
                TEXT_TYPE_TEXTAREA: TEXT_TYPE_TEXTAREA
            }
        },
        watchers: {
            text: function (value) {
                var me = this;
                var onValueChange = me.get('onValueChange');
                if (onValueChange) {
                    onValueChange(value);
                }
            }
        },
        afterMount: function () {
            var me = this;
            var value = me.get('value');

            me.set({
                text: value
            });
        }
    };
});