import Vue from "nativescript-vue";

import MasterPage from "./components/Master";

new Vue({

    render: h => h('frame', [h(MasterPage)])
  
  }).$start();