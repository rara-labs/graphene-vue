import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.config.ignoredElements.push("application");

import GnComponents from "@gn-components";
Vue.use(GnComponents);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
