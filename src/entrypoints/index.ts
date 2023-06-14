import { createApp, ref } from "vue/dist/vue.esm-bundler";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
	components,
	directives,
});

createApp({
	compilerOptions: {
		delimiters: ["[[", "]]"],
	},
	setup() {
		const count = ref(0);
		return {
			count,
		};
	},
})
	.use(vuetify)
	.mount("#hello-world");
