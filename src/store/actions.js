import * as types from './mutation-types.js';
export const addToCart = function({commit}, product) {
	commit(types.ADD_TO_CART, {product});
}
