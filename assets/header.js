import {
	createApp,
	ref,
	watch,
} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.prod.min.js";

import DarkMode from "./darkModePlugin";
import Cart from "./cartPlugin";

createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
	setup() {
		const isLogin = ref(false);
		const isPasswordMatch = ref(false);
		const hasCheckedToS = ref(false);
		const password = ref(null);
		const confirmPassword = ref(null);
		const closeAnnoucement = ref(false);

		watch(confirmPassword, () => {
			if (confirmPassword.value === password.value) {
				isPasswordMatch.value = true;
			} else {
				isPasswordMatch.value = false;
			}
		});

		return {
			isLogin,
			isPasswordMatch,
			password,
			confirmPassword,
			hasCheckedToS,
			closeAnnoucement,
		};
	},
})
	.use(DarkMode)
	.use(Cart)
	.mount("#section-header");
