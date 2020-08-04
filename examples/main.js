import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import PornUI from '../src/index'

Vue.use(VueRouter)
Vue.use(PornUI)

const router = new VueRouter({
    routes: []
})

new Vue({
    router: router,
    render: h => h(App)
}).$mount("#app")