import {
	createApp,
	ref,
	watch,
} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.3.4/vue.esm-browser.prod.min.js";

createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
	setup() {
		const isPasswordMatch = ref(false);
		const hasCheckedToS = ref(false);
		const subscribeNewsLetter = ref(false);
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
			subscribeNewsLetter,
			isPasswordMatch,
			password,
			confirmPassword,
			hasCheckedToS,
		};
	},
}).mount("#account-register-form");
