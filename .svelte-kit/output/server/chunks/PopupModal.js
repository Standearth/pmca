import { a5 as attr_class, a8 as bind_props } from "./index.js";
function PopupModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      show = void 0,
      baseUrl = "https://act.stand.earth/page/88799/petition/1"
    } = $$props;
    $$renderer2.push(`<div${attr_class("popup-overlay svelte-1lheb99", void 0, { "show": show })}><div class="popup-content svelte-1lheb99"><button class="popup-close svelte-1lheb99">×</button> <div class="popup-iframe svelte-1lheb99">`);
    {
      $$renderer2.push("<!--[-->");
      $$renderer2.push(`<div class="iframe-loading svelte-1lheb99"><p class="svelte-1lheb99">Loading...</p></div>`);
    }
    $$renderer2.push(`<!--]--></div></div></div>`);
    bind_props($$props, { show });
  });
}
export {
  PopupModal as P
};
