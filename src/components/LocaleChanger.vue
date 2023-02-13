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

<script lang="js">
import { watch } from "vue"
import { useI18n } from "vue-i18n"

export default {
	name: "LocaleChanger",

	setup() {
		const { availableLocales, locale } = useI18n()

		watch(locale, (newLocale) => {
			if (newLocale) {
				localStorage.locale = newLocale
			}

			return { selectedLocale: localStorage.locale }
		})

		return {
			availableLocales,
			locale,
		}
	},
}
</script>

<style scoped lang="scss"></style>
