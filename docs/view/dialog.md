> 基础用法

    export default {
        template: `
          <div>
            <Button on-click="openDialog()">open a dialog</Button>
            <Dialog open="{{open}}" on-maskClick="closeDialog()">
              <template slot="title">
                确认要删除吗？
              </template>
              <div>
                这里是弹框的内容呀
              </div>

              <template slot="actions">
                <Button on-click="closeDialog()" variants="info">cancel</Button>
                <Button on-click="closeDialog()" variants="danger">delete</Button>
              </template>
            </Dialog>
          </div>
        `,
        methods: {
          openDialog: function () {
            this.set({
              open: 1
            });
          },
          closeDialog: function () {
            this.set({
              open: 0
            });
          }
        }
    }