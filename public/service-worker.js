const PRECACHE_NAME = 'precache-v2';   // 캐시명
const RUNTIME_NAME = 'runtime';
// 캐시지정 파일목록
const PRECACHE_URLS = [
    'index.html'
    , './'   // alias for index.html
    , '/css/site.css'
    , '/js/index.bundle.js'
    , 'albamon-icon-96x96.png'
    , 'albamon-icon-192x192.png'
];

//-----------------------------------------
// 서비스워커 설치(install) : 캐시 적재
//-----------------------------------------
this.addEventListener('install', function (event) {
    console.log(PRECACHE_NAME + ' 서비스워커 Installing..');
    event.waitUntil(
        caches.open(PRECACHE_NAME)
        .then(function (cache) {
            console.log('---[캐시 담기 작업 시작]--- Start');
            return cache.addAll(PRECACHE_URLS);
        }).then(self.skipWaiting()).then(function () {
            console.log(PRECACHE_NAME + ' 서비스워커 Install 완료');
            console.log('---[캐시 담기 작업 종료]--- End');
        }).catch(function (err) {
            console.log(PRECACHE_NAME + ' 서비스워커 Install 실패', err);
        })
    );
});

//-----------------------------------------
// 서비스워커 활성화(activate) : service worker Update 시 발생 (캐시 정리)
//-----------------------------------------
this.addEventListener('activate', function (event) {
    const currentCaches = [PRECACHE_NAME, RUNTIME_NAME];
    console.log(PRECACHE_NAME + ' 서비스워커 activating..');
    console.log('---[캐시 정리 작업]--- Start');
    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.filter(function (cacheName) {
                    // 제거 할 캐시를 Return 하면 map에서 캐시가 삭제 처리된다.
                    // (이때 across origin이 일치해야 삭제가 가능하다.)

                    //console.log(cacheName + " 기존 캐시 호출");
                    return !currentCaches.includes(cacheName);
                }).map(function (cacheName) {
                    // 캐쉬 제거 처리 
                    console.log(cacheName + " 기존 캐시 삭제");
                    return caches.delete(cacheName);
                })
            )
        }).then(function () {
            console.log("---[캐시 정리 작업]--- End");
            return self.clients.claim();
        })
    )
});

//-----------------------------------------
// 서비스워커 요청발생(fetch) : 캐시 노출
//-----------------------------------------
// [방법1 - 캐시 우선] : 캐시 update 시 캐시에 담긴 정보를 먼저 보여준다.
this.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;        // from Cache
            }
            return fetch(event.request);    // from Network
        }).catch(function (err) {
            console.log("fetch 오류!" + err);
            return false;
        })
    );
});

/*
// [방법2 - 네트워크 우선] : 캐시 Update 시 네트워크를 통해 정보를 우선 가져와 뿌린뒤 캐시에 담는다.
this.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(cachedResponse) {
            if (cachedResponse) {
                return cachedResponse;
            }

            return caches.open(PRECACHE_NAME).then(function (cache) {
                return fetch(event.request).then(function (networkResponse) {
                    return cache.put(event.request, networkResponse.clone())
                    .then(function (response) { return response; });
                });
            });
        }).catch(function (err) {
            console.log("fetch 오류!" + err);
            return false;
        })
    )
});
*/

//-----------------------------------------
// 서비스워커 푸시발생(push)
//-----------------------------------------
self.addEventListener('push', function(event) {
  console.log('Push message', event);
  var title = 'Push message';
  event.waitUntil(
    self.registration.showNotification(title, {
      body: 'The Message',
      icon: 'images/icon.png',
      tag: 'my-tag'
    }));
});

self.addEventListener('notificationclick', function(event) {
    console.log('Notification click: tag ', event.notification.tag);
    event.notification.close();
    var url = 'https://am-pwa.firebaseapp.com/';
    event.waitUntil(
        clients.matchAll({
            type: 'window'
        })
        .then(function(windowClients) {
            for (var i = 0; i < windowClients.length; i++) {
                var client = windowClients[i];
                if (client.url === url && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow(url);
            }
        })
    );
});