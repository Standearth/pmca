export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "pmca/_app",
	assets: new Set(["bg2.png","bg_video.mp4","favicon.ico","favicon.svg","fonts/AmsiPro-Ultra.woff","fonts/AmsiPro-Ultra.woff2","fonts/Carlito/Carlito-Bold.ttf","fonts/Carlito/Carlito-BoldItalic.ttf","fonts/Carlito/Carlito-Italic.ttf","fonts/Carlito/Carlito-Regular.ttf","fonts/Carlito/OFL.txt","hero-bg.webp","logo_black.png","logo_black.svg","logo_white.png","logo_white.svg","marker.svg","mockup.jpg","stand_white.png","tape.png"]),
	mimeTypes: {".png":"image/png",".mp4":"video/mp4",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".txt":"text/plain",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.DtsQKXox.js",app:"_app/immutable/entry/app.B3YbNfrJ.js",imports:["_app/immutable/entry/start.DtsQKXox.js","_app/immutable/chunks/C4wdF5Sl.js","_app/immutable/chunks/D-yX5OqO.js","_app/immutable/chunks/CapwKxFb.js","_app/immutable/chunks/B8DPCULC.js","_app/immutable/chunks/qS7nEnlw.js","_app/immutable/chunks/CynQOg7B.js","_app/immutable/entry/app.B3YbNfrJ.js","_app/immutable/chunks/CapwKxFb.js","_app/immutable/chunks/D-yX5OqO.js","_app/immutable/chunks/B8DPCULC.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/B6xa3oUU.js","_app/immutable/chunks/umw_tuHS.js","_app/immutable/chunks/CPBmD6ow.js","_app/immutable/chunks/Bx8wqkNZ.js","_app/immutable/chunks/qS7nEnlw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
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
				id: "/get-started",
				pattern: /^\/get-started\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/leaderboard",
				pattern: /^\/leaderboard\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/learn-more",
				pattern: /^\/learn-more\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
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
