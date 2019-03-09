import Vue from "vue";
import App from "@/App";
import router from "@/router";
import store from "@/store";
import { AUTH } from "@/firebase";

Vue.config.productionTip = false;

// handle page reloads
let app;

// eslint-disable-next-line no-unused-vars
AUTH.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});
