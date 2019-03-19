import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";
import App from "./AppRoot.vue";
import router from "./Router/index";
import store from "./Store/store";
import { sync } from "vuex-router-sync";

Vue.use(Vuetify, {
  theme: {
    primary: '#000',
    secondary: '#607d8b',
    accent: '#2196f3',
    error: '#f44336',
    warning: '#ff5722',
    info: '#00bcd4',
    success: '#4caf50',
    texta: "#fff"
  }
});

sync(store, router);

Vue.prototype.$http = axios;

axios.defaults.headers = {
  "Content-type": "application/JSON",
  requestTime: new Date()
};

const app = new Vue({
  store,
  router,
  ...App
});

export { app, router, store };
