import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.D7HdOJwL.js","_app/immutable/chunks/VyQfYt1W.js","_app/immutable/chunks/SDXbUWQJ.js","_app/immutable/chunks/DFo_Vv_N.js","_app/immutable/chunks/D5pHjECW.js","_app/immutable/chunks/Dw4UVNh4.js","_app/immutable/chunks/D2Fulok_.js","_app/immutable/chunks/DfM4pOSn.js","_app/immutable/chunks/B9qw8vzI.js","_app/immutable/chunks/Cswa3t-A.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2.RonuxNIb.css"];
export const fonts = [];
