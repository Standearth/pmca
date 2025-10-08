import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BMYrAXJG.js","_app/immutable/chunks/CUgZETDo.js","_app/immutable/chunks/Dnuyipu4.js","_app/immutable/chunks/DVYdw5hA.js","_app/immutable/chunks/wYm5nfvp.js","_app/immutable/chunks/FSXOgFeK.js","_app/immutable/chunks/DBn9y5x6.js","_app/immutable/chunks/abZ7wM1l.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.nh09NX4P.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
