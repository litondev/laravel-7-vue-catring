<template>
  <b-skeleton-wrapper 
    :loading="loadingSkeleton">
      <template #loading>
       <b-container class="mt-5 mb-5">      
        <div v-for="(x,indexX) in 10" 
          :key="indexX" 
          class="mb-3">
          <b-row>
            <b-col 
              md="2" 
              lg="2" 
              sm="12" 
              xl="2">
              <b-skeleton 
                height="100px"/>
            </b-col>

            <b-col md="9" lg="9" sm="12" xl="9">
                <b-skeleton 
                  v-if="$store.state.isMobile"
                  v-for="(xItem,itemIndexX) in 8"              
                  :key="itemIndexX"                  
                  :width="(Math.floor(Math.random() * (+300 + 1 - +100)) + +100)+'px'"
                  height="10px"/>                

                <b-skeleton                   
                  v-if="!$store.state.isMobile"
                  v-for="(xItem,itemIndexX) in 8"              
                  :key="itemIndexX"
                  :width="(Math.floor(Math.random() * (+700 + 1 - +100)) + +100)+'px'"
                  height="10px"/>   
            </b-col>
          </b-row>
        </div>
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