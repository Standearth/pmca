import "clsx";
import { a3 as attr, a0 as escape_html, a4 as stringify, _ as setContext } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { T as TapeTransition, F as Footer, M as Meta } from "../../chunks/TapeTransition.js";
import { H as Header } from "../../chunks/Header.js";
import { P as PopupModal } from "../../chunks/PopupModal.js";
function Index($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentCount = 0;
    let showPopup = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      Header($$renderer3);
      $$renderer3.push(`<!----> <section class="hero svelte-tfcqlg"><div class="hero-background svelte-tfcqlg"><video autoplay muted playsinline${attr("poster", `${stringify(base)}/hero-bg.webp`)} class="hero-video svelte-tfcqlg"><source${attr("src", `${stringify(base)}/bg_video.mp4`)} type="video/mp4" class="svelte-tfcqlg"/></video></div> <div class="hero-content svelte-tfcqlg"><div class="hero-text svelte-tfcqlg"><h1 class="svelte-tfcqlg">Prime members want Amazon to do more on climate.</h1> <div class="hero-buttons svelte-tfcqlg"><button class="btn btn-primary svelte-tfcqlg">I want to join</button> <button class="btn btn-secondary svelte-tfcqlg"><a${attr("href", `${stringify(base)}/learn-more`)} class="svelte-tfcqlg">Why this matters</a></button></div></div> <div class="counter svelte-tfcqlg"><div class="counter-circle svelte-tfcqlg"><div class="counter-number svelte-tfcqlg">${escape_html(Math.floor(currentCount).toLocaleString())}</div> <div class="counter-text svelte-tfcqlg">Prime members<br class="svelte-tfcqlg"/>and counting!</div></div></div></div></section> <section class="demands svelte-tfcqlg"><div class="container svelte-tfcqlg"><div class="demands-content svelte-tfcqlg"><div class="demands-text svelte-tfcqlg"><h2 class="svelte-tfcqlg">Here is the problem: Amazon isn't delivering on its climate promises.</h2> <p class="svelte-tfcqlg">Behind the fast deliveries, one-click orders, and flashy climate promises, Amazon's emissions are on the rise, mainly driven by the company’s rapidly expanding data centers and delivery fleet.</p> <h3 class="svelte-tfcqlg"><strong class="svelte-tfcqlg">As Prime members, we have the leverage to say our future is not for sale.</strong></h3></div> <div class="demands-card svelte-tfcqlg"><div class="card-header svelte-tfcqlg"><strong class="svelte-tfcqlg">TO: Amazon</strong><br class="svelte-tfcqlg"/> <strong class="svelte-tfcqlg">FROM: Prime members</strong></div> <p class="svelte-tfcqlg">As your most loyal customers, we are calling on you to:</p> <ol class="svelte-tfcqlg"><li class="svelte-tfcqlg"><span class="accent-orange svelte-tfcqlg">Electrify your global delivery fleet</span> from dock to door</li> <li class="svelte-tfcqlg">Power every data center and warehouse with <span class="accent-orange svelte-tfcqlg">real renewable energy</span></li> <li class="svelte-tfcqlg">Use your influence to <span class="accent-orange svelte-tfcqlg">support solutions</span> that reflect the needs and values of communities</li></ol> <button class="btn btn-cta svelte-tfcqlg">Add my name</button></div></div></div></section> `);
      TapeTransition($$renderer3);
      $$renderer3.push(`<!----> <section class="how svelte-tfcqlg"><div class="container svelte-tfcqlg"><h2 class="svelte-tfcqlg">Here is how we move Amazon</h2> <p class="how-subtitle svelte-tfcqlg">Recent polling showed 4 out of 5 Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p> <div class="action-grid svelte-tfcqlg"><div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Build Power</h3> <p class="svelte-tfcqlg">Let's reach as many Prime members as possible. Share <span class="highlight svelte-tfcqlg">your unique link</span> and spread the word.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Get Noticed</h3> <p class="svelte-tfcqlg">We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight svelte-tfcqlg">just the tools</span> for the job.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg"><img${attr("src", `${stringify(base)}/marker.svg`)} class="svelte-tfcqlg"/></div> <h3 class="svelte-tfcqlg">Organize</h3> <p class="svelte-tfcqlg">From <span class="highlight svelte-tfcqlg">Amazon employees</span>, to <span class="highlight svelte-tfcqlg">local communities</span>, our collective power can only grow from here.</p></div></div> <div class="ready-section svelte-tfcqlg"><button class="btn btn-cta large svelte-tfcqlg">I am ready to join</button></div></div></section> <section class="cancel-prime-plug svelte-tfcqlg"><div class="container svelte-tfcqlg"><div class="plug-content svelte-tfcqlg"><div class="plug-text svelte-tfcqlg"><h3 class="svelte-tfcqlg">Considering canceling your Prime membership?</h3> <p class="svelte-tfcqlg">Amazon recently lost a $25 million lawsuit for making Prime cancellation deliberately difficult. Learn how the process works now.</p></div> <div class="plug-cta svelte-tfcqlg"><a${attr("href", `${stringify(base)}/cancel-prime`)} class="btn btn-secondary svelte-tfcqlg">Learn about canceling Prime</a></div></div></div></section> `);
      Footer($$renderer3);
      $$renderer3.push(`<!----> `);
      PopupModal($$renderer3, {
        get show() {
          return showPopup;
        },
        set show($$value) {
          showPopup = $$value;
          $$settled = false;
        }
      });
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
const meta = { "title": "Title TK", "description": "Description tk." };
const body = [{ "section": "intro", "content": [{ "type": "h4", "value": "An h4 element with no attributes" }, { "type": "text", "value": "Some random text here, followed by an img tag." }, { "type": "img", "value": { "src": "../assets/demo/test.jpg", "alt": "A cat" } }, { "type": "Test", "value": { "label": "I’m a custom component!", "value": "50" } }] }];
const copy = {
  meta,
  body
};
function version() {
  console.log("--- --- --- --- --- ---");
  console.log(`svelte-starter: ${"6.15.0"}`);
  console.log(`build: ${"2025-10-07-21:40"}`);
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
