import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.CHm_-C0g.js","_app/immutable/chunks/C2OtBj50.js","_app/immutable/chunks/OTRRMIXb.js","_app/immutable/chunks/DQMvUNVu.js","_app/immutable/chunks/CqW_b8kj.js","_app/immutable/chunks/CCvfGB9P.js","_app/immutable/chunks/BnNOA9kN.js","_app/immutable/chunks/ClOHZYkF.js","_app/immutable/chunks/DNNIS7kR.js","_app/immutable/chunks/B-dt2CiC.js","_app/immutable/chunks/BNyPYZtW.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/Footer.Bv0KJ-vl.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/TapeTransition.BGjnBST5.css","_app/immutable/assets/StoriesCarousel.Dy9Q4WhV.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
