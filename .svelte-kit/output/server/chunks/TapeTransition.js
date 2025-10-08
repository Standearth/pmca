import { a3 as attr, a4 as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
import { P as PopupModal } from "./PopupModal.js";
function Footer($$renderer) {
  let showPopup = false;
  let $$settled = true;
  let $$inner_renderer;
  function $$render_inner($$renderer2) {
    $$renderer2.push(`<footer class="campaign-footer svelte-1sr6y3t"><div class="container svelte-1sr6y3t"><div class="footer-content svelte-1sr6y3t"><div class="footer-logo svelte-1sr6y3t"><a target="_new" href="https://stand.earth/"><img${attr("src", `${stringify(base)}/stand_white.png`)} alt="Stand.earth" class="svelte-1sr6y3t"/></a></div> <nav class="footer-nav svelte-1sr6y3t"><a${attr("href", `${stringify(base)}/learn-more`)} class="svelte-1sr6y3t">Learn More</a> <button class="get-started-cta svelte-1sr6y3t">Get Started</button></nav></div></div></footer> `);
    PopupModal($$renderer2, {
      get show() {
        return showPopup;
      },
      set show($$value) {
        showPopup = $$value;
        $$settled = false;
      }
    });
    $$renderer2.push(`<!---->`);
  }
  do {
    $$settled = true;
    $$inner_renderer = $$renderer.copy();
    $$render_inner($$inner_renderer);
  } while (!$$settled);
  $$renderer.subsume($$inner_renderer);
}
function TapeTransition($$renderer) {
  $$renderer.push(`<div class="tape-section svelte-ex5d9t"><img${attr("src", `${stringify(base)}/tape.png`)} alt="Tape" class="tape-image svelte-ex5d9t"/></div>`);
}
export {
  Footer as F,
  TapeTransition as T
};
