import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BKrwQvfP.js","_app/immutable/chunks/DCKjsh0j.js","_app/immutable/chunks/CxkseGyt.js","_app/immutable/chunks/gblaGCPx.js","_app/immutable/chunks/D9RSBFds.js","_app/immutable/chunks/cfLirrx7.js","_app/immutable/chunks/RrpnwaSH.js","_app/immutable/chunks/qzNJNDWQ.js","_app/immutable/chunks/DTTNCFaM.js","_app/immutable/chunks/DK_2_GuF.js","_app/immutable/chunks/CceLBVxl.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/Header.nh09NX4P.css","_app/immutable/assets/TapeTransition.L9I856-o.css","_app/immutable/assets/2.DfC2khDL.css"];
export const fonts = [];
