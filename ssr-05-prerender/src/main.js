/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";

Vue.config.productionTip = false;
Vue.use(VueMeta);

new Vue({
  router,
  store,
  render: h => h(App),
  // 添加mounted，不然不会执行预编译
  mounted() {
    document.dispatchEvent(new Event("render-event"));
  }
}).$mount("#app");
