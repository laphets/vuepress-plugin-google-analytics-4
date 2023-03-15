# VuePress Google Analytics 4 Plugin

This plugin is designed to add support for [Google Analytics 4](https://support.google.com/analytics/answer/10759417) (gtag) usage in VuePress v1.x versions. The official [google analytics plugin](https://v1.vuepress.vuejs.org/plugin/official/plugin-google-analytics.html) doesn't support gtag, but this plugin serves as a workaround to enable gtag-based tracking in your VuePress site.

## Installation

To install this plugin, simply add it to your VuePress project's dependencies:

```sh
yarn add @vuepress-plugin-google-analytics-4
# OR npm install vuepress-plugin-google-analytics-4
```

## Usage

Once the plugin is installed, add the following configuration to your `config.js` file:

```js
module.exports = {
  plugins: {
    'google-analytics-4': {
        // your gtag tracking ID
        gtag: 'G-0000000000'
    }
  }
}
```

Or, in list format:

```js
module.exports = {
  plugins: [
    [
      'google-analytics-4',
      {
        // your gtag tracking ID
        gtag: 'G-0000000000'
      }
    ]
  ]
};
```

Replace `G-0000000000` with your own Google Analytics 4 tracking ID.

## Credit

Some of the code in this plugin is borrowed from the official [Google Analytics plugin](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics) for VuePress.
