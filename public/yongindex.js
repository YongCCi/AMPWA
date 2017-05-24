function waitUntilInstalled(registration) {
    return new Promise(function(resolve, reject) {
        if (registration.installing) {
            registration.installing.addEventListener('statechange', function(e) {
                if (e.target.state === 'installed') {
                resolve();
                } else if (e.target.state === 'redundant') {
                reject();
                }
            });
        } else {
            resolve();
        }
    });
}

if ('serviceWorker' in navigator) {
    //window.addEventListener('load', function () {
    navigator.serviceWorker.register('/yongsw.js', {
        scope: '/'
    })
    .then(function (reg){
        console.log('sw reg ok. Scope is ', reg.scope);
    })
    .catch(function(error) {
        console.log("sw reg Faild", error);
        document.querySelector('#status').textContent = error;
    });
    //}
} else {
    var aElement = document.createElement('a');
    aElement.href = 'http://www.chromium.org/blink/serviceworker/service-worker-faq';
    aElement.textContent = 'Service workers are not supported in the current browser.';
    document.querySelector('#status').appendChild(aElement);
}

document.querySelector('video').onloadedmetadata = function() {
    var fileName = this.currentSrc.replace(/^.*[\\\/]/, '');
    document.querySelector('#currentSrc').textContent = 'Video src: ' + fileName;
};

