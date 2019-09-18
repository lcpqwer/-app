import Vue from 'vue'
import App from './App'
import store from './store'


Vue.config.productionTip = false
Vue.prototype.$store = store

App.mpType = 'app'
import home from './pages/home/home.vue'
Vue.component('home',home)
import talk from './pages/talk/home.vue'
Vue.component('talk',talk)
import user from './pages/user/home.vue'
Vue.component('user',user)


const app = new Vue({
    ...App
})
app.$mount()
