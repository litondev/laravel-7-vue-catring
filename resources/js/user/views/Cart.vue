<template>
	<Main>
		Cart
	</Main>
</template>

<script>
import Main from "@/user/layouts/main.vue";

export default{
	components : {
		Main
	},
	created(){
		document.title = "Cart";
	}
}
</script>