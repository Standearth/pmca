
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/cancel-prime" | "/ca" | "/eu" | "/get-started" | "/in" | "/join" | "/learn-more" | "/stories" | "/uk" | "/updates" | "/updates/[slug]";
		RouteParams(): {
			"/updates/[slug]": { slug: string }
		};
		LayoutParams(): {
			"/": { slug?: string };
			"/cancel-prime": Record<string, never>;
			"/ca": Record<string, never>;
			"/eu": Record<string, never>;
			"/get-started": Record<string, never>;
			"/in": Record<string, never>;
			"/join": Record<string, never>;
			"/learn-more": Record<string, never>;
			"/stories": Record<string, never>;
			"/uk": Record<string, never>;
			"/updates": { slug?: string };
			"/updates/[slug]": { slug: string }
		};
		Pathname(): "/" | "/cancel-prime" | "/cancel-prime/" | "/ca" | "/ca/" | "/eu" | "/eu/" | "/get-started" | "/get-started/" | "/in" | "/in/" | "/join" | "/join/" | "/learn-more" | "/learn-more/" | "/stories" | "/stories/" | "/uk" | "/uk/" | "/updates" | "/updates/" | `/updates/${string}` & {} | `/updates/${string}/` & {};
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/.htaccess" | "/Bluesky_Logo_White.svg" | "/Icon\r" | "/Prime Member Testimonials - TO BE PUBLISHED.csv" | "/bg2.png" | "/bg_video.mp4" | "/bg_video_uk.mp4" | "/favicon.ico" | "/favicon.svg" | "/fonts/AmsiPro-Ultra.woff" | "/fonts/AmsiPro-Ultra.woff2" | "/fonts/Carlito/Carlito-Bold.ttf" | "/fonts/Carlito/Carlito-BoldItalic.ttf" | "/fonts/Carlito/Carlito-Italic.ttf" | "/fonts/Carlito/Carlito-Regular.ttf" | "/fonts/Carlito/Icon\r" | "/fonts/Carlito/OFL.txt" | "/fonts/Icon\r" | "/gtag-testing-guide.md" | "/hero-bg.webp" | "/hero-india.webp" | "/hero-uk.webp" | "/logo_black.png" | "/logo_black.svg" | "/logo_white.png" | "/logo_white.svg" | "/manifest.json" | "/marker.svg" | "/mockup.jpg" | "/pmca_og.jpg" | "/robots.txt" | "/sitemap.xml" | "/stand_white.png" | "/tape.png" | string & {};
	}
}