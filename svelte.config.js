import adapterStatic from "@sveltejs/adapter-static";
import { sveltePreprocess } from "svelte-preprocess";
import autoprefixer from "autoprefixer";

const preprocess = sveltePreprocess({
	postcss: {
		plugins: [autoprefixer]
	}
});

const dev = process.argv.includes('dev');

const config = {
	compilerOptions: {
		runes: true
	},
	preprocess,
	kit: {
		adapter: adapterStatic({ 
			strict: false,
			pages: 'docs',
			assets: 'docs'
		}),
		paths: {
			base: '/pmca'
		}
	}
};

export default config;
