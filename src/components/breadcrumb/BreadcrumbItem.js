export default {
    template: `
        <span class="bell-breadcrumb-item bell-text">
            <a {{#if to}}href="{{to}}"{{/if}} class="bell-breadcrumb-link">
                <slot name="children" />
            </a>
            <span class="bell-breadcrumb-gap">
                {{#if separator}}
                    {{separator}}
                {{else}}
                    /
                {{/if}}
            </span>
        </span>
    `,

    propTypes: {
        to: {
            type: 'string'
        },
        separator: {
            type: 'string'
        }
    }
}