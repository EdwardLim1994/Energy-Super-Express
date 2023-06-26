import { getCookie, setCookie } from "typescript-cookie";

export default {
	install: (app, options) => {
		app.mixin({
			data() {
				return {
					isDarkMode: !!Number(getCookie("darkMode")) ?? false,
				};
			},
			created() {
				const htmlEl = document.getElementsByTagName("html")[0];
				htmlEl.dataset.bsTheme = this.isDarkMode ? "dark" : "light";
			},
			methods: {
				handleDarkMode: function () {
					setCookie("darkMode", Number(!this.isDarkMode), {
						path: "/",
						expires: 7,
					});
					location.reload();
				},
			},
		});
	},
};
