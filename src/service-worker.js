import { build, files, timestamp } from '$service-worker';
import { precacheAndRoute, precache } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';

console.info('Service worker parsed with timestamp: ', timestamp);

// Edit the list of routes so they get cached and routed correctly, allowing
// cold start or hot reload to work offline.
const skRoutes = ['/', '/focus'];

// Just update to the new serviceworker if there's any
self.addEventListener('install', () => {
	self.skipWaiting();
});

// Just update to the new serviceworker if there's any, attempt 2
// In the future we show a message before doing it.
setTimeout(() => {
	self.skipWaiting();
}, 2000);

precacheAndRoute([
	...build.map(url => {
		return {
			url,
			revision: null,
		};
	}),
	...files.map(url => {
		return {
			url,
			revision: `${timestamp}`,
		};
	}),
]);

precache(
	skRoutes.map(url => {
		return {
			url,
			revision: `${timestamp}`,
		};
	})
);

const matchCb = ({ url /*, request, event*/ }) => {
	return skRoutes.some(path => url.pathname === path);
};
registerRoute(matchCb, new StaleWhileRevalidate({}));
