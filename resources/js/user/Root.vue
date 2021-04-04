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
import 'vue-loading-overlay/dist/vue-loading.css';

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
      let promiseConfig = this.$axios.get("/api/user/setting")
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });

      let promiseUser = this.$axios.get("/api/user")
        .then(res => res.data)
        .catch(err => {
          console.log(err);
        });

      Promise.all([promiseConfig,promiseUser]).then(res => {              
          this.$store.commit("SET_ALL",{
            cart : res[1] ? (res[1].cart || null) : null,
            user : res[1] || null,          
            config : res[0],
          });
          
          this.reload = false;
      });
  }
}
</script>