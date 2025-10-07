
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
		RouteId(): "/" | "/get-started" | "/leaderboard" | "/learn-more";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/get-started": Record<string, never>;
			"/leaderboard": Record<string, never>;
			"/learn-more": Record<string, never>
		};
		Pathname(): "/" | "/get-started" | "/get-started/" | "/leaderboard" | "/leaderboard/" | "/learn-more" | "/learn-more/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/Bluesky_Logo_White.svg" | "/bg2.png" | "/bg_video.mp4" | "/favicon.ico" | "/favicon.svg" | "/fonts/AmsiPro-Ultra.woff" | "/fonts/AmsiPro-Ultra.woff2" | "/fonts/Carlito/Carlito-Bold.ttf" | "/fonts/Carlito/Carlito-BoldItalic.ttf" | "/fonts/Carlito/Carlito-Italic.ttf" | "/fonts/Carlito/Carlito-Regular.ttf" | "/fonts/Carlito/OFL.txt" | "/hero-bg.webp" | "/logo_black.png" | "/logo_black.svg" | "/logo_white.png" | "/logo_white.svg" | "/marker.svg" | "/mockup.jpg" | "/stand_white.png" | "/tape.png" | string & {};
	}
}