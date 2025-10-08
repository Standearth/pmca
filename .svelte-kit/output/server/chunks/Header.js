import { a3 as attr, a4 as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
import { P as PopupModal } from "./PopupModal.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let showPopup = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<header class="header svelte-oiwvqb"><div class="container svelte-oiwvqb"><div class="nav-container svelte-oiwvqb"><div class="logo svelte-oiwvqb"><a${attr("href", `${stringify(base)}/`)} aria-label="Prime Members for Cleaner Amazon"><img${attr("src", `${stringify(base)}/logo_white.png`)} alt="Prime Members for Cleaner Amazon" class="svelte-oiwvqb"/></a></div> <button class="hamburger svelte-oiwvqb" aria-label="Toggle menu"><span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span></button></div></div> `);
      {
        $$renderer3.push("<!--[!-->");
      }
      $$renderer3.push(`<!--]--></header> `);
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
export {
  Header as H
};
