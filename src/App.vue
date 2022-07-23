<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue"
import LocaleChanger from "@/components/LocaleChanger.vue"
</script>

<template>
	<AppHeader />
	<router-view />

	<p>{{ $t("hello") }}</p>

	<locale-changer />
</template>

<style lang="scss">
// MAIN STYLES DONT SCOPED!!
</style>
