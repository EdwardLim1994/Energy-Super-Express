import { createApp, ref, watch } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";

export default function footerApp() {
	return createApp({
		...appConfig,
	}).mount("#section-footer");
}
