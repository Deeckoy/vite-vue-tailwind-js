<template>
	<h3>Home</h3>

	<img src="@/assets/logo.png" alt="" />
	<img src="/favicon.ico" alt="" />

	<Counter />
</template>

<script lang="js">
import Counter from "@/components/AppCounter.vue"

export default {
	name: "HomeView",
	components: {
		Counter,
	},
}
</script>

<style scoped lang="scss"></style>
