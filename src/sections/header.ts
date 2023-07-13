import { createApp, ref, watch } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";
import DarkMode from "@/plugins/DarkMode";
import Cart from "@/plugins/Cart";

export default function headerApp() {
	return createApp({
		...appConfig,
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
}
