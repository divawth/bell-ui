export default {
    template: `
        <div class="bell-player-slider"
            on-touchstart="mediaControl()"
        >
            <span class="bell-current-time">
                {{getFormatTime(currentTime)}}
            </span>

            <div class="bell-slider">
                <div class="wrapper">
                    <div class="bell-slider-track">
                        <div class="bell-slider-selection">
                        </div>
                    </div>

                    <div class="bell-slider-handle">
                        <span class="bell-handle-tooltip">
                            {{getFormatTime(sliderValue)}}
                        </span>
                        <span class="bell-handle-button">
                            <div class="bell-handle-icon"></div>
                        </span>
                    </div>
                </div>
            </div>

            <span class="bell-duration">
                {{getFormatTime(duration)}}
            </span>
        </div>
    `,
    propTypes: {

    }
};