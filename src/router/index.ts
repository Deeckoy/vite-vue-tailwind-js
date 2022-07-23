import { createRouter, createWebHistory } from "vue-router"

import Home from "@/views/HomeView.vue"
import About from "@/views/AboutView.vue"
import NotFoundView from "@/views/NotFoundView.vue"

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
		// https://next.router.vuejs.org/guide/advanced/lazy-loading.html
	},
	{
		path: "/:pathMatch(.*)*",
		name: "NOT_FOUND",
		component: NotFoundView,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
