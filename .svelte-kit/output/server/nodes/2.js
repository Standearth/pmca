import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.lbpqyLKB.js","_app/immutable/chunks/BoGM1SOC.js","_app/immutable/chunks/CMS7xYzi.js","_app/immutable/chunks/7ys3KrZT.js","_app/immutable/chunks/BNxRZVwm.js","_app/immutable/chunks/CkF8quLH.js","_app/immutable/chunks/CRni-glT.js","_app/immutable/chunks/C9_olhbz.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2.RonuxNIb.css"];
export const fonts = [];
