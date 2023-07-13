import { cartAPI } from "./helper.js";
import _ from "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js";

export default {
	install: (app, config) => {
		app.mixin({
			data() {
				return {
					cart: null,
					isItemsEmpty: false,
					isFetching: true,
				};
			},
			async created() {
				const res = await cartAPI.getCart();

				this.isFetching = false;
				if (res?.data) {
					this.cart = res.data;
				}
			},
			watch: {
				cart(newCart, oldCart) {
					if (_.isEmpty(newCart?.items)) {
						this.isItemsEmpty = true;
					} else {
						this.isItemsEmpty = false;
					}
				},
			},
			methods: {
				async addCartItem(id, qty) {
					const res = await cartAPI.addToCart(id, qty);

					if (res?.data) {
						location.reload();
					}
				},
				async removeCartItem(event, i) {
					this.isFetching = true;
					event.preventDefault();
					const res = await cartAPI.updateCart({
						line: i,
						quantity: 0,
					});

					if (res?.data) {
						const cartRes = await cartAPI.getCart();
						this.cart = cartRes.data;
					}
					this.isFetching = false;
				},
				async updateCartItem(event, i, quantity) {
					this.isFetching = true;
					event.preventDefault();

					const res = await cartAPI.updateCart({
						line: i,
						quantity: parseInt(quantity),
					});

					if (res?.data) {
						const cartRes = await cartAPI.getCart();
						this.cart = cartRes.data;
					}
					this.isFetching = false;
				},
			},
		});
	},
};
