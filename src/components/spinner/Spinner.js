export default {
    template: `
<div class="bell-spinner
{{#if size}} {{size}}{{/if}}
{{#if type}} {{type}}{{/if}}
{{#if fix}} bell-spinner-fix{{/if}}
" {{#if style}} style="{{style}}"{{/if}}>

    {{#if hasSlot('children')}}
        <slot name="children" />
    {{else}}
        <div class="bell-spinner-main">
            <span class="bell-spinner-dot"></span>
            {{#if text}}
                <span class="bell-spinner-text">
                    {{text}}
                </span>
            {{/if}}
        </div>
    {{/if}}
</div>
    `,
    propTypes: {
        size: {
            type: 'string'
        },
        style: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        fix: {
            type: 'boolean'
        },
        type: {
            type: 'string'
        }
    }
}