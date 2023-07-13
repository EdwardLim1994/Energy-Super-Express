import Cookie from "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js";

export default {
	install: (app, options) => {
		app.mixin({
			data() {
				return {
					isDarkMode: !!Number(Cookie.get("darkMode")) ?? false,
				};
			},
			created() {
				const htmlEl = document.getElementsByTagName("html")[0];
				htmlEl.dataset.bsTheme = this.isDarkMode ? "dark" : "light";
			},
			methods: {
				handleDarkMode: function () {
					Cookie.set("darkMode", Number(!this.isDarkMode), {
						path: "/",
						expires: 7,
					});
					location.reload();
				},
			},
		});
	},
};
