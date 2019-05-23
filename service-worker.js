/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "431ad3967ec66bea6a10bed31a8012dc"
  },
  {
    "url": "assets/css/0.styles.eb21f369.css",
    "revision": "1019dd55955f1fe3c3cf6231378e0b54"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.20e3d77c.js",
    "revision": "7c42134916b8ee287305035d8b667295"
  },
  {
    "url": "assets/js/11.77fe945e.js",
    "revision": "f93c77cd790e9e75bc67004b4848f84d"
  },
  {
    "url": "assets/js/12.acaa6993.js",
    "revision": "0626d9477ea78a8adbfe7f2a98665d0a"
  },
  {
    "url": "assets/js/13.1330ca5b.js",
    "revision": "3534e8e0df8a2bcae41bd0c0e6dc693c"
  },
  {
    "url": "assets/js/14.2c09b63f.js",
    "revision": "0bb475d4132dfcecd5d46a4918091f42"
  },
  {
    "url": "assets/js/15.e717ef19.js",
    "revision": "b0752ca5961dcef7e257dfd7be4fab60"
  },
  {
    "url": "assets/js/16.9b7eda61.js",
    "revision": "7b020a9a53543009606c065c6c38228b"
  },
  {
    "url": "assets/js/3.bd1c981c.js",
    "revision": "48427d483f5f52b7491c295c50e85a14"
  },
  {
    "url": "assets/js/4.02c7030f.js",
    "revision": "f54c6375c7082948ac2928935b08f085"
  },
  {
    "url": "assets/js/5.bf8bde4b.js",
    "revision": "b9c66a6e4d667be1c5ddf68eac768a40"
  },
  {
    "url": "assets/js/6.6c736564.js",
    "revision": "02cba2ed1c35c39651c3448b86b458ea"
  },
  {
    "url": "assets/js/7.4c90426f.js",
    "revision": "b87eea8ebd70d38f4e03d39feefa6359"
  },
  {
    "url": "assets/js/8.3ac98bec.js",
    "revision": "6535cf1bff5f5043cbcae457b4b68303"
  },
  {
    "url": "assets/js/9.1ebd3a9e.js",
    "revision": "95d1f5683cc2b5a2c5ed39dbada8cbb6"
  },
  {
    "url": "assets/js/app.7479ab8f.js",
    "revision": "fe5af6130f3484b43d45b2caf5d61123"
  },
  {
    "url": "assets/js/vendors~notification.bf87d155.js",
    "revision": "604e7344732b8a237b72cb19493c5b8d"
  },
  {
    "url": "home/aa.html",
    "revision": "e90e94655c2b47043b551f5341aabf9c"
  },
  {
    "url": "home/bb.html",
    "revision": "4e6c08693a62df217f475fbd1c58acdd"
  },
  {
    "url": "home/cc.html",
    "revision": "5cd95c48b98de9acd146fd3cad4c7d39"
  },
  {
    "url": "home/index.html",
    "revision": "8e2e5b14f9b900b7adece09f7cac3ec9"
  },
  {
    "url": "icon.jpg",
    "revision": "d7ffc8f4b5eef109f38565070d8c585c"
  },
  {
    "url": "index.html",
    "revision": "d63de6a24e82f03059a8530f290d2c84"
  },
  {
    "url": "logo.png",
    "revision": "9210e1b014f30d976f1b6bc2c1dbe6e9"
  },
  {
    "url": "qr-code.jpeg",
    "revision": "03a25abed91ce94f4c98643c449080bb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
