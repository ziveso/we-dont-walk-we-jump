"use strict";var precacheConfig=[["/we-dont-walk-we-jump/index.html","41ec4cee422535a6e0759fd2b986df47"],["/we-dont-walk-we-jump/static/css/main.c1a2b711.css","1fee829f05e8b0b171b573c53962cd8d"],["/we-dont-walk-we-jump/static/js/main.101d629a.js","6dc94eaf955c1d37dd20964e2eb401b5"],["/we-dont-walk-we-jump/static/media/Left-01.e56fe4ca.png","e56fe4cae1864ddb545b600f7a56ad83"],["/we-dont-walk-we-jump/static/media/Right-01.15828f70.png","15828f709a1efb85efdd616b506ce43d"],["/we-dont-walk-we-jump/static/media/codeandcraft.65dcf9c4.jpg","65dcf9c4b21ee614061ea3689fe6d5d1"],["/we-dont-walk-we-jump/static/media/left-key.699197f8.svg","699197f85b9bb14a5b28fbeb36bb8c6e"],["/we-dont-walk-we-jump/static/media/link.27e73671.jpg","27e73671e5fd5ac6665a0049dc69f3dd"],["/we-dont-walk-we-jump/static/media/right-key.19d2b4cf.svg","19d2b4cf0c7e13b4213fa0e2c054c1df"],["/we-dont-walk-we-jump/static/media/thezero.5717795a.jpg","5717795a09224a22398584ab80a5ea35"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/we-dont-walk-we-jump/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});