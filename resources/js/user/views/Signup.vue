<template>
	<div style="padding-top:95px;padding-bottom:100px">
		<div class="box-signin">
			<b-row class="pt-3 pb-3 mt-4 mb-4">
				<b-col md="6" 
					lg="6" 
					sm="12" 
					xl="6" 
					class="text-center pt-4 pb-4 pl-2 pr-2">
					<img 
						:src="baseUrl+'/assets/images/welcome.png'"
						style="max-width:50%">
				</b-col>
				<b-col 
					md="5" 
					lg="5" 
					sm="12" 
					xl="5" 
					class="p-3">
					<div class="text-center">
						<h3>Daftar</h3>
					</div>

  					<ValidationObserver
  						v-slot="{invalid,validate}">  					
						<b-form 	
							@submit.prevent="validate().then(onSubmit(invalid))" 
							class="p-3">							
							<ValidationProvider
								name="username"					
								rules="required">
								<b-form-group
									slot-scope="{errors,valid}"
									:description="errors[0] ? '' : 'Masukan username andaa'"
									label="Username"
									label-for="username">
									<b-form-input
										id="username"
										type="text"
										v-model="form.username"
										:state="errors[0] ? false : (valid ? true : null)"/>
									<b-form-invalid-feedback>
										{{errors[0]}}
									</b-form-invalid-feedback>
								</b-form-group>
							</ValidationProvider>

							<ValidationProvider 
					      		name="email"
					      		rules="required|email">	
								<b-form-group				    
									slot-scope="{errors,valid}"
						      		:description="errors[0] ? '' : 'Masukan email anda'"
						      		label="Email"
					      			label-for="email">
					      			<b-form-input 
						      			id="email" 
						      			type="email"
					      				v-model="form.email"
					      				:state="errors[0] ? false : (valid ? true : null)">
					      			</b-form-input>
					      			<b-form-invalid-feedback>
	  									{{ errors[0] }}
	  								</b-form-invalid-feedback>  
					    		</b-form-group>
					    	</ValidationProvider>

							<ValidationProvider 
					      		name="password" 
					      		rules="required|min:8">					      		
						    	<b-form-group		
									slot-scope="{errors,valid}"    				
						      		:description="errors[0] ? '' : 'Masukan password anda'"
						      		label="Password"
						      		label-for="password">					      				
						      			<b-form-input
						      				type="password"
						      				id="password" 
						      				v-model="form.password" 
						      				:state="errors[0] ? false : (valid ? true : null)">
						      			</b-form-input> 
	  									<b-form-invalid-feedback>
	  										{{ errors[0] }}
	  									</b-form-invalid-feedback>  						
						    	</b-form-group>
							</ValidationProvider>

							<ValidationProvider
								name="phone"
								rules="required">
								<b-form-group
									slot-scope="{errors,valid}"
									:description="errors[0] ? '' : 'Masukan no telp anda (*harus memakai 08)'"
									label="No Telp"
									label-for="phone">
									<b-form-input
										type="text"
										id="phone"
										v-model="form.phone"
										:state="errors[0] ? false : (valid ? true : null)"/>
									<b-form-invalid-feedback>
										{{errors[0]}}
									</b-form-invalid-feedback>
								</b-form-group>
							</ValidationProvider>				
						
					    	<b-button 
					    		type="submit"					    		
					    		variant="success"
					    		class="mt-3"
					    		block>
					    		<b v-if="!loadingForm">Masuk</b>
								<b-spinner 
									label="Spinning" 
									style="width: 1rem; height: 1rem;"
									v-if="loadingForm"/>
							</b-button>
					    </b-form>
					</ValidationObserver>

				    <b-col cols="12">
				    	<router-link to="/">Kembali ke home</router-link>
				    </b-col>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<style scoped>
.box-signin{
	width:80%;
	margin:auto;
	background:white;
}
</style>

<script>
import ValidasiPhone from "@/mixin/validasi-phone.js";

import {
	BCol,
	BContainer,	
	BIcon,	
	BFormInput,
	BButton,
	BFormInvalidFeedback,
	BFormGroup,
	BForm,
	BRow,
	BSpinner,
	BAvatar
} from "bootstrap-vue";

export default{
	mixins : [ValidasiPhone],
	
    components: {
		BCol,
		BContainer,	
		BIcon,	
		BFormInput,
		BButton,
		BFormInvalidFeedback,
		BFormGroup,
		BForm,
		BRow,
		BSpinner,
		BAvatar
    },

	mounted(){
		document.title = "Daftar";
	},
	
    data(){
    	return {
    	 	form : { 
    	 		password : null,
    	 		email : null,    	 		
    			username : null,
    			phone : null 		
    	 	},
    	 	loadingForm : false
    	}
    },

    computed:{
    	baseUrl(){
			return window.laravel.base_url;
		}
	},

    methods:{
    	onSubmit(isInvalid){
    		if(isInvalid){
    			return false;
    		}

			if(this.loadingForm){
				return false;
			}

			if(!this.validasiMobile()){
				return false;
			}    		

			this.loadingForm = true;    			

			this.$axios.post("/api/user/signup",this.form)
			.then(res => {    				
				this.$toaster.success("Berhasil daftar");
				this.$router.push({name : "signin"});        			 
			})
			.catch(err => {    			
				if(err.response && err.response.status == 422){
					this.$toaster.error(err.response.data.error);    			
				}else if(err.response && err.response.status == 500){
					this.$toaster.error(err.response.data.message);
				}else{
					this.$toaster.error("Terjadi Kesalahan");
				}

				this.loadingForm = false;    			
			});    		
		
     	}     	
    }
}
</script>