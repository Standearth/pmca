import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.COfBsrIg.js","_app/immutable/chunks/BX8KHRNg.js","_app/immutable/chunks/CTSxgTlG.js","_app/immutable/chunks/DMlLoitP.js","_app/immutable/chunks/D_fV9j5B.js","_app/immutable/chunks/Br6smpKH.js","_app/immutable/chunks/DWzhdOWU.js","_app/immutable/chunks/BNJ5V2s7.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2.RonuxNIb.css"];
export const fonts = [];
