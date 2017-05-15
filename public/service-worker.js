var cacheName = 'v1';   // 캐쉬명
// 캐쉬지정 파일목록
var urlsToCache = [
    '/index.html'
    , '/css/site.css'
    , '/images/girl.jpg'
    , '/js/jquery.min.js'
];

//-----------------------------------------
// 서비스워커 설치(install)
//-----------------------------------------
self.addEventListener('install', function (e) {
    console.log('서비스워커 Installing..');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('서비스워커 Caching app shell');
            return cache.addAll(urlsToCache);
        }).then(function () {
            console.log('서비스워커 Install 완료');
        }).catch(function (err) {
            console.log('서비스워커 Install 실패', err);
        })
    );
});

//-----------------------------------------
// 서비스워커 활성화(activate)
//-----------------------------------------
self.addEventListener('activate', function (e) {
    console.log('서비스워커 activating..');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName) {
                    console.log('서비스워커 removing old cache', key);
                    return caches.delete(key);
                }
            }))
        })
    );
    return self.clients.claim();
});

//-----------------------------------------
// 서비스워커 요청발생(fetch)
//-----------------------------------------
self.addEventListener('fetch', function (e) {
    console.log('서비스워커 fetching..');
    e.respondWith(
        caches.match(e.request)
        .then(function (response) {
            if (response) {
                return response;
            }
            return fetch(e.request);
        })
    );
});