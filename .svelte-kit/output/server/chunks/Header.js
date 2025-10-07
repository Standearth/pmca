import { a3 as attr, a4 as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
function Header($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    $$renderer2.push(`<header class="header svelte-oiwvqb"><div class="container svelte-oiwvqb"><div class="nav-container svelte-oiwvqb"><div class="logo svelte-oiwvqb"><a${attr("href", `${stringify(base)}/`)} aria-label="Prime Members for Cleaner Amazon"><img${attr("src", `${stringify(base)}/logo_white.png`)} alt="Prime Members for Cleaner Amazon" class="svelte-oiwvqb"/></a></div> <button class="hamburger svelte-oiwvqb" aria-label="Toggle menu"><span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span> <span class="hamburger-line svelte-oiwvqb"></span></button></div></div> `);
    {
      $$renderer2.push("<!--[!-->");
    }
    $$renderer2.push(`<!--]--></header>`);
  });
}
export {
  Header as H
};
