<template>
	<div class='list'>
		<h1>Shopping Cart</h1>	
		<hr/>
		<product></product>
		<hr />
		<cart></cart>
	</div>
</template>

<style lang="scss" type="text/css">
	.list {
		h1{
			padding: 20px;	
			color: #aaa;
		}
	}
</style>

<script>
	import product from '../product/product.vue';
	import cart from '../cart/cart.vue';
	export default {
		components: {
			product,
			cart
		}
	}
	
</script>