<template>
	<Main>
		<div class="bora-10 pt-3 pb-3 pl-5 pr-5 mt-2 mb-2" 
			v-if="!loadingSkeleton">
				<b-row class="pl-2 pr-2">		
				
				<b-col cols="12" class="mb-2 p-2 text-center text-goll">
					<h2>Notification</h2>
				</b-col>

				<b-col cols="12" class="box-goll mb-5 p-3 bora-10 cursor-pointer-goll"
					v-for="(item,indexItem) in theData.data"
					:key="indexItem">							
					<div class="pb-2 clearfix fosi-15">
						<div class="float-left">
						 <b>{{item.title}}</b>
						</div>

						<div class="float-right">
						  {{item.get_human_created_at}}
						</div>
					</div>

					<div class="fosi-12">
						{{item.description}}
					</div>
				</b-col>

				<b-col cols="12" class="mb-2 p-2 text-center text-goll"
					v-if="theData.pagination.lastPage > theData.pagination.currentPage">
					 <b-button variant="outline-success"
					 	@click="onNext">
						Klik melihat data lainnya 
						<b-spinner 
							label="Spinning" 
							style="width: 1rem; height: 1rem;"
							v-if="loadingNext"></b-spinner>
					 </b-button>
				</b-col>

			   <b-col class="p-5 ml-2 mr-2 box-goll"
			   	  v-if="!theData.data.length">              
	              <b-col cols="12" class="text-center mb-5">
	                <img 
	                  :src="baseUrl+'/assets/images/not-found.png'"
	                  style="width:10%"/>
	              </b-col>
	              <b-col cols="12" class="fosi-15 text-center"><b>Data tidak ditemukan</b></b-col> 
	              <b-col cols="12" class="fosi-13 text-center">Data notification tidak ditemukan</b-col>
        		</b-col>
			</b-row>
		</div>

		<notification-skeleton 
			:loadingSkeleton="loadingSkeleton" />	
	</Main>
</template>

<script>
import NotificationSkeleton from "@/user/components/loadings/NotificationSkeleton.vue";
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
		document.title = "Notification";						
		this.onLoad();	
	},

	data(){
		return{
			loadingSkeleton : true,
			loadingNext : false,
			theData : {},			
		}
	},

	computed: {		
		baseUrl(){
			return window.laravel.base_url;
		}		
	},

	components: {
		Main,
		NotificationSkeleton,
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

	methods:{
		onLoad(){
			this.$axios.get("api/user/notification")
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

			this.$axios.get("api/user/notification?page="+(this.theData.pagination.currentPage+1))
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