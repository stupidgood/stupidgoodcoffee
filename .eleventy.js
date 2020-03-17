const fs = require('fs')

module.exports = function (eleventyConfig) {
  /**
   * Opts in to a full deep merge when combining the Data Cascade.
   *
   * @link https://www.11ty.dev/docs/data-deep-merge/#data-deep-merge
   */
  eleventyConfig.setDataDeepMerge(true)

  /**
   * Add custom watch targets
   *
   * @link https://www.11ty.dev/docs/config/#add-your-own-watch-targets
   */
  eleventyConfig.addWatchTarget('./src/assets/')

  /**
   * Passthrough file copy
   *
   * @link https://www.11ty.io/docs/copy/
   */
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-36x36.png')
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-48x48.png')
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-72x72.png')
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-96x96.png')
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-144x144.png')
  eleventyConfig.addPassthroughCopy('./src/site/android-icon-192x192.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-57x57.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-60x60.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-72x72.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-76x76.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-114x114.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-120x120.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-144x144.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-152x152.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-180x180.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon-precomposed.png')
  eleventyConfig.addPassthroughCopy('./src/site/apple-icon.png')
  eleventyConfig.addPassthroughCopy('./src/site/browserconfig.xml')
  eleventyConfig.addPassthroughCopy('./src/site/favicon-16x16.png')
  eleventyConfig.addPassthroughCopy('./src/site/favicon-32x32.png')
  eleventyConfig.addPassthroughCopy('./src/site/favicon-96x96.png')
  eleventyConfig.addPassthroughCopy('./src/site/favicon.ico')
  eleventyConfig.addPassthroughCopy('./src/site/manifest.json')
  eleventyConfig.addPassthroughCopy('./src/site/ms-icon-70x70.png')
  eleventyConfig.addPassthroughCopy('./src/site/ms-icon-144x144.png')
  eleventyConfig.addPassthroughCopy('./src/site/ms-icon-150x150.png')
  eleventyConfig.addPassthroughCopy('./src/site/ms-icon-310x310.png')

  /**
   * Add filters
   *
   * @link https://www.11ty.io/docs/filters/
   */

  /**
   * Add Transforms
   *
   * @link https://www.11ty.io/docs/config/#transforms
   */
  if (process.env.ELEVENTY_ENV === 'production') {
    eleventyConfig.addTransform('htmlmin', require('./src/utils/htmlmin.js'))
  }

  /**
   * Override BrowserSync Server options
   *
   * @link https://www.11ty.dev/docs/config/#override-browsersync-server-options
   */
  eleventyConfig.setBrowserSyncConfig({
    notify: true,
    snippetOptions: {
      rule: {
        match: /<\/head>/i,
        fn: function (snippet, match) {
          return snippet + match
        },
      },
    },
    // Set local server 404 fallback
    callbacks: {
      ready: function (err, browserSync) {
        const content_404 = fs.readFileSync('dist/404.html')

        browserSync.addMiddleware('*', (req, res) => {
          // Provides the 404 content without redirect.
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  return {
    dir: {
      layouts: '_layouts',
      input: 'src/site',
      output: 'dist',
    },
    passthroughFileCopy: true,
    templateFormats: ['njk', 'md'],
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
  }
}
