> Transfer

    export default {
        isViewFullBlock: true,
        template: `
            <div>
                <Transfer leftLabel="参加抽奖的人员名单" rightLabel="预设中奖人员" data="{{data}}" targetKeys="{{targetKeys}}" onChange="{{onChange}}"></Transfer>
            </div>
        `,
        afterMount: function () {
            var me = this;
            me.getMockData = function () {
                var mockData = [];
                for (let i = 1; i <= 20; i++) {
                    mockData.push({
                        key: i.toString(),
                        text: 'Content ' + i,
                        description: 'The desc of content  ' + i,
                        disabled: Math.random() * 3 < 1
                    });
                }
                return mockData;
            },
            me.getTargetKeys = function () {
                return ['1'];
            }
            me.set({
                data: me.getMockData(),
                targetKeys: me.getTargetKeys()
            });
        },
        data: function () {
            var me = this;
            return {
                onChange: function (targetKeys, direction, moveKeys) {

                }
            }
        },
    }