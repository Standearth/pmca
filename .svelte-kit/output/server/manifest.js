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
		client: {start:"_app/immutable/entry/start.Bt37dJAh.js",app:"_app/immutable/entry/app.DMmw-YbD.js",imports:["_app/immutable/entry/start.Bt37dJAh.js","_app/immutable/chunks/BXhhsJYa.js","_app/immutable/chunks/CTiQNl_T.js","_app/immutable/chunks/BG6AAHqK.js","_app/immutable/chunks/Dd9Uve4A.js","_app/immutable/chunks/BMkGF3G0.js","_app/immutable/entry/app.DMmw-YbD.js","_app/immutable/chunks/BG6AAHqK.js","_app/immutable/chunks/CTiQNl_T.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/DAUQhyE9.js","_app/immutable/chunks/CYGXxWkR.js","_app/immutable/chunks/BIXTSnDo.js","_app/immutable/chunks/Cuwf8bRi.js","_app/immutable/chunks/Dd9Uve4A.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
