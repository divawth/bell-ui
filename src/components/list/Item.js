export default {
    template: `
        <li class="bell-item
        {{#if !disableHover}} bell-item-hover{{/if}}
        {{#if active}} bell-active{{/if}}"
        on-click="click">
            {{#if hasSlot('itemHeader')}}
                <div class="bell-item-header">
                    <slot name="itemHeader" />
                </div>
            {{/if}}

            {{#if hasSlot('itemFooter')}}
                <div class="bell-item-footer">
                    <slot name="itemFooter" />
                </div>
            {{/if}}

            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </li>
    `,
    propTypes: {
        disableHover: {
            type: 'boolean'
        },
        active: {
            type: 'boolean'
        }
    }
}