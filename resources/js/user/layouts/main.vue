<template>
	<div>
		<b-navbar 
	      toggleable="lg"
	      style="background:#6a62e6ff">
	  		<b-container>

	        <!--
	        	<b-navbar-brand to="/">	          
	          	<img 
	            	height="45px"
	            	:src="baseUrl+'/images/logo-light.png'">	          
	        	</b-navbar-brand>
	        -->

	         <b-navbar-nav class="ml-auto" 
	          v-if="isMobile">
	          <b-nav-item>
	            <span class="text-light mr-3"
	              @click="searchMobileShow = true">
	              <b-icon icon="search"></b-icon>
	            </span>

	            <span class="text-light"             
	              @click="navbarMobileShow = true">
	              <b-icon icon="grid"></b-icon>
	            </span>
	          </b-nav-item>
	         </b-navbar-nav>

	        <b-collapse is-nav>
	          <b-navbar-nav class="ml-auto text-white">
	            <b-nav-item>          
	              <b-form-input 
	              	v-model="search"
	                size="sm" 
	                class="mr-sm-2" 
	                placeholder="Search . . ."
	                @keyup.enter="onSearch($event)">
	              </b-form-input>
	            </b-nav-item>
	            
	            <b-nav-item
	              to="/cart">    
	              <span class="text-light position-relative-goll">
	                <b-icon icon="basket"></b-icon>
	                <b-icon icon="circle-fill" 
	                  v-if="$store.state.cart" 
	                  style="color:red;height:0.5rem;width:0.5rem;position:absolute"></b-icon>
	              </span>
	            </b-nav-item>

	            <b-nav-item
	              to="/notification"
	              v-if="isLogin">
	              <span class="text-light">
	                <b-icon icon="bell"></b-icon>
	              </span>
	            </b-nav-item>

	            <b-nav-item 
	              to="/profil"
	              v-if="isLogin">
	              <span class="text-light">
	                <b-icon icon="person"></b-icon>
	              </span>
	            </b-nav-item>

	            <b-nav-item
	              @click="logout()"
	              v-if="isLogin">
	              <span class="text-light">
	                Keluar
	              </span>
	            </b-nav-item>

	            <b-nav-item               
	              to="/signin"
	              v-if="!isLogin">
	              <span class="text-light">
	                Masuk
	              </span>
	            </b-nav-item>

	            <b-nav-item 
	              to="/signup"
	              v-if="!isLogin">
	               <span class="text-light">
	                Daftar
	              </span>
	            </b-nav-item>

	          </b-navbar-nav>
	        </b-collapse>
	      </b-container>
	    </b-navbar>
		<slot/>
	</div>
</template>

<script>
import {
	BNavbar,
	BContainer,
	BNavbarBrand,
	BCollapse,		
	BNavItem,
	BIcon,
	BNavbarNav,
	BFormInput
} from "bootstrap-vue";
import "@/library/bootstrap-icon.js";

export default{
	data(){		
		return {
			search : this.$store.state.search
		}
	},
	components : {
		BNavbar,
		BContainer,
		BNavbarBrand,
		BCollapse,		
		BNavItem,
		BIcon,
		BNavbarNav,
		BFormInput,
	},
	computed:{
		baseUrl(){
			return window.laravel.base_url;
		},
		isLogin(){
			return window.laravel.is_login === 'true' ? true : false
		},
		isMobile(){
			return window.laravel.is_mobile === 'true' ? true : false
		}
	},
	methods: {
		logout(){
			this.$axios.post("api/user/logout")
			.then(res => {
				window.location.href = this.baseUrl;
			});				
		},
		onSearch(event){			
			this.$store.commit("SET_SEARCH",event.target.value);
			this.$route.name !== 'product' ? this.$router.push('/product') : '';
		}
	}
}
</script>
