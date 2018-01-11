export default {
    template: `
<div class="bell-spinner
{{#if size}} bell-spinner-{{size}}{{/if}}
{{#if fix}} bell-spinner-{{fix}}{{/if}}
">
    {{#if text && type != 'circle'}}
        <span class="bell-spinner-text">
            {{text}}
        </span>
    {{else}}
        <div class="bell-spinner-list">
            {{#if type == 'circle'}}
                <i class="bell-spinner-icon bell-icon bell-icon-load-c" style="font-size: 18px;"></i>
                <span class="bell-spinner-text">
                    {{text}}
                </span>
            {{else}}
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
                <span class="bell-spinner-item"></span>
            {{/if}}
        </div>
    {{/if}}
</div>
    `,
    propTypes: {
        size: {
            type: 'string'
        },
        text: {
            type: 'string'
        },
        fix: {
            type: 'string'
        },
        type: {
            type: 'string'
        }
    }
}