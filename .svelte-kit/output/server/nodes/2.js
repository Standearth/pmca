import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DQ54Lp_5.js","_app/immutable/chunks/Bzak7iHL.js","_app/immutable/chunks/BDGB421b.js","_app/immutable/chunks/Oxk-7VDg.js","_app/immutable/chunks/BSIKRWhI.js","_app/immutable/chunks/Bgu-gvgy.js","_app/immutable/chunks/DwS-Rccj.js","_app/immutable/chunks/BpPilX4s.js","_app/immutable/chunks/ClutdXx2.js","_app/immutable/chunks/BVQEt3wh.js","_app/immutable/chunks/C0KTK76v.js"];
export const stylesheets = ["_app/immutable/assets/Header.BcSURFMU.css","_app/immutable/assets/2.FIq0NhlG.css"];
export const fonts = [];
