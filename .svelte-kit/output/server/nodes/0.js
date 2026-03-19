import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DgX0QoKv.js","_app/immutable/chunks/_067kcFw.js","_app/immutable/chunks/DNEbY7iV.js","_app/immutable/chunks/Clh6BQOa.js","_app/immutable/chunks/DOJ0tDKX.js","_app/immutable/chunks/TzQwV1U7.js","_app/immutable/chunks/B4XmEjAL.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
