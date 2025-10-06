import "clsx";
import { H as Header } from "../../chunks/Header.js";
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
