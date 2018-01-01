/**
 * @file edp-provider-rider
 * @author junmer[junmer@foxmail.com],
 *         Firede[firede@firede.us]
 */

var stylus = require('stylus');
var rider = require('rider');
var postcss = require('postcss');
var mqpacker = require('css-mqpacker');
var ap = require('autoprefixer-core');
var husl = require('husl');

/**
 * 后处理器
 *
 * @param  {Object} options 选项
 * @param  {Array|boolean=} options.autoprefixer Autoprefixer支持
 * @param  {boolean=} options.mqpacker mqpacker启用状态
 * @param  {Function} callback callback
 * @return {Function} autoprefixer function
 */
function postprocessor(options, callback) {

    var defaultBrowsers = ['Android >= 2.3', 'iOS >= 6', 'ExplorerMobile >= 10'];

    return function (err, css) {
        if (err) {
            callback(err);
        }

        var processors = [];

        if (options.autoprefixer !== false) {
            processors.push(
                ap({browsers: options.autoprefixer || defaultBrowsers})
            );
        }

        if (options.mqpacker !== false) {
            processors.push(mqpacker);
        }

        if (processors.length > 0) {
            return postcss(processors).process(css).css;
        }

        return css;
    };
}

/**
 * 编译
 *
 * @param  {Object} options options
 * @param  {boolean=} options.implicit 引入rider
 * @param  {Array|boolean=} options.autoprefixer autoprefixer支持
 * @param  {boolean=} options.husl husl支持
 * @param  {boolean=} options.resolveUrl resolve url
 * @param  {Function=} options.use use
 * @param  {Function=} callback provider callback
 */
function plugin(options, callback) {
    options = options || {};

    return function (style) {

        if (options.resolveUrl !== false) {
            style.define('url', stylus.resolver());
        }

        style.use(
            rider({
                implicit: options.implicit
            })
        );

        style.on('end', postprocessor(options, callback));

        if (options.husl) {
            // define husl & huslp
            style.define('husl', function (H, S, L, A) {
                var rgb = husl._rgbPrepare(husl._conv.husl.rgb([H.val, S.val, L.val]));
                var a = (A !== undefined ? A.val : 1);
                return new stylus.nodes.RGBA(rgb[0], rgb[1], rgb[2], a);
            });
            style.define('huslp', function (H, S, L, A) {
                var rgb = husl._rgbPrepare(husl._conv.huslp.rgb([H.val, S.val, L.val]));
                var a = (A !== undefined ? A.val : 1);
                return new stylus.nodes.RGBA(rgb[0], rgb[1], rgb[2], a);
            });
        }

        if (options.use) {
            style.use(options.use);
        }
    };
}

module.exports = exports = {
    stylus: stylus,
    rider: rider,
    autoprefixer: ap,
    husl: husl,
    plugin: plugin,
    postcss: postcss,
    mqpacker: mqpacker
};
