'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "861c1462c9913270651d99ad7d05cec1",
"index.html": "58ae36e01c75b502dda909cfeceb25bb",
"/": "58ae36e01c75b502dda909cfeceb25bb",
"main.dart.js": "d5fcdb0558a22639e33f863be1f47b32",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1083aa921db5918b553abd80b78a95f6",
".git/config": "a32741b93753c37a271cde5acce7ec10",
".git/objects/61/87b6a8eb04eca98b8279f2af053a5e99f7ee56": "70f28096c5ae9068f8f9fbfd263adce1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/0586264230f505d23100379d707789fc03aefd": "2a6cae0b1a1dd5a98f4083d2fec7a8f5",
".git/objects/9e/5e2bcb5529a157626f83a9222be3b8259c364c": "d26dae77ecd98f552612a386a5bb4a67",
".git/objects/69/3f3a9f0faead01608432133849f928c18a87e7": "9f406a93f64daa51b1c67f5ce97e44de",
".git/objects/34/a7a3a7cbe1d288494ec68566b33a5888449eb5": "d2989bb376381cb75473b86ab1bdb8f1",
".git/objects/33/e8af4a7ae2d8c908e9aad53342fc3af1f137bd": "6e8e0cb96640bbf6491eef1d0d5c9ced",
".git/objects/b5/eebc812d6bb83f2c60fc84548d4372d34e82a6": "a7398b689a96ae63526e79b1fd32affb",
".git/objects/b2/a88a0ef60a298b397f44451b0412efcae011c0": "aa27ae8899c35b80fd2e3f6e9e3722fd",
".git/objects/da/01259ee5ef67000b51738bbd2694468ef82b24": "072cb19c6c57c438893221a6ab450aad",
".git/objects/b4/a59d332a7b51132ed23d0027df4e3b89cbbecf": "8b580c2d435a932893a1a04fa69d22e1",
".git/objects/bd/6f2576997164b29377c46c7e041ac746a4caae": "d9cc0757f39ae222c3b8f58534cd6c87",
".git/objects/bd/abb23ee9bca2df6958e801accb62f7ff81f3cf": "3807655d0bf41b120b507cea5a48b04a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/b382240f019a791f50a28b501fa0f168b1944a": "cd8b4f194df83d153d61e8bbc5388125",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/e4/835ab9d009bbd246031b1f7f99a2ee220a8dad": "32a4e0f5850e1112cc50372892e62073",
".git/objects/ec/dd52d61e59d0daa107787ae13a959258b57c58": "f9c4ca0241322148279359396c130676",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/c34757458836909787b4647829a5f162a16b3b": "9d12b62b9ff8b755161df5a65ef96be3",
".git/objects/1f/465b15f054bb14eb9869cbf2c1b194fbd93339": "f5f3b3bffdf3903bc2dfdc20647c9b7f",
".git/objects/1a/7f3b0bba45b7470a4240c3ec67595eeeb02192": "ac15319d47a37f9c7a950395d0777c21",
".git/objects/7b/b1d453d7a1a8f2a82486f68622ca52aef1c13d": "48f22f7b97819fb2f55325e58965c39e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/86/6e56ee9a05db2011d93f5bfb357c3fc5b281de": "b8c9db02b132165719243330fffb7616",
".git/objects/44/4bb57c829b3222494fe215145afac667c27a5f": "28c969e2eb84714020d08fc309e9d390",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6d/642405449d7bfb07b51c9a0fce06a976f6f12e": "c0852406a1dc0ffc50a395ef5988c382",
".git/objects/97/7794a1002eb5ac95369bb730ac824a82c1c170": "4f9543af10a53bcaf24163ff3ff8f0bc",
".git/objects/d3/69f9e4810fb384d647c6252484487fb9c95459": "b691675ffb765095fc0db867e9db5c3b",
".git/objects/d4/17117ab4a557332f6975d04ff7f175864e27ba": "ba2362c34b900fe49afcb994a8deb2ae",
".git/objects/ba/c72cc44db547ecd129dd966ada519b8aefe688": "0ed54ce989972cee97c317de5a82b0ad",
".git/objects/b8/3e1784be45fd4e95278c8f90508acfc1c0a8f9": "9a486cdc4da0c5f0fcd3f687aaace452",
".git/objects/b1/74c95e7d0f5836f58cf8d1ead0752f82cd437d": "c5a37259aa38aeb42438bf3a69fd790b",
".git/objects/d5/938d8761fc7eca87a297b1a02bce5d1d25787f": "7c2126b750b791e8c93e721a9fe6d913",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e1/928c0e3e855be6c599a408f9f2b95e09d87e82": "8106ee4780ebf9b8323821c16c98a4c5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/77/efbaa60083550283be696af2d047daa0fac3c2": "fc7fcbb672db550eaf65333da41f1bd0",
".git/objects/85/b771c76c46c1d1194e59a8d96201115f9014ba": "f3342fee87c256c79ea27f4ee6c4ae07",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "5619d9082b06e0453bd05744c88c16a1",
".git/logs/refs/heads/master": "5619d9082b06e0453bd05744c88c16a1",
".git/logs/refs/remotes/origin/master": "07397fa86d055a99651f63b5b78cc907",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "2905b8942a263d57896e62672ddf2d21",
".git/refs/remotes/origin/master": "2905b8942a263d57896e62672ddf2d21",
".git/index": "895af72ae712d3355744a15c128498ed",
".git/COMMIT_EDITMSG": "5c483ee9c411f5b5b388a594bd5d56cb",
"assets/AssetManifest.json": "3ff317a615ef6e954271e1b3937c6b05",
"assets/NOTICES": "5678f3f68320af7f8d8e311775bd8efe",
"assets/FontManifest.json": "ce3ef14f94a76d3a27cc7b021b38f4d1",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_black.png": "9beaf6539a3cff54ae8da57e86af4ad4",
"assets/packages/flutter_auth_buttons/graphics/google-logo.png": "6937ba6a7d2de8aa07701225859ae402",
"assets/packages/flutter_auth_buttons/graphics/flogo-HexRBG-Wht-100.png": "25e26b49492089deea672175452d50df",
"assets/packages/flutter_auth_buttons/graphics/apple_logo_white.png": "37fd17b6b4006b45d337e5f875fd45f6",
"assets/packages/flutter_auth_buttons/graphics/Twitter_Logo_Blue.png": "fef946b8bba756359e2a1e87ccd915ea",
"assets/packages/flutter_auth_buttons/graphics/ms-symbollockup_mssymbol_19.png": "0c29638c7558632a1a5f053d344405ba",
"assets/packages/flutter_auth_buttons/fonts/Roboto-Medium.ttf": "d08840599e05db7345652d3d417574a9",
"assets/packages/flutter_auth_buttons/fonts/SF-Pro-Medium.ttf": "8b61dea99518b51d5511dc3963a5537c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
