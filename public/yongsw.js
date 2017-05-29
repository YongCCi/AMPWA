var CACHE_VERSION = 2;
var CURRENT_CACHES = {
    prefetch: 'prefetch-cache-v' + CACHE_VERSION
};

self.addEventListener('install', function(event) {
    var urlsToPrefetch = [
        '/'
        ,'/images/img.jpg'
        , '/object/sample.mp4'
    ];
    console.log('install event. Resources to prefetch:', urlsToPrefetch);
    // self.skipWaiting();
    event.waitUntil(
        caches.open(CURRENT_CACHES.prefetch).then(function(cache) {
            return cache.addAll(urlsToPrefetch);
        })
    );
});

self.addEventListener('activate', function(event) {
    console.log('active event');
    var expectedCacheNames = Object.keys(CURRENT_CACHES).map(function(key) {
        return CURRENT_CACHES[key];
    });

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.map(function(cacheName) {
                    if (expectedCacheNames.indexOf(cacheName) === -1) {
                        console.log('Deleting out of date cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function(event) {
    console.log('fetch event for', event.request.url);

    if (event.request.headers.get('range')) {
        var pos =
        Number(/^bytes\=(\d+)\-$/g.exec(event.request.headers.get('range'))[1]);
        console.log('Range request for', event.request.url,', starting position:', pos);
        event.respondWith(
            caches.open(CURRENT_CACHES.prefetch)
            .then(function(cache) {
            return cache.match(event.request.url);
        }).then(function(res) {
        if (!res) {
            return fetch(event.request)
            .then(res => {
            return res.arrayBuffer();
            });
        }
        return res.arrayBuffer();
        }).then(function(ab) {
        return new Response(
            ab.slice(pos),
            {
            status: 206,
            statusText: 'Partial Content',
            headers: [
                // ['Content-Type', 'video/webm'],
                ['Content-Range', 'bytes ' + pos + '-' +
                (ab.byteLength - 1) + '/' + ab.byteLength]]
            });
        }));
     } else {
        console.log('Non-range request for', event.request.url);
        event.respondWith(
            caches.match(event.request).then(function(response) {
                if (response) {
                    console.log('Found response in cache:', response);
                    return response;
                }
                console.log('No response found in cache. About to fetch from network...');
                return fetch(event.request).then(function(response) {
                    console.log('Response from network is:', response);
                    return response;
                }).catch(function(error) {
                    console.error('Fetching failed:', error);
                    throw error;
                });
            })
        );
    }
});


// const latest = {
//   cache: 'some-cache-name/v1'
// };

// self.addEventListener('install', event => {
//     console.log("install");
//   event.waitUntil(
//     caches.open(latest.cache).then(cache => {
//         console.log("install cache");
//       return cache.addAll([
//         '/'
//       ]);
//     })
//   );
// });

// self.addEventListener('fetch', event => {
//     console.log("fetch")
//   // exclude requests that start with chrome-extension://
//   if (event.request.url.startsWith('chrome-extension://')) return;
//   event.respondWith(
//     caches.open(latest.cache).then(cache => {
//         console.log("open cache");
//       return cache.match(event.request).then(response => {
//         var fetchPromise = fetch(event.request).then(networkResponse => {
//           cache.put(event.request, networkResponse.clone());
//           return networkResponse;
//         })
//         return response || fetchPromise;
//       })
//     })
//   );
// });

// self.addEventListener('activate', event => {
//   event.waitUntil(
//     caches.keys().then(cacheNames => {
//       return Promise.all(
//         cacheNames.filter(cacheName => {
//           if (cacheName === latest.cache) {
//             return false;
//           }

//           return true;
//         }).map(cacheName => {
//           return caches.delete(cacheName)
//         })
//       );
//     })
//   );
// });
