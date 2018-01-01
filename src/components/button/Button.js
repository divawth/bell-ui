define(function (require, exports, module) {
    return {
        template: require('tpl!./Button.html'),
        propTypes: {
            type: {
                type: 'string'
            },
            label: {
                type: 'string'
            },
            shape: {
                type: 'string'
            },
            icon: {
                type: 'string'
            },
            size: {
                type: 'string'
            },
            long: {
                type: 'boolean'
            },
            disabled: {
                type: 'boolean'
            }
        }
    };
});