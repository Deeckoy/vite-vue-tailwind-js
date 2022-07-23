import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import WindiCSS from "vite-plugin-windicss";

import { fileURLToPath, URL } from "url";

export default defineConfig({
	plugins: [
		vue(),
		WindiCSS()
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
