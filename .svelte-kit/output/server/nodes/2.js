import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BxhQYrkY.js","_app/immutable/chunks/CZb1xBms.js","_app/immutable/chunks/Bzrol8zx.js","_app/immutable/chunks/5AplI_eq.js","_app/immutable/chunks/C2rSXXtW.js","_app/immutable/chunks/CdByh09v.js","_app/immutable/chunks/Cfykg0jS.js","_app/immutable/chunks/CoJq07dl.js","_app/immutable/chunks/6w-zVXC_.js","_app/immutable/chunks/o-QqtKHW.js","_app/immutable/chunks/BUnF-7WR.js","_app/immutable/chunks/B7Wt8Q5D.js","_app/immutable/chunks/CksoBI8i.js","_app/immutable/chunks/Dp1pzeXC.js","_app/immutable/chunks/DaougrYJ.js","_app/immutable/chunks/Bjb3UcmW.js","_app/immutable/chunks/C1QPGsPa.js","_app/immutable/chunks/CMmnlfMM.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.BcYShQxx.css","_app/immutable/assets/Demands.6XLwx9r4.css","_app/immutable/assets/RotatingPhrase.BFcmeE76.css","_app/immutable/assets/2.CR1lWmMc.css"];
export const fonts = [];
