import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.0ouU2Vh2.js","_app/immutable/chunks/C2OtBj50.js","_app/immutable/chunks/OTRRMIXb.js","_app/immutable/chunks/BYSDwRVT.js","_app/immutable/chunks/BnNOA9kN.js","_app/immutable/chunks/BhS17OYt.js","_app/immutable/chunks/D54HuO1-.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
