if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise(s => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, c) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let t = {};
    const r = e => n(e, i),
      o = { module: { uri: i }, exports: t, require: r };
    s[i] = Promise.all(a.map(e => o[e] || r(e))).then(e => (c(...e), t));
  };
}
define(["./workbox-e13f827e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/BuBnpWNMXqbiUijvMSDaY/_buildManifest.js",
          revision: "fe4b9376740332c73ea58f91b0c2bd9a",
        },
        {
          url: "/_next/static/BuBnpWNMXqbiUijvMSDaY/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/_next/static/chunks/b98bc7c3-3b2716b59bdfc294.js",
          revision: "3b2716b59bdfc294",
        },
        {
          url: "/_next/static/chunks/framework-114634acb84f8baa.js",
          revision: "114634acb84f8baa",
        },
        {
          url: "/_next/static/chunks/main-1172270af657421f.js",
          revision: "1172270af657421f",
        },
        {
          url: "/_next/static/chunks/pages/_app-721305a8fe0f43b3.js",
          revision: "721305a8fe0f43b3",
        },
        {
          url: "/_next/static/chunks/pages/_error-8353112a01355ec2.js",
          revision: "8353112a01355ec2",
        },
        {
          url: "/_next/static/chunks/pages/cart-3427223a61138896.js",
          revision: "3427223a61138896",
        },
        {
          url: "/_next/static/chunks/pages/index-a8d3e1bf407e4630.js",
          revision: "a8d3e1bf407e4630",
        },
        {
          url: "/_next/static/chunks/pages/login-2f9ba5f2dfccccad.js",
          revision: "2f9ba5f2dfccccad",
        },
        {
          url: "/_next/static/chunks/pages/products/%5Bslug%5D-021b6726b0f1364a.js",
          revision: "021b6726b0f1364a",
        },
        {
          url: "/_next/static/chunks/pages/register-c48d36cfde8fcb6d.js",
          revision: "c48d36cfde8fcb6d",
        },
        {
          url: "/_next/static/chunks/pages/success-f256600177ac5ef1.js",
          revision: "f256600177ac5ef1",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-59c5c889f52620d6.js",
          revision: "59c5c889f52620d6",
        },
        {
          url: "/_next/static/css/f2f3c94915ff47d3.css",
          revision: "f2f3c94915ff47d3",
        },
        { url: "/bgImage.jpg", revision: "e2fe5957c1cd7cdc6de935ed4bcf792c" },
        { url: "/bmw.jpg", revision: "a78f031bde5c94e9063e96b7f5fe4790" },
        { url: "/explore.png", revision: "02e52fd4a86b1544732b1b133d6b0b9e" },
        { url: "/favicon.ico", revision: "f057d077dcf832aa48a628b066fd04e3" },
        { url: "/heart.png", revision: "51dcfa4b7082f212a26ad3839173e60f" },
        {
          url: "/icon-192x192.png",
          revision: "c82ad2d7035be11a9280b13e2a40f003",
        },
        {
          url: "/icon-256x256.png",
          revision: "f65e00cbac9380673a11bb9afad1b36a",
        },
        {
          url: "/icon-384x384.png",
          revision: "8b4e234cbf060e294c3fe2ebef563432",
        },
        {
          url: "/icon-512x512.png",
          revision: "d3d6694ad5797cbde0bafea1f95b8ab7",
        },
        { url: "/jewelery.png", revision: "91cae9b984018423f601f67cb075fe1f" },
        { url: "/login.png", revision: "494c08ebd2525df2e03249333c95dc70" },
        { url: "/logo.svg", revision: "086fe94ed0033dd9d832a1920c94969a" },
        { url: "/man.png", revision: "a0ad5f1653d334b5c5ae48a2aeb34dc6" },
        { url: "/manifest.json", revision: "93c61155b1d17b4ed5fbe82026fdb084" },
        { url: "/party.png", revision: "880c59523b1d54e765a4b61957931593" },
        { url: "/purse.png", revision: "744ca7df6a91a40bee0f91b360d208fe" },
        { url: "/shoe.png", revision: "c1a95b996fcbfc5463481c3914f06793" },
        { url: "/signup.png", revision: "9b422ada2aec1a0acc6b7d3a084e24c8" },
        { url: "/woman.png", revision: "91d9cfa8516178e9cdd42d04f9c6f39f" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
