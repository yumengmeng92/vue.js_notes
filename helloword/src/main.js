import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";

Vue.prototype.$axios = axios;

// 启动时生成提示信息
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app"); // 挂载到public\index.html的id属性元素上
