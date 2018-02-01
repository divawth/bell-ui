export default {
    template: `
        <div class="bell-collapse
        {{#if className}} {{className}}{{/if}}
        ">
            {{$children}}
        </div>
    `,
    propTypes: {
        className: {
            type: 'string'
        }
    }
}