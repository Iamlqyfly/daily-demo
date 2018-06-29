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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.3.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.jpg",
    "revision": "b77e440720078dec770b202077fd8e5d"
  },
  {
    "url": "404.html",
    "revision": "497ba51c112fbb6d64a27af312df25b4"
  },
  {
    "url": "assets/css/0.styles.5cec989e.css",
    "revision": "9993ab527c849f4c24d73327e5c2d67c"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.069e2405.js",
    "revision": "6e817610eceb8abc2a9b43f0495f001c"
  },
  {
    "url": "assets/js/10.932980ec.js",
    "revision": "27fe9b0c898882282350a14aa2b554cc"
  },
  {
    "url": "assets/js/11.9711d487.js",
    "revision": "638ef29ebc982d89ac09493a5a880bdd"
  },
  {
    "url": "assets/js/12.fadbc5d8.js",
    "revision": "204c9a7d61dd9c4ab8e5c09f3e2fa03a"
  },
  {
    "url": "assets/js/13.fdc94c41.js",
    "revision": "f0289abff6c5220f75b020ba988f9de8"
  },
  {
    "url": "assets/js/14.04880d51.js",
    "revision": "13639b65595bfb75434f33e11ab0b43f"
  },
  {
    "url": "assets/js/2.ecc61061.js",
    "revision": "9ec3a3fb427d2d149a35f25389b17320"
  },
  {
    "url": "assets/js/3.8021b457.js",
    "revision": "d09eff72beb9449d9c700defa6ebda40"
  },
  {
    "url": "assets/js/4.dfa6a0f1.js",
    "revision": "bbd39cd4250c19cc7edbe9b50cacf19b"
  },
  {
    "url": "assets/js/5.b9379745.js",
    "revision": "3fd6b2e4bfdea1a7e64e2306c0bb0e5d"
  },
  {
    "url": "assets/js/6.3edf28bc.js",
    "revision": "ea629bc29a4feea178260e625dfe98e7"
  },
  {
    "url": "assets/js/7.e57603ea.js",
    "revision": "e484208016aa88abd41987496b549282"
  },
  {
    "url": "assets/js/8.dc271f14.js",
    "revision": "16819ac8b02bc7f3cb666c970302dcb7"
  },
  {
    "url": "assets/js/9.73fc26a7.js",
    "revision": "3cd4db4eaf979531cf28a5f31df919c4"
  },
  {
    "url": "assets/js/app.f968dbc1.js",
    "revision": "6bd48508bf9290113d7a86dfdca3b17c"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "535ea6213e41121bd763ff173d332e1d"
  },
  {
    "url": "en/index.html",
    "revision": "47e9c2741fa04a7ddbba2567532e6d75"
  },
  {
    "url": "en/photography/index.html",
    "revision": "bf376fd0a96d72e0364e477d1b477cfa"
  },
  {
    "url": "en/resume/index.html",
    "revision": "b54aa027d98138d22699066227aa7add"
  },
  {
    "url": "imgs/2.jpg",
    "revision": "9cb57f55d181bb0bee8fc7d07578d06f"
  },
  {
    "url": "imgs/3.jpg",
    "revision": "fd28da86710f0add72d54421200a38b7"
  },
  {
    "url": "imgs/4.jpg",
    "revision": "762cebca3d1a368cac14e63189b901e0"
  },
  {
    "url": "index.html",
    "revision": "259c74babed028c4b5f5ca7f324bdbcd"
  },
  {
    "url": "zh/article/index.html",
    "revision": "db6c429d9b86ec3dd68eba441218636f"
  },
  {
    "url": "zh/article/vue-iamlqy.html",
    "revision": "05dbb2bf683d3948c34796c188c22fa5"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "da7325c5ee0db734ad65a5b8a05a943e"
  },
  {
    "url": "zh/index.html",
    "revision": "48f53215953e8b144bf0ede6dacb6cef"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "d4d8a896f4a6911f91354a5f7f47514c"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "ff9647164cb0300cce1e7c51d85590ac"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
