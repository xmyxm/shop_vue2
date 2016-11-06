import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user:{},
	city:{},
	productdetail:{}
}

const mutations = {
	UPDATEUSER(state,param){
		state.user = param;
	},
	UPDATECITY(state,param){
		state.city = param;
	},
	UPDATEPRODUCT(state,param){
		state.productdetail = param;
	}
}

const getters = {
	getUser:state => {return state.user},
	getCity:state => {return state.city},
	getProduct:state => {return state.productdetail}
}
export default new Vuex.Store({state,getters,mutations});


