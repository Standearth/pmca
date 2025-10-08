import { a6 as head, a0 as escape_html, a3 as attr, a4 as stringify, a7 as ensure_array_like } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
import { P as PopupModal } from "./PopupModal.js";
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function Meta($$renderer, $$props) {
  let {
    title = "Prime Members for Cleaner Amazon",
    description = "Join Prime members demanding cleaner Amazon.",
    url = "https://primemembers.earth",
    keywords = "",
    preloadFont = [],
    ogType = "website",
    structuredData = null
  } = $$props;
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Prime Members for Cleaner Amazon",
    "url": url,
    "description": description,
    "logo": `${url}${base}/logo_black.svg`,
    "sameAs": ["https://stand.earth"],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "url": url
    },
    "potentialAction": {
      "@type": "JoinAction",
      "target": `${url}/join`,
      "name": "Join the Campaign"
    }
  };
  const finalStructuredData = structuredData || defaultStructuredData;
  head($$renderer, ($$renderer2) => {
    $$renderer2.title(($$renderer3) => {
      $$renderer3.push(`<title>${escape_html(title)}</title>`);
    });
    $$renderer2.push(`<meta name="description"${attr("content", description)}/> <meta name="keywords"${attr("content", keywords)}/> <meta name="author" content="Prime Members for Cleaner Amazon"/> <meta name="news_keywords"${attr("content", keywords)}/> <meta name="theme-color" content="#1298ff"/> <meta name="msapplication-TileColor" content="#1298ff"/> <meta name="viewport" content="width=device-width, initial-scale=1.0"/> <meta name="format-detection" content="telephone=no"/> <meta name="mobile-web-app-capable" content="yes"/> <meta name="apple-mobile-web-app-capable" content="yes"/> <meta name="apple-mobile-web-app-status-bar-style" content="default"/> <meta name="apple-mobile-web-app-title" content="Prime Members for Cleaner Amazon"/> <meta name="language" content="English"/> <meta http-equiv="Content-Language" content="en-US"/> <meta property="og:title"${attr("content", title)}/> <meta property="og:site_name" content="Prime Members for Cleaner Amazon"/> <meta property="og:url"${attr("content", url)}/> <meta property="og:description"${attr("content", description)}/> <meta property="og:type"${attr("content", ogType)}/> <meta property="og:locale" content="en_US"/> <meta property="og:image"${attr("content", `${stringify(url)}${stringify(base)}/hero-bg.webp`)}/> <meta property="og:image:alt" content="Prime Members for Cleaner Amazon - Join the movement"/> <meta property="og:image:type" content="image/webp"/> <meta property="og:image:width" content="1200"/> <meta property="og:image:height" content="630"/> <meta name="twitter:card" content="summary_large_image"/> <meta name="twitter:site" content="@standearth"/> <meta name="twitter:creator" content="@standearth"/> <meta name="twitter:title"${attr("content", title)}/> <meta name="twitter:description"${attr("content", description)}/> <meta name="twitter:image"${attr("content", `${stringify(url)}${stringify(base)}/hero-bg.webp`)}/> <meta name="twitter:image:alt" content="Prime Members for Cleaner Amazon - Join the movement"/> <meta property="og:image:secure_url"${attr("content", `${stringify(url)}${stringify(base)}/hero-bg.webp`)}/> <meta property="fb:app_id" content=""/> <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/> <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/> <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"/> <link rel="canonical"${attr("href", url)}/> <link rel="icon" type="image/svg+xml"${attr("href", `${stringify(base)}/favicon.svg`)}/> <link rel="icon" type="image/x-icon"${attr("href", `${stringify(base)}/favicon.ico`)}/> <link rel="apple-touch-icon"${attr("href", `${stringify(base)}/logo_black.png`)}/> <link rel="manifest"${attr("href", `${stringify(base)}/manifest.json`)}/> <link rel="dns-prefetch" href="//act.stand.earth"/> <link rel="dns-prefetch" href="//primemembers.earth"/> <link rel="dns-prefetch" href="//fonts.googleapis.com"/> ${html(`<script type="application/ld+json">${JSON.stringify(finalStructuredData)}<\/script>`)} <!--[-->`);
    const each_array = ensure_array_like(preloadFont);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let href = each_array[$$index];
      $$renderer2.push(`<link rel="preload"${attr("href", href)} as="font" type="font/woff2" crossorigin="anonymous"/>`);
    }
    $$renderer2.push(`<!--]-->`);
  });
}
function Footer($$renderer) {
  let showPopup = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<footer class="campaign-footer svelte-1sr6y3t"><div class="container svelte-1sr6y3t"><div class="footer-content svelte-1sr6y3t"><div class="footer-logo svelte-1sr6y3t"><a target="_new" href="https://stand.earth/"><img${attr("src", `${stringify(base)}/stand_white.png`)} alt="Stand.earth" class="svelte-1sr6y3t"/></a></div> <nav class="footer-nav svelte-1sr6y3t"><a${attr("href", `${stringify(base)}/learn-more`)} class="svelte-1sr6y3t">Learn More</a> <button class="get-started-cta svelte-1sr6y3t">Get Started</button></nav></div></div></footer> `);
    PopupModal($$renderer2, {
      get show() {
        return showPopup;
      },
      set show($$value) {
        showPopup = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
function TapeTransition($$renderer) {
  $$renderer.push(`<div class="tape-section svelte-ex5d9t"><img${attr("src", `${stringify(base)}/tape.png`)} alt="Tape" class="tape-image svelte-ex5d9t"/></div>`);
}
export {
  Footer as F,
  Meta as M,
  TapeTransition as T
};
