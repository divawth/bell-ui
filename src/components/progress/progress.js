export default {
    template: `
        <div class="bell-progress
            {{#if className}} {{className}}{{/if}}
            {{#if type}} {{type}}{{/if}}
            {{#if active}} active{{/if}}
            {{#if vertical}} bell-progress-vertical{{/if}}
        "{{#if style}} style="{{style}}"{{/if}}>

            <div class="bell-progress-outer">
                <div class="bell-progress-inner"
                    style="{{#if vertical}} width: {{strokeWidth}}px;{{/if}}
                ">
                    <div class="bell-progress-bg"
                        style="
                        {{#if !vertical}}
                            width: {{percent}}%;
                            height: {{strokeWidth}}px;
                        {{else}}
                            height: {{percent}}%;
                            width: {{strokeWidth}}px;
                        {{/if}}
                        "
                    >
                    </div>
                </div>
            </div>

            {{#if !hideInfo}}
            <span class="bell-progress-inner-text">
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{else}}
                    {{percent}}%
                {{/if}}
            </span>
            {{/if}}

        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        percent: {
            type: 'number',
            value: 0
        },
        type: {
            type: 'string'
        },
        strokeWidth: {
            type: 'string',
            value: 10
        },
        hideInfo: {
            type: 'boolean',
            value: false
        },
        vertical: {
            type: 'boolean',
            value: false
        },
        active: {
            type: 'boolean',
            value: false
        }
    }
};