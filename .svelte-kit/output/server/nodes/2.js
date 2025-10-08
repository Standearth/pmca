import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.PxFtT53N.js","_app/immutable/chunks/DCKjsh0j.js","_app/immutable/chunks/CxkseGyt.js","_app/immutable/chunks/C8n6O-IB.js","_app/immutable/chunks/Cpd4QQHy.js","_app/immutable/chunks/cfLirrx7.js","_app/immutable/chunks/RrpnwaSH.js","_app/immutable/chunks/qzNJNDWQ.js","_app/immutable/chunks/B0NKjzMS.js","_app/immutable/chunks/DK_2_GuF.js","_app/immutable/chunks/CZJBcXY1.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/2.CuGlFMsV.css"];
export const fonts = [];
