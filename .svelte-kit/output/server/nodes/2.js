import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CWih5cIW.js","_app/immutable/chunks/C2OtBj50.js","_app/immutable/chunks/OTRRMIXb.js","_app/immutable/chunks/Cs-s8Zn5.js","_app/immutable/chunks/CZzJbDiR.js","_app/immutable/chunks/CYLHyif0.js","_app/immutable/chunks/BnNOA9kN.js","_app/immutable/chunks/Hn5PdI-E.js","_app/immutable/chunks/D5nqc2Fw.js","_app/immutable/chunks/DESHox6L.js","_app/immutable/chunks/BM4Alxey.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
