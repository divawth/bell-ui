export default {
    template: `
<div class="bell-row
{{#if gutter}} bell-row-gutter{{/if}}
{{#if type}} bell-row-{{type}}{{/if}}
{{#if justify}} bell-row-flex-{{justify}}{{/if}}
{{#if align}} bell-row-flex-{{align}}{{/if}}
" style="{{style}}">
    {{$children}}
</div>
    `,

    propTypes: {
        gutter: {
            type: ['number', 'string']
        },
        type: {
            type: 'string'
        },
        justify: {
            type: 'string'
        },
        align: {
            type: 'string'
        }
    },

    data: function () {
        let me = this;
        return {
            style: ''
        }
    },

    computed: {
        style: function () {
            var me = this;
            var gap = me.get('gutter') / 2;
            var style = '';
            style = 'margin-left: -' + gap + 'px;margin-right: -' + gap + 'px;';
            return style;
        }
    },

    afterMount: function () {
        var me = this;
        me.fire(
            'updateGridGutter',
            {
                gutter: me.get('gutter')
            },
            true
        );
    }
}