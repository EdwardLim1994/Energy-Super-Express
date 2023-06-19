import { createApp, ref } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";
import { breakpoint } from "@/helper";
import { LG } from "@/constants/breakpoint";

export default function productDetailApp() {
	return createApp({
		...appConfig,
		setup() {
			const isDesktop = ref(breakpoint(LG, ">"));

			return { isDesktop };
		},
	}).mount("#product-detail");
}
