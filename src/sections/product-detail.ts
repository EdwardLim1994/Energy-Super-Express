import { createApp, reactive, ref } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";
import { breakpoint } from "@/helper";
import { LG } from "@/constants/breakpoint";
import Cart from "@/plugins/Cart";

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
				compare_at_price: null,
				max: null,
			});

			const qty = ref(1);

			function selectVariant(id, title, price, compare_at_price, qty) {
				chosenVariant.id = id;
				chosenVariant.title = title;
				chosenVariant.price = price;
				chosenVariant.compare_at_price = compare_at_price;
				chosenVariant.max = qty;
			}

			return { isDesktop, chosenVariant, selectVariant, qty };
		},
	})
		.use(Cart)
		.mount("#product-detail");
}
