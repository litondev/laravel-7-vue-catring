import Vue from "vue";
import VueRouter from "vue-router";
import Store from  '@/store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode : "history",
	base : "/",
	routes: [
		{path: "*",name: "home",component : () => import ( /* webpackChunkName: "user-home" */ './views/Home'),},	 	 		
	]
});

/* HANDLE CLIENT ROUTING */
//router.beforeEach((to,from,next) => {	
	//if(window){	
		// if(['cart','profil','edit-profil','edit-password','notif','order-history','invoice','invoice-history','manual-payment','manual-payment-history'].includes(to.name) && !parseInt(window.laravel.is_login)){
		// 	next({path: "/signin"});
		// }else if(['signin','signup','forget-password','reset-password'].includes(to.name) && parseInt(window.laravel.is_login)){			
		// 	next({path: "/"});
		// }else{
		// 	if(to.name == "reset-password" && !to.query.key && !to.query.email){
		// 		next({path: "/"});
		// 	}else{				
		// 		next();
		// 	}
		// }
	//}
//});

export default router;