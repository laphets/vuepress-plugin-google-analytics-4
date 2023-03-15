/* global GTAG_ID, gtag */
export default ({ router }) => {
  // Google analytics 4 integration
  if (process.env.NODE_ENV === 'production' && GTAG_ID && typeof window !== 'undefined') {
    (function (i, s, o, g, r, a, m) {
      i.dataLayer = i.dataLayer || []
      i['GoogleAnalyticsObject'] = r
      i[r] = i[r] || function () {
        i.dataLayer.push(arguments)
      }
      a = s.createElement(o)
      m = s.getElementsByTagName(o)[0]
      a.async = 1
      a.src = g
      m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.googletagmanager.com/gtag/js?id={GTAG_ID}'.replace("{GTAG_ID}", GTAG_ID), 'gtag')

    gtag('js', new Date());
    gtag('config', GTAG_ID);

    router.afterEach(function (to) {
      var pageview = {
        page_title: router.app.$title,
        page_location: router.app.$withBase(to.fullPath)
      }
      gtag('event', 'page_view', pageview);
    })
  }
}