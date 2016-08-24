SystemJS.config({
	paths: {
		"npm:": "jspm_packages/npm/",
		"github:": "jspm_packages/github/",
		"app/": "src/"
	},
	browserConfig: {
		"baseURL": "/"
	},
	devConfig: {
		"map": {
			"plugin-babel": "npm:systemjs-plugin-babel@0.0.13"
		}
	},
	transpiler: "plugin-babel",
	packages: {
		"app": {
			"main": "app.js",
			"format": "esm",
			"meta": {
				"*.js": {
					"loader": "plugin-babel"
				}
			}
		}
	}
});

SystemJS.config({
	packageConfigPaths: [
		"github:*/*.json",
		"npm:@*/*.json",
		"npm:*.json"
	],
	map: {},
	packages: {}
});
