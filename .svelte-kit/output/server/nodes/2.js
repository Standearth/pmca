import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.DQNpxYZ7.js","_app/immutable/chunks/BoGM1SOC.js","_app/immutable/chunks/CMS7xYzi.js","_app/immutable/chunks/D7EnXSfk.js","_app/immutable/chunks/CS8lKG9Z.js","_app/immutable/chunks/BDiv2670.js","_app/immutable/chunks/CRni-glT.js","_app/immutable/chunks/Ddk1tnyg.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
