import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.B6plW7n2.js","_app/immutable/chunks/_067kcFw.js","_app/immutable/chunks/DNEbY7iV.js","_app/immutable/chunks/B4XmEjAL.js","_app/immutable/chunks/VLkcznQF.js","_app/immutable/chunks/TzQwV1U7.js","_app/immutable/chunks/DOJ0tDKX.js","_app/immutable/chunks/DWO22Hv6.js","_app/immutable/chunks/jVBpOEsx.js","_app/immutable/chunks/Clh6BQOa.js","_app/immutable/chunks/DPWcJIst.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
