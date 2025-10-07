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
		client: {start:"_app/immutable/entry/start.Cm2PdQjz.js",app:"_app/immutable/entry/app.C7Aackk7.js",imports:["_app/immutable/entry/start.Cm2PdQjz.js","_app/immutable/chunks/DVjt8IhT.js","_app/immutable/chunks/MJLOPqBc.js","_app/immutable/chunks/D4S9hLi-.js","_app/immutable/chunks/CkD9W3oy.js","_app/immutable/chunks/BthDBq65.js","_app/immutable/entry/app.C7Aackk7.js","_app/immutable/chunks/D4S9hLi-.js","_app/immutable/chunks/MJLOPqBc.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/Bv03wdxo.js","_app/immutable/chunks/BA7S0VKz.js","_app/immutable/chunks/DxpOQ2_T.js","_app/immutable/chunks/Ad_xzCde.js","_app/immutable/chunks/CkD9W3oy.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/pmca/","/pmca/__data.json","/pmca/get-started/","/pmca/leaderboard/","/pmca/learn-more/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
