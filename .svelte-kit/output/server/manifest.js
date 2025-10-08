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
		client: {start:"_app/immutable/entry/start.DVywO7fw.js",app:"_app/immutable/entry/app.B6zb0w4M.js",imports:["_app/immutable/entry/start.DVywO7fw.js","_app/immutable/chunks/DH9GCfZI.js","_app/immutable/chunks/ptKbBcbR.js","_app/immutable/chunks/BCpkZgCP.js","_app/immutable/entry/app.B6zb0w4M.js","_app/immutable/chunks/ptKbBcbR.js","_app/immutable/chunks/C_1nMqcQ.js","_app/immutable/chunks/D3MvYBbU.js","_app/immutable/chunks/BdW1tfG_.js","_app/immutable/chunks/Cn0oOOox.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
