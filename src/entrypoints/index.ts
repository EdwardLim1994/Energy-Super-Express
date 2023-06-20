import { createApp, ref } from "vue/dist/vue.esm-bundler";
import * as bootstrap from "bootstrap";
import { appConfig } from "@/config";

import headerApp from "@/sections/header";
import accountRegisterFormApp from "@/sections/account-register";
import accountLoginFormApp from "@/sections/account-login";
import footerApp from "@/sections/footer";
import productDetailApp from "@/sections/product-detail";

(function () {
	bootstrap;

	headerApp();
	footerApp();
	accountRegisterFormApp();
	accountLoginFormApp();
	productDetailApp();

	createApp({
		...appConfig,
		setup() {
			const count = ref(0);

			return {
				count,
			};
		},
	}).mount("#hello-world");
})();
