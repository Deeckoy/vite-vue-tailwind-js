import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import "virtual:windi.css";

import App from "@/App.vue";
import router from "@/router/index";

const i18n = createI18n({
	locale: localStorage.locale || "en",
	globalInjection: true,
	messages: {
		en: {
			"hello": "Hello!"
		},

		ru: {
			"hello": "Привет!"
		},

		de: {
			"hello": "Hallo!"
		},
	}
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount("#app");
