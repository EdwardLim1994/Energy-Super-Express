import { BREAKPOINT } from "./constants/breakpoint";
import axios from "axios";

type direction = ">" | "<";

export const breakpoint = (breakpoint: BREAKPOINT, direction: direction) => {
	let key = "";
	switch (direction) {
		case ">":
			key = "min";
			break;
		case "<":
			key = "max";
			break;
	}

	return window.matchMedia(`only screen and (${key}-width: ${breakpoint})`)
		.matches;
};

export const cartAPI = {
	async getCart() {
		return new Promise(async (resolve, reject) => {
			axios
				.get(window.Shopify.routes.root + "cart.js")
				.then((res) => resolve(res))
				.catch((err) => reject(err));
		});
	},
	async addToCart(id, quantity) {
		return new Promise(async (resolve, reject) => {
			axios
				.post(window.Shopify.routes.root + "cart/add.js", {
					items: [{ id, quantity }],
				})
				.then((res) => resolve(res))
				.catch((err) => reject(err));
		});
	},
	async updateCart(items) {
		return new Promise(async (resolve, reject) => {
			axios
				.post(window.Shopify.routes.root + "cart/change.js", items)
				.then((res) => resolve(res))
				.catch((err) => reject(err));
		});
	},
	async deleteCart(id) {},
};
