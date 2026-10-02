const cacheName = 'ala20-v0.1.1'

const AssetsToCache = [
  './',
  './index.html',
    
  './css/style.css',
    
  './js/data.js',
  './js/script.js',
  './js/snapdom.mjs',
    
  './fonts/Caveat/Caveat-Regular.woff2',
  './fonts/Caveat/Caveat-Medium.woff2',
  './fonts/Caveat/Caveat-SemiBold.woff2',
  /*'./fonts/Caveat/Caveat-Bold.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Thin.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-ExtraLight.woff2',*/
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Light.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Regular.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Medium.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-SemiBold.woff2',
  './fonts/IBM_Plex_Sans_Arabic/IBMPlexSansArabic-Bold.woff2',

  './images/favicon.ico',
  './images/icon-192.png',
  './images/icon-512.png',
  './images/icon-192-maskable.png',
  './images/icon-512-maskable.png',
  './images/apple-touch-icon.png',
  './images/desktopBackground.webp',
  './images/phoneBackground.webp',
  './images/mobileApp.webp',
  './images/seal.webp',
  './images/transcriptOfGrades.webp',
  './images/transcriptOfGradesFull.webp',

  './manifest.json',
      
  './sw.js'
]


self.addEventListener('install', (event) => {
    async function installServiceWorker() {
        const cache = await caches.open(cacheName)
        await cache.addAll(AssetsToCache)
        console.log('The files were stored in the Cache')
        await self.skipWaiting()
    }
    event.waitUntil(installServiceWorker())
})


self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then(async (cacheNames) => {
            for (const cache of cacheNames) {
                if (cache !== cacheName) {
                    await caches.delete(cache)
                    console.log('The old cache has been deleted:', cache)
                }
            }
            await self.clients.claim()
        })
    )
})


self.addEventListener('fetch', (event) => {
    async function handleFetch() {
        const cachedResponse = await caches.match(event.request)
        if (cachedResponse) {
            return cachedResponse
        }
        return fetch(event.request)
    }
    event.respondWith(handleFetch())
})