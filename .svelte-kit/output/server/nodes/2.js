import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CMbx6lNG.js","_app/immutable/chunks/CU-tRMw3.js","_app/immutable/chunks/B1sNhxQd.js","_app/immutable/chunks/CA6k3LiW.js","_app/immutable/chunks/D-Ot8fhB.js","_app/immutable/chunks/CMZItCY0.js","_app/immutable/chunks/A_aw-G6X.js","_app/immutable/chunks/CoJq07dl.js","_app/immutable/chunks/m0_-z7_4.js","_app/immutable/chunks/qcGzFwji.js","_app/immutable/chunks/D__ce518.js","_app/immutable/chunks/B7Wt8Q5D.js","_app/immutable/chunks/CksoBI8i.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/D7ytl2tL.js","_app/immutable/chunks/B0_fo-wS.js","_app/immutable/chunks/C1QPGsPa.js","_app/immutable/chunks/BH4UDkNz.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.BcYShQxx.css","_app/immutable/assets/Demands.6XLwx9r4.css","_app/immutable/assets/RotatingPhrase.BFcmeE76.css","_app/immutable/assets/2.CR1lWmMc.css"];
export const fonts = [];
