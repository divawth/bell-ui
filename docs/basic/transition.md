    export default {
        template: `
            <Transition name="fade-in-linear">
                <div on-click="click()">
                    fade-in-linear
                </div>
            </Transition>
        `,
        methods: {
            click: function () {
                console.log('3232')
            }
        }
    }