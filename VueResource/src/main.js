import Vue from "vue";
import App from "./App.vue";
import VueResource from "vue-resource";

Vue.use(VueResource);
Vue.http.options.root = "https://vuejsvueresourcevg.firebaseio.com/";

/*

Vue.http.interceptors.push((requests, next) => {
  if (requests.methods === "POST") {
    requests.methods === "PUT";
  }

  next();
});

*/

new Vue({
  el: "#app",
  render: (h) => h(App),
});
