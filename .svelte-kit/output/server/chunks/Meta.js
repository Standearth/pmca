import { a3 as head, a0 as escape_html, a4 as attr, a5 as stringify, a6 as ensure_array_like } from "./index.js";
function Meta($$renderer, $$props) {
  let {
    title = "Prime Members for Clean Amazon",
    description = "Prime members want Amazon to do more on climate",
    url = "https://primemembers.earth",
    keywords = "",
    preloadFont = []
  } = $$props;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(title)}</title>`);
    });
    $$renderer2.push(`<meta name="description"${attr("content", description)}/> <meta name="author" content="Prime Members for Cleaner Amazon"/> <meta name="news_keywords"${attr("content", keywords)}/> <meta property="og:title"${attr("content", title)}/> <meta property="og:site_name" content="Prime Members for Cleaner Amazon"/> <meta property="og:url"${attr("content", url)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:type" content="article"/> <meta property="og:locale" content="en_US"/> <meta property="og:image"${attr("content", `${stringify(url)}/static/hero-bg.webp`)}/> <meta property="og:image:type" content="image/webp"/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="628"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content=""/> <meta name="twitter:creator" content=""/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="twitter:image:src"${attr("content", `${stringify(url)}/static/hero-bg.webp`)}/> <meta name="robots" content="max-image-preview:large"/> <link rel="canonical"${attr("href", `${stringify(url)}/`)}/> <link rel="icon" type="image/svg+xml" href="/marker.svg"/> <link rel="icon" type="image/x-icon" href="/favicon.ico"/> <!--[-->`);
    const each_array = ensure_array_like(preloadFont);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let href = each_array[$$index];
      $$renderer2.push(`<link rel="preload"${attr("href", href)} as="font" type="font/woff2" crossorigin=""/>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  Meta as M
};
