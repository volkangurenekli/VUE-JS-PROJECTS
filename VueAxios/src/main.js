import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { routes } from "./routes";
import axios from "axios";

axios.defaults.baseURL = "https://vueaxiosblogg.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "VGurenekli";
axios.defaults.headers.post["Content-Type"] = "application/volkangurenekli";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes,
});

new Vue({
  el: "#app",
  router,
  render: (VG) => VG(App),
});
