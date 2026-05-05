import { a3 as attr, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { H as Header } from "../../../chunks/Header.js";
import "../../../chunks/sanity.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "Campaign Updates - Prime Members for Cleaner Amazon",
      "description": "The latest news and updates from the Prime Members for Cleaner Amazon campaign.",
      "url": "https://primemembers.earth/updates"
    };
    Meta($$renderer2, {
      title: "Latest Updates - Prime Members for Cleaner Amazon",
      description: "The latest news and updates from the Prime Members for Cleaner Amazon campaign.",
      url: "https://primemembers.earth/updates",
      keywords: "Amazon Prime updates, campaign news, climate action updates, prime members news",
      ogType: "website",
      structuredData,
      preloadFont
    });
    $$renderer2.push(`<!----> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="hero svelte-tk0old"><div class="hero-background svelte-tk0old"><div class="hero-overlay svelte-tk0old"></div> <img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="Background" class="hero-image svelte-tk0old"/></div> <div class="hero-content svelte-tk0old"><h1 class="svelte-tk0old">Latest Updates</h1> <p class="hero-subtitle svelte-tk0old">Stay up to date with the latest news, milestones, and actions from the Prime Members for Cleaner Amazon campaign.</p></div></section> <section class="updates-section svelte-tk0old"><div class="container svelte-tk0old">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="loading svelte-tk0old"><div class="loading-spinner svelte-tk0old"></div> <p class="svelte-tk0old">Loading updates...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></section> <section class="cta-section svelte-tk0old"><div class="container svelte-tk0old"><div class="cta-content svelte-tk0old"><h2 class="svelte-tk0old">Ready to add your voice?</h2> <p class="svelte-tk0old">Join thousands of Prime members calling for Amazon to do better on climate.</p> <div class="cta-actions svelte-tk0old"><a${attr("href", `${stringify(base)}/join`)} class="btn btn-cta svelte-tk0old">Join the campaign</a></div></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
