import { createApp, ref, watch } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";

export default function accountRegisterFormApp() {
	return createApp({
		...appConfig,
		setup() {
			const isPasswordMatch = ref(false);
			const hasCheckedToS = ref(false);
			const password = ref(null);
			const confirmPassword = ref(null);

			watch(confirmPassword, () => {
				if (confirmPassword.value === password.value) {
					isPasswordMatch.value = true;
				} else {
					isPasswordMatch.value = false;
				}
			});

			return {
				isPasswordMatch,
				password,
				confirmPassword,
				hasCheckedToS,
			};
		},
	}).mount("#account-register-form");
}
