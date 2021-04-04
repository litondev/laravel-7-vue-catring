<template>
	<Main>		
     <b-container class="mt-3 mb-3"
      v-if="!loadingSkeleton">
        <b-row class="p-4">
          <b-col md="4" xl="4" lg="4" sm="6"
            class="mb-5"
            v-for="(item,itemIndex) in theData.data"
            :key="itemIndex">
           	<Product
           		:item="item"/>
          </b-col>

          <b-col cols="12" class="mb-2 p-2 mt-3 text-center text-goll"
          	v-if="theData.pagination.lastPage > theData.pagination.currentPage">
             <b-button 
                variant="outline-success" 
                @click="onNext()">   
                Lihat Product Lainnya
				<b-spinner 
					label="Spinning" 
					style="width: 1rem; height: 1rem;"
					v-if="loadingNext"></b-spinner>
              </b-button>
          </b-col>          
        </b-row>
     </b-container>

     <home-skeleton
        :loadingSkeleton="loadingSkeleton"/> 
	</Main>
</template>

<script>
import Product from "@/user/components/Product.vue";
import HomeSkeleton from "@/user/components/loadings/HomeSkeleton.vue";
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
	mounted(){
		document.title = "Product";						

		this.onLoad();	
	},

	data(){
		return{
			loadingSkeleton : true,
			loadingNext : false,
			theData : {},			
		}
	},

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
		HomeSkeleton,
		Product
	},	

	computed: {		
		baseUrl(){
			return window.laravel.base_url;
		},		
		search(){
			return this.$store.state.search
		}
	},

	watch:{
		search(newValue){
			this.loadingSkeleton = true;
			this.onLoad();			
		}
	},

	methods:{
		onLoad(){					
			this.$axios.get("api/product?search=" + (this.search || ''))
			.then(res => {
				this.theData = res.data;
				this.loadingSkeleton = false;	
			});		
		},	
		onNext(){
			if(this.loadingNext){
				return false;
			}

			this.loadingNext = true;

			let param = "?search=" + (this.search || '');
				param += "&page=" + (this.theData.pagination.currentPage+1);

			this.$axios.get("api/product"+param)
			.then(res => {
				this.theData = {				
					pagination : {
						...res.data.pagination			
					},
					"data" : [
						...this.theData.data,
						...res.data.data
					]
				};
			})
			.finally(() => {
				this.loadingNext = false;
			});
		}
	}
}
</script>