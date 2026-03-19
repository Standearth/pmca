import { a3 as attr, a0 as escape_html, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { H as Header } from "../../../chunks/Header.js";
import { T as TapeTransition } from "../../../chunks/TapeTransition.js";
import { S as StoriesCarousel } from "../../../chunks/StoriesCarousel.js";
import { P as PopupModal } from "../../../chunks/PopupModal.js";
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentCount = 0;
    let showPopup = false;
    const ukIframeBaseUrl = "https://act.stand.earth/page/88799/petition/1?supporter.country=Germany";
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    const ukPageStructuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Join Prime Members for Cleaner Amazon – Europe",
      "description": "Join the movement from the EU! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
      "url": "https://primemembers.earth/eu",
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
            "target": "https://primemembers.earth/eu",
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
            "name": "Join – United Kingdom",
            "item": "https://primemembers.earth/eu"
          }
        ]
      }
    };
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Meta($$renderer3, {
        title: "Join Prime Members for Cleaner Amazon – Europe",
        description: "Join the movement from the EU! Prime members are demanding Amazon electrify their delivery fleet, use renewable energy, and improve working conditions. Add your voice today.",
        url: "https://primemembers.earth/eu",
        keywords: "Amazon Prime EU, join campaign, climate action, electric delivery, renewable energy, environmental activism",
        ogType: "website",
        structuredData: ukPageStructuredData,
        preloadFont
      });
      $$renderer3.push(`<!----> `);
      Header($$renderer3);
      $$renderer3.push(`<!----> `);
      PopupModal($$renderer3, {
        baseUrl: ukIframeBaseUrl,
        get show() {
          return showPopup;
        },
        set show($$value) {
          showPopup = $$value;
          $$settled = false;
        }
      });
      $$renderer3.push(`<!----> <section class="hero svelte-1ykd5q3"><div class="hero-background svelte-1ykd5q3"><video autoplay muted playsinline${attr("poster", `${stringify(base)}/hero-uk.webp`)} class="hero-video svelte-1ykd5q3"><source${attr("src", `${stringify(base)}/bg_video_uk.mp4`)} type="video/mp4"/></video></div> <div class="hero-content svelte-1ykd5q3"><div class="hero-text svelte-1ykd5q3"><h1 class="svelte-1ykd5q3">Join Prime members across the EU for cleaner Amazon.</h1> <p class="hero-subtitle svelte-1ykd5q3">Prime members agree that Amazon needs to do more on climate, from reducing emissions in its delivery fleet, to using renewable energy in its operations.</p> <h3 class="svelte-1ykd5q3">Use your Prime membership power to make Amazon deliver on climate!</h3> <div class="counter svelte-1ykd5q3"><div class="counter-circle svelte-1ykd5q3"><div class="counter-number svelte-1ykd5q3">${escape_html(Math.floor(currentCount).toLocaleString())}</div> <div class="counter-text svelte-1ykd5q3">Prime members<br/>and counting!</div></div></div></div> <div class="uk-cta svelte-1ykd5q3"><h3 class="svelte-1ykd5q3">Ready to activate your Prime member power?</h3> <div class="cta-buttons svelte-1ykd5q3"><a href="https://whatsapp.com/channel/0029VbCSWS0Lo4haOx1AWF0w" target="_blank" rel="noopener noreferrer" class="btn btn-whatsapp svelte-1ykd5q3"><svg class="whatsapp-icon svelte-1ykd5q3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"></path></svg> Join on WhatsApp</a> <button class="btn btn-email svelte-1ykd5q3"><svg class="email-icon svelte-1ykd5q3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg> Join with Email</button></div></div></div></section> <section class="demands svelte-1ykd5q3"><div class="container svelte-1ykd5q3"><div class="demands-content svelte-1ykd5q3"><div class="demands-text svelte-1ykd5q3"><h2 class="svelte-1ykd5q3">Amazon isn't delivering on its climate promises.</h2> <p class="svelte-1ykd5q3">Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company's rapidly expanding data centers and delivery fleet.</p> <h3 class="svelte-1ykd5q3"><strong>As Prime members, we have the leverage to say our future is not for sale.</strong></h3></div> <div class="demands-card svelte-1ykd5q3"><div class="card-header svelte-1ykd5q3"><strong>TO: Amazon</strong><br/> <strong>FROM: Prime members</strong></div> <p class="svelte-1ykd5q3">As your most loyal customers, we are calling on you to:</p> <ol class="svelte-1ykd5q3"><li class="svelte-1ykd5q3"><span class="accent-orange svelte-1ykd5q3">Electrify your global delivery fleet</span> from dock to door</li> <li class="svelte-1ykd5q3">Power every data center and warehouse with <span class="accent-orange svelte-1ykd5q3">real renewable energy</span></li> <li class="svelte-1ykd5q3">Create <span class="accent-orange svelte-1ykd5q3">better working conditions</span>, including fair break times, safety standards, and protecting workers' right to organize</li></ol></div></div></div></section> `);
      StoriesCarousel($$renderer3, {});
      $$renderer3.push(`<!----> `);
      TapeTransition($$renderer3);
      $$renderer3.push(`<!----> <section class="how svelte-1ykd5q3"><div class="container svelte-1ykd5q3"><h2 class="svelte-1ykd5q3">Here is how we move Amazon</h2> <p class="how-subtitle svelte-1ykd5q3">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p> <div class="action-grid svelte-1ykd5q3"><div class="action-item svelte-1ykd5q3"><div class="action-icon svelte-1ykd5q3"><img${attr("src", `${stringify(base)}/marker.svg`)} alt="" class="svelte-1ykd5q3"/></div> <h3 class="svelte-1ykd5q3">Build Power</h3> <p class="svelte-1ykd5q3">Let's reach as many Prime members as possible. Share <span class="highlight svelte-1ykd5q3">your unique link</span> and spread the word.</p></div> <div class="action-item svelte-1ykd5q3"><div class="action-icon svelte-1ykd5q3"><img${attr("src", `${stringify(base)}/marker.svg`)} alt="" class="svelte-1ykd5q3"/></div> <h3 class="svelte-1ykd5q3">Get Noticed</h3> <p class="svelte-1ykd5q3">We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight svelte-1ykd5q3">just the tools</span> for the job.</p></div> <div class="action-item svelte-1ykd5q3"><div class="action-icon svelte-1ykd5q3"><img${attr("src", `${stringify(base)}/marker.svg`)} alt="" class="svelte-1ykd5q3"/></div> <h3 class="svelte-1ykd5q3">Organize</h3> <p class="svelte-1ykd5q3">From <span class="highlight svelte-1ykd5q3">Amazon employees</span>, to <span class="highlight svelte-1ykd5q3">local communities</span>, our collective power can only grow from here.</p></div></div></div></section> <section class="cancel-prime-plug svelte-1ykd5q3"><div class="container svelte-1ykd5q3"><div class="plug-content svelte-1ykd5q3"><div class="plug-text svelte-1ykd5q3"><h3 class="svelte-1ykd5q3">Considering canceling your Prime membership?</h3> <p class="svelte-1ykd5q3">Amazon got into BIG trouble for making Prime cancellation deliberately difficult. Learn how the process works now.</p></div> <div class="plug-cta svelte-1ykd5q3"><a${attr("href", `${stringify(base)}/cancel-prime`)} class="btn btn-secondary svelte-1ykd5q3">Learn about canceling Prime</a></div></div></div></section> `);
      Footer($$renderer3);
      $$renderer3.push(`<!---->`);
    }
    do {
      $$settled = true;
      $$inner_renderer = $$renderer2.copy();
      $$render_inner($$inner_renderer);
    } while (!$$settled);
    $$renderer2.subsume($$inner_renderer);
  });
}
export {
  _page as default
};
