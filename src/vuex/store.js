import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
	user:{},
	city:{},
	productdetail:{},
	footerButtonList:{}
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
	},
	UPDATEFOOTERBUTTON(state,param){
		state.footerButtonList = param;
	}
}

const getters = {
	getUser:state => {return state.user},
	getCity:state => {return state.city},
	getProduct:state => {return state.productdetail},
	getFooterButton:state => {return state.footerButtonList}
}
export default new Vuex.Store({state,getters,mutations});


