module.exports = {
	env: {
		node: true,
	},

	extends: [
		"eslint:recommended",
		"plugin:vue/vue3-recommended",
		"prettier",
	],

	ignorePatterns: ["env.d.ts"],

	rules: {
		"quotes": [1, "double", {"avoidEscape": true, "allowTemplateLiterals": true}]
	},
};
