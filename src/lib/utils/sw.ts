export const cacheFiles = async (cacheKey: string, assets: string[]) => {
	const cache = await caches.open(cacheKey);
	await cache.addAll(assets);
};

export const deleteOldCaches = async (currentCacheKey: string) => {
	for (const key of await caches.keys()) {
		if (key !== currentCacheKey) {
			await caches.delete(key);
		}
	}
};

export const getFromCache = async (
	cacheKey: string,
	assets: string[],
	request: Request
): Promise<Response> => {
	if (
		request.method !== 'GET' ||
		request.url.startsWith('chrome-extension://') ||
		request.url.includes('extension')
	) {
		return await fetch(request);
	}

	const url = new URL(request.url);
	const cache = await caches.open(cacheKey);

	if (assets.includes(url.pathname)) {
		const cachedResponse = await cache.match(url.pathname);

		if (cachedResponse) {
			return cachedResponse;
		}

		const response = await fetch(request);
		cache.put(url.pathname, response.clone());
		return response;
	}

	return await fetch(request);
};
