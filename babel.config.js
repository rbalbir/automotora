const presets = [
	"@babel/preset-env",
	"@babel/preset-react",
	"@babel/preset-flow",
	"@babel/typescript",
];

const sharedPlugins = [
	"add-module-exports",
	"babel-plugin-transform-es2015-modules-commonjs",
	"@babel/plugin-proposal-optional-chaining",
	[
		"@babel/plugin-proposal-decorators",
		{
			legacy: true,
		},
	],
	[
		"@babel/plugin-proposal-class-properties",
		{
			loose: true,
		},
	],
	"transform-class-display-name",
	"jsx-control-statements",
	"@babel/plugin-proposal-export-default-from",
	"@babel/proposal-object-rest-spread",
	"@babel/plugin-syntax-dynamic-import",
	[
		"module-resolver",
		{
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			root: ["./src"],
		},
	],
	"transform-export-extensions",
];

module.exports = {
	presets: [["@babel/preset-env"]],
	plugins: ["react-hot-loader/babel", ...sharedPlugins],
	env: {
		production: {
			presets: [["@babel/preset-env"]],
			plugins: [
				[
					"babel-plugin-transform-react-remove-prop-types",
					{
						removeImport: false,
					},
				],
				...sharedPlugins,
			],
		},
		test: {
			// jest runs on node, so need the dynamic import transpile
			presets: [["@babel/preset-env"]],
			plugins: ["babel-plugin-dynamic-import-node", ...sharedPlugins],
		},
		node: {
			// env specific config to change dynamic import to require on node
			presets: [["@babel/preset-env"]],
			plugins: ["babel-plugin-dynamic-import-node", ...sharedPlugins],
		},
	},
};
