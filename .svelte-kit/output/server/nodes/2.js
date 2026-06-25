import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.C5xmNOix.js","_app/immutable/chunks/C8FFzEQw.js","_app/immutable/chunks/jQ12fRz9.js","_app/immutable/chunks/C7SL1yix.js","_app/immutable/chunks/pBb_oOxn.js","_app/immutable/chunks/D6SwNvd5.js","_app/immutable/chunks/DoqlwY0V.js","_app/immutable/chunks/B8PeTr11.js","_app/immutable/chunks/BEAaxSPn.js","_app/immutable/chunks/B7Wt8Q5D.js","_app/immutable/chunks/FBTp8o-U.js","_app/immutable/chunks/CQoUA24p.js","_app/immutable/chunks/CksoBI8i.js","_app/immutable/chunks/Dp1pzeXC.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/2.DOkx5HGm.css"];
export const fonts = [];
