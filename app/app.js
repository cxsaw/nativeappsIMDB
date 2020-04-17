import Vue from "nativescript-vue";

import MasterPage from "./components/Master";

new Vue({

    render: h => h('frame', [h(MasterPage)]),
    //force portrait
    mounted() {
      setTimeout(() => {
          orientation.setOrientation('portrait')
          orientation.disableRotation();
      },0)
  }
  
  }).$start();