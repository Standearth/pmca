import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.D4hRGGA9.js","_app/immutable/chunks/CU-tRMw3.js","_app/immutable/chunks/B1sNhxQd.js","_app/immutable/chunks/A_aw-G6X.js","_app/immutable/chunks/CMZItCY0.js","_app/immutable/chunks/CA6k3LiW.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/0.CjDmNM7I.css"];
export const fonts = [];
