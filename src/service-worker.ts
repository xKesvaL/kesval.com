/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { version, build, files, prerendered } from '$service-worker';
import { cacheFiles, deleteOldCaches, getFromCache } from './lib/service-worker/caching';

const CACHE = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files, // everything in `static`
  ...prerendered, // prerendered pages
];

sw.addEventListener('install', (event) => {
  event.waitUntil(cacheFiles(CACHE, ASSETS).then(() => sw.skipWaiting()));
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCaches(CACHE).then(() => sw.clients.claim()));
});

sw.addEventListener('fetch', (event) => {
  event.respondWith(getFromCache(CACHE, ASSETS, event.request) as any);
});
