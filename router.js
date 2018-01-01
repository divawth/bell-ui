
var rewriteURLRules = [

    {
        pattern: /^\/index/,
        path: '/example/index.html'
    },
    {
        pattern: /^\/button/,
        path: '/example/button.html'
    },
    {
        pattern: /^\/input/,
        path: '/example/input.html'
    },
    {
        pattern: /^\/radio/,
        path: '/example/radio.html'
    },

];

exports.rules = rewriteURLRules;
