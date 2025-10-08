import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CDvHlhLA.js","_app/immutable/chunks/DCKjsh0j.js","_app/immutable/chunks/CxkseGyt.js","_app/immutable/chunks/G2DhB4jd.js","_app/immutable/chunks/hX9qsE8s.js","_app/immutable/chunks/cfLirrx7.js","_app/immutable/chunks/RrpnwaSH.js","_app/immutable/chunks/qzNJNDWQ.js","_app/immutable/chunks/C0SnhriO.js","_app/immutable/chunks/DK_2_GuF.js","_app/immutable/chunks/VgBj3SKy.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/2.D0HeJ4GZ.css"];
export const fonts = [];
