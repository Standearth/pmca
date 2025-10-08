import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.Cs6hVqAp.js","_app/immutable/chunks/CYNXkTd-.js","_app/immutable/chunks/DIfVUDBB.js","_app/immutable/chunks/BRvyymRa.js","_app/immutable/chunks/cV5T8Enw.js","_app/immutable/chunks/KiC1FmTW.js","_app/immutable/chunks/FNSJemoa.js","_app/immutable/chunks/XyekWPVD.js","_app/immutable/chunks/BpAkUsKN.js","_app/immutable/chunks/Bf-up44X.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.BQW_epEu.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2.RonuxNIb.css"];
export const fonts = [];
