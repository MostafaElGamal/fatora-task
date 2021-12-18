import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { endPointsInstance, uploadInstance } from "@/plugins/AxiosInstances";
import { storeArrayInLocalStorage } from "@/helpers/GlobalHelpers";

Vue.config.productionTip = false;
Vue.prototype.$api = endPointsInstance;
Vue.prototype.$uploadApi = uploadInstance;
Vue.prototype.$storeArrayInLocalStorage = storeArrayInLocalStorage;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
