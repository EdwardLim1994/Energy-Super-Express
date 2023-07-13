import "https://cdn.jsdelivr.net/npm/js-cookie@3.0.5/dist/js.cookie.min.js";

export const DarkMode = {
	install: (app, options) => {
		app.mixin({
			data() {
				return {
					isDarkMode: !!Number(Cookies.get("darkMode")) ?? false,
				};
			},
			created() {
				const htmlEl = document.getElementsByTagName("html")[0];
				htmlEl.dataset.bsTheme = this.isDarkMode ? "dark" : "light";
			},
			methods: {
				handleDarkMode: function () {
					Cookies.set("darkMode", Number(!this.isDarkMode), {
						path: "/",
						expires: 7,
					});
					location.reload();
				},
			},
		});
	},
};
