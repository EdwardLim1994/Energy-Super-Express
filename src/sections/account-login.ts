import { createApp, ref, watch } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";

export default function accountLoginFormApp() {
	return createApp({
		...appConfig,
	}).mount("#account-login-form");
}
