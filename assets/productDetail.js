import { createApp, reactive, ref } from "vue";

import { breakpoint } from "helper";
import Cart from "cart-plugin";
createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
	setup() {
		const isDesktop = ref(breakpoint("768px", ">"));
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

		function incrementQty() {
			qty.value = qty.value + 1;
		}

		function decrementQty() {
			qty.value = qty.value - 1;
		}

		return {
			isDesktop,
			chosenVariant,
			qty,
			selectVariant,
			incrementQty,
			decrementQty,
		};
	},
})
	.use(Cart)
	.mount("#product-detail");
