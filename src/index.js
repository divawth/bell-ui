/*
 * @file 主模块
 * @author wangtianhua
 */
define(function (require, exports) {

    'use strict';

    exports.init = function (data) {

        Yox.component({
            Button: require('./components/button/Button'),
            Input: require('./components/input/Input'),
            Radio: require('./components/radio/Radio'),
            ButtonGroup: require('./components/button/ButtonGroup')
        });

    }

});
