/**
 * 商品列表组件
 */
<template>
	<div class="product-list">
		<h2>productList</h2>
		<div class="list">
			<div v-for="p in products" class="product">
				<span class='name'>{{p.name}}</span>  
				<br />
				<s v-if='p.oldPrice'>&yen;{{p.oldPrice}}&nbsp;</s> 
				<span class='price'>&yen;{{p.price}}</span>
				<br />
				<span class="sell-count">月销 {{p.sellCount}} 份</span>
				<button @click='addToCart(p)'>加入购物车</button>
			</div>	
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		computed: mapGetters({
			products: 'getProducts'		
		}),
		created: function() {		//进入当前页面的时候获取商品列表
			this.$store.dispatch('getAllProducts');
		},
		methods: {
			addToCart: function(p){
				this.$store.dispatch('addToCart', p);	
			}
		}
		
	}
</script>

<style lang="scss">
	.product-list{
		h2{
			padding: 20px 20px 0 20px;
			color: #666;
		}
		.product {
			position: relative;
			padding: 10px;
			
			button {
				position: absolute;
				right: 50px;
				bottom: 20px;
				padding: 5px;
				border-radius: 5px;
				border: 1px solid #aaa;
				background: #eee;
			}
		}
	}	
</style>