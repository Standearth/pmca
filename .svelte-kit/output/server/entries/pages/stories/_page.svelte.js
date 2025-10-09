import { a3 as attr, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { H as Header } from "../../../chunks/Header.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    const storiesPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Prime Member Stories - Climate Action",
      "description": "Real stories from Amazon Prime members sharing their experiences and calling for climate action. Join the movement for a more sustainable Amazon.",
      "url": "https://primemembers.earth/stories",
      "mainEntity": {
        "@type": "Organization",
        "name": "Prime Members for Cleaner Amazon",
        "url": "https://primemembers.earth"
      }
    };
    Meta($$renderer2, {
      title: "Prime Member Stories - Climate Action",
      description: "Real stories from Amazon Prime members sharing their experiences and calling for climate action. Join the movement for a more sustainable Amazon.",
      url: "https://primemembers.earth/stories",
      keywords: "Amazon Prime stories, member testimonials, climate action, environmental activism, sustainable shipping",
      ogType: "website",
      structuredData: storiesPageStructuredData,
      preloadFont
    });
    $$renderer2.push(`<!----> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="hero svelte-vvl6ey"><div class="hero-background svelte-vvl6ey"><div class="hero-overlay svelte-vvl6ey"></div> <img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="Background" class="hero-image svelte-vvl6ey"/></div> <div class="hero-content svelte-vvl6ey"><h1 class="svelte-vvl6ey">Stories from Prime Members</h1> <p class="hero-subtitle svelte-vvl6ey">Real experiences and voices calling for Amazon to do better on climate. These are the stories driving our movement for change.</p> <div class="hero-actions svelte-vvl6ey"><button class="btn btn-primary svelte-vvl6ey">Show me other stories</button> <a${attr("href", `${stringify(base)}/join`)} class="btn btn-secondary svelte-vvl6ey">Join and share your story</a></div></div></section> <section class="stories-section svelte-vvl6ey"><div class="container svelte-vvl6ey">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="loading svelte-vvl6ey"><div class="loading-spinner svelte-vvl6ey"></div> <p class="svelte-vvl6ey">Loading stories from Prime members...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="cta-section svelte-vvl6ey"><div class="container svelte-vvl6ey"><div class="cta-content svelte-vvl6ey"><h2 class="svelte-vvl6ey">Ready to add your voice?</h2> <p class="svelte-vvl6ey">Join thousands of Prime members calling for Amazon to do better on climate.</p> <div class="cta-actions svelte-vvl6ey"><a${attr("href", `${stringify(base)}/join`)} class="btn btn-cta svelte-vvl6ey">Join the campaign</a></div></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
