if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let n={};const a=e=>d(e,c),f={module:{uri:c},exports:n,require:a};i[c]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(s(...e),n)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/08/15/hello-world/index.html",revision:"17d388a16786710a82a1689bea255bfe"},{url:"404.html",revision:"425c1ddd08b14ed884b82d5eb318cc1f"},{url:"about/index.html",revision:"544e848c980a52a647457fddd5c52943"},{url:"archives/2022/08/index.html",revision:"fbfd623ad7d3315ac897245d0634b242"},{url:"archives/2022/index.html",revision:"9e9304cde5fd03ae6010cddb8200e54d"},{url:"archives/index.html",revision:"f8f45dc31cf1ee34b5b96ce854028d23"},{url:"categories/index.html",revision:"7dbda7465dacabb2259a68ec90c9174f"},{url:"css/index.css",revision:"4d0d2888684ad9b1af7b71201d7c4f10"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"imgs/alipay.jpg",revision:"415b2c0da4e8fe82a52d26f342236937"},{url:"imgs/logo.png",revision:"b64f5d433c854ff889af3b468f96a87b"},{url:"imgs/wechat.jpg",revision:"ee145a79c0919e3f86869418b90db26f"},{url:"index.html",revision:"f1a5d42e82c93a48aeaad70ab11fca4d"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"4ad446298000bf594e868ea8dc4c825e"},{url:"movies/index.html",revision:"5f2fdcd43575155ef1382683e9eca530"},{url:"question/index.html",revision:"be1f51a69250624b2e2da2d35265d5ed"},{url:"share/index.html",revision:"d43f9927a87c719995dc58c40edefcf5"},{url:"tags/index.html",revision:"66119191fe695efb6c287f9eeeba1888"},{url:"think/index.html",revision:"ed293ed14cbd251edcbcd957048c0861"},{url:"tutorial/index.html",revision:"f161835faf4247159445baa4291d3494"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
