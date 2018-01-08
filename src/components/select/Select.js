export default {
    template: `
<div class="bell-select"
    {{#if style}} style="{{style}}"{{/if}}
>
    <div class="bell-select-button" on-click="toggleMenu()">
        <input type="hidden" />
        <span class="bell-select-placeholder">
            {{{defaultText}}}
        </span>

        <span class="bell-select-arrow"></span>
    </div>

    <div class="bell-select-dropdown{{#if !visible}} bell-hide{{/if}}"
    {{#if style}} style="{{style}}"{{/if}}
    >
        <ul class="bell-select-dropdown-list">
            <li class="bell-select-dropdown-item">
                dasdsad
            </li>
        </ul>
    </div>
</div>
    `,

    propTypes: {

        style: {
            type: 'string'
        },

        defaultText: {
            type: 'string'
        },

        disabled: {
            type: 'string'
        },

        autoComplete: {
            type: 'string'
        }
    },

    data: function () {
        return {
            visible: false
        }
    },

    methods: {
        toggleMenu: function () {
            var me = this;
            if (me.get('disabled') || me.get('autoComplete')) {
                return false;
            }
            me.set({
                visible: !me.get('visible')
            });
        }
    },

    watchers: {
        value: function (value) {
            console.log(value)
        }
    },

    afterMount: function () {

    }
}