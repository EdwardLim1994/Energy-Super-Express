import { createApp } from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.prod.min.js";

return createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
}).mount("#account-login-form");
