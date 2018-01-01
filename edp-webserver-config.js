exports.port = 3838;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

var epr = require('edp-provider-rider');
exports.stylus = epr.stylus;

// 默认配置
var stylusPlugin = epr.plugin({
    autoprefix: [
        'last 10 version',   // 浏览器的最近 10 个版本
        '> 1%',              // 份额大于 1%

        'ie >= 8',
        'chrome >= 10',
        'firefox >= 3',
        'safari > 4',
        'opera > 9'
    ],
    use: function (style) {

        var paths = style.get('paths');

        for (var i = paths.length - 1; i >= 0; i--) {
            if (paths[i].indexOf('rider') < 0) {
                paths.splice(i, 1);
            }
        }

        paths.push(
            __dirname,
            require('path').join(__dirname, 'src')
        );

        style.define('url',epr.stylus.resolver({
            paths: [
                __dirname,
                require('path').join(__dirname, 'src')
            ]
        }));
    }
});


/**
 * 获取当前请求匹配的规则项，按规则定义的先后顺序匹配，先匹配到，先返回。没有匹配到，返回null。
 *
 * @param {Object} request 当前请求
 * @return {?Array}
 */
function getRouter(pathname) {
    var result;

    var rules = require('./router').rules;
    rules.forEach(function (item) {
        if (item.pattern.test(pathname)) {
            result = item;
            return false;
        }
    });

    return result;
}


exports.getLocations = function () {
    return [
        {
            location: /\/$/,
            handler: home( 'index.html' )
        },
        {
            location: /^\/redirect-local/,
            handler: redirect('redirect-target', false)
        },
        {
            location: /^\/redirect-remote/,
            handler: redirect('http://www.baidu.com', false)
        },
        {
            location: /^\/redirect-target/,
            handler: content('redirectd!')
        },
        {
            location: '/empty',
            handler: empty()
        },
        {
            location: /\.css($|\?)/,
            handler: [
                autocss()
            ]
        },
        {
            location: /\.less($|\?)/,
            handler: [
                file(),
                less()
            ]
        },
        {
            location: /\.styl($|\?)/,
            handler: [
                file(),
                stylus({
                    stylus: epr.stylus,
                    use: stylusPlugin
                })
            ]
        },
        {
            location: /\.php($|\?)/,
            handler: [
                php('php-cgi')
            ]
        },
        {
            location: /\.html\.js$/,
            handler: html2js()
        },
        {
            location: function (request) {
                return !!getRouter(request.pathname);
            },
            handler: [
                function (context) {
                    var request = context.request;
                    var router = getRouter(request.pathname);
                    var search = request.search || '';

                    request.url = router.path + search;

                },
                proxy('127.0.0.1', exports.port)
            ]
        },
        {
            location: /^.*$/,
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};
