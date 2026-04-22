import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.K8QG4Ecr.js","_app/immutable/chunks/_067kcFw.js","_app/immutable/chunks/DNEbY7iV.js","_app/immutable/chunks/7-WMEdRr.js","_app/immutable/chunks/D9GW2VUC.js","_app/immutable/chunks/rD1GcOs3.js","_app/immutable/chunks/DOJ0tDKX.js","_app/immutable/chunks/C16NDMYp.js","_app/immutable/chunks/Dw39F3tP.js","_app/immutable/chunks/hrimlvWL.js","_app/immutable/chunks/CCvjQ2ug.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
