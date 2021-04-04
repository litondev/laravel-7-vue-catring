<template>
	<div>
    <loading 
      :active.sync="reload" 
      :is-full-page="true" 
      :opacity="1"
      background-color="#fff"/>

    <router-view/>
	</div>
</template>

<script>
import TheLoading from 'vue-loading-overlay';

export default{
  components : {
    "loading" : TheLoading
  },
    
  data(){
    return {    
      reload : true
    }
  },

  created(){   
      let promiseUser = axios.get("/api/user/config")
      .then(res => {
        //this.$store.commit('SET_CONFIG',res.data);  
      })
      .catch(err => {
        console.log(err);
      });

      let promiseConfig = axios.get("/api/user")
      .then(res => {
        // this.$store.commit('SET_CART',res.data.cart ? res.data.cart : null);
        // this.$store.commit('SET_USER',Object.keys(res.data).length ? res.data : null);
      }).
      catch(err => {
        console.log(err);
      });
  }
}
</script>