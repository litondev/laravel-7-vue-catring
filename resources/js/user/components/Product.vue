<template>
  <b-col cols="12" 
    class="box-goll bora-10">
    <div class="mt-n2 ml-n3 mr-n3 mb-3 pos-relative-goll">
      <div class="status-sewa-product box-goll">
        <b-badge variant="success" 
          v-if="item.stock > 0">
        	Tersedia {{item.stock}}
        </b-badge>
        <b-badge variant="danger" 
          v-if="item.stock == 0">
        	Habis
        </b-badge>
      </div>

      <div class="price-product box-goll">                
        Rp {{item.price.toLocaleString('id-ID',{
        	currency : "IDR"
        })}}
      </div>

      <div class="icon-basket-product box-goll"
        @click="onCart(item.id)">              
          <b-spinner 
            label="Spinning" 
            style="width: 1rem; height: 1rem;"        
            v-if="isLoadingCart(item.id)"></b-spinner>       

          <b-icon 
            icon="basket"
            v-if="!isLoadingCart(item.id)">                
          </b-icon>    
      </div>

      <b-img-lazy                
        class="img-product"
        v-bind="configLazyLoad"
        @error.native="onImageError"
        :src="baseUrl+'/assets/images/products/'+item.get_images[0]"/>
    </div>          

    <b-col cols="12" class="pb-5">     
        <router-link :to="'/product/'+item.id" class="text-success">
          {{item.name}}
         </router-link>        
    </b-col>
  </b-col>   
</template>

<style scoped>
.img-product{
  height:200px !important;
  border-radius:10px 10px 0px 0px !important;
  width:100% !important; 
  object-fit: cover;
}

.icon-basket-product{
  position:absolute;
  right:5px;
  top:5px;
  background:rgb(63,230,159);
  padding-top:5px;
  padding-bottom:5px;
  padding-left:8px;
  padding-right:8px;
  color:white;
  border-radius:50%;
  cursor:pointer
}

.price-product{
  position:absolute;
  bottom:-10px;
  background:green;
  border-radius:0px 5px 5px 0px;
  min-width:90px;
  padding:5px;
  color:white;
}

.status-sewa-product{
  position:absolute;
  bottom:-10px;
  right:0px;
}
</style>

<script>
import {
	BCol,
	BBadge,
	BImgLazy,
  BSpinner
} from "bootstrap-vue";
import onCart from "@/mixin/on-cart.js";

export default{
  mixins : [onCart],

  props: ["item"],  

  data(){
    return{
      configLazyLoad : {
        'blank-src' : window.laravel.base_url+'/assets/images/lazy.png',
      },
      idCartLoading : null
    }
  },

  computed:{
    baseUrl(){
      return window.laravel.base_url;
    },
    isLogin(){
      return window.laravel.is_login === 'true' ? true : false
    },
  },

  methods:{  
    onImageError(evt){
      evt.target.src =  window.laravel.base_url+'/assets/images/lazy.png';
    }    
  },

  components : {
  	BCol,
  	BBadge,
  	BImgLazy,
    BSpinner
  }
}
</script>