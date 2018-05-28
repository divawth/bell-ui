export default {
    template: `
        <div class="bell-alert-desc">
            {{#if hasSlot('children')}}
                <slot name="children" />
            {{/if}}
        </div>
    `,
    afterMount: function () {
        var me = this;
        me.fire(
            'hasDesc'
        );
    }
}