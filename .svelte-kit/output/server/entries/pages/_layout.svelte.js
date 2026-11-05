import "clsx";
import { $ as attr, a0 as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/server.js";
import "@sveltejs/kit/internal/server";
import { P as PopupModal } from "../../chunks/PopupModal.js";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let showPopup = false;
    let $$settled = true;
    let $$inner_renderer;
    function $$render_inner($$renderer3) {
      $$renderer3.push(`<header class="header svelte-oiwvqb"><div class="container svelte-oiwvqb"><div class="nav-container svelte-oiwvqb"><div class="logo svelte-oiwvqb"><a${attr("href", `${stringify(base)}/`)} aria-label="Prime Members for Cleaner Amazon"><img${attr("src", `${stringify(base)}/logo_white.png`)} alt="Prime Members for Cleaner Amazon" class="svelte-oiwvqb"/></a></div> <div class="nav-right svelte-oiwvqb"><div class="nav-actions svelte-oiwvqb"><button class="join-btn svelte-oiwvqb">Join</button> <button class="hamburger svelte-oiwvqb" aria-label="Toggle menu"><span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span></button></div> <a${attr("href", `${stringify(base)}/diary/`)} class="diary-link svelte-oiwvqb">Delivery Diary</a></div></div></div> `);
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
function _layout($$renderer, $$props) {
  let { children } = $$props;
  Header($$renderer);
  $$renderer.push(`<!----> <main id="content">`);
  children?.($$renderer);
  $$renderer.push(`<!----></main>`);
}
export {
  _layout as default
};
