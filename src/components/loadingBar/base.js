let namespace = 'bell-loading-bar';
let instance= null;
let timer = null;

export let add = function (data) {

    if (instance) {
        remove();
    }

    let body = document.getElementById('bell-loading-bar-wrapper');
    let element = document.createElement('div');
    element.setAttribute('id', namespace);
    body.append(element);

    instance = new Yox({
        el: '#' + namespace,
        replace: true,
        props: {
            percent: data.percent,
            height: data.height,
            type: data.type,
            color: data.color
        },
        template: `
            <div class="bell-loading-bar
            {{#if type}} bell-loading-bar-{{type}}{{/if}}">
                <div class="bell-loading-bar-inner">
                    <div class="bell-loading-bar-bg"
                        style="
                            width: {{percent}}%;
                            height: {{height}}px;
                            {{#if color}} color: {{color}};{{/if}}
                        "
                    >
                    </div>
                </div>
            </div>
        `,
        propTypes: {
            type: {
                type: 'string'
            },
            height: {
                type: 'number',
                value: 2
            },
            percent: {
                type: 'number',
                value: 0
            },
            color: {
                type: 'string'
            }
        },
        afterMount: function () {
            let me = this;
            var timerStart = function () {
                timer = setTimeout(
                    function () {
                        if (!timer || !me) {
                            return;
                        }
                        me.increase('percent', Math.floor(Math.random() * 10), 98);
                        if (me.get('percent') <= 98) {
                            timerStart();
                        }
                    },
                    200
                );
            };
            timerStart();
        },
        beforeDestroy: function () {
            if (timer) {
                clearTimeout(timer);
            }
        }
    });

    return instance;
};

export let remove = function () {

    if (instance) {
        instance.destroy();
        instance = null;
    }
    let body = document.getElementById('bell-loading-bar-wrapper');
    let element = document.getElementById(namespace);
    if (element) {
        body.removeChild(element);
    }

};

export let update = function (config) {
    if (instance) {
        instance.set(config);
    }
};
