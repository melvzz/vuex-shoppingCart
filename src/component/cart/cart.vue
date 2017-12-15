/**
 * 购物车组件
 */
<template>
	<div class="cart">
		<h2>ShopCart</h2>	
		<div class="cart-product">
			<p v-for='p in cartProducts' class='pro'>
				{{p.name}} - {{p.price | currency}} x {{p.quantity}}
			</p>	
		</div>
		<p class="total" v-show="cartProducts.length > 0">Total: {{total | currency}}</p>
		<p class="checkout" v-show="cartProducts.length > 0" @click='checkout'>结算</p>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	export default {
		computed: {
			...mapGetters({
				cartProducts: 'getCartProducts'	
			}),
			total: function() {
				return this.cartProducts.reduce(function(total, p){
					return total + p.price * p.quantity;
				},0)
			}
		},
		filters: {
			currency: function(price){
				return '￥' + price;
			}
		},
		methods: {
			checkout: function() {
				let self = this;
				this.$confirm(`总金额￥${this.total}, 确定支付吗?`, function(response){
					if(response.check === '1') {
						self.$store.dispatch('checkout');
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	.cart{
		h2 {
			padding: 20px 20px 0 20px;
			color: #666;
		}
		.pro {
			padding-top: 5px;
			padding-left: 20px;
		}
		.total {
			padding: 5px 20px;
		}
		.checkout {
			display: inline-block;
			padding: 5px;
			margin: 5px 20px;
			border: 1px solid #eee;
			border-radius: 5px;
			background: #eee;
			cursor: pointer;
		}
	}
</style>