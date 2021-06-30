const withImages = require('next-images')
module.exports = withImages({
	webpack5: true,
	webpack(config, options) {
		return config
	},
})
