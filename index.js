const { path } = require('@vuepress/shared-utils')

/**
 * @type {import('@vuepress/types').Plugin}
 */
module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const gtag = options.gtag || siteConfig.gtag
    const GTAG_ID = gtag || false
    return { GTAG_ID }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
