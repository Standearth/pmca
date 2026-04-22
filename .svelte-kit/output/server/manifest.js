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
		client: {start:"_app/immutable/entry/start.BRi5qTrK.js",app:"_app/immutable/entry/app.Bnq2mu6N.js",imports:["_app/immutable/entry/start.BRi5qTrK.js","_app/immutable/chunks/ZS7DEGVI.js","_app/immutable/chunks/DNEbY7iV.js","_app/immutable/chunks/7-WMEdRr.js","_app/immutable/entry/app.Bnq2mu6N.js","_app/immutable/chunks/DNEbY7iV.js","_app/immutable/chunks/_067kcFw.js","_app/immutable/chunks/DOJ0tDKX.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/","/__data.json","/cancel-prime/","/ca/","/eu/","/get-started/","/in/","/join/","/learn-more/","/stories/","/uk/"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
