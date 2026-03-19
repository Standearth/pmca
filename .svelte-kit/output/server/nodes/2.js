import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.Cl3yG9Kj.js","_app/immutable/chunks/C2OtBj50.js","_app/immutable/chunks/OTRRMIXb.js","_app/immutable/chunks/CwHxVK4f.js","_app/immutable/chunks/B8SFQFIR.js","_app/immutable/chunks/BhS17OYt.js","_app/immutable/chunks/BnNOA9kN.js","_app/immutable/chunks/TPz5zNRh.js","_app/immutable/chunks/cvMGr2JE.js","_app/immutable/chunks/f8dQImkd.js","_app/immutable/chunks/55oKvSM0.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
