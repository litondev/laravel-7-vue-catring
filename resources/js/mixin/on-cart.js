export default {
	methods: {
	  	onCart(id){
      		if(!this.isLogin){
		        this.$router.push("/signin");
      		}else{      
      			if(this.idCartLoading){
      				return false;
      			}

      			this.idCartLoading = id;

	        	this.$axios.post("api/user/cart",{
	        		id : id
	        	})
        		.then(res => {
	          		this.$store.commit('SET_CART',res.data.cart ? res.data.cart : null);
          			this.$toaster.success("Berhasil memasukan ke keranjang");
	        	  	this.$router.push("/cart");
        		})
        		.catch(err => {
          			if(err.response && err.response.status == 422){
	            		this.$toaster.error(err.response.data.error);         
          			}else if(err.response && err.response.status == 500){
	            		this.$toaster.error(err.response.data.message);
          			}else{
            			this.$toaster.error("Terjadi Kesalahan");
          			}       

          			this.idCartLoading = false;
	        	});
      		}    	
		},
		isLoadingCart(id){      
      return this.idCartLoading ? (this.idCartLoading === id ? true : false) : false;      
    }
	}
}