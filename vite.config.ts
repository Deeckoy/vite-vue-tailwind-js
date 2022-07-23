import { defineConfig } from "vite"
import { resolve, dirname } from "node:path"
import { fileURLToPath, URL } from "url";

import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";
import { vueI18n } from "@intlify/vite-plugin-vue-i18n"

export default defineConfig({
	plugins: [
		vue(),
		WindiCSS({
			preflight: true,
			sortUtilities: true,
		}),
		vueI18n({
			include: resolve(dirname(fileURLToPath(import.meta.url)), "./src/locales/**"),
		})
	],

	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},

	css: {
		preprocessorOptions: {
			scss: {
				additionalData: "@import '@/styles/main.scss';",
			},
		},
	},
});
