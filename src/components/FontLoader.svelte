<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<style>
		@font-face {
			font-family: "AmsiPro";
			src: url("{base}/fonts/AmsiPro-Ultra.woff2") format("woff2"),
				 url("{base}/fonts/AmsiPro-Ultra.woff") format("woff");
			font-weight: 700;
			font-style: normal;
			font-stretch: normal;
			font-display: swap;
		}

		@font-face {
			font-family: "Carlito";
			src: url("{base}/fonts/Carlito/Carlito-Regular.ttf") format("truetype");
			font-weight: 400;
			font-style: normal;
			font-stretch: normal;
			font-display: swap;
		}

		@font-face {
			font-family: "Carlito";
			src: url("{base}/fonts/Carlito/Carlito-Bold.ttf") format("truetype");
			font-weight: 700;
			font-style: normal;
			font-stretch: normal;
			font-display: swap;
		}

		@font-face {
			font-family: "Carlito";
			src: url("{base}/fonts/Carlito/Carlito-Italic.ttf") format("truetype");
			font-weight: 400;
			font-style: italic;
			font-stretch: normal;
			font-display: swap;
		}

		@font-face {
			font-family: "Carlito";
			src: url("{base}/fonts/Carlito/Carlito-BoldItalic.ttf") format("truetype");
			font-weight: 700;
			font-style: italic;
			font-stretch: normal;
			font-display: swap;
		}
	</style>
</svelte:head>
