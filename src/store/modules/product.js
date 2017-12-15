import data from '../product.json';
import * as types from '../mutation-types.js';
const products = data.product;

const state = {
	products : []		//商品列表
};

const getters = {
	getProducts: function(state) {
		return state.products;
	}
};

const actions = {
	getAllProducts: function({commit}){		// 获取当前商品列表的 action
		commit(types.PRODUCTS, {products});	
	}
}

const mutations = {
	[types.PRODUCTS]: function(state, { products }) {
		state.products = products;
	},
	[types.UPDATE_PRODUCT]: function(state, {saleProducts}){	// 结算后修改商品列表的月销量
		for(let key in saleProducts) {
			state.products.find(function(p){
				if(p.id === key) {
					p.sellCount = parseInt(p.sellCount) + parseInt(saleProducts[key]);
				}
			});
		}
	}
}

export default {
	state,
  	getters,
  	actions,
  	mutations
}


