import { $ as attr, a2 as escape_html, a0 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, F as Footer } from "../../../chunks/Footer.js";
import { E as EmbeddedForm } from "../../../chunks/EmbeddedForm.js";
const call = {
  dateLabel: "Wednesday, December 9",
  shortDate: "Dec 9",
  time: "5pm PT / 8pm ET"
};
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    const title = `Every Package Counts: ${call.shortDate} on Zoom | Prime Members for a Cleaner Amazon`;
    const description = `An online gathering of Amazon customers this holiday season. ${call.dateLabel}${`, ${call.time}`}, on Zoom.`;
    Meta($$renderer2, {
      title,
      description,
      canonical: "https://primemembers.earth/organizing-call/",
      noindex: false
    });
    $$renderer2.push(`<!----> <section class="signup svelte-i5vhiy"><div class="signup-background svelte-i5vhiy" aria-hidden="true"><img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="" class="svelte-i5vhiy"/></div> <div class="layout svelte-i5vhiy"><header class="intro svelte-i5vhiy"><p class="eyebrow svelte-i5vhiy">Online organizing call</p> <h1 class="svelte-i5vhiy">Every Package Counts</h1> <p class="subtitle svelte-i5vhiy">An online gathering of Amazon customers this holiday season</p> <p class="when svelte-i5vhiy"><span class="when-date svelte-i5vhiy">${escape_html(call.dateLabel)}</span> <span class="when-time svelte-i5vhiy">${escape_html(call.time)}${escape_html(" · ")}on Zoom</span></p></header> <aside class="form-column svelte-i5vhiy" id="register"><div class="form-card svelte-i5vhiy"><h2 class="svelte-i5vhiy">Save your spot</h2> `);
    EmbeddedForm($$renderer2, {
      src: "https://act.stand.earth/page/104780/petition/1",
      title: "Sign up for the organizing call"
    });
    $$renderer2.push(`<!----> <p class="form-note svelte-i5vhiy">Can't make it live? Sign up and we'll send you the recording.</p></div></aside> <div class="story svelte-i5vhiy"><section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">Why join</h2> <p class="svelte-i5vhiy">A lot of us rely on Amazon and have mixed feelings about what that convenience costs. Last year, Amazon's climate pollution jumped 16%. And it's backing a huge new gas plant in Texas to power a data center.</p> <p class="svelte-i5vhiy">Amazon has the money and technology to choose cleaner options. What will move it is us, its customers. When we organize and speak up together, we put at risk what Amazon protects most: our loyalty.</p> <p class="svelte-i5vhiy">The holiday shopping season is Amazon's busiest time of year, when our voices carry furthest. That's why we're meeting now.</p></section> <section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">What we'll do together</h2> <ol class="agenda svelte-i5vhiy"><li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">1</span>Hear from members</h3> <p class="svelte-i5vhiy">PMCA members will share why they got involved and what happened when we took our concerns directly to Amazon.</p></li> <li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">2</span>Start our Delivery Diary together</h3> <p class="svelte-i5vhiy">We'll kick off the <a${attr("href", `${stringify(base)}/diary/`)} class="svelte-i5vhiy">Delivery Diary</a> holiday push, with everyone logging a first entry live. Together we'll build the record Amazon won't publish: how our packages actually arrive.</p></li> <li><h3 class="svelte-i5vhiy"><span class="agenda-number svelte-i5vhiy">3</span>Choose your next step</h3> <p class="svelte-i5vhiy">We'll share what comes next and the ways you can step up, from signing our <a${attr("href", `${stringify(base)}/texas-gas-plant/`)} class="svelte-i5vhiy">Texas gas plant petition</a> to joining PMCA's leadership team.</p></li></ol> <p class="takeaway svelte-i5vhiy">You'll leave with one concrete thing to do this holiday season.</p></section> <section class="block svelte-i5vhiy"><h2 class="svelte-i5vhiy">Who should come</h2> <p class="svelte-i5vhiy">Any Amazon customer, whether you're brand new or have been with us from the start. No experience needed.</p> <p class="svelte-i5vhiy">If you can, have a recent Amazon delivery in mind. We'll log it together.</p> <p class="hosts svelte-i5vhiy">Hosted by Prime members across the US and Canada.</p> <a class="btn btn-cta jump-to-form svelte-i5vhiy" href="#register">Save my spot</a></section></div></div></section> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
