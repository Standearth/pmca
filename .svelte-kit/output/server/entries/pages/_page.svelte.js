import "clsx";
import { a3 as attr, a0 as escape_html, a4 as attr_class, a5 as stringify, _ as setContext } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta } from "../../chunks/Meta.js";
import { H as Header } from "../../chunks/Header.js";
import { F as Footer } from "../../chunks/Footer.js";
function Index($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentCount = 0;
    let showPopup = false;
    let iframeSrc = "https://act.stand.earth/page/88799/petition/1";
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="hero svelte-tfcqlg"><div class="hero-background svelte-tfcqlg"><video autoplay muted playsinline${attr("poster", `${stringify(base)}/hero-bg.webp`)} class="hero-video svelte-tfcqlg"><source${attr("src", `${stringify(base)}/bg_video.mp4`)} type="video/mp4" class="svelte-tfcqlg"/></video></div> <div class="hero-content svelte-tfcqlg"><div class="hero-text svelte-tfcqlg"><h1 class="svelte-tfcqlg">Prime members want Amazon to do more on climate.</h1> <div class="hero-buttons svelte-tfcqlg"><button class="btn btn-primary svelte-tfcqlg">I want to join</button> <button class="btn btn-secondary svelte-tfcqlg"><a${attr("href", `${stringify(base)}/learn-more`)} class="svelte-tfcqlg">Why this matters</a></button></div></div> <div class="counter svelte-tfcqlg"><div class="counter-circle svelte-tfcqlg"><div class="counter-number svelte-tfcqlg">${escape_html(Math.floor(currentCount).toLocaleString())}</div> <div class="counter-text svelte-tfcqlg">Prime members<br class="svelte-tfcqlg"/>and counting!</div></div></div></div></section> <section class="demands svelte-tfcqlg"><div class="container svelte-tfcqlg"><div class="demands-content svelte-tfcqlg"><div class="demands-text svelte-tfcqlg"><h2 class="svelte-tfcqlg">Here is the problem: Amazon isn't delivering on its climate promises.</h2> <p class="svelte-tfcqlg">Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company’s rapidly expanding data centers and delivery fleet.</p> <h3 class="svelte-tfcqlg"><strong class="svelte-tfcqlg">As Prime members, we have the leverage to say our future is not for sale.</strong></h3></div> <div class="demands-card svelte-tfcqlg"><div class="card-header svelte-tfcqlg"><strong class="svelte-tfcqlg">TO: Amazon</strong><br class="svelte-tfcqlg"/> <strong class="svelte-tfcqlg">FROM: Prime members</strong></div> <p class="svelte-tfcqlg">As your most loyal customers, we are calling on you to commit to:</p> <ol class="svelte-tfcqlg"><li class="svelte-tfcqlg">Zero-emission deliveries by 2030</li> <li class="svelte-tfcqlg">Full renewable energy across operations</li> <li class="svelte-tfcqlg">Respect for local communities</li></ol> <button class="btn btn-cta svelte-tfcqlg">Add my name</button></div></div></div></section> <div class="tape-section svelte-tfcqlg"><img${attr("src", `${stringify(base)}/tape.png`)} alt="Tape" class="tape-image svelte-tfcqlg"/></div> <section class="how svelte-tfcqlg"><div class="container svelte-tfcqlg"><h2 class="svelte-tfcqlg">Here is how we move Amazon</h2> <p class="how-subtitle svelte-tfcqlg">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p> <div class="action-grid svelte-tfcqlg"><div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Build Power</h3> <p class="svelte-tfcqlg">Let's reach as many Prime members as possible. Share <span class="highlight svelte-tfcqlg">your unique link</span> and spread the word.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Get Noticed</h3> <p class="svelte-tfcqlg">We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight svelte-tfcqlg">just the tools</span> for the job.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Add Pressure</h3> <p class="svelte-tfcqlg">What if we all decided to <span class="highlight svelte-tfcqlg">pause our membership</span> for a month? A bit of pressure never hurts.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Organize</h3> <p class="svelte-tfcqlg">From <span class="highlight svelte-tfcqlg">Amazon employees</span>, to <span class="highlight svelte-tfcqlg">local communities</span>, our collective power can only grow from here.</p></div></div> <div class="ready-section svelte-tfcqlg"><button class="btn btn-cta large svelte-tfcqlg">I am ready to join</button></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> <div${attr_class("popup-overlay svelte-tfcqlg", void 0, { "show": showPopup })}><div class="popup-content svelte-tfcqlg"><button class="popup-close svelte-tfcqlg">×</button> <iframe${attr("src", iframeSrc)} title="Join the campaign" class="popup-iframe svelte-tfcqlg" loading="eager"></iframe></div></div>`);
  });
}
const meta = { "title": "Title TK", "description": "Description tk." };
const body = [{ "section": "intro", "content": [{ "type": "h4", "value": "An h4 element with no attributes" }, { "type": "text", "value": "Some random text here, followed by an img tag." }, { "type": "img", "value": { "src": "../assets/demo/test.jpg", "alt": "A cat" } }, { "type": "Test", "value": { "label": "I’m a custom component!", "value": "50" } }] }];
const copy = {
  meta,
  body
};
function version() {
  console.log("--- --- --- --- --- ---");
  console.log(`svelte-starter: ${"6.15.0"}`);
  console.log(`build: ${"2025-10-07-16:07"}`);
  console.log("--- --- --- --- --- ---");
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    version();
    const preloadFont = [
      base + "/fonts/AmsiPro-Ultra.woff2",
      base + "/fonts/Carlito/Carlito-Regular.ttf",
      base + "/fonts/Carlito/Carlito-Bold.ttf"
    ];
    const { title, description, url, keywords } = copy;
    setContext("copy", copy);
    setContext("data", data);
    Meta($$renderer2, { title, description, url, preloadFont, keywords });
    $$renderer2.push(`<!----> `);
    Index($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
