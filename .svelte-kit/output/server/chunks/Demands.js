import { a2 as escape_html } from "./index.js";
import "clsx";
function Demands($$renderer, $$props) {
  let {
    intro = "As your most loyal customers, we are calling on you to:",
    children
  } = $$props;
  $$renderer.push(`<div class="demands-card svelte-fe6gyc"><div class="card-header svelte-fe6gyc"><strong>TO: Amazon</strong><br/> <strong>FROM: Prime members</strong></div> <p class="svelte-fe6gyc">${escape_html(intro)}</p> <ol class="svelte-fe6gyc"><li class="svelte-fe6gyc"><span class="accent-orange svelte-fe6gyc">Electrify your global delivery fleet</span> from dock to door</li> <li class="svelte-fe6gyc">Power every data center and warehouse with <span class="accent-orange svelte-fe6gyc">real renewable energy</span></li> <li class="svelte-fe6gyc">Create <span class="accent-orange svelte-fe6gyc">better working conditions</span>, including fair break times, safety standards, and protecting workers' right to organize</li></ol> `);
  children?.($$renderer);
  $$renderer.push(`<!----></div>`);
}
export {
  Demands as D
};
