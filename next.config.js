const webpack = require('webpack')

const { parsed: myEnv } = require('dotenv').config({
	path: '/full/custom/path/to/env',
})

const withImages = require('next-images')

module.exports = withImages({
	webpack(config) {
		config.plugins.push(
			new webpack.EnvironmentPlugin({
				NODE_ENV: 'development',
				DEBUG: false,
				myEnv,
			})
		)
		return config
	},
})
