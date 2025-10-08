export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "pmca/_app",
	assets: new Set(["Bluesky_Logo_White.svg","bg2.png","bg_video.mp4","favicon.ico","favicon.svg","fonts/AmsiPro-Ultra.woff","fonts/AmsiPro-Ultra.woff2","fonts/Carlito/Carlito-Bold.ttf","fonts/Carlito/Carlito-BoldItalic.ttf","fonts/Carlito/Carlito-Italic.ttf","fonts/Carlito/Carlito-Regular.ttf","fonts/Carlito/OFL.txt","hero-bg.webp","logo_black.png","logo_black.svg","logo_white.png","logo_white.svg","marker.svg","mockup.jpg","stand_white.png","tape.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".mp4":"video/mp4",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".txt":"text/plain",".webp":"image/webp",".jpg":"image/jpeg"},
	_: {
		client: {start:"_app/immutable/entry/start.S9oc-7u1.js",app:"_app/immutable/entry/app.wzwBa8op.js",imports:["_app/immutable/entry/start.S9oc-7u1.js","_app/immutable/chunks/BAsVtnJr.js","_app/immutable/chunks/CSgtqWaa.js","_app/immutable/chunks/CAQvlpFj.js","_app/immutable/entry/app.wzwBa8op.js","_app/immutable/chunks/CSgtqWaa.js","_app/immutable/chunks/DJKjfDzx.js","_app/immutable/chunks/D5fUN1fw.js","_app/immutable/chunks/Da3QqUQq.js","_app/immutable/chunks/DPozTIBp.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/pmca/","/pmca/__data.json","/pmca/cancel-prime/","/pmca/get-started/","/pmca/learn-more/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
