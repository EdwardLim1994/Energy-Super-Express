import { createApp, ref, watch } from "vue/dist/vue.esm-bundler";

import { appConfig } from "../config";
import DarkMode from "@/plugins/DarkMode";

export default function footerApp() {
	return createApp({
		...appConfig,
	})
		.use(DarkMode)
		.mount("#section-footer");
}
