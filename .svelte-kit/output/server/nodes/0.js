import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.5pp8VSBL.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/D4S9hLi-.js","_app/immutable/chunks/MJLOPqBc.js","_app/immutable/chunks/5qpoJzGd.js","_app/immutable/chunks/Bv03wdxo.js","_app/immutable/chunks/C39NlNcv.js","_app/immutable/chunks/BcSZxdFh.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/0.B2dXjKQD.css"];
export const fonts = [];
