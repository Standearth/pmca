import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.BUI1PZkm.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BG6AAHqK.js","_app/immutable/chunks/CTiQNl_T.js","_app/immutable/chunks/BSIJ_icv.js","_app/immutable/chunks/DAUQhyE9.js","_app/immutable/chunks/B9dsiKCx.js","_app/immutable/chunks/DQn-22ah.js","_app/immutable/chunks/BMkGF3G0.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
