import { a2 as escape_html, a5 as ensure_array_like, a6 as attr_class } from "./index.js";
function RotatingPhrase($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      phrases = [
        "climate",
        "AI data centers",
        "workers’ rights",
        "air quality",
        "warehouse conditions",
        "clean energy",
        "plastics pollution",
        "worker injuries",
        "packaging waste",
        "electrification"
      ],
      interval = 2600
    } = $$props;
    let index = 0;
    let previous = -1;
    const spoken = `${phrases.slice(0, -1).join(", ")} and ${phrases.at(-1)}.`;
    $$renderer2.push(`<span class="visually-hidden svelte-5o8mjr">${escape_html(spoken)}</span> <span class="stack svelte-5o8mjr" aria-hidden="true"><!--[-->`);
    const each_array = ensure_array_like(phrases);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let phrase = each_array[i];
      $$renderer2.push(`<span${attr_class("phrase svelte-5o8mjr", void 0, { "active": i === index, "leaving": i === previous })}>${escape_html(phrase)}</span>`);
    }
    $$renderer2.push(`<!--]--></span>`);
  });
}
export {
  RotatingPhrase as R
};
