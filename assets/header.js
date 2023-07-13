import { createApp, ref, watch } from "vue";

import DarkMode from "dark-mode-plugin";
import Cart from "cart-plugin";

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
