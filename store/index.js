//引入vue与vuex
import Vue from 'vue'
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		pid: 1
	},
	mutations:{
		loginout(state, pid){
			state.pid = pid
		}
	}
})