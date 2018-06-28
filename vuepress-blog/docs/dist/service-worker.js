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
    "revision": "96ff3b0c429e5c2d17454cf1ea24b3cb"
  },
  {
    "url": "assets/css/0.styles.a4270e9f.css",
    "revision": "b0c47fe44c6dae12bc2591ca7a51ff12"
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
    "url": "assets/js/app.33a2443e.js",
    "revision": "a617cc00ded63e868ddac9730d2b2616"
  },
  {
    "url": "en/doodle/index.html",
    "revision": "aa110f2db66a3d23801635f8060f4438"
  },
  {
    "url": "en/index.html",
    "revision": "2c759d646f15f1f4298c022ea858ad32"
  },
  {
    "url": "en/photography/index.html",
    "revision": "52afb0074081dc4d671660a17289df0b"
  },
  {
    "url": "en/resume/index.html",
    "revision": "d493bba5bc97007be07e1b564fb8d130"
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
    "revision": "4f95fab1d534b74171935b8cdf7adb12"
  },
  {
    "url": "zh/article/index.html",
    "revision": "8ed736165675554a4628f47a956cdd7c"
  },
  {
    "url": "zh/article/vue-iamlqy.html",
    "revision": "e2124564e50ad8f6af1244935ac671e2"
  },
  {
    "url": "zh/doodle/index.html",
    "revision": "9a6851ebca2b45b81d7883ad0bfc7611"
  },
  {
    "url": "zh/index.html",
    "revision": "5410dad5fb0512275e3a6f0afa3ae296"
  },
  {
    "url": "zh/photography/index.html",
    "revision": "4eb4e49d2cadcc0b1e186114ec33dca2"
  },
  {
    "url": "zh/resume/index.html",
    "revision": "ab219117fe36893642e750e945a4a567"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
