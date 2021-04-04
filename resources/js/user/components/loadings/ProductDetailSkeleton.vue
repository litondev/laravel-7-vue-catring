<template>
  <b-skeleton-wrapper 
  	:loading="loadingSkeleton">
      <template #loading>
       <b-container class="mt-5 mb-5">                       
            <b-row>
              <b-col md="6" lg="6" sm="12" xl="6">
                <b-skeleton                                    
                  height="300px"/>              
              </b-col>

              <b-col md="6" lg="6" sm="12" xl="6">
                <b-skeleton
                  width="100px"
                  height="30px"/>

                <b-skeleton
                  width="150px"
                  height="20px"/>

                <b-skeleton
                  height="10px"/>

                <div class="mt-4">
                  <b-skeleton                  
                    height="10px"/>

                  <b-skeleton                  
                    height="10px"/>

                  <b-skeleton                  
                    height="10px"/>

                  <b-skeleton                  
                    height="10px"/>
                </div>

                <b-row class="mt-4">
                  <b-col cols="6">
                    <b-skeleton                  
                      height="80px"/>

                    <b-skeleton
                       height="20px"/>
                  </b-col>

                  <b-col cols="6">
                    <b-skeleton                  
                      height="80px"/>

                    <b-skeleton
                       height="20px"/>
                  </b-col>

                  <b-col cols="6">
                    <b-skeleton                  
                      height="80px"/>

                    <b-skeleton
                       height="20px"/>
                  </b-col>

                  <b-col cols="6">
                     <b-skeleton                  
                      height="80px"/>

                      <b-skeleton
                       height="20px"/>
                  </b-col>
                </b-row>
              </b-col>

              <b-col cols="12" class="mt-3 mb-3">
                <b-skeleton
                  height="50px"/>

                <b-skeleton
                  height="300px"/>
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