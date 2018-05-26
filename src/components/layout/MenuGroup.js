export default {
    template: `
        <div class="bell-menu-group">
            <div class="bell-menu-group-title">
                {{title}}
            </div>
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,

    propTypes: {
        title: {
            type: 'string'
        }
    }
}