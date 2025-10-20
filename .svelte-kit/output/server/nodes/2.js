import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.C8pUEDAz.js","_app/immutable/chunks/DF2TzUtJ.js","_app/immutable/chunks/PJW6Ty7q.js","_app/immutable/chunks/CTMDvVWy.js","_app/immutable/chunks/KeCfhuob.js","_app/immutable/chunks/gAR7uIZd.js","_app/immutable/chunks/DX1Q3Ctn.js","_app/immutable/chunks/lzm0yG9T.js","_app/immutable/chunks/DznY7-qC.js","_app/immutable/chunks/BteXbemg.js","_app/immutable/chunks/Cjte3wHk.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
