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

          <b-col cols="12" class="mb-2 p-2 mt-3 text-center text-goll">
             <b-button 
                variant="outline-success" 
                @click="$router.push('/product')">   
                Lihat Semua Product
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
		document.title = "Home";						

		this.onLoad();	
	},

	data(){
		return{
			loadingSkeleton : true,
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
		}		
	},

	methods:{
		onLoad(){
			this.$axios.get("api/product")
			.then(res => {
				this.theData = res.data;
				this.loadingSkeleton = false;	
			});		
		},	
	}
}
</script>