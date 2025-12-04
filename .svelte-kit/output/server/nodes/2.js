import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CqwqeCxy.js","_app/immutable/chunks/DF2TzUtJ.js","_app/immutable/chunks/PJW6Ty7q.js","_app/immutable/chunks/BGM9GlqX.js","_app/immutable/chunks/Rs8IhS-j.js","_app/immutable/chunks/gAR7uIZd.js","_app/immutable/chunks/DX1Q3Ctn.js","_app/immutable/chunks/hYpoVB88.js","_app/immutable/chunks/DV9iQXBd.js","_app/immutable/chunks/Dl30ui4_.js","_app/immutable/chunks/Cjte3wHk.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
