export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".htaccess","Bluesky_Logo_White.svg","bg2.png","bg_video.mp4","favicon.ico","favicon.svg","fonts/AmsiPro-Ultra.woff","fonts/AmsiPro-Ultra.woff2","fonts/Carlito/Carlito-Bold.ttf","fonts/Carlito/Carlito-BoldItalic.ttf","fonts/Carlito/Carlito-Italic.ttf","fonts/Carlito/Carlito-Regular.ttf","fonts/Carlito/OFL.txt","gtag-testing-guide.md","hero-bg.webp","logo_black.png","logo_black.svg","logo_white.png","logo_white.svg","manifest.json","marker.svg","mockup.jpg","pmca_og.jpg","robots.txt","sitemap.xml","stand_white.png","tape.png"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".mp4":"video/mp4",".woff":"font/woff",".woff2":"font/woff2",".ttf":"font/ttf",".txt":"text/plain",".md":"text/markdown",".webp":"image/webp",".json":"application/json",".jpg":"image/jpeg",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.B8aM-sc1.js",app:"_app/immutable/entry/app.DG-Pm7u2.js",imports:["_app/immutable/entry/start.B8aM-sc1.js","_app/immutable/chunks/whlPrnp1.js","_app/immutable/chunks/CTSxgTlG.js","_app/immutable/chunks/DMlLoitP.js","_app/immutable/entry/app.DG-Pm7u2.js","_app/immutable/chunks/CTSxgTlG.js","_app/immutable/chunks/BX8KHRNg.js","_app/immutable/chunks/DWzhdOWU.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/cancel-prime/","/get-started/","/join/","/learn-more/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
