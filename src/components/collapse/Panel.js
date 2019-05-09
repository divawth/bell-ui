import template from './template/Panel.html'

export default {

  propTypes: {
    title: {
      type: 'string'
    },
    name: {
      type: 'numeric'
    },
    className: {
      type: 'string'
    },
    style: {
      type: 'string'
    }
  },

  template,

  data() {
    return {
      isOpen: false,
      accordion: false,
    }
  },

  // events: {
  //   panelAccordion(event, data) {
  //     var accordion = data.accordion;
  //     this.set({
  //       accordion
  //     });
  //   },

  //   panelActiveName(event, data) {
  //     let me = this;
  //     if (data.name === me.get('name')) {
  //       me.toggleStatus(true);
  //     }
  //     else if (me.get('accordion')) {
  //       me.toggleStatus(false);
  //     }
  //   }
  // },

  methods: {

    click() {
      this.toggle('isOpen');
    },

    // toggleStatus(isOpen) {
    //   let me = this;
    //   let arrowOpen = me.get('arrowOpen');
    //   if (isOpen == arrowOpen) {
    //     return;
    //   }
    //   if (isOpen) {
    //     me.open();

    //     if (me.get('accordion')) {
    //       me.fire(
    //         'panelOpen',
    //         {
    //           name: me.get('name')
    //         }
    //       );
    //     }
    //   }
    //   else {
    //     me.close();
    //   }

    //   me.set({
    //     arrowOpen: isOpen
    //   });
    // },

    // close() {
    //   let me = this;
    //   let innerElement = me.$refs.panelContent;
    //   innerElement.style.height = innerElement.clientHeight + 'px';

    //   closeTimer = setTimeout(
    //     () => {
    //       innerElement.style.height = 0;
    //       initTimer = setTimeout(
    //         () => {
    //           me.set({
    //             isOpen: false
    //           });
    //           innerElement.style.height = '';
    //         },
    //         100
    //       );
    //     }
    //   );
    // },

    open() {
      let me = this
      let element = me.$refs.panelContent
      me.set({
        isOpen: true
      })

      Yox.nextTick(() => {
        let height = element.clientHeight
        element.style.height = 0

        openTimer = setTimeout(
          () => {
            element.style.height = height + 'px'
            initTimer = setTimeout(
              () => {
                element.style.height = ''
              },
              100
            )
          }
        )
      })
    }
  },
  beforeDestroy() {
    let me = this;
    closeTimer = null;
    initTimer = null;
    openTimer = null;
    clearTimeout(closeTimer);
    clearTimeout(initTimer);
    clearTimeout(openTimer);
  }
};
