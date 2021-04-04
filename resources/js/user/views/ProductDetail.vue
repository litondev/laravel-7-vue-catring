<template>
	<Main>
		<b-container 
			class="mt-5 mb-5"
			v-if="!loadingSkeleton">
			<b-row>
				<b-col xl="6" md="6" sm="12" lg="6" class="mb-3">
					<b-carousel
      					id="carousel-1"
      					v-model="slide"
      					:interval="4000"
      					controls
      					indicators
      					background="#ababab"      				
      					style="text-shadow: 1px 1px 2px #333;">
					      <b-carousel-slide 
					      	alt="image"
					      	v-for="(itemImage,indexImage) in theData.get_images"
					      	:key="indexImage"
					      	:img-src="baseUrl+'/assets/images/products/'+itemImage">
					      </b-carousel-slide>
					</b-carousel>

					<b-row class="mt-2">
						<b-col cols="2" 
							:key="indexImage"
							v-for="(itemImage,indexImage) in theData.get_images">
							<a :href="baseUrl+'/assets/images/products/'+itemImage" 
								target="_blank">
								<img class="img-fluid" 
								:src="baseUrl+'/assets/images/products/'+itemImage"/>
							</a>
						</b-col>
					</b-row>
				</b-col>

				<b-col xl="6" md="6" sm="12" lg="6">
					<div class="fosi-25 mb-2">
						<div class="clearfix">
							<div class="float-left">
								<h4>{{theData.name}}</h4>
							</div>							
							<div class="float-right">
								<b-button 
									style="border-radius:50%;padding-left:8px;padding-right:8px;background:rgb(63,230,159);border:0px"
									@click="onCart(theData.id)">
									 <b-spinner 
            							label="Spinning" 
            							style="width: 1rem; height: 1rem;"        
            							v-if="isLoadingCart(theData.id)"></b-spinner>       
          							<b-icon 
            							icon="basket"
            							v-if="!isLoadingCart(theData.id)">                
          							</b-icon>  
								</b-button>
							</div>
						</div>
					</div>								

					<div class="fosi-25 mb-2">
						Di Update Pada : {{theData.get_human_updated_at}}
					</div>

					<b-row class="mt-3">
						<b-col cols="6" class="text-center mb-2">
							<b-icon 
								class="text-goll"
								icon="clock"
								style="height:2rem;width:2rem"></b-icon>
							<br>
								Stock
							<br>
							<span class="fosi-15 text-goll">
								{{theData.stock}}
							</span>
						</b-col>

						<b-col cols="6" class="text-center mb-2">
							<b-icon 
								class="text-goll"
								icon="cash"
								style="height:2rem;width:2rem"></b-icon>
							<br>
								Harga
							<br>
							<span class="fosi-15 text-goll">
								Rp {{theData.price.toLocaleString('id-ID',{currency : "IDR"})}}
							</span>
						</b-col>						
					</b-row>					
				</b-col>

				<b-col cols="12" class="mt-5">
					<b-col cols="12" 
						class="box-goll bora-10 p-3">
						<div class="row">
							<div class="col-lg-1 col-md-1 col-6 cursor-pointer-goll"
							 	@click="detailShow = 'description'">
							 	Deskripsi
							</div>
						
							<div class="col-lg-1 col-md-1 col-6 cursor-pointer-goll"
							 	@click="detailShow = 'review'">
 							 	Review
							</div>
						</div>				
					</b-col>

					<b-col cols="12" class="bora-10 mt-3 box-goll p-3">
						<div v-if="detailShow == 'description'">
							<span v-html="theData.description" />
						</div>						

						<div 
							v-if="detailShow == 'review'">
							<div v-if="theData.reviews.data.length">
								<b-col>
								 Review								
								</b-col>

								<b-col 
									v-for="(itemReview,indexReview) in theData.reviews.data" 
									:key="indexReview">
									<hr>
									<span class="fosi-12 text-goll">
										<b-avatar 
								     		size="sm" 								    
								     		variant="none"
								     		:src="baseUrl+'/assets/images/users/'+itemReview.user.photo">
								    	</b-avatar>
			    						{{itemReview.user.username}} {{itemReview.get_human_created_at}}
									</span>								
									<br>
									<span class="fosi-15">
										{{itemReview.description}}
									</span>								
								</b-col>

								<b-col class="mb-2 p-2 mt-3 text-center text-goll"
						            v-if="theData.reviews.pagination.lastPage > theData.reviews.pagination.currentPage">
					              <b-button variant="outline-success"
					                @click="onNext">
					                Klik melihat review lainnya
					                <b-spinner 
					                  label="Spinning" 
					                  style="width: 1rem; height: 1rem;"
					                  v-if="loadingNext"></b-spinner>
					              </b-button>
						         </b-col>  
							</div>
							<div v-else>
								<b-col cols="12" class="text-center mb-5">
				                	<img :src="baseUrl+'/assets/images/not-found.png'"
				                  		style="width:20%"/>
				              	</b-col>
				              	<b-col cols="12" class="fosi-15 text-center">
				              		<b>Data tidak ditemukan</b>
				              	</b-col> 
				              	<b-col cols="12" class="fosi-13 text-center">
				              		Data review tidak ditemukan
				              	</b-col>
							</div>							
						</div>
					</b-col>
				</b-col>
			</b-row>
		</b-container>

		<product-detail-skeleton 
			:loadingSkeleton="loadingSkeleton"/>
	</Main>	
</template>

<script>
import Main from "@/user/layouts/main.vue";
import ProductDetailSkeleton from "@/user/components/loadings/ProductDetailSkeleton.vue";
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
	BAvatar,
	BCarousel,
	BCarouselSlide
} from "bootstrap-vue";
import onCart from "@/mixin/on-cart.js";

export default{
  	mixins : [onCart],

	components : {
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
		BAvatar,
		BCarousel,
		BCarouselSlide,
		ProductDetailSkeleton
	},
	data(){
		return {
			theData : {},
			loadingSkeleton : true,
			slide: 0,
			detailShow : null,
			idCartLoading : null
		}
	},
	computed:{
		baseUrl(){
			return window.laravel.base_url;
		},
		isLogin(){
			return window.laravel.is_login === 'true' ? true : false
		}
	},
	mounted(){	
		this.onLoad();
	},
	methods: {
		onLoad(){
			this.$axios.get("api/product/"+this.$route.params.id)
			.then(res => {
				this.theData = res.data;
				this.loadingSkeleton = false;
			})
			.catch(err => {
				if(err.response && err.response.status == 422){
    				this.$toaster.error(err.response.data.error);    			
    			}else if(err.response && err.response.status == 500){
		    		this.$toaster.error(err.response.data.message);
    			}else{
	    			this.$toaster.error("Terjadi Kesalahan");
    			}
			});
		}
	}
}
</script>