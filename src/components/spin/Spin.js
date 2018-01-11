export default {
    template: `
<div class="bell-spin
{{#if size}} bell-spin-{{size}}{{/if}}
">
    {{#if text}}
        <span class="bell-spin-text">
            {{text}}
        </span>
    {{else}}
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
        <span class="bell-spin-item"></span>
    {{/if}}
</div>
    `,
    propTypes: {
        size: {
            type: 'string'
        },
        text: {
            type: 'string'
        }
    }
}