<template>
	<AppHeader />
	<router-view />

	<p>{{ $t('hello') }}</p>

	<locale-changer />
</template>

<script lang="js">
import AppHeader from "@/components/App/AppHeader.vue"
import LocaleChanger from "@/components/LocaleChanger.vue"

export default {
	name: "App",
	components: {
		AppHeader,
		LocaleChanger,
	},
}
</script>

<style lang="scss">
// MAIN STYLES DONT SCOPED!!
</style>
