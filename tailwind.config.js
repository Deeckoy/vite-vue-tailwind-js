/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			"primary": "#6080FF",
			"green": "#6BCEA5",
			"background": {
				"primary": "#282B30",
				"overlay": "#202225",
				"overlay-2": "#1C1D20",
			},
			"gray": {
				"500": "#686B6E",
				"400": "#939597",
				"300": "#D4D8DB",
			},
		},
	},
	plugins: [],
}
