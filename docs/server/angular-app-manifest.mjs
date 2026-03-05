
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/pricing"
  },
  {
    "renderMode": 2,
    "route": "/get-in-touch"
  },
  {
    "renderMode": 2,
    "route": "/thank-you"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 459, hash: 'b77c558f1b4f07df5b3dc90c9f14a6f853ff23e7277bd219daa81d46951d774d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 972, hash: '3a74dd9d5f9e5764c32ff0cccceed535fb100a6857b697a9a05418119cdbec6d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 32799, hash: '6a33e4ec0318c3de7d985f350d36ecbfb1828052b1cc0f6da22fc943d3643691', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'pricing/index.html': {size: 39426, hash: '498a39082ee3239de698a1e225bfbdfa838fcd0f767ad5ef48699b2170859a70', text: () => import('./assets-chunks/pricing_index_html.mjs').then(m => m.default)},
    'thank-you/index.html': {size: 25920, hash: '8611921dd644a88051c58f371f03094aea6eaf63172a2c027ef60c17c1265744', text: () => import('./assets-chunks/thank-you_index_html.mjs').then(m => m.default)},
    'get-in-touch/index.html': {size: 28286, hash: 'c4f65aa558c65c0486bfeb314ff81396a456f9febe21d8ffce55cf5ae083f51a', text: () => import('./assets-chunks/get-in-touch_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
