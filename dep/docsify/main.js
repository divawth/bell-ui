(function (global, factory) {
    (factory((global['Bell-doc'] = {})));
}(this, (function (exports) { 'use strict';

/**
 * @file demo
 * @author wangtianhua
 */

// <div class="bell-docsify-header">
//     <span class="bell-docsify-button bell-docsify-text" on-click="goJsfiddle()">
//         Jsfiddle
//     </span>
// </div>

var DemoBlock = {

    template: '\n        <div class="bell-docsify-view-box\n        {{#if isViewFullBlock}} bell-view-full-block{{/if}}\n        {{#if isOpen}} bell-box-open{{/if}}">\n\n            <div ref="docsifyView" class="bell-docsify-view bell-docsify-view-{{number}}">\n\n            </div>\n\n            <div class="bell-docsify-source">\n                <pre ref="docsifySource">\n                    <code class="html hljs xml">\n                        {{{source}}}\n                    </code>\n                </pre>\n            </div>\n\n            {{#if isOpen}}\n                <i class="bell-icon bell-docsify-view-box-icon bell-icon-ios-arrow-up" on-click="close()"></i>\n            {{else}}\n                <i class="bell-icon bell-docsify-view-box-icon bell-icon-ios-arrow-down" on-click="open()"></i>\n            {{/if}}\n        </div>\n    ',

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
            isOpen: false,
            isViewFullBlock: false
        };
    },

    methods: {
        formatCode: function formatCode(code) {
            var me = this;
            code = code.replace(/export\s*default/g, '').trim();
            code = new Function('return ' + code)();
            me.set({
                isViewFullBlock: code.isViewFullBlock
            });
            return code;
        },
        open: function open() {
            var me = this;
            var container = me.$el;
            var height;
            var sourceHeight = me.$refs.docsifySource.clientHeight;
            var viewHeight = 0;
            if (me.get('isViewFullBlock')) {
                viewHeight = me.$refs.docsifyView.children[0].clientHeight;
            }
            height = sourceHeight + viewHeight + 60;
            container.style.maxHeight = height + 'px';

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
        var source = hljs.highlight('js', code);

        me.set({
            source: source.value
        });
        var html = me.formatCode(code);
        html.el = '.bell-docsify-view-' + me.get('number');
        new Yox(html);
    }
};

Yox.component({
    DemoBlock: DemoBlock
});
var hashMap = {};
var demoCreate = function demoCreate(code) {
    window.addEventListener('hashchange', function () {
        setTimeout(function () {
            var map = hashMap[location.hash];
            if (map) {
                for (var i = 0; i < map.length; i++) {
                    new Yox(map[i]);
                }
            }
        }, 500);
    });

    return function (hook, vm) {
        var id = 0;
        window.$docsify.markdown = {
            renderer: {
                code: function code(_code, lang) {
                    id++;
                    var create = function create(number, code) {
                        setTimeout(function () {
                            if (!hashMap[location.hash]) {
                                hashMap[location.hash] = [];
                            }
                            var str = {
                                el: '#demo' + number,
                                template: '\n                                        <div class="bell-docsify-demo-wrapper">\n                                            <DemoBlock code="{{code}}" number="{{number}}" />\n                                        </div>\n                                    ',

                                replace: true,

                                data: function data() {
                                    return {
                                        code: code,
                                        number: number
                                    };
                                }
                            };
                            new Yox(str);
                            hashMap[location.hash].push(str);
                        }, 500);
                    };
                    var a = create(id, _code);
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
