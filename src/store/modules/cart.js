import * as types from '../mutation-types.js';
const state = {
	cartProducts: []		// 购物车商品
};

const getters = {
	getCartProducts: function(state) {
		return state.cartProducts;	
	}
};

const actions = {
	checkout: function({commit, state}) {	// 结算的 action, 结算后会清空购物车，同时修改商品月销量
		let saleProducts = {};
		for(var i=0; i<state.cartProducts.length; i++) {
			saleProducts[state.cartProducts[i].id] = state.cartProducts[i].quantity;	
		}
		commit(types.UPDATE_PRODUCT, {saleProducts});	// 修改月销量
		commit(types.CHECKOUT);		// 清空购物车
	}
};

const mutations = {
	[types.ADD_TO_CART]: function(state, {product}) {		// 加入到购物车的操作
		let goods = state.cartProducts.find(function(p){
			return p.id === product.id;
		});
		if(!goods) {
			product.quantity = 1;
			state.cartProducts.push(product);	
		} else {
			goods.quantity ++;
			state.cartProducts.push('1');	// 这两行代码是为了实时更新购物车的商品而写的，如果没有这两行代码会有bug
			state.cartProducts.pop();
		}
	},
	[types.CHECKOUT]: function(state) {	// 清空购物车
		state.cartProducts = [];
	}
};

export default {
	state,
  	getters,
  	actions,
  	mutations
}
