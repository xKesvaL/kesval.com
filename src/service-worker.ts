/// <reference types="@sveltejs/kit" />
/// <reference no-default-lib="true"/>
/// <reference lib="esnext" />
/// <reference lib="webworker" />

const sw = self as unknown as ServiceWorkerGlobalScope;

import { version, build, files } from '$service-worker';
import { cacheFiles, deleteOldCaches, getFromCache } from './lib/service-worker/caching';

const CACHE = `cache-${version}`;

const ASSETS = [
  ...build, // the app itself
  ...files, // everything in `static`
];

sw.addEventListener('install', (event) => {
  sw.skipWaiting();

  event.waitUntil(cacheFiles(CACHE, ASSETS));
});

sw.addEventListener('activate', (event) => {
  event.waitUntil(deleteOldCaches(CACHE));
});

sw.addEventListener('fetch', (event) => {
  event.respondWith(getFromCache(CACHE, ASSETS, event.request) as any);
});
