import { $ as attr, a8 as attr_style, a0 as stringify } from "./index.js";
function EmbeddedForm($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { src, title, height = 710 } = $$props;
    let iframeSrc = src;
    $$renderer2.push(`<iframe${attr("src", iframeSrc)}${attr("title", title)}${attr_style(`height: ${stringify(height)}px`)} loading="eager" class="svelte-1sm0du8"></iframe>`);
  });
}
export {
  EmbeddedForm as E
};
