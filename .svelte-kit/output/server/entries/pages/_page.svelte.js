import "clsx";
import { a4 as attr, a5 as stringify, a1 as escape_html, _ as setContext } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta } from "../../chunks/Meta.js";
import { H as Header } from "../../chunks/Header.js";
function Footer($$renderer) {
  $$renderer.push(`<footer class="campaign-footer svelte-1sr6y3t"><div class="container svelte-1sr6y3t"><div class="footer-content svelte-1sr6y3t"><div class="footer-logo svelte-1sr6y3t"><a target="_new" href="https://stand.earth/"><img${attr("src", `${stringify(base)}/stand_white.png`)} alt="Stand.earth" class="svelte-1sr6y3t"/></a></div> <nav class="footer-nav svelte-1sr6y3t"><a${attr("href", `${stringify(base)}/learn-more`)} class="svelte-1sr6y3t">Learn More</a> <a${attr("href", `${stringify(base)}/get-started`)} class="get-involved-btn svelte-1sr6y3t">Get Involved</a></nav></div></div></footer>`);
}
function Index($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let currentCount = 0;
    Header($$renderer2);
    $$renderer2.push(`<!----> <section class="hero svelte-tfcqlg"><div class="hero-background svelte-tfcqlg"><video autoplay muted playsinline${attr("poster", `${stringify(base)}/hero-bg.webp`)} class="hero-video svelte-tfcqlg"><source${attr("src", `${stringify(base)}/bg_video.mp4`)} type="video/mp4" class="svelte-tfcqlg"/></video></div> <div class="hero-content svelte-tfcqlg"><div class="hero-text svelte-tfcqlg"><h1 class="svelte-tfcqlg">Prime members want Amazon to do more on climate.</h1> <div class="hero-buttons svelte-tfcqlg"><button class="btn btn-primary svelte-tfcqlg">I want to join</button> <button class="btn btn-secondary svelte-tfcqlg">Learn more</button></div></div> <div class="counter svelte-tfcqlg"><div class="counter-circle svelte-tfcqlg"><div class="counter-number svelte-tfcqlg">${escape_html(Math.floor(currentCount).toLocaleString())}</div> <div class="counter-text svelte-tfcqlg">Prime members<br class="svelte-tfcqlg"/>and counting!</div></div></div></div></section> <section class="demands svelte-tfcqlg"><div class="container svelte-tfcqlg"><div class="demands-content svelte-tfcqlg"><div class="demands-text svelte-tfcqlg"><h2 class="svelte-tfcqlg">Together, we can make Amazon a better company</h2> <p class="svelte-tfcqlg">You aren't just a customer; you are a <strong class="svelte-tfcqlg">member</strong>. You pay for a premium service that shapes the global economy.</p> <p class="svelte-tfcqlg">That membership gives you leverage. We love the convenience of Prime, but it shouldn't come at the cost of our future.</p> <p class="svelte-tfcqlg">Together, as members, we have the collective power to demand that Amazon's innovation and efficiency are used to build a cleaner future for all of us.</p></div> <div class="demands-card svelte-tfcqlg"><div class="card-header svelte-tfcqlg"><strong class="svelte-tfcqlg">TO: Amazon</strong><br class="svelte-tfcqlg"/> <strong class="svelte-tfcqlg">FROM: Prime members</strong></div> <p class="svelte-tfcqlg">As your most loyal customers, we are calling on you to:</p> <ol class="svelte-tfcqlg"><li class="svelte-tfcqlg">Commit to zero-emission deliveries by 2030</li> <li class="svelte-tfcqlg">Ensure that your data centres are powered by renewable energy</li> <li class="svelte-tfcqlg">Stop funding politicians and lobbyists who deny the science on climate change</li></ol> <button class="btn btn-cta svelte-tfcqlg">Add my name</button></div></div></div></section> <div class="tape-section svelte-tfcqlg"><img${attr("src", `${stringify(base)}/tape.png`)} alt="Tape" class="tape-image svelte-tfcqlg"/></div> <section class="how svelte-tfcqlg"><div class="container svelte-tfcqlg"><h2 class="svelte-tfcqlg">Here is how we move Amazon</h2> <p class="how-subtitle svelte-tfcqlg">Recent polling showed that vast majority of Prime members want Amazon to do better on climate. Let's use our collective voice to demand a more ethical, sustainable Amazon.</p> <div class="action-grid svelte-tfcqlg"><div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg">📢</div> <h3 class="svelte-tfcqlg">Build Power</h3> <p class="svelte-tfcqlg">Let's reach as many Prime members as possible. Share <span class="highlight svelte-tfcqlg">your unique link</span> and spread the word.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg">🔔</div> <h3 class="svelte-tfcqlg">Get Noticed</h3> <p class="svelte-tfcqlg">We need to make sure Amazon hears our demands loud and clear. We have <span class="highlight svelte-tfcqlg">just the tools</span> for the job.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg">💪</div> <h3 class="svelte-tfcqlg">Add Pressure</h3> <p class="svelte-tfcqlg">What if we all decided to <span class="highlight svelte-tfcqlg">pause our membership</span> for a month? A bit of pressure never hurts.</p></div> <div class="action-item svelte-tfcqlg"><div class="action-icon svelte-tfcqlg">🏢</div> <h3 class="svelte-tfcqlg">Organize</h3> <p class="svelte-tfcqlg">From <span class="highlight svelte-tfcqlg">Amazon employees</span>, to <span class="highlight svelte-tfcqlg">local communities</span>, our collective power can only grow from here.</p></div></div> <div class="ready-section svelte-tfcqlg"><button class="btn btn-cta large svelte-tfcqlg">I am ready to join</button></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!----> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]-->`);
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
  console.log(`build: ${"2025-10-06-17:05"}`);
  console.log("--- --- --- --- --- ---");
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { data } = $$props;
    version();
    const preloadFont = [
      `${base}/fonts/AmsiPro-Ultra.woff2`,
      `${base}/fonts/Carlito/Carlito-Regular.ttf`,
      `${base}/fonts/Carlito/Carlito-Bold.ttf`
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
