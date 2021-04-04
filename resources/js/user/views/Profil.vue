<template>
	<Main>
		<div class="pt-3 pb-3 pl-5 pr-5 mt-2 mb-2">
			<b-row>
				<b-col xl="6" lg="6" md="6" sm="12" class="text-center mb-5">
					<h5>Update Foto</h5>

					<b-avatar 
				     	size="200px" 
				     	class="mt-3 mb-3"
				     	variant="none"
				     	:src="baseUrl+'/assets/images/users/'+form.photo">
				    </b-avatar>		

				    <form id="form-upload-image">
				   		<input 
					   		type="file" 
					   		name="photo"
				   			class="form-control" 
				   			@change="imageChange">

				   		<div class="small text-left">
				   			* Ukuran max foto 10 mb <br>
				   			* Foto harus jpg,png dan jpeg <br>				   			
				   		</div>
				   	</form>

				   	<b-button 
			    		type="submit"					    		
		    			variant="success"
		    			class="mt-3"
		    			:disabled="!isValidImage"
		    			@click="onSubmitUploadForm"
		    			block>
		    			<b v-if="!loadingUploadForm">
		    				Kirim
		    			</b>
						<b-spinner 
							label="Spinning" 
							style="width: 1rem; height: 1rem;"
							v-if="loadingUploadForm"/>
					</b-button>
				</b-col>

				<b-col xl="6" lg="6" md="6" sm="12">
					<h5>Update Data</h5>

					<ValidationObserver
  						v-slot="{invalid,validate}">  				
						<b-form 	
							@submit.prevent="validate().then(onSubmitForm(invalid))">								
							<b-form-group
								description="Username tidak dapat dirubah"
								label="Username"
								label-for="username">
								<b-form-input
									id="username"
									type="text"
									v-model="form.username"
									:disabled="true"/>								
							</b-form-group>

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


							<ValidationProvider 
					      		name="password" 
					      		rules="min:8">					      		
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
					      		name="password confirm" 
					      		rules="required|min:8">					      		
						    	<b-form-group		
									slot-scope="{errors,valid}"    				
						      		:description="errors[0] ? '' : 'Masukan password konfirmasi anda'"
						      		label="Password"
						      		label-for="password">					      		
						      			<b-form-input
						      				type="password"
						      				id="password_confirm" 
						      				v-model="form.password_confirm" 
						      				:state="errors[0] ? false : (valid ? true : null)">
						      			</b-form-input> 
	  									<b-form-invalid-feedback>
	  										{{ errors[0] }}
	  								</b-form-invalid-feedback>  						
						    	</b-form-group>
							</ValidationProvider>

				    		<b-button 
					    		type="submit"					    		
				    			variant="success"
				    			class="mt-3"
				    			block>
				    			<b v-if="!loadingForm">Kirim</b>
								<b-spinner 
									label="Spinning" 
									style="width: 1rem; height: 1rem;"
									v-if="loadingForm"/>
							</b-button>
					    </b-form>
					</ValidationObserver>
				</b-col>
			</b-row>	
		</div>
	</Main>
</template>

<script>
import ValidasiPhone from "@/mixin/validasi-phone.js";
import Main from "@/user/layouts/main.vue";
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
		Main,
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
		document.title = "Profil";		
				
		window.scroll({
        	top : 0,
        	behavior: 'smooth'
        });

        this.setForm();
	},

	data(){
		return{
			loadingForm : false,
			loadingUploadForm : false,
			isValidImage : false,
			form : {
				username : null,
				email : null,
				phone : null,
				password : null,
				password_confirm : null,
				photo : null
			},
		}
	},

	computed: {		
		baseUrl(){
			return window.laravel.base_url;
		}		
	},

	methods:{
		onSubmitForm(invalid){		
			if(invalid){
				return false;
			}

			if(this.loadingForm){
				return false;
			}

    		if(!this.validasiMobile()){
    			return false;
    		}    		

			this.loadingForm = true;

			this.$axios.put("/api/user/"+this.form.id,this.form)
			.then(res => {
				this.$store.commit("SET_USER",res.data.user);
				this.$toaster.success("Berhasil update");			
				this.setForm();
			}).catch(err => {
				if(err.response && err.response.status == 422){
    				this.$toaster.error(err.response.data.error);    			
    			}else if(err.response && err.response.status == 500){
    				this.$toaster.error(err.response.data.message);
    			}else{
    				this.$toaster.error("Terjadi Kesalahan");
    			}
			})
			.finally(() => {
				this.loadingForm = false;
			});
		},

		onSubmitUploadForm(){
			if(this.loadingUploadForm){
				return false;
			}

			if(!this.isValidImage){
				return false;
			}

			this.loadingUploadForm = true;

			let form = document.getElementById("form-upload-image");      
			var formData = new FormData(form);

			this.$axios.post("/api/user/"+this.form.id+"/photo",formData)
			.then(res => {						
				this.isValidImage = false;
				document.getElementById("form-upload-image").reset();  
				this.$store.commit("SET_USER",res.data.user);				  
				this.$toaster.success("Berhasil update");		
				this.setForm();
			})
			.catch(err => {
				if(err.response && err.response.status == 422){
    				this.$toaster.error(err.response.data.error);    			
    			}else if(err.response && err.response.status == 500){
		    		this.$toaster.error(err.response.data.message);
    			}else{
	    			this.$toaster.error("Terjadi Kesalahan");
    			}
			})
			.finally(() => {
				this.loadingUploadForm = false;
			});			
		},

		imageChange(evt){
			this.isValidImage = false;

			let target = evt.target.files[0]

			if(target){
           		let type = target["type"];
           		let size = target["size"];

           		if(size > 10000000){
            		document.getElementById("form-upload-image").reset();       
	            	this.$toaster.error("Maaf ukuran file sudah melebihi 10 mb");        
           		}else if(type == "image/png" || type == "image/jpg" || type == "image/jpeg" || type == "image/gif"){
             		this.isValidImage = true;
           		}else{
					document.getElementById("form-upload-image").reset();       
	            	this.$toaster.error("Maaf ukuran file harus gambar");        
           		}
        	}
		},

     	setForm(){     		
     		this.form = {
        		...this.$store.state.user,
        		password : null,
        		password_confirm : null
        	}
     	}
	}
}
</script>
