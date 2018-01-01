define(function (require, exports, module) {

    'use strict';

    return {
        template: require('tpl!./Radio.html'),
        propTypes: {
            label: {
                type: 'string'
            }
        },
        data: function () {
            return {
            }
        },
        watchers: {
        },
        afterMount: function () {
            var me = this;
        }
    };
});