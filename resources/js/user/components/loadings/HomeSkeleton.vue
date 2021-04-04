<template>
  <b-skeleton-wrapper 
  	:loading="loadingSkeleton">
      <template #loading>
       <b-container class="mt-5 mb-5">           
            <b-row>
              <b-col md="4" lg="4" sm="12" xl="4"
                class="mb-5"
                v-for="(xItem,itemIndexX) in 12"
                :key="itemIndexX">
                <b-skeleton                                    
                  height="200px"/>

                <b-row>
                  <b-col cols="3">
                    <b-skeleton                                                
                      height="60px"
                      style="border-radius:50%"/>
                  </b-col>

                  <b-col cols="9">
                    <b-skeleton                    
                      height="30"/>

                    <b-skeleton                  
                      width="200px"
                      height="30"/>

                    <b-skeleton                    
                      height="30"/>

                    <b-skeleton                  
                      width="200px"
                      height="30"/>
                  </b-col>
                </b-row>
              </b-col>
            </b-row>        
        </b-container>
      </template>    
  </b-skeleton-wrapper>
</template>

<script>
import {
  BSkeleton,
  BSkeletonWrapper,
  BContainer,
  BRow,
  BCol
} from "bootstrap-vue";

export default{
  components: {
    BSkeleton,
    BSkeletonWrapper,
    BContainer,
    BRow,
    BCol
  },
  props:{
    loadingSkeleton : {
      type : Boolean,
      default : true
    }
  }
}
</script>