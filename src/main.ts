import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";

import App from "@/App.vue";
import router from "@/router/index";

import en from "@/locales/en.yml"
import ru from "@/locales/ru.yml"

const i18n = createI18n({
	locale: localStorage.locale || "en",
	globalInjection: true,
	messages: {
		en,
		ru,
	}
})

const app = createApp(App)

app.use(router)
app.use(i18n)
app.use(createPinia())

app.mount("#app");
