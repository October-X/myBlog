//公司的方法，直接创建一个空的vue实例，里面就会有
import Vue from 'vue'
const app = new Vue({})
Vue.prototype.$bus = app
export default app//方便其他js的调用。