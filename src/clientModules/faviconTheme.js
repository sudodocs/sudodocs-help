// Keeps the favicon in sync with the site's own light/dark toggle
// (document.documentElement's data-theme attribute), matching the same
// pattern sudodocs-app uses for its favicon. baseUrl is '/' for this site,
// so these root-absolute paths are safe without needing useBaseUrl (client
// modules run outside React, so hooks aren't available here anyway).
const FAVICON_URLS = {
  light: '/img/favicon-light.ico',
  dark: '/img/favicon-dark.ico',
};

function applyFavicon(theme) {
  const link = document.querySelector('link[rel="icon"]');
  if (link) {
    link.href = FAVICON_URLS[theme] || FAVICON_URLS.light;
  }
}

if (typeof window !== 'undefined') {
  const root = document.documentElement;

  applyFavicon(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');

  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.attributeName === 'data-theme') {
        applyFavicon(root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light');
      }
    }
  }).observe(root, {attributes: true, attributeFilter: ['data-theme']});
}
