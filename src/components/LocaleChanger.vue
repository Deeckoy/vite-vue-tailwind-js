<template>
	<div class="locales">
		<select v-model="locale">
			<option
				v-for="currLocale in availableLocales"
				:key="currLocale"
				:value="currLocale"
				class="locale"
			>
				{{ currLocale }}
			</option>
		</select>
	</div>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useI18n } from 'vue-i18n'

const { availableLocales, locale } = useI18n()
var selectedLocale

watch(locale, (newLocale) => {
	if (newLocale) localStorage.locale = newLocale
	selectedLocale = localStorage.locale
})
</script>

<style scoped lang="scss"></style>
