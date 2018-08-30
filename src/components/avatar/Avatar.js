export default {
    template: `
        <div class="bell-avatar
            {{#if className}} {{className}}{{/if}}
            {{#if size}} bell-avatar-{{size}}{{/if}}
            {{#if shape}} bell-avatar-{{shape}}{{/if}}
        " style="font-size: {{fontSize}}px;
            background-color: {{backgroundColor}};
            color: {{color}};
            {{#if style}} {{style}}{{/if}}"
        >
            {{#if src}}
                <img{{#if srcset}} srcset="{{srcset}}"{{/if}} ondragstart="return false" src="{{src}}" />
            {{else}}
                {{#if hasSlot('children')}}
                    <slot name="children" />
                {{/if}}
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
        fontSize: function (value) {
            return value != null ? +value : 14;
        },
        backgroundColor: {
            type: 'string'
        },
        color: {
            type: 'string'
        }
    }
}