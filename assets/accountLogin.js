import {
	createApp,
	ref,
} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.prod.min.js";

createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
	setup() {
		const forgetPassword = ref(false);
		return {
			forgetPassword,
		};
	},
}).mount("#account-login-form");
