if(!self.define){let e,i={};const d=(d,r)=>(d=new URL(d+".js",r).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(r,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>d(e,c),f={module:{uri:c},exports:s,require:n};i[c]=Promise.all(r.map((e=>f[e]||n(e)))).then((e=>(a(...e),s)))}}define(["./workbox-b5e2a5cf"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2022/06/25/html基础/index.html",revision:"c787bbc92123de1ca3aa7a7eb491412b"},{url:"2022/07/18/markdown/index.html",revision:"e6281b9aed42b25a0bb7d6ec8a53a172"},{url:"2022/08/15/hello-world/index.html",revision:"dce197a1236cf0bfdc0ddf479cfdbfab"},{url:"2022/08/15/日常/index.html",revision:"bae5f6221346d6618f538e6c0cddab08"},{url:"404.html",revision:"7be9ec3efea5b8d6708e464e0bac84fa"},{url:"about/index.html",revision:"38421b39df2b3029fdaca02a1c027cbd"},{url:"archives/2022/06/index.html",revision:"57dbf246d38ff85c959df7358c9a637c"},{url:"archives/2022/07/index.html",revision:"5bab6fe8b3823a5ec0a421f268e665d9"},{url:"archives/2022/08/index.html",revision:"2d4dd7805809b87b6cb879a744845e38"},{url:"archives/2022/index.html",revision:"b071036c7c4878d2c6eed52784397ef9"},{url:"archives/index.html",revision:"ff6642aafe5bac5780ce5c4ec75146de"},{url:"categories/index.html",revision:"61408c72bb26d08868e76552c9645507"},{url:"categories/share/index.html",revision:"518320c2b6de38da3b26a4339e02c343"},{url:"categories/tutorial/index.html",revision:"2fcf7594ef80df03536209f973331bb1"},{url:"categories/我的/index.html",revision:"dfe84ac9a6b73e9b1d46b9acf531e6da"},{url:"css/index.css",revision:"2ca957a254f8050978bb8ef4a78f9a1f"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"imgs/alipay.jpg",revision:"415b2c0da4e8fe82a52d26f342236937"},{url:"imgs/logo.png",revision:"b64f5d433c854ff889af3b468f96a87b"},{url:"imgs/wechat.jpg",revision:"ee145a79c0919e3f86869418b90db26f"},{url:"index.html",revision:"d1653f7aed49b84acd3a5083d2007201"},{url:"js/main.js",revision:"73e1a92da3a39646678bffb9e7817148"},{url:"js/search/algolia.js",revision:"308de383b932f321e04751fd1f79cffb"},{url:"js/search/local-search.js",revision:"149fcc60c1de0a818e111978d01cbd87"},{url:"js/tw_cn.js",revision:"b3810513e04b13b2d18c6b779c883f85"},{url:"js/utils.js",revision:"24971090b8b1bd5d3f538d414e270fd3"},{url:"link/index.html",revision:"2ecbc4725c224ea71929cf708666a2cf"},{url:"movies/index.html",revision:"de92ea77006146203723785a14f24536"},{url:"question/index.html",revision:"e07bff6f62045f83076f8e65189f6a98"},{url:"share/index.html",revision:"cea51e58b5dbb09170a009b6da1efed4"},{url:"tags/hello-world/index.html",revision:"36f8f3af8124511498cc19e7123824ad"},{url:"tags/html/index.html",revision:"58a423726c72f4358fd9931e836fe838"},{url:"tags/index.html",revision:"72b753aca1f73b19e740a01d24c84f2d"},{url:"tags/markdown/index.html",revision:"2e7c8944c1e61661c4da1f9bb7fd1fad"},{url:"tags/小说/index.html",revision:"bf7247843dbb93591242b806bd1d2a42"},{url:"think/index.html",revision:"64e1347260c186d8b54d1637d1e90f02"},{url:"tutorial/index.html",revision:"a645b2dbd19d1a5a73ce4884f6684879"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
