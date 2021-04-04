import Vue from "vue";
import VueRouter from "vue-router";
import Store from  '@/store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
	mode : "history",
	base : "/",
	routes: [
	    {path: '/product/:id',name: 'product-detail',component : () => import(/* webpackChunkName: "user-product-detail" */ './views/ProductDetail')},
		{path: '/product',name: 'product',component : () => import(/* webpackChunkName: "user-product" */ './views/Product')},
		{path: '/notification',name: 'notification',component : () => import(/* webpackChunkName: "user-notification" */ './views/Notification')},
		{path: '/profil',name: 'profil',component : () => import(/* webpackChunkName: "user-profil" */ './views/Profil')},
		{path: '/cart',name: 'cart',component : () => import(/* webpackChunkName: "user-cart" */ './views/Cart')},	
		{path: "/signup",name: "signup",component: () => import(/* webpackChunkName: " user-signup" */ './views/Signup')},
		{path: "/signin",name: "signin",component: () => import( /* webpackChunkName : "user-signin" */ './views/Signin')},
		{path: "*",name: "home",component : () => import ( /* webpackChunkName: "user-home" */ './views/Home')},	 	 		
	]
});

/* HANDLE CLIENT ROUTING */
router.beforeEach((to,from,next) => {	
	if(['profil','cart','notification','profil'].includes(to.name) && window.laravel.is_login === 'false'){
		next({path: "/signin"});
	}else if(['signin','signup'].includes(to.name) && window.laravel.is_login === 'true'){			
		next({path: "/"});
	}else{
		next();
	}
});

export default router;