import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BYPBZgRH.js","_app/immutable/chunks/CZb1xBms.js","_app/immutable/chunks/Bzrol8zx.js","_app/immutable/chunks/Cfykg0jS.js","_app/immutable/chunks/CdByh09v.js","_app/immutable/chunks/5AplI_eq.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/0.CjDmNM7I.css"];
export const fonts = [];
