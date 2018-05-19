export default {
    template: `
<div class="bell-avatar
{{#if className}} {{className}}{{/if}}
{{#if size}} bell-avatar-{{size}}{{/if}}
{{#if shape}} bell-avatar-{{shape}}{{/if}}
" style="font-size: {{fontSize}}px;
background-color: {{backgroundColor}};
color: {{color}}">
    {{#if src}}
        <img{{#if srcset}} srcset="{{srcset}}"{{/if}} ondragstart="return false" src="{{src}}" />
    {{else}}
        <slot name="children" />
    {{/if}}
</div>
    `,
    propTypes: {
        shape: {
            type: 'string'
        },
        src: {
            type: 'string'
        },
        srcset: {
            type: 'string'
        },
        size: {
            type: 'string'
        },
        className: {
            type: 'string'
        },
        fontSize: {
            type: ['string', 'number']
        },
        backgroundColor: {
            type: 'string'
        },
        color: {
            type: 'string'
        }
    }
}