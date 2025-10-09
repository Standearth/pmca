import * as server from '../entries/pages/_page.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/2.BOSeKAPG.js","_app/immutable/chunks/BXWWcDRM.js","_app/immutable/chunks/DHJOhxdI.js","_app/immutable/chunks/B2Owb-5d.js","_app/immutable/chunks/BuHwwHEm.js","_app/immutable/chunks/BEhKJRox.js","_app/immutable/chunks/CtxLvZKc.js","_app/immutable/chunks/CVZ67Ch-.js"];
export const stylesheets = ["_app/immutable/assets/PopupModal.DNBk0uEp.css","_app/immutable/assets/TapeTransition.Cq0Fx_qn.css","_app/immutable/assets/Header.SZcKhyiG.css","_app/immutable/assets/2._AhELLHH.css"];
export const fonts = [];
