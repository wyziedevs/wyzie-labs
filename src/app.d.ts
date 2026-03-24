// See https://kit.svelte.dev/docs/types#app

declare global {
	namespace App {
		interface Platform {
			env: {
				// Add your Cloudflare bindings here
				// MY_KV: KVNamespace;
				// MY_DB: D1Database;
				// MY_BUCKET: R2Bucket;
			};
			context: {
				waitUntil(promise: Promise<unknown>): void;
			};
			caches: CacheStorage & { default: Cache };
		}
	}
}

export {};
