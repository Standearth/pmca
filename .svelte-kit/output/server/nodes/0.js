import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DEoLE_Tf.js","_app/immutable/chunks/BX8KHRNg.js","_app/immutable/chunks/CTSxgTlG.js","_app/immutable/chunks/BNJ5V2s7.js","_app/immutable/chunks/DWzhdOWU.js","_app/immutable/chunks/Br6smpKH.js","_app/immutable/chunks/DMlLoitP.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
