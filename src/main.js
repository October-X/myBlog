import Vue from 'vue'
import './mock'
import App from './App.vue'
import "./styles/global.less"
import router from './router'
import showMessage from "./utils/showMessage";
import store from './store'
//初始化setting数据
store.dispatch("setting/fetchSetting");
Vue.prototype.$showMessage = showMessage;

//注册全局指令
import vLoading from './directives/loading'
import vLazy from './directives/lazy'
//导入事件总线
import './eventBus'
Vue.directive("loading",vLoading);
Vue.directive('lazy',vLazy);




new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
