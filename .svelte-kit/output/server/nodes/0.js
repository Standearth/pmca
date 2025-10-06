import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.CRQHeJHU.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BDGB421b.js","_app/immutable/chunks/BpPilX4s.js","_app/immutable/chunks/C0KTK76v.js","_app/immutable/chunks/ClutdXx2.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.NtkxGnAO.css"];
export const fonts = [];
