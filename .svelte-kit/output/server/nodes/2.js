import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.COZRGnFH.js","_app/immutable/chunks/CZb1xBms.js","_app/immutable/chunks/Bzrol8zx.js","_app/immutable/chunks/D_tYPdvs.js","_app/immutable/chunks/JrqVdea-.js","_app/immutable/chunks/CdByh09v.js","_app/immutable/chunks/Cfykg0jS.js","_app/immutable/chunks/Dujpz_KQ.js","_app/immutable/chunks/v3mE5Ovz.js","_app/immutable/chunks/B7_ej2yy.js","_app/immutable/chunks/BUnF-7WR.js","_app/immutable/chunks/B7Wt8Q5D.js","_app/immutable/chunks/CksoBI8i.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DaougrYJ.js","_app/immutable/chunks/DK7Gp1vT.js","_app/immutable/chunks/DcG7jo1X.js","_app/immutable/chunks/CMmnlfMM.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.BcYShQxx.css","_app/immutable/assets/Demands.6XLwx9r4.css","_app/immutable/assets/RotatingPhrase.BFcmeE76.css","_app/immutable/assets/2.CR1lWmMc.css"];
export const fonts = [];
