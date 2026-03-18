import { a3 as attr, a0 as escape_html, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { H as Header } from "../../../chunks/Header.js";
import { T as TapeTransition } from "../../../chunks/TapeTransition.js";
import { S as StoriesCarousel } from "../../../chunks/StoriesCarousel.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentCount = 0;
    let iframeSrc = "https://act.stand.earth/page/88799/petition/1?supporter.country=Canada";
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    const joinPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Join Prime Members for Cleaner Amazon",
      "description": "Join the movement! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
      "url": "https://primemembers.earth/ca",
      "mainEntity": {
        "@type": "Organization",
        "name": "Prime Members for Cleaner Amazon",
        "url": "https://primemembers.earth",
        "description": "A campaign by Prime members demanding Amazon do more on climate change",
        "logo": "https://primemembers.earth/logo_black.svg",
        "sameAs": ["https://stand.earth"],
        "potentialAction": [
          {
            "@type": "JoinAction",
            "target": "https://primemembers.earth/ca",
            "name": "Join the Campaign"
          },
          {
            "@type": "DonateAction",
            "target": "https://act.stand.earth/page/77077/donate/1",
            "name": "Donate to the Campaign"
          }
        ]
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://primemembers.earth"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Join",
            "item": "https://primemembers.earth/ca"
          }
        ]
      }
    };
    Meta($$renderer2, {
      title: "Join Prime Members for Cleaner Amazon",
      description: "Join the movement! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
      url: "https://primemembers.earth/ca",
      keywords: "Amazon Prime, join campaign, climate action, electric delivery, renewable energy, environmental activism",
      ogType: "website",
      structuredData: joinPageStructuredData,
      preloadFont
    });
    $$renderer2.push(`<!----> `);
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="hero svelte-1hoy7vp"><div class="hero-background svelte-1hoy7vp"><video autoplay muted playsinline${attr("poster", `${stringify(base)}/hero-bg.webp`)} class="hero-video svelte-1hoy7vp"><source${attr("src", `${stringify(base)}/bg_video.mp4`)} type="video/mp4"/></video></div> <div class="hero-content svelte-1hoy7vp"><div class="hero-text svelte-1hoy7vp"><h1 class="svelte-1hoy7vp">Join Prime members across Canada demanding cleaner Amazon.</h1> <p class="hero-subtitle svelte-1hoy7vp">Prime members agree that Amazon needs to do more on climate, from reducing emissions in its delivery fleet, to using renewable energy in its operations.</p> <h3 class="svelte-1hoy7vp">Use your Prime membership power to make Amazon deliver on climate!</h3> <div class="counter svelte-1hoy7vp"><div class="counter-circle svelte-1hoy7vp"><div class="counter-number svelte-1hoy7vp">${escape_html(Math.floor(currentCount).toLocaleString())}</div> <div class="counter-text svelte-1hoy7vp">Prime members<br/>and counting!</div></div></div></div> <div class="signup-form svelte-1hoy7vp"><iframe${attr("src", iframeSrc)} title="Join the campaign" class="signup-iframe svelte-1hoy7vp" loading="eager"></iframe></div></div></section> <section class="demands svelte-1hoy7vp"><div class="container svelte-1hoy7vp"><div class="demands-content svelte-1hoy7vp"><div class="demands-text svelte-1hoy7vp"><h2 class="svelte-1hoy7vp">Amazon isn't delivering on its climate promises.</h2> <p class="svelte-1hoy7vp">Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company's rapidly expanding data centers and delivery fleet.</p> <h3 class="svelte-1hoy7vp"><strong>As Prime members, we have the leverage to say our future is not for sale.</strong></h3></div> <div class="demands-card svelte-1hoy7vp"><div class="card-header svelte-1hoy7vp"><strong>TO: Amazon</strong><br/> <strong>FROM: Prime members</strong></div> <p class="svelte-1hoy7vp">As your most loyal customers, we are calling on you to:</p> <ol class="svelte-1hoy7vp"><li class="svelte-1hoy7vp"><span class="accent-orange svelte-1hoy7vp">Electrify your global delivery fleet</span> from dock to door</li> <li class="svelte-1hoy7vp">Power every data center and warehouse with <span class="accent-orange svelte-1hoy7vp">real renewable energy</span></li> <li class="svelte-1hoy7vp">Create <span class="accent-orange svelte-1hoy7vp">better working conditions</span>, including fair break times, safety standards, and protecting workers' right to organize</li></ol></div></div></div></section> `);
    StoriesCarousel($$renderer2);
    $$renderer2.push(`<!----> `);
    TapeTransition($$renderer2);
    $$renderer2.push(`<!----> <section class="how svelte-1hoy7vp"><div class="container svelte-1hoy7vp"><h2 class="svelte-1hoy7vp">Here is how we move Amazon</h2> <p class="how-subtitle svelte-1hoy7vp">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p> <div class="action-grid svelte-1hoy7vp"><div class="action-item svelte-1hoy7vp"><div class="action-icon svelte-1hoy7vp"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-1hoy7vp"/></div> <h3 class="svelte-1hoy7vp">Build Power</h3> <p class="svelte-1hoy7vp">Let's reach as many Prime members as possible. Share <span class="highlight svelte-1hoy7vp">your unique link</span> and spread the word.</p></div> <div class="action-item svelte-1hoy7vp"><div class="action-icon svelte-1hoy7vp"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-1hoy7vp"/></div> <h3 class="svelte-1hoy7vp">Get Noticed</h3> <p class="svelte-1hoy7vp">We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight svelte-1hoy7vp">just the tools</span> for the job.</p></div> <div class="action-item svelte-1hoy7vp"><div class="action-icon svelte-1hoy7vp"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-1hoy7vp"/></div> <h3 class="svelte-1hoy7vp">Organize</h3> <p class="svelte-1hoy7vp">From <span class="highlight svelte-1hoy7vp">Amazon employees</span>, to <span class="highlight svelte-1hoy7vp">local communities</span>, our collective power can only grow from here.</p></div></div></div></section> <section class="cancel-prime-plug svelte-1hoy7vp"><div class="container svelte-1hoy7vp"><div class="plug-content svelte-1hoy7vp"><div class="plug-text svelte-1hoy7vp"><h3 class="svelte-1hoy7vp">Considering canceling your Prime membership?</h3> <p class="svelte-1hoy7vp">Amazon got into BIG trouble for making Prime cancellation deliberately difficult. Learn how the process works now.</p></div> <div class="plug-cta svelte-1hoy7vp"><a${attr("href", `${stringify(base)}/cancel-prime`)} class="btn btn-secondary svelte-1hoy7vp">Learn about canceling Prime</a></div></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
