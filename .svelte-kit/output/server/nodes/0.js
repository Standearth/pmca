import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CW4joUqn.js","_app/immutable/chunks/C2OtBj50.js","_app/immutable/chunks/OTRRMIXb.js","_app/immutable/chunks/TPz5zNRh.js","_app/immutable/chunks/BnNOA9kN.js","_app/immutable/chunks/BhS17OYt.js","_app/immutable/chunks/CwHxVK4f.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
