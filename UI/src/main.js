import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// import VueAxios from "vue-axios";
import VueAuthenticate from "vue-authenticate";
import axios from "axios";
import GoogleSignInButton from "vue-google-signin-button-directive";
import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
// Import the styles directly. (Or you could add them via script tags.)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);
Vue.use(GoogleSignInButton);
Vue.use(axios);
Vue.use(VueAuthenticate, {
  baseUrl: "http://localhost:3000", // Your API domain
  providers: {
    google: {
      clientId:
        "963164406217-4af3e7bm05mk465ag8o463dtnqli2f00.apps.googleusercontent.com",
      redirectUri: "http://localhost:8080/auth/callback" // Your client app URL
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
