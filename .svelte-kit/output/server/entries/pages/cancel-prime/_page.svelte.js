import { a3 as attr, a4 as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { M as Meta, T as TapeTransition, F as Footer } from "../../../chunks/TapeTransition.js";
import { P as PopupModal } from "../../../chunks/PopupModal.js";
function _page($$renderer) {
  const title = "Cancel Prime - Prime Members for Cleaner Amazon";
  const description = "Learn how to cancel your Prime membership and use your consumer power for good.";
  let showPopup = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    Meta($$renderer2, { title, description });
    $$renderer2.push(`<!----> <section class="hero svelte-5f6x9l"><div class="hero-background svelte-5f6x9l"><div class="hero-overlay svelte-5f6x9l"></div> <img${attr("src", `${stringify(base)}/hero-bg.webp`)} alt="Background" class="hero-image svelte-5f6x9l"/></div> <div class="hero-content svelte-5f6x9l"><div class="hero-text svelte-5f6x9l"><h1 class="svelte-5f6x9l">Your Membership, Your Choice</h1> <p class="hero-subtitle svelte-5f6x9l">Amazon recently <a class="accent-orange svelte-5f6x9l" href="https://www.ftc.gov/news-events/news/press-releases/2025/09/ftc-secures-historic-25-billion-settlement-against-amazon" target="_blank">got into BIG trouble</a> for making Prime cancellation deliberately difficult. If the right step for you is cancelling your membership, here is how to do it.</p></div></div></section> <section class="cancellation-guide svelte-5f6x9l"><div class="container svelte-5f6x9l"><h2 class="svelte-5f6x9l">How to Cancel Your Prime Membership</h2> <p class="guide-intro svelte-5f6x9l">Thanks to the FTC settlement, the process is now more straightforward. Here's how to do it:</p> <div class="steps-container svelte-5f6x9l"><div class="step svelte-5f6x9l"><div class="step-number svelte-5f6x9l">1</div> <div class="step-content svelte-5f6x9l"><h3 class="svelte-5f6x9l">Go to Your Amazon Account</h3> <p class="svelte-5f6x9l">Sign in to your Amazon account and go to "Manage Your Prime Membership" or visit <a href="https://www.amazon.com/gp/your-account/manage-prime" target="_blank" class="svelte-5f6x9l">amazon.com/gp/your-account/manage-prime</a></p></div></div> <div class="step svelte-5f6x9l"><div class="step-number svelte-5f6x9l">2</div> <div class="step-content svelte-5f6x9l"><h3 class="svelte-5f6x9l">Select "End Membership"</h3> <p class="svelte-5f6x9l">Look for the "End Membership" or "Cancel Prime" option. This should now be clearly visible thanks to the FTC settlement.</p></div></div> <div class="step svelte-5f6x9l"><div class="step-number svelte-5f6x9l">3</div> <div class="step-content svelte-5f6x9l"><h3 class="svelte-5f6x9l">Choose Your Cancellation Option</h3> <p class="svelte-5f6x9l">Amazon will offer you two options:</p> <ul class="svelte-5f6x9l"><li class="svelte-5f6x9l"><strong>End immediately:</strong> Cancel now and lose remaining benefits</li> <li class="svelte-5f6x9l"><strong>End at current period:</strong> Keep benefits until your next billing date</li></ul></div></div> <div class="step svelte-5f6x9l"><div class="step-number svelte-5f6x9l">4</div> <div class="step-content svelte-5f6x9l"><h3 class="svelte-5f6x9l">Confirm Your Cancellation</h3> <p class="svelte-5f6x9l">Amazon may offer discounts or alternatives to keep you subscribed. If you want to cancel, stick to your decision and confirm the cancellation.</p></div></div></div> <div class="alternative-box svelte-5f6x9l"><h3 class="svelte-5f6x9l">💡 Alternative: Use Your Phone</h3> <p class="svelte-5f6x9l">You can also call Amazon customer service at <strong>1-888-280-4331</strong> and ask them to cancel your Prime membership. They are required to make this process simple and straightforward.</p></div></div></section> `);
    TapeTransition($$renderer2);
    $$renderer2.push(`<!----> <section class="cta svelte-5f6x9l"><div class="container svelte-5f6x9l"><h2 class="svelte-5f6x9l">Not ready to cancel? User your Prime member power for good.</h2> <p class="svelte-5f6x9l">Use your Prime membership power to demand a cleaner Amazon. Join thousands of other members who are pushing for real change.</p> <div class="cta-buttons svelte-5f6x9l"><button class="btn btn-cta large svelte-5f6x9l">Keep Prime, Demand Change</button> <p class="small-text svelte-5f6x9l">You can always cancel later if Amazon doesn't listen</p></div></div></section> `);
    PopupModal($$renderer2, {
      baseUrl: "https://act.stand.earth/page/89116/petition/1",
      get show() {
        return showPopup;
      },
      set show($$value) {
        showPopup = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!----> `);
    Footer($$renderer2);
    $$renderer2.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
export {
  _page as default
};
