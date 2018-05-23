export default {
    template: `
        <div class="bell-slider">

            <input type="hidden" model="value">

            <div class="bell-slider-bg"></div>

            <div class="bell-slider-fill"
                style="width: 0%;"
            ></div>

            <div class="bell-slider-thumb"
                style="left: 0%;"
                title="值：0；占比：0%"
            >

            </div>

        </div>
    `,
    propTypes: {
        value: {
            type: 'number',
            value: 40
        },
        max: {
            type: 'number',
            value: 100
        },
        min: {
            type: 'number',
            value: 0
        },
        step: {
            type: 'number',
            value: 1
        },
        disabled: {
            type: 'boolean',
            value: false
        },
        range: {
            type: 'boolean',
            value: false
        },
    }
};