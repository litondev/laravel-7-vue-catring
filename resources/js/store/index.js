import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state : {
		isMobile : window.laravel.is_mobile === 'true' ? true : false,
		user : {},
		config : [],
		cart : null,
		search : null
	},	
	mutations : {
		SET_CONFIG : function(state,data){
			state.config = data;
		},
		SET_USER : function(state,data){
			state.user = data;
		},
		SET_IS_MOBILE : function(state,data){
			state.isMobile = data;
		},
		SET_CART : function(state,data){
			state.cart = data;
		},
		SET_ALL : function(state,data){
			state.cart = data.cart;
			state.user = data.user;
			state.config = data.config;
		},
		SET_SEARCH :  function(state,data){
			state.search = data;
		}
	}	
});