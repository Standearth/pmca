import { a5 as attr_class, a3 as attr, a8 as bind_props } from "./index.js";
function PopupModal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      show = void 0,
      baseUrl = "https://act.stand.earth/page/88799/petition/1"
    } = $$props;
    let iframeSrc = baseUrl;
    $$renderer2.push(`<div${attr_class("popup-overlay svelte-1lheb99", void 0, { "show": show })}><div class="popup-content svelte-1lheb99"><button class="popup-close svelte-1lheb99">×</button> <iframe${attr("src", iframeSrc)} title="Join the campaign" class="popup-iframe svelte-1lheb99" loading="eager"></iframe></div></div>`);
    bind_props($$props, { show });
  });
}
export {
  PopupModal as P
};
