import { $ as attr, a2 as escape_html, a0 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { E as EmbeddedForm } from "../../../chunks/EmbeddedForm.js";
import { t as targetCount } from "../../../chunks/variables.js";
const call = {
  dateLabel: "Wednesday, December 9",
  shortDate: "Dec 9"
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const title = `Prime Members Organizing Call, ${call.shortDate} | Prime Members for a Cleaner Amazon`;
    const description = `An online organizing call for Prime members on ${call.dateLabel}. Get a campaign update and find out how to get more involved.`;
    const when = `${call.dateLabel}${""}`;
    Meta($$renderer2, {
      title,
      description,
      canonical: "https://primemembers.earth/organizing-call/",
      noindex: true
    });
    $$renderer2.push(`<!----> <section class="signup svelte-i5vhiy"><div class="signup-background svelte-i5vhiy" aria-hidden="true"><img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="" class="svelte-i5vhiy"/></div> <div class="layout svelte-i5vhiy"><header class="intro svelte-i5vhiy"><p class="eyebrow svelte-i5vhiy">Online · ${escape_html(when)}</p> <h1 class="svelte-i5vhiy">Prime members organizing call</h1> <p class="subtitle svelte-i5vhiy">An online call with the Stand.earth team for Prime members who want to get more involved in the campaign. We'll share an update on our work and plan the next steps together.</p></header> <aside class="form-column svelte-i5vhiy" id="register"><div class="form-card svelte-i5vhiy"><h2 class="svelte-i5vhiy">Save your spot</h2> `);
    EmbeddedForm($$renderer2, {
      src: "https://act.stand.earth/page/104780/petition/1",
      title: "Sign up for the organizing call"
    });
    $$renderer2.push(`<!----></div></aside> <div class="story svelte-i5vhiy"><section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">Why join</h2> <p class="svelte-i5vhiy">${escape_html(targetCount.toLocaleString())} people have joined the campaign so far. This call is for those who want to do more than add their name. You'll meet other members and find out how you can take on a bigger role.</p></section> <section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">What's on the agenda</h2> <ol class="agenda svelte-i5vhiy"><li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">1</span>Campaign update</h3> <p class="svelte-i5vhiy">What we've asked Amazon for, what people are reporting in the <a${attr("href", `${stringify(base)}/diary/`)} class="svelte-i5vhiy">Delivery Diary</a>, and how Amazon has responded.</p></li> <li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">2</span>Amazon's data centers</h3> <p class="svelte-i5vhiy">Amazon is building a gas plant in Texas to power an AI data center campus. We'll explain the plan and our <a${attr("href", `${stringify(base)}/texas-gas-plant/`)} class="svelte-i5vhiy">petition</a> against it.</p></li> <li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">3</span>Next steps</h3> <p class="svelte-i5vhiy">Ways to get more involved, and the upcoming moments when we can put pressure on Amazon.</p></li></ol></section> <section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">Who should come</h2> <p class="svelte-i5vhiy">Prime members and other Amazon customers. You don't need any experience.</p> <a class="btn btn-cta jump-to-form svelte-i5vhiy" href="#register">Save my spot</a></section></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
