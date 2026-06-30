export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store",".htaccess","Bluesky_Logo_White.svg","Icon\r","Prime Member Testimonials - TO BE PUBLISHED.csv","bg2.png","bg_video.mp4","bg_video_uk.mp4","favicon.ico","favicon.svg","fonts/AmsiPro-Ultra.woff","fonts/AmsiPro-Ultra.woff2","fonts/Carlito/Carlito-Bold.ttf","fonts/Carlito/Carlito-BoldItalic.ttf","fonts/Carlito/Carlito-Italic.ttf","fonts/Carlito/Carlito-Regular.ttf","fonts/Carlito/Icon\r","fonts/Carlito/OFL.txt","fonts/Icon\r","gtag-testing-guide.md","hero-bg.webp","hero-india.webp","hero-uk.webp","logo_black.png","logo_black.svg","logo_white.png","logo_white.svg","manifest.json","marker.svg","mockup.jpg","pmca_og.jpg","robots.txt","sitemap.xml","stand_white.png","tape.png"]),
	mimeTypes: {".svg":"image/svg+xml",".csv":"text/csv",".png":"image/png",".mp4":"video/mp4",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".txt":"text/plain",".md":"text/markdown",".webp":"image/webp",".json":"application/json",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.D35Jj3Ay.js",app:"_app/immutable/entry/app.DyIfKwiJ.js",imports:["_app/immutable/entry/start.D35Jj3Ay.js","_app/immutable/chunks/tBN1eg28.js","_app/immutable/chunks/jQ12fRz9.js","_app/immutable/chunks/D0iwhpLH.js","_app/immutable/chunks/CoJFXFKm.js","_app/immutable/entry/app.DyIfKwiJ.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/jQ12fRz9.js","_app/immutable/chunks/C8FFzEQw.js","_app/immutable/chunks/DoqlwY0V.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/cancel-prime",
				pattern: /^\/cancel-prime\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/ca",
				pattern: /^\/ca\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/eu",
				pattern: /^\/eu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/get-started",
				pattern: /^\/get-started\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/in",
				pattern: /^\/in\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/join",
				pattern: /^\/join\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/learn-more",
				pattern: /^\/learn-more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/stories",
				pattern: /^\/stories\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/uk",
				pattern: /^\/uk\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/updates",
				pattern: /^\/updates\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/updates/[slug]",
				pattern: /^\/updates\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
