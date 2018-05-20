export default {
    template: `
        <div class="bell-circle"
            style="width: {{size}}px;
                height: {{size}}px;
            "
        >
            <svg viewBox="0 0 100 100">
                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
                    stroke="{{trailColor}}"
                    stroke-width="{{trailWidth}}"
                    fill-opacity="0"
                />
                <path d="M 50 50 m 0 -47 a 47 47 0 1 1 0 94 a 47 47 0 1 1 0 -94"
                    stroke-linecap="{{strokeLinecap}}"
                    stroke="{{strokeColor}}"
                    stroke-width="{{strokeWidth}}"
                    fill-opacity="0"
                    style="
                        stroke-dasharray: {{strokeDasharray}};
                        stroke-dashoffset: {{strokeDashoffset}};
                        transition: stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease
                    "
                />
            </svg>
            <div class="bell-circle-inner">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
            </div>
        </div>
    `,
    propTypes: {
        percent: {
            type: 'number',
            value: 0
        },
        size: {
            type: 'number',
            value: 120
        },
        strokeWidth: {
            type: 'number',
            value: 6
        },
        strokeColor: {
            type: 'string',
            value: '#2db7f5'
        },
        strokeLinecap: {
            type: ['square', 'round'],
            value: 'round'
        },
        trailWidth: {
            type: 'number',
            value: 5
        },
        trailColor: {
            type: 'string',
            value: '#eaeef2'
        }
    },
    computed: {
        strokeDasharray: function () {
            var me = this;
            var len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
            return `${len}px ${len}px`;
        },
        strokeDashoffset: function () {
            var me = this;
            var len = Math.PI * 2 * (50 - me.get('strokeWidth') / 2);
            var percent = me.get('percent');
            return `${((100 - percent) / 100 * len)}px`;
        }
    }
}