(function (global, factory) {
    (factory((global['Bell-doc'] = {})));
}(this, (function (exports) { 'use strict';

/**
 * @file demo
 * @author wangtianhua
 */

var DemoBlock = {

    template: '\n<div class="bell-view-box">\n\n    <div class="bell-header">\n        <span class="bell-button bell-text" on-click="goJsfiddle()">\n            Jsfiddle\n        </span>\n    </div>\n\n    <div class="bell-view bell-view-{{number}}">\n\n    </div>\n\n    <div class="bell-source">\n        <pre>\n            <code class="html hljs xml">\n                {{{source}}}\n            </code>\n        </pre>\n    </div>\n\n    {{#if isOpen}}\n        <i class="bell-icon bell-view-box-icon bell-icon-ios-arrow-up" on-click="close()"></i>\n    {{else}}\n        <i class="bell-icon bell-view-box-icon bell-icon-ios-arrow-down" on-click="open()"></i>\n    {{/if}}\n</div>\n    ',

    propTypes: {
        code: {
            type: 'string'
        },
        number: {
            type: ['string', 'number']
        }
    },

    data: function data() {
        return {
            source: '',
            isOpen: false
        };
    },

    methods: {
        formatCode: function formatCode(code) {
            code = code.replace(/<\/?script>/g, '').trim();
            code = code.replace(/export\s*default/g, '').trim();
            code = new Function('return ' + code)();
            return code;
        },
        open: function open() {
            var me = this;
            var container = me.$el;
            container.style.maxHeight = container.getElementsByTagName('pre')[0].clientHeight;

            me.set({
                isOpen: true
            });
        },
        close: function close() {
            var me = this;
            me.$el.style.maxHeight = '250px';

            me.set({
                isOpen: false
            });
        },
        goJsfiddle: function goJsfiddle() {
            var me = this;
            var html = '';
            var style = ['12'];
            var jsTpl = me.get('code');

            var data = {
                js: jsTpl,
                css: style,
                html: html,
                panel_js: 3,
                panel_css: 1
            };

            var form = document.getElementById('fiddle-form') || document.createElement('form');
            form.innerHTML = '';
            var node = document.createElement('textarea');

            form.method = 'post';
            form.action = 'https://jsfiddle.net/api/post/library/pure/';
            form.target = '_blank';

            for (var name in data) {
                node.name = name;
                node.value = data[name].toString();
                form.appendChild(node.cloneNode());
            }
            form.setAttribute('id', 'fiddle-form');
            form.style.display = 'none';
            document.body.appendChild(form);

            form.submit();
        }
    },
    afterMount: function afterMount() {
        var me = this;
        var code = me.get('code');
        var source = hljs.highlight('html', code);

        me.set({
            source: source.value
        });
        var html = me.formatCode(code);
        html.el = '.bell-view-' + me.get('number');
        new Yox(html);
    }
};

Yox.component({
    DemoBlock: DemoBlock
});

var demoCreate = function demoCreate(code) {
    return function (hook, vm) {
        var id = 0;
        window.$docsify.markdown = {
            renderer: {
                code: function code(_code, lang) {
                    id++;
                    var create = function create(number, code) {
                        setTimeout(function () {
                            new Yox({
                                el: '#demo' + number,
                                template: '\n                                        <div class="bell-demo-wrapper">\n                                            <DemoBlock code="{{code}}" number="{{number}}" />\n                                        </div>\n                                    ',

                                replace: true,

                                data: function data() {
                                    return {
                                        code: code,
                                        number: number
                                    };
                                }
                            });
                        }, 500);
                    };
                    create(id, _code);
                    return '<div id="demo' + id + '"></div>';
                }
            }
        };
    };
};

window.demoCreate = demoCreate;

exports.demoCreate = demoCreate;

Object.defineProperty(exports, '__esModule', { value: true });

})));
