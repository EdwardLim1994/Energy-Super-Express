import { createApp, reactive, ref } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";
import { breakpoint } from "@/helper";
import { LG } from "@/constants/breakpoint";

export default function productDetailApp() {
	return createApp({
		...appConfig,
		setup() {
			const isDesktop = ref(breakpoint(LG, ">"));
			const chosenVariant = reactive({
				id: null,
				sku: null,
				title: null,
				price: null,
				max: null,
			});

			function selectVariant(id, title, price, qty) {
				chosenVariant.id = id;
				chosenVariant.title = title;
				chosenVariant.price = price;
				chosenVariant.max = qty;
			}

			return { isDesktop, chosenVariant, selectVariant };
		},
	}).mount("#product-detail");
}
