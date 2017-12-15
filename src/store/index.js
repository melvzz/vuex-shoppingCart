import Vue from 'vue';
import Vuex from 'vuex';
import product from './modules/product.js';
import cart from './modules/cart.js';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		product: product,
		cart: cart
	},
	actions
});
