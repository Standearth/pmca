import { a3 as attr, a4 as stringify } from "./index.js";
import { b as base } from "./server.js";
import "@sveltejs/kit/internal/server";
function TapeTransition($$renderer) {
  $$renderer.push(`<div class="tape-section svelte-ex5d9t"><img${attr("src", `${stringify(base)}/tape.png`)} alt="Tape" class="tape-image svelte-ex5d9t"/></div>`);
}
export {
  TapeTransition as T
};
