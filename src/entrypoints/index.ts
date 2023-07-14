import * as bootstrap from "bootstrap";

import headerApp from "@/sections/header";
import accountRegisterFormApp from "@/sections/account-register";
import accountLoginFormApp from "@/sections/account-login";
import footerApp from "@/sections/footer";
import productDetailApp from "@/sections/product-detail";

(function () {
	window.bootstrap = bootstrap;
	headerApp();
	footerApp();
	accountRegisterFormApp();
	accountLoginFormApp();
	productDetailApp();
})();
