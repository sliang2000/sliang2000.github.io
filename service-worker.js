if(!self.define){let e,i={};const a=(a,s)=>(a=new URL(a+".js",s).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const n=e=>a(e,d),b={module:{uri:d},exports:r,require:n};i[d]=Promise.all(s.map((e=>b[e]||n(e)))).then((e=>(c(...e),r)))}}define(["./workbox-6da860f9"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2022/08/15/00/index.html",revision:"048df8610a470208b673d5ab40c4285e"},{url:"2022/08/15/11/index.html",revision:"50815364cb420ca6e0abc0aff552a801"},{url:"2022/08/15/44/index.html",revision:"0960cdd72ea5b9c2bd46105f9fab5078"},{url:"2022/08/15/日常/index.html",revision:"f2e4cb67bea2175ba9fabdce3ba4fa5d"},{url:"2022/08/17/标签外挂/index.html",revision:"fb3eba576b48ed1c76c29df07d4ad6aa"},{url:"2022/09/01/markdown/index.html",revision:"7fd685f7ecdbd4cc62a7854215843a6e"},{url:"2022/09/01/笔记/index.html",revision:"0ebfb0945f7b28b365cf99c5b93533a8"},{url:"404.html",revision:"4cdaa62acb2757bc75289e8633e13e60"},{url:"about/index.html",revision:"4a3583a6c8bc42f5c0d34efc9f307f37"},{url:"archives/2022/08/index.html",revision:"97d44420b9ff26199a66cd32ed9ca129"},{url:"archives/2022/09/index.html",revision:"a67c6dac196b7dda65817a5ec9cbad82"},{url:"archives/2022/index.html",revision:"7872c52ca8eba74ee6805a57d9eeadfd"},{url:"archives/index.html",revision:"fb40c2c8f6fc17f399d920821a34aef2"},{url:"categories/index.html",revision:"0efb983b7c5bf730cb43a1ed9f980fa1"},{url:"categories/博客相关/index.html",revision:"12a9d2e2312256d5bb6c53ba7004b959"},{url:"categories/学习笔记/index.html",revision:"b7cd8eacc8c8bfc892977cb7f68dbc6a"},{url:"categories/实用教程/index.html",revision:"4772ec39772b20d21a0bd38d00d905ba"},{url:"categories/资源分享/index.html",revision:"d8b6ec72aea4908ba578001e1a6016e2"},{url:"categories/问题解决/index.html",revision:"e8d8443c9359921ea194b4ff3da5af0a"},{url:"categories/随便写写/index.html",revision:"fc9d9801f4dff895b7c474ed03b6aabf"},{url:"css/index.css",revision:"2aea5faa4a131e11f7fdd47101fb44d5"},{url:"css/style.css",revision:"f79d0570b775ab5d7efdbae8caab0912"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"imgs/bj.assets/alert.png",revision:"4ed925da961a536e0286d2d659aac0e9"},{url:"imgs/bj.assets/ASCII控制字符.png",revision:"1f2a5284828b04a13e3032959f637c7a"},{url:"imgs/bj.assets/ASCII显示字符.png",revision:"c88a5643cdddc811982fc64fd2f03e5a"},{url:"imgs/bj.assets/confirm.png",revision:"4d5acf8ae52d0468971b599d630cdf4b"},{url:"imgs/bj.assets/image-20220510141309000.png",revision:"fa6a9602ca3ae40205c730d5d9f2624e"},{url:"imgs/bj.assets/image-20220510141952652.png",revision:"ac87d1292e94c9ae6a4a918617ae25d5"},{url:"imgs/bj.assets/image-20220510144904468.png",revision:"a9f1fb6376d57dc68440a935ab7b0000"},{url:"imgs/bj.assets/image-20220510145615748.png",revision:"7293fafd78d8a75132ae9bf27d66f89a"},{url:"imgs/bj.assets/image-20220516112555912.png",revision:"33f8dd685d278fe2d4c662334cbd8cab"},{url:"imgs/bj.assets/image-20220529093256532.png",revision:"f4add3b1cf03cc189dac18fa460500da"},{url:"imgs/bj.assets/image-20220529093305827.png",revision:"e0fc0e0d1902e0632c0c376f87a80a81"},{url:"imgs/bj.assets/image-20220529093325381.png",revision:"11e03cb4afdcf842da55845139de27c7"},{url:"imgs/bj.assets/image-20220529093334602.png",revision:"8646a03902df24af5cc1750551e4cd42"},{url:"imgs/bj.assets/image-20220529093346903.png",revision:"22aaf37ea0566e85221b01f7acdc8832"},{url:"imgs/bj.assets/image-20220529093416413.png",revision:"3128805d7fc1912eed619f446bf4c751"},{url:"imgs/bj.assets/image-20220530215202315.png",revision:"22b6e7534b06b9e0ffb5bb7edef83f92"},{url:"imgs/bj.assets/image-20220530215226855.png",revision:"fab44bc87933647d97a096967d22cbdb"},{url:"imgs/bj.assets/image-20220530220140448.png",revision:"8b0e3fb7ead3fb873ba6c2e43162f327"},{url:"imgs/bj.assets/image-20220530220229523.png",revision:"448219b29de33cb06d6ea3066f862613"},{url:"imgs/bj.assets/image-20220601095534713.png",revision:"9b2f8c35dd92de6fa595c23575258108"},{url:"imgs/bj.assets/image-20220601095555972.png",revision:"f4d55f143afabf617abaea5c93cdb68f"},{url:"imgs/bj.assets/image-20220716160225615.png",revision:"09d5bf4497eacf86df661a45120112f6"},{url:"imgs/bj.assets/prompt.png",revision:"1e5b4766f31a72290017ddf95e030f55"},{url:"imgs/bj.assets/冒泡.gif",revision:"c8bf4c7a3ad1d3d59bf9ce3ed74c10e0"},{url:"imgs/bj.assets/基本数据类型在内存中的存储情况.png",revision:"55bc27ada4070372bd02c34307271b19"},{url:"imgs/bj.assets/复杂数据类型在内存中的存储情况.png",revision:"3e16b34062fcb40cbc4451e7fd0308fd"},{url:"imgs/bj.assets/选择.gif",revision:"de0f66351600ebb6525bb36bb5145798"},{url:"imgs/icon/android-chrome-144x144.png",revision:"fe4278ac2a0828ca9a5a946b19796008"},{url:"imgs/icon/android-chrome-192x192.png",revision:"5ee910f78f1af5466bf71ef8d4120bcf"},{url:"imgs/icon/android-chrome-256x256.png",revision:"9e94e0ce464a14ac0be9ec3320fdf22f"},{url:"imgs/icon/android-chrome-36x36.png",revision:"badc702d4c4c36dca80a09398aa5f6c8"},{url:"imgs/icon/android-chrome-384x384.png",revision:"4a95a4c7f2c670cae167f5a8c40cc2e1"},{url:"imgs/icon/android-chrome-48x48.png",revision:"48893921b2dcbeefd3885442005b0e75"},{url:"imgs/icon/android-chrome-512x512.png",revision:"924aec1cd258498b64efca073d500993"},{url:"imgs/icon/android-chrome-72x72.png",revision:"03ae520d44632c76f0982508297aa58b"},{url:"imgs/icon/android-chrome-96x96.png",revision:"7be813313f8851885d8acca653fa606c"},{url:"imgs/icon/apple-touch-icon.png",revision:"24d68c7df4a688b79a3b37083c141341"},{url:"imgs/icon/favicon-16x16.png",revision:"7666637271269a01a1f039c20cafbab9"},{url:"imgs/icon/favicon-32x32.png",revision:"46d050db72819ec17a5f6f93b6e1120a"},{url:"imgs/icon/mstile-150x150.png",revision:"3e3fcfd9ed07a110ddb79b3894702dcd"},{url:"imgs/icon/README.html",revision:"793bce3acad170399e86067e6d083958"},{url:"imgs/icon/safari-pinned-tab.svg",revision:"e5c2c886e8b83af6c58ad9be59d72cce"},{url:"imgs/logo.webp",revision:"a50f0ae8dc471039ea98cc8f482f5f9c"},{url:"imgs/title1.webp",revision:"ea9ad341b8ad94fb1288d797dd859913"},{url:"imgs/title2.webp",revision:"170e9205ed13f7017f4cea511f7509f6"},{url:"imgs/title3.webp",revision:"994bf81aeb66a237e6ef36e53e5077c0"},{url:"imgs/title4.webp",revision:"ee6e30c576ba331c0677e153c1bd64a8"},{url:"imgs/title5.webp",revision:"1d1f51c6ac4bd4524ed4f3b075e6dcf9"},{url:"index.html",revision:"3121a92ef635abed257b26918464783c"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/universe.js",revision:"627a6c8f6aba81a5360e660244a48042"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"d0d89b7ffbb3914cfb3ccda5a015e880"},{url:"music/index.html",revision:"bcb55958b7d4ae2b58a31dfc076a45a4"},{url:"tags/6/index.html",revision:"4fd730b9ed82de8d109b0f96df42fc9d"},{url:"tags/butterfly/index.html",revision:"4d7cb503065a01088dae457497be7bc1"},{url:"tags/hexo/index.html",revision:"22f02a95ecf5e98344aad599cf0c992d"},{url:"tags/index.html",revision:"78d6701ae9c65bd8f7b4f91551420005"},{url:"tags/JavaScript/index.html",revision:"21c3667f0dfb84cc5b6be21df83f6f9e"},{url:"tags/markdown/index.html",revision:"5f0554564c38cff3a3c72c8ac18c076e"},{url:"tags/小说/index.html",revision:"167ee20bd9e38eed54559ec061a3311c"},{url:"tags/标签外挂/index.html",revision:"b09c54d469e2a024228e89300ebd412b"},{url:"write/index.html",revision:"c8e787ec6c0723f7de85eba9fc097628"}],{})}));
//# sourceMappingURL=service-worker.js.map
